"use client";

import React, { useState, useEffect, useRef } from "react";

import { Avatar } from "@heroui/react";
import { Card, CardBody } from "@heroui/react";
import { Button } from "@heroui/react";
import { Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import { ModernAudioPlayer } from "./modern-audio-player";
import { CTACardWithMechanisms } from "./ctr-mechanisms/cta-card-with-mechanisms";
import { AgeConfirmationModal } from "./ctr-mechanisms/age-confirmation-modal";

import type {
  Link,
  LandingPageSettings,
  LayoutSectionKey,
  SectionSpacing,
} from "./types";

const CONTENT_VERTICAL_OFFSET_KEY = "__content_vertical_offset";
const MIN_CONTENT_VERTICAL_OFFSET = -160;
const MAX_CONTENT_VERTICAL_OFFSET = 240;

function getContentVerticalOffset(sectionSpacing?: Record<string, unknown>) {
  const raw = sectionSpacing?.[CONTENT_VERTICAL_OFFSET_KEY];
  const value =
    typeof raw === "number" ? raw : typeof raw === "string" ? Number(raw) : 0;
  if (!Number.isFinite(value)) return 0;
  return Math.min(
    MAX_CONTENT_VERTICAL_OFFSET,
    Math.max(MIN_CONTENT_VERTICAL_OFFSET, Math.round(value)),
  );
}

interface LandingPageViewerProps {
  link: Link;
  settings: LandingPageSettings;
  onButtonClick?: () => void;
  isPreview?: boolean; 
  isFreePlan?: boolean; 
  visitorLocationLabel?: string | null;
}

function CTAUrgencyBadge({
  label,
  message,
  durationSeconds,
  className = "",
}: {
  label: string;
  message?: string | null;
  durationSeconds: number;
  className?: string;
}) {
  const safeDuration = Math.max(1, Math.floor(durationSeconds || 0));
  const [remaining, setRemaining] = useState(safeDuration);

  useEffect(() => {
    setRemaining(safeDuration);
    const startedAt = Date.now();
    const interval = window.setInterval(() => {
      const elapsed = Math.floor((Date.now() - startedAt) / 1000);
      setRemaining(Math.max(0, safeDuration - elapsed));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [safeDuration]);

  const hours = Math.floor(remaining / 3600);
  const minutes = Math.floor((remaining % 3600) / 60);
  const seconds = remaining % 60;
  const time = `${hours > 0 ? `${hours}h ` : ""}${minutes}m ${String(seconds).padStart(2, "0")}s`;
  const fallbackText = `${label || "FREE"} ends in ${time}`;
  const text =
    message && message.trim().length > 0
      ? message
          .replace(/\{time\}/gi, time)
          .replace(/\{label\}/gi, label || "FREE")
      : fallbackText;

  return (
    <div
      className={`mt-2 inline-flex max-w-full items-center px-1 py-0.5 text-sm font-extrabold leading-none ${className}`}
    >
      <span
        className="truncate text-[#5EC8D6]"
        style={{
          textShadow:
            "0 1px 2px rgba(0,0,0,0.95), 0 0 10px rgba(94,200,214,0.55)",
        }}
      >
        {text}
      </span>
    </div>
  );
}


function isRedditFlow(): boolean {
  if (typeof window === "undefined") return false;
  const params = new URLSearchParams(window.location.search);
  return params.has("r");
}

function isTwitterFlow(): boolean {
  if (typeof window === "undefined") return false;
  const params = new URLSearchParams(window.location.search);
  return params.has("x");
}

function isAbsoluteOrSchemeUrl(url: string): boolean {
  return /^[a-z][a-z0-9+.-]*:/i.test(url);
}

function toAbsoluteUrl(url: string): string {
  if (typeof window === "undefined" || isAbsoluteOrSchemeUrl(url)) return url;
  return `${window.location.origin}${url.startsWith("/") ? "" : "/"}${url}`;
}

function toSafariHandoffUrl(url: string): string {
  const absoluteUrl = toAbsoluteUrl(url);
  return absoluteUrl.startsWith("https://") ? `x-safari-${absoluteUrl}` : absoluteUrl;
}

function wrapUrlForNavigation(
  url: string | null | undefined,
  isPreview: boolean | undefined,
): string {
  const normalizedUrl = String(url || "").trim();
  if (!normalizedUrl) return "";
  const safeUrl = /^go\//i.test(normalizedUrl)
    ? `/${normalizedUrl}`
    : normalizedUrl;

  if (!isPreview && isRedditFlow()) {
    return `/reddit-escape?target=${encodeURIComponent(safeUrl)}`;
  }
  if (!isPreview && isTwitterFlow()) {
    return toSafariHandoffUrl(safeUrl);
  }
  return safeUrl;
}

const VISITOR_ID_KEY = "halevora_visitor_id";
const SESSION_ID_KEY = "halevora_session_id";

function createAnalyticsId(prefix: string) {
  const id =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

  return `${prefix}_${id}`;
}

function getAnalyticsIdentity() {
  if (typeof window === "undefined") {
    return { visitor_id: "", session_id: "" };
  }

  let visitorId = window.localStorage.getItem(VISITOR_ID_KEY);
  if (!visitorId) {
    visitorId = createAnalyticsId("vis");
    window.localStorage.setItem(VISITOR_ID_KEY, visitorId);
  }

  let sessionId = window.sessionStorage.getItem(SESSION_ID_KEY);
  if (!sessionId) {
    sessionId = createAnalyticsId("ses");
    window.sessionStorage.setItem(SESSION_ID_KEY, sessionId);
  }

  return { visitor_id: visitorId, session_id: sessionId };
}

// Helper: send click event to analytics
function trackClick(linkId: string | undefined, isPreview: boolean | undefined) {
  if (!linkId || isPreview || typeof window === "undefined") return;

  fetch("/api/analytics/track", {
    method: "POST",
    keepalive: true,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      link_id: linkId,
      event_type: "click",
      ...getAnalyticsIdentity(),
    }),
  }).catch(() => {
    // ignore analytics errors
  });
}

export function LandingPageViewer({
  link,
  settings,
  onButtonClick,
  isPreview = false,
  isFreePlan = false,
  visitorLocationLabel = null,
}: LandingPageViewerProps) {
  const [showingAgeConfirmationFor, setShowingAgeConfirmationFor] =
    useState<string | null>(null);

  // Gallery state
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [lightboxUrl, setLightboxUrl] = useState<string | null>(null);
  const galleryTouchStartX = useRef<number | null>(null);
  const viewerRootRef = useRef<HTMLDivElement | null>(null);
  const protectPublicContent = !isPreview;
  const contentProtectionStyle = protectPublicContent
    ? ({
        paddingTop: "env(safe-area-inset-top)",
        userSelect: "none",
        WebkitUserSelect: "none",
        WebkitTouchCallout: "none",
        WebkitUserDrag: "none",
      } as React.CSSProperties & Record<string, string>)
    : { paddingTop: "env(safe-area-inset-top)" };
  const preventContentSave = (event: React.SyntheticEvent) => {
    if (!protectPublicContent) return;
    event.preventDefault();
    event.stopPropagation();
  };

  // Motion video gate: paint the poster first, then attach MP4 as soon as the page hydrates.
  const [enableMotionVideo, setEnableMotionVideo] = useState(false);
const [heroVideoReady, setHeroVideoReady] = useState(false);
const heroVideoRef = useRef<HTMLVideoElement | null>(null);

const heroPoster =
  settings.header_video_poster_url || settings.avatar_url || undefined;
  const mode =
    settings.profile_display_mode === "avatar" &&
    (settings.section_spacing as any)?.__profile_video_background
      ? "video_background"
      : settings.profile_display_mode || "full";
  const isFullMode = mode === "full";
  const isVideoMode = mode === "video";
  const isVideoBackgroundMode = mode === "video_background";
  const usesMotionVideo = isVideoMode || isVideoBackgroundMode;
  const hideVideoBackgroundAvatar =
    isVideoBackgroundMode &&
    !!(settings.section_spacing as any)?.__profile_video_background_hide_avatar;
  const showAvatarMedia =
    mode === "avatar" || (isVideoBackgroundMode && !hideVideoBackgroundAvatar);
  const usesAvatarProfile = mode === "avatar" || isVideoBackgroundMode;

  useEffect(() => {
    if (!heroPoster) return;
  
    const l = document.createElement("link");
    l.rel = "preload";
    l.as = "image";
    l.href = heroPoster;
    (l as any).fetchPriority = "high";
  
    document.head.appendChild(l);
    return () => {
      try {
        document.head.removeChild(l);
      } catch {}
    };
  }, [heroPoster]);

  useEffect(() => {
    if (isPreview) {
      setEnableMotionVideo(false);
      return;
    }

    if (!usesMotionVideo || !settings.header_video_url) {
      setEnableMotionVideo(false);
      return;
    }

    if (enableMotionVideo) return;

    const connection = (navigator as any).connection;
    if (connection?.saveData) return;

    setEnableMotionVideo(true);
  }, [
    enableMotionVideo,
    isPreview,
    settings.header_video_url,
    usesMotionVideo,
  ]);

  const isLightMode = settings.theme_mode === "light";

  // Theme-aware colors
  const themeColors = {
    background: isLightMode ? "#FFFFFF" : "#000000",
    textPrimary: isLightMode ? "#18181b" : "#ffffff",
    textSecondary: isLightMode ? "#64748b" : "#94a3b8",
    cardBg: isLightMode ? "#f8fafc" : "#111111",
    border: isLightMode ? "#e2e8f0" : "#27272a",
  };
  const brandAccent = "#5EC8D6";

  useEffect(() => {
    if (!protectPublicContent) return;

    const root = viewerRootRef.current;
    if (!root) return;

    const prevent = (event: Event) => {
      event.preventDefault();
      event.stopPropagation();
    };

    root.addEventListener("contextmenu", prevent, { capture: true });
    root.addEventListener("dragstart", prevent, { capture: true });
    root.addEventListener("drop", prevent, { capture: true });
    root.addEventListener("selectstart", prevent, { capture: true });

    return () => {
      root.removeEventListener("contextmenu", prevent, { capture: true });
      root.removeEventListener("dragstart", prevent, { capture: true });
      root.removeEventListener("drop", prevent, { capture: true });
      root.removeEventListener("selectstart", prevent, { capture: true });
    };
  }, [protectPublicContent]);

  const getSocialIconColor = (social: { icon?: string; platform?: string }) => {
    const value = `${social.platform || ""} ${social.icon || ""}`.toLowerCase();

    if (value.includes("snapchat")) return "#FFFC00";
    if (value.includes("tiktok")) return "#FE2C55";
    if (value.includes("instagram")) return "#E4405F";
    if (value.includes("youtube")) return "#FF0000";
    if (value.includes("twitter") || value.includes("x.com")) return "#111111";
    if (value.includes("facebook")) return "#1877F2";
    if (value.includes("telegram")) return "#26A5E4";
    if (value.includes("discord")) return "#5865F2";
    if (value.includes("reddit")) return "#FF4500";
    if (value.includes("whatsapp")) return "#25D366";
    if (value.includes("of-local")) return "#00AFF0";

    return "#111111";
  };

  const isMonochromeSocialIcon = (social: { icon?: string; platform?: string }) => {
    const value = `${social.platform || ""} ${social.icon || ""}`.toLowerCase();

    return value.includes("twitter") || value.includes("x.com");
  };

  const isSnapchatSocialIcon = (social: { icon?: string; platform?: string }) => {
    const value = `${social.platform || ""} ${social.icon || ""}`.toLowerCase();

    return value.includes("snapchat");
  };

  const getButtonVariant = () => {
    switch (settings.button_style) {
      case "gradient":
        return "solid";
      case "outline":
        return "bordered";
      case "solid":
        return "solid";
      default:
        return "flat";
    }
  };

  const getButtonClass = () => {
    if (settings.button_style === "gradient") {
      return `bg-gradient-to-r from-${settings.button_color}-400 to-${settings.button_color}-600`;
    }
    return "";
  };

  const isInAppBrowser = (): boolean => {
    if (typeof window === "undefined") return false;
    const ua = navigator.userAgent || "";
    return (
      ua.includes("Instagram") ||
      ua.includes("FBAN") ||
      ua.includes("FBAV") ||
      /Twitter|TwitterAndroid|Twitter for iPhone|Twitter-iPhone/i.test(ua)
    );
  };

  const isInstagramInAppBrowser = (): boolean => {
    if (typeof window === "undefined") return false;
    const ua = navigator.userAgent || "";
    return ua.includes("Instagram") || ua.includes("IABMV");
  };

  const isTwitterInAppBrowser = (): boolean => {
    if (typeof window === "undefined") return false;
    const ua = navigator.userAgent || "";
    return /Twitter|TwitterAndroid|Twitter for iPhone|Twitter-iPhone/i.test(ua);
  };

  const isMobileBrowser = (): boolean => {
    if (typeof window === "undefined") return false;
    const ua = navigator.userAgent || "";
    return /Mobi|iPhone|iPad|iPod|Android/i.test(ua);
  };

  const normalizedLinkType =
    ((link as { link_type?: string }).link_type || "").toLowerCase();
  const isWhitehatLink =
    normalizedLinkType === "whitehat" || normalizedLinkType === "whitehat_v2";
  const shouldEscapeInAppBrowser =
    !isPreview &&
    (isWhitehatLink || isInAppBrowser()) &&
    (isWhitehatLink || (link as any).enable_deeplink !== false) &&
    (!isWhitehatLink || isMobileBrowser());

  const buildDeepLinkUrl = (absoluteUrl: string): string | null => {
    if (typeof window === "undefined") return null;
    const ua = navigator.userAgent || "";
    const isIOS = /iPhone|iPad|iPod/i.test(ua);
    const isAndroid = /Android/i.test(ua);

    if (isIOS) {
      if (!absoluteUrl.startsWith("https://")) return null;
      return `x-safari-${absoluteUrl}`;
    }

    if (isAndroid) {
      try {
        const parsed = new URL(absoluteUrl);
        const scheme = parsed.protocol.replace(":", "") || "https";
        const path = `${parsed.pathname}${parsed.search}${parsed.hash}`;
        return `intent://${parsed.host}${path}#Intent;scheme=${scheme};package=com.android.chrome;end`;
      } catch {
        return null;
      }
    }

    return null;
  };

  const buildChromeNavigateUrl = (absoluteUrl: string): string | null => {
    try {
      const parsed = new URL(absoluteUrl);
      return `googlechrome://navigate?url=${encodeURIComponent(
        `${parsed.protocol}//${parsed.host}${parsed.pathname}${parsed.search}${parsed.hash}`,
      )}`;
    } catch {
      return null;
    }
  };

  const openInNewTabBestEffort = (absoluteUrl: string) => {
    try {
      const popup = window.open(absoluteUrl, "_blank", "noopener,noreferrer");
      if (popup) return;
    } catch {}

    try {
      const a = document.createElement("a");
      a.href = absoluteUrl;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch {}
  };

  const attemptAppBrowserHandoff = (
    absoluteUrl: string,
  ): boolean => {
    const ua = navigator.userAgent || "";
    const isIOS = /iPhone|iPad|iPod/i.test(ua);
    const isAndroid = /Android/i.test(ua);

    if (isInstagramInAppBrowser()) {
      window.location.href =
        `instagram://extbrowser/?url=${encodeURIComponent(absoluteUrl)}`;
      return true;
    }

    if (isIOS) {
      const safariScheme = buildDeepLinkUrl(absoluteUrl);
      if (!safariScheme) return false;

      if (isTwitterInAppBrowser()) {
        window.location.href = safariScheme;
        return true;
      }

      openInNewTabBestEffort(absoluteUrl);
      openInNewTabBestEffort(safariScheme);
      window.location.href = safariScheme;
      window.setTimeout(() => {
        window.location.href = absoluteUrl;
      }, 1400);
      return true;
    }

    if (isAndroid) {
      const intentUrl = buildDeepLinkUrl(absoluteUrl);

      if (intentUrl) {
        openInNewTabBestEffort(absoluteUrl);
        openInNewTabBestEffort(intentUrl);
        window.location.href = intentUrl;
        window.setTimeout(() => {
          window.location.href = absoluteUrl;
        }, 1400);
        return true;
      }

      const chromeNavigateUrl = buildChromeNavigateUrl(absoluteUrl);
      if (chromeNavigateUrl) {
        openInNewTabBestEffort(absoluteUrl);
        openInNewTabBestEffort(chromeNavigateUrl);
        window.location.href = chromeNavigateUrl;
        window.setTimeout(() => {
          window.location.href = absoluteUrl;
        }, 1400);
        return true;
      }
    }

    return false;
  };

  const navigateToUrl = (
    url: string,
    opts?: {
      fromUserGesture?: boolean;
    },
  ) => {
    if (!url) return;
    const finalUrl = wrapUrlForNavigation(url, isPreview) || url;
    if (!finalUrl) return;
    const absoluteUrl = toAbsoluteUrl(finalUrl);
    const fromUserGesture = opts?.fromUserGesture === true;

    if (isTwitterFlow() && finalUrl.startsWith("x-safari-")) {
      window.location.href = finalUrl;
      return;
    }

    if (shouldEscapeInAppBrowser && fromUserGesture) {
      if (attemptAppBrowserHandoff(absoluteUrl)) {
        return;
      }
    }

    window.location.href = absoluteUrl;
  };

  const getNavigationTargets = (url: string) => {
    const finalUrl = wrapUrlForNavigation(url, isPreview) || url;
    const absoluteUrl = toAbsoluteUrl(finalUrl);

    return { finalUrl, absoluteUrl };
  };

  const getNativeLinkProps = (url: string) => {
    const { finalUrl, absoluteUrl } = getNavigationTargets(url);

    const attemptExternalOpen = () => {
      if (isTwitterFlow() && finalUrl.startsWith("x-safari-")) {
        window.location.href = finalUrl;
        return true;
      }

      if (shouldEscapeInAppBrowser && absoluteUrl) {
        if (attemptAppBrowserHandoff(absoluteUrl)) {
          return true;
        }
        return false;
      }

      return false;
    };

    return {
      href: absoluteUrl || finalUrl,
      target: shouldEscapeInAppBrowser ? "_blank" : undefined,
      rel: shouldEscapeInAppBrowser ? "noopener noreferrer" : undefined,
      attemptExternalOpen,
      onClick: (event: React.MouseEvent<HTMLAnchorElement>) => {
        trackClick(link.id, isPreview);

        if (onButtonClick) {
          onButtonClick();
        }

        if (attemptExternalOpen()) {
          event.preventDefault();
        }
      },
    };
  };

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }

    if (isPreview) return;
    if (!link.destination_url) return;

    trackClick(link.id, isPreview);
    navigateToUrl(link.destination_url, { fromUserGesture: true });
  };

  const hasProfileSignals =
    !!settings.show_active_now ||
    (!!settings.show_location && !!visitorLocationLabel) ||
    (!!settings.show_response_time && !!settings.response_time_text?.trim());

  const renderProfileSignals = () => {
    if (!hasProfileSignals) return null;

    const signalClass =
      "inline-flex items-center gap-1 whitespace-nowrap text-[11px] font-semibold leading-none sm:text-xs";
    const divider = (
      <span
        aria-hidden="true"
        className="mx-0.5 text-[10px] font-bold opacity-70"
        style={{ color: themeColors.textSecondary }}
      >
        •
      </span>
    );
    const signals: React.ReactNode[] = [];

    if (settings.show_active_now) {
      signals.push(
        <span key="active" className={signalClass}>
          <span className="halevora-active-dot h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
          Online
        </span>,
      );
    }

    if (settings.show_location && visitorLocationLabel) {
      signals.push(
        <span key="location" className={signalClass}>
          <Icon icon="solar:map-point-bold" width={14} />
          {visitorLocationLabel}
        </span>,
      );
    }

    if (settings.show_response_time && settings.response_time_text?.trim()) {
      signals.push(
        <span key="response" className={signalClass}>
          <Icon icon="solar:clock-circle-bold" width={14} />
          {settings.response_time_text.trim()}
        </span>,
      );
    }

    return (
      <div
        className="flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 px-2 text-center"
        style={{ color: themeColors.textPrimary }}
      >
        {signals.map((signal, index) => (
          <React.Fragment key={index}>
            {signal}
          </React.Fragment>
        ))}
      </div>
    );
  };

  // Layout + spacing
  const DEFAULT_LAYOUT_SECTIONS: LayoutSectionKey[] = [
    "header",
    "bio",
    "social_block",
    "voice_note",
    "cta_block",
    "gallery",
  ];

  let layoutSections: LayoutSectionKey[] = Array.isArray(settings.layout_sections)
    ? (settings.layout_sections as LayoutSectionKey[])
    : DEFAULT_LAYOUT_SECTIONS;

  layoutSections = layoutSections.filter((k) => k !== "branding");
  const contentVerticalOffset = isVideoBackgroundMode
    ? getContentVerticalOffset(
        settings.section_spacing as Record<string, unknown> | undefined,
      )
    : 0;

  const isSectionEnabled = (key: LayoutSectionKey) =>
    layoutSections.includes(key);

  const getSectionOrder = (key: LayoutSectionKey) => {
    const index = layoutSections.indexOf(key);
    if (index === -1) return 999;
    // start after header/bio block; higher order = lower on page
    return (index + 1) * 10;
  };

  const getSectionSpacingClass = (key: LayoutSectionKey) => {
    const spacing =
      (settings.section_spacing?.[key] as SectionSpacing | undefined) ||
      "normal";
    switch (spacing) {
      case "tight":
        return "mt-1";
      case "relaxed":
        return "mt-6";
      case "normal":
      default:
        return "mt-3";
    }
  };

  // Normalised gallery images from settings (optional feature)
  const rawGallery = (settings as any).gallery_images;
  const galleryImages: string[] = Array.isArray(rawGallery)
    ? rawGallery.slice(0, 6)
    : [];
  const hasGallery = galleryImages.length > 0;

  // Close gallery lightbox on Escape
  useEffect(() => {
    if (!lightboxUrl) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxUrl(null);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxUrl]);

useEffect(() => {
  if (!enableMotionVideo) return;
  setHeroVideoReady(false);
}, [enableMotionVideo]);

useEffect(() => {
  if (!enableMotionVideo) return;

  // Warm via the <video> elements (no Range-header preflight)
  const hero = heroVideoRef.current;
  if (hero) {
    hero.preload = "metadata";
    hero.load();
  }

  // Then try to play
  hero?.play().catch(() => {});
}, [enableMotionVideo]);

  // Auto‑redirect to a CTA button after N seconds (optional)
  useEffect(
    () => {
      if (isPreview) return;
      if (link.link_type !== "whitehat" && link.link_type !== "whitehat_v2") return;
      if (!settings.auto_redirect_enabled) return;

      const cards = settings.cta_cards || [];
      if (!cards.length) return;

      const targetId =
        settings.auto_redirect_cta_id || (cards[0] && cards[0].id) || null;
      if (!targetId) return;

      const targetCard = cards.find((c) => c.id === targetId);
      if (!targetCard || !targetCard.url) return;

      const delaySec = settings.auto_redirect_delay_seconds ?? 10;
      const delayMs = Math.max(1, delaySec) * 1000;

      const timer = window.setTimeout(() => {
        trackClick(link.id, isPreview);
        navigateToUrl(targetCard.url, { fromUserGesture: true });
      }, delayMs);

      return () => window.clearTimeout(timer);
    },
    [
      isPreview,
      settings.auto_redirect_enabled,
      settings.auto_redirect_delay_seconds,
      settings.auto_redirect_cta_id,
      settings.cta_cards,
      link.id,
    ],
  );

  const heroHeightClass = (() => {
    // Align video and full-image headers to the same height for visual consistency
    if (isVideoMode) return "h-[546px] md:h-[546px]";
    if (isFullMode && settings.header_image_height) return "";
    if (isFullMode) {
      switch (settings.header_image_size || "large") {
        case "small":
          return "h-[390px] md:h-[390px]";
        case "medium":
          return "h-[468px] md:h-[468px]";
        case "large":
        default:
          return "h-[546px] md:h-[546px]";
      }
    }
    // Avatar / fallback – more compact
    return "h-[320px] md:h-[320px]";
  })();
  const heroHeightStyle =
    isFullMode && settings.header_image_height
      ? { height: `${settings.header_image_height}px` }
      : undefined;

  return (
    <div
      ref={viewerRootRef}
      data-halevora-protected={protectPublicContent ? "true" : undefined}
      onContextMenuCapture={preventContentSave}
      onDragStartCapture={preventContentSave}
      onDropCapture={preventContentSave}
      className={`min-h-[100dvh] flex items-start ${
        isVideoBackgroundMode ? "md:items-start" : "md:items-center"
      } justify-center relative overflow-hidden`}
      style={contentProtectionStyle}
    >
      <style>
        {`
          @keyframes halevoraCtaBounce {
            0%, 100% { transform: translateY(0) scale(1); }
            38% { transform: translateY(-7px) scale(1.026); }
            62% { transform: translateY(1px) scale(0.992); }
          }
          @keyframes halevoraActiveDotGlow {
            0%, 100% {
              box-shadow: 0 0 6px rgba(34, 197, 94, 0.45), 0 0 12px rgba(34, 197, 94, 0.35);
              opacity: 0.82;
              transform: scale(0.92);
            }
            50% {
              box-shadow: 0 0 10px rgba(34, 197, 94, 0.95), 0 0 22px rgba(34, 197, 94, 0.75);
              opacity: 1;
              transform: scale(1.08);
            }
          }
          .halevora-active-dot {
            animation: halevoraActiveDotGlow 1.45s ease-in-out infinite;
            transform-origin: center;
            will-change: box-shadow, opacity, transform;
          }
          [data-halevora-protected="true"],
          [data-halevora-protected="true"] * {
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            user-select: none;
          }
          [data-halevora-protected="true"] img,
          [data-halevora-protected="true"] video {
            -webkit-user-drag: none;
            user-drag: none;
          }
          .halevora-landing-scroll {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .halevora-landing-scroll::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      {/* Desktop backdrop only: soft creator media behind the capped profile frame. */}
      {(isFullMode || isVideoMode || isVideoBackgroundMode) &&
      (heroPoster || (usesMotionVideo && settings.header_video_url)) ? (
        <div className="hidden md:block absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {usesMotionVideo && settings.header_video_url && enableMotionVideo ? (
            <video
              src={settings.header_video_url}
              poster={heroPoster}
              preload="none"
              autoPlay
              loop
              muted
              playsInline
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover scale-110 opacity-55"
            />
          ) : heroPoster ? (
            <img
              src={heroPoster}
              alt=""
              aria-hidden="true"
              className={`absolute inset-0 h-full w-full object-cover scale-110 opacity-65 ${
                usesMotionVideo ? "" : "blur-3xl"
              }`}
            />
          ) : null}
          <div
            className="absolute inset-0"
            style={{
              background: "rgba(0,0,0,0.36)",
            }}
          />
        </div>
      ) : null}

      {/* Mobile-sized container */}
      <div
        className={
          isVideoBackgroundMode
            ? "halevora-landing-scroll relative z-10 min-h-[100dvh] w-full overflow-x-hidden flex flex-col"
            : "halevora-landing-scroll relative z-10 w-full max-w-[430px] md:min-h-[812px] md:shadow-2xl md:rounded-[2rem] overflow-x-hidden flex flex-col"
        }
        style={{
          backgroundColor: themeColors.background,
          maxWidth: isVideoBackgroundMode ? undefined : "430px",
        }}
      >
        {isVideoBackgroundMode && settings.header_video_url ? (
          <div className="absolute inset-0 z-0 overflow-hidden">
            {heroPoster ? (
              <img
                src={heroPoster}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            ) : null}
            {enableMotionVideo ? (
              <video
                ref={heroVideoRef}
                src={settings.header_video_url}
                poster={heroPoster}
                preload="metadata"
                autoPlay
                loop={!isPreview}
                muted
                playsInline
                onPlaying={() => setHeroVideoReady(true)}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-200 ${
                  heroVideoReady ? "opacity-100" : "opacity-0"
                }`}
              />
            ) : null}
            <div className="absolute inset-0 bg-black/55" />
            <div
              className="absolute inset-x-0 bottom-0 h-56 pointer-events-none"
              style={{
                background: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, ${themeColors.background} 100%)`,
              }}
            />
          </div>
        ) : null}

        {/* Hero area */}
        {isFullMode || isVideoMode ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={`relative w-full ${heroHeightClass}`}
            style={heroHeightStyle}
          >
            {isVideoMode
              ? (() => {
                  if (settings.header_video_url) {
                    const focus = settings.header_video_focus || "center";
                    let focusClass = "object-center";
                    if (focus === "top") focusClass = "object-top";
                    else if (focus === "bottom") focusClass = "object-bottom";

                    return (
                      <>
                  <div className="relative w-full h-full overflow-hidden">
                  {heroPoster ? (
  <img
    src={heroPoster}
    alt={settings.display_name || link.title || "Profile"}
    className={`absolute inset-0 w-full h-full object-cover ${focusClass} transition-opacity duration-200 ${
      heroVideoReady ? "opacity-0" : "opacity-100"
    }`}
    loading="eager"
    decoding="async"
    fetchPriority="high"
  />
) : null}

  {enableMotionVideo ? (
    <video
      ref={heroVideoRef}
      src={settings.header_video_url}
      poster={heroPoster}
      preload="metadata"
      autoPlay
      loop={!isPreview}
      muted
      playsInline
      onPlaying={() => setHeroVideoReady(true)}
      className={`absolute inset-0 w-full h-full object-cover ${focusClass} transition-opacity duration-200 ${
        heroVideoReady ? "opacity-100" : "opacity-0"
      }`}
    />
  ) : null}
</div>
                        <div
                          className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
                          style={{
                            background: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, ${themeColors.background} 100%)`,
                          }}
                        />
                      </>
                    );
                  }

                  // Video mode but no clip yet – show placeholder
                  return (
                    <div className="w-full h-full bg-default-100 flex items-center justify-center">
                      <Icon
                        icon="solar:clapperboard-play-bold-duotone"
                        className="w-16 h-16 text-default-300"
                      />
                    </div>
                  );
                })()
              : settings.avatar_url ? (
                  <>
                    <div className="relative w-full h-full overflow-hidden">
                      <img
                        src={settings.avatar_url}
                        alt={settings.display_name || link.title || "Profile"}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div
                      className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
                      style={{
                        background: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, ${themeColors.background} 100%)`,
                      }}
                    />
                  </>
                ) : (
                  <div className="w-full h-full bg-default-100 flex items-center justify-center">
                    <Icon
                      icon="solar:user-bold-duotone"
                      className="w-24 h-24 text-default-300"
                    />
                  </div>
                )}
          </motion.div>
        ) : (
          <div className="w-full pt-8" />
        )}

        {/* Content Section */}
        <div
          className="flex-1 flex flex-col items-center px-4 pb-[calc(4rem+env(safe-area-inset-bottom))] sm:px-6 sm:pb-[calc(5rem+env(safe-area-inset-bottom))] md:px-8 md:pb-16 relative z-10"
          style={{
            marginTop: isFullMode ? "0" : "0",
            transform: contentVerticalOffset
              ? `translateY(${contentVerticalOffset}px)`
              : undefined,
          }}
        >
          <div className="w-full max-w-md">
            <div className="flex flex-col items-center gap-4">
              {/* Name + badge + handle */}
              {(isFullMode || isVideoMode) && isSectionEnabled("header") && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className={`flex flex-col items-center gap-2 ${getSectionSpacingClass(
                    "header",
                  )}`}
                  style={{ order: getSectionOrder("header") }}
                >
                  <div className="flex items-center gap-2">
                    <h1
                      className="text-2xl sm:text-3xl font-bold"
                      style={{ color: themeColors.textPrimary }}
                    >
                      {settings.display_name || link.title || "Profile"}
                    </h1>
                    {settings.verified_badge && (
                      <>
                        {settings.verified_badge_style === "solid" ? (
                          <Icon
                            icon="solar:verified-check-bold"
                            width={24}
                            style={{ color: brandAccent }}
                          />
                        ) : (
                          <Chip
                            size="sm"
                            variant="flat"
                            classNames={{
                              base: "bg-[#5EC8D6]/12 border border-[#5EC8D6]/25",
                              content: "text-[#5EC8D6] font-semibold",
                            }}
                            startContent={
                              <Icon
                                icon="solar:verified-check-bold"
                                width={16}
                                style={{ color: brandAccent }}
                              />
                            }
                          >
                            Verified
                          </Chip>
                        )}
                      </>
                    )}
                  </div>
                  {renderProfileSignals()}
                  {settings.show_domain_handle && (
                    <p
                      className="text-sm"
                      style={{ color: themeColors.textSecondary }}
                    >
                      {link.domain}/{link.path}
                    </p>
                  )}
                </motion.div>
              )}

              {/* Avatar mode display */}
              {showAvatarMedia && (
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="relative"
                >
                  <div className="rounded-full">
                    {isVideoBackgroundMode && settings.header_video_url ? (
                      <div className="relative h-32 w-32 overflow-hidden rounded-full bg-default-100">
                        {heroPoster ? (
                          <img
                            src={heroPoster}
                            alt={settings.display_name || link.title || "Profile"}
                            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-200 ${
                              heroVideoReady ? "opacity-0" : "opacity-100"
                            }`}
                            loading="eager"
                            decoding="async"
                            fetchPriority="high"
                          />
                        ) : null}
                        {enableMotionVideo ? (
                          <video
                            src={settings.header_video_url}
                            poster={heroPoster}
                            preload="metadata"
                            autoPlay
                            loop={!isPreview}
                            muted
                            playsInline
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                        ) : null}
                        {!heroPoster && !enableMotionVideo ? (
                          <div className="flex h-full w-full items-center justify-center">
                            <Icon
                              icon="solar:clapperboard-play-bold-duotone"
                              className="h-16 w-16 text-default-500"
                            />
                          </div>
                        ) : null}
                      </div>
                    ) : (
                      <Avatar
                        src={settings.avatar_url || undefined}
                        alt={settings.display_name || link.title || "Profile"}
                        className="w-32 h-32 text-large"
                        showFallback
                        fallback={
                          <Icon
                            icon="solar:user-bold-duotone"
                            className="w-20 h-20 text-default-500"
                          />
                        }
                      />
                    )}
                  </div>
                </motion.div>
              )}

              {/* Avatar mode name */}
              {usesAvatarProfile && isSectionEnabled("header") && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className={`flex flex-col items-center gap-1 ${getSectionSpacingClass(
                    "header",
                  )}`}
                  style={{ order: getSectionOrder("header") }}
                >
                  <div className="flex items-center gap-2">
                    <h1
                      className="text-2xl sm:text-3xl font-bold"
                      style={{ color: themeColors.textPrimary }}
                    >
                      {settings.display_name || link.title || "Profile"}
                    </h1>
                    {settings.verified_badge && (
                      <>
                        {settings.verified_badge_style === "solid" ? (
                          <Icon
                            icon="solar:verified-check-bold"
                            width={24}
                            style={{ color: brandAccent }}
                          />
                        ) : (
                          <Chip
                            size="sm"
                            variant="flat"
                            classNames={{
                              base: "bg-[#5EC8D6]/12 border border-[#5EC8D6]/25",
                              content: "text-[#5EC8D6] font-semibold",
                            }}
                            startContent={
                              <Icon
                                icon="solar:verified-check-bold"
                                width={16}
                                style={{ color: brandAccent }}
                              />
                            }
                          >
                            Verified
                          </Chip>
                        )}
                      </>
                    )}
                  </div>
                  {renderProfileSignals()}
                  {settings.show_domain_handle && (
                    <p
                      className="text-sm"
                      style={{ color: themeColors.textSecondary }}
                    >
                      {link.domain}/{link.path}
                    </p>
                  )}
                </motion.div>
              )}

              {/* Social + Followers block */}
              {isSectionEnabled("social_block") &&
                ((settings.social_links &&
                  settings.social_links.length > 0) ||
                  (settings.show_follower_count &&
                    (settings.follower_count || 0) > 0)) && (
                  <div
                    className={`flex flex-col items-center gap-2 ${getSectionSpacingClass(
                      "social_block",
                    )}`}
                    style={{ order: getSectionOrder("social_block") }}
                  >
                    {/* Social Links */}
                    {settings.social_links &&
                      settings.social_links.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3, duration: 0.3 }}
                          className="flex flex-wrap items-center justify-center gap-3"
                        >
                          {settings.social_links.map((social, index) => {
                            const isMono = isMonochromeSocialIcon(social);
                            const isSnapchat = isSnapchatSocialIcon(social);

                            return (
                              <Button
                                key={index}
                                as="a"
                                href={social.url ?? ""}
                                target="_blank"
                                rel="noopener noreferrer"
                                isIconOnly
                                size="sm"
                                variant="light"
                                className={`h-10 w-10 min-w-10 rounded-full bg-white p-0 shadow-[0_10px_24px_rgba(0,0,0,0.28)] ring-1 ring-black/5 transition-transform hover:scale-110 ${
                                  isSnapchat
                                    ? "text-[#111111] hover:bg-[#111111] hover:text-[#FFFC00]"
                                    : isMono
                                      ? "text-[#111111] hover:bg-[#111111] hover:text-white"
                                      : "text-[#111111] hover:bg-white"
                                }`}
                              >
                                <Icon
                                  icon={social.icon}
                                  width={20}
                                  className={isMono || isSnapchat ? "text-current" : undefined}
                                  color={isMono || isSnapchat ? undefined : getSocialIconColor(social)}
                                />
                              </Button>
                            );
                          })}
                        </motion.div>
                      )}

                    {/* Follower Count */}
                    {settings.show_follower_count &&
                      (settings.follower_count || 0) > 0 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4, duration: 0.3 }}
                          className="text-center"
                        >
                          <p
                            className="text-sm"
                            style={{ color: themeColors.textSecondary }}
                          >
                            <span
                              className="font-semibold"
                              style={{ color: themeColors.textPrimary }}
                            >
                              {settings.follower_count.toLocaleString()}
                            </span>{" "}
                            Total Followers
                          </p>
                        </motion.div>
                      )}
                  </div>
                )}

              {/* Voice Note */}
              {isSectionEnabled("voice_note") && settings.voice_note_url && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.3 }}
                  className={`w-full max-w-sm ${getSectionSpacingClass(
                    "voice_note",
                  )}`}
                  style={{ order: getSectionOrder("voice_note") }}
                >
                  <ModernAudioPlayer
                    src={settings.voice_note_url}
                    theme={settings.theme_mode}
                  />
                </motion.div>
              )}

              {/* Gallery lightbox */}
              {lightboxUrl && (
                <div
                  className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80"
                  onClick={() => setLightboxUrl(null)}
                >
                  <div
                    className="max-w-3xl max-h-[90vh] px-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src={lightboxUrl}
                      alt="Gallery full view"
                      className="w-full h-full object-contain rounded-2xl"
                    />
                    <div className="mt-3 flex justify-center">
                      <button
                        type="button"
                        className="px-4 py-1.5 rounded-full bg-white/90 text-sm font-medium text-black hover:bg-white"
                        onClick={() => setLightboxUrl(null)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Bio */}
              {isSectionEnabled("bio") && settings.bio && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className={`text-center max-w-sm ${getSectionSpacingClass(
                    "bio",
                  )}`}
                  style={{
                    color: themeColors.textSecondary,
                    order: getSectionOrder("bio"),
                  }}
                >
                  {settings.bio}
                </motion.p>
              )}

              {/* CTA block (cards or default button) */}
              {isSectionEnabled("cta_block") && (
                <div
                  className={`w-full ${getSectionSpacingClass("cta_block")}`}
                  style={{ order: getSectionOrder("cta_block") }}
                >
                  {settings.cta_cards && settings.cta_cards.length > 0 ? (
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {settings.cta_cards
                        .sort((a, b) => a.order - b.order)
                        .map((card, index) => {
                          const size = card.style.size || "standard";

                          let sizeBodyClasses = "p-5 min-h-[120px]";
                          let sizeTitleClass = "text-lg";
                          let sizeDescriptionClass = "text-sm";
                          let sizeColSpanClass = "";

                          if (size === "small") {
                            sizeBodyClasses = "p-5 min-h-[120px]";
                            sizeTitleClass = "text-lg";
                            sizeDescriptionClass = "text-sm";
                            sizeColSpanClass = "";
                          } else if (size === "standard") {
                            sizeBodyClasses = "p-6 min-h-[120px]";
                            sizeTitleClass = "text-lg";
                            sizeDescriptionClass = "text-sm";
                            sizeColSpanClass = "sm:col-span-2";
                          } else if (size === "large") {
                            sizeBodyClasses = "p-6 min-h-[200px]";
                            sizeTitleClass = "text-lg";
                            sizeDescriptionClass = "text-sm";
                            sizeColSpanClass = "sm:col-span-2";
                          }
                          const imageAspectRatio =
                            size === "large"
                              ? "16 / 9"
                              : size === "standard"
                                ? "2.35 / 1"
                                : "16 / 9";
                          const exactButtonHeight = card.style.button_height;
                          const imageBodyShapeClass =
                            card.style.type === "image" ? "!min-h-0" : "";
                          const imageBodyShapeStyle =
                            card.style.type === "image"
                              ? ({
                                  aspectRatio: exactButtonHeight
                                    ? undefined
                                    : imageAspectRatio,
                                  height: exactButtonHeight
                                    ? `${exactButtonHeight}px`
                                    : undefined,
                                  minHeight: 0,
                                } as const)
                              : exactButtonHeight
                                ? ({ height: `${exactButtonHeight}px` } as const)
                                : undefined;

                          const isOnlyFansLogo =
                            card.style.logo_icon === "of-local";
                          const isOnlyFansTextIcon =
                            isOnlyFansLogo &&
                            card.style.brand_layout === "icon_text";
                          const isOnlyFansVipIconText =
                            isOnlyFansLogo &&
                            (card.style.brand_layout === "vip_icon_text" ||
                              card.style.brand_layout === "asset_combo_a");
                          const isOnlyFansContentText =
                            isOnlyFansLogo &&
                            (card.style.brand_layout === "content_text" ||
                              card.style.brand_layout === "asset_combo_b");
                          const onlyFansVipAsset =
                            card.style.brand_asset || "/vipec.svg";
                          const onlyFansContentAsset =
                            card.style.brand_asset || "/c.svg";
                          const isPremiumLogo =
                            isOnlyFansLogo ||
                            (card.style.logo_name || "")
                              .toLowerCase()
                              === "icon";

                          const isBrandedNonPremium =
                            !!card.style.logo_icon && !isPremiumLogo;

                          const isSnapchatLogo =
                            (card.style.logo_icon || "")
                              .toLowerCase()
                              .includes("snapchat");

                          const getCardStyle = () => {
                            switch (card.style.type) {
                              case "solid":
                                return {
                                  background:
                                    card.style.background_color || "#666",
                                };
                              case "gradient":
                                return {
                                  background: card.style.background_gradient
                                    ? `linear-gradient(135deg, ${card.style.background_gradient.start}, ${card.style.background_gradient.end})`
                                    : "linear-gradient(135deg, #667eea, #764ba2)",
                                };
                              case "image":
                                return { background: "#000" };
                              case "video":
                                return { background: "#000" };
                              default:
                                return {};
                            }
                          };
                          const glowEffect =
                            card.style.dashboard_glow_effect || "none";
                          const glowShadow =
                            glowEffect === "strong"
                              ? "drop-shadow(0 0 8px rgba(255,255,255,0.98)) drop-shadow(0 0 22px rgba(255,255,255,0.86)) drop-shadow(0 0 42px rgba(255,255,255,0.52)) drop-shadow(0 18px 28px rgba(0,0,0,0.62))"
                              : glowEffect === "soft"
                                ? "drop-shadow(0 0 7px rgba(255,255,255,0.78)) drop-shadow(0 0 18px rgba(255,255,255,0.48)) drop-shadow(0 14px 22px rgba(0,0,0,0.48))"
                                : undefined;
                          const ctaEffectStyle: React.CSSProperties = {
                            borderRadius: "1rem",
                            filter: glowShadow,
                            WebkitFilter: glowShadow,
                            padding: glowShadow ? "1px" : undefined,
                            background: glowShadow
                              ? "rgba(255,255,255,0.78)"
                              : undefined,
                            ...(card.style.dashboard_bounce_effect
                              ? {
                                  animation:
                                    "halevoraCtaBounce 1.15s ease-in-out infinite",
                                }
                              : {}),
                          };
                          const ctaRoundedClipStyle: React.CSSProperties = {
                            borderRadius: "1rem",
                            overflow: "hidden",
                            isolation: "isolate",
                            transform: "translateZ(0)",
                            WebkitTransform: "translateZ(0)",
                          };
                          const ctaRoundedLayerStyle: React.CSSProperties = {
                            borderRadius: "1rem",
                          };

                          const handleCardClick = () => {
                            if (card.require_18plus) {
                              setShowingAgeConfirmationFor(card.id);
                              return;
                            }

                            if (isPreview) return;

                            trackClick(link.id, isPreview);
                            navigateToUrl(card.url, { fromUserGesture: true });
                          };

                          const handleAgeConfirm = () => {
                            setShowingAgeConfirmationFor(null);
                            if (isPreview) return;
                            trackClick(link.id, isPreview);
                            navigateToUrl(card.url, { fromUserGesture: true });
                          };

                          const handleAgeCancel = () => {
                            setShowingAgeConfirmationFor(null);
                          };

                          const useNativeCardLink =
                            !isPreview &&
                            !!card.url &&
                            !card.require_18plus;

                          const cardLinkProps = useNativeCardLink
                            ? getNativeLinkProps(card.url)
                            : null;

                          const ageConfirmLinkProps =
                            shouldEscapeInAppBrowser && card.url
                              ? getNativeLinkProps(card.url)
                              : null;

                          const renderCardBodyContent = () => (
                            <div
                              className={`${sizeBodyClasses} ${imageBodyShapeClass} flex items-center justify-center relative overflow-hidden rounded-2xl`}
                              style={{
                                ...imageBodyShapeStyle,
                                ...ctaRoundedClipStyle,
                              }}
                            >
                                {card.style.type === "image" &&
                                  card.style.background_image && (
                                    <>
                                      <img
                                        src={card.style.background_image}
                                        alt=""
                                        className="absolute inset-0 h-full w-full object-cover object-center"
                                        style={ctaRoundedLayerStyle}
                                        loading="lazy"
                                        decoding="async"
                                      />
                                      <div
                                        className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"
                                        style={ctaRoundedLayerStyle}
                                      />
                                    </>
                                  )}

                                {/* Deprecated CTA video: render poster only, never load MP4. */}
                                {card.style.type === "video" &&
                                  card.style.background_video &&
                                  (() => {
                                    const fit =
                                      card.style.background_fit || "fill";
                                    const focus =
                                      card.style.background_focus || "top";

                                    const baseClasses =
                                      "absolute inset-0 w-full h-full opacity-60";
                                    const fitClass =
                                      fit === "fit"
                                        ? "object-contain"
                                        : "object-cover";
                                    let focusClass = "";

                                    if (fit === "fill") {
                                      if (focus === "top")
                                        focusClass = "object-top";
                                      else if (focus === "bottom")
                                        focusClass = "object-bottom";
                                      else focusClass = "object-center";
                                    }

                                    return card.style.background_video_poster_url ? (
                                    <img
                                      src={card.style.background_video_poster_url}
                                      alt=""
                                      className={`${baseClasses} ${fitClass} ${focusClass}`}
                                      style={ctaRoundedLayerStyle}
                                      loading="lazy"
                                      decoding="async"
                                    />
                                  ) : null;

                                    
                                  })()}

                                {(isOnlyFansTextIcon ||
                                  isOnlyFansVipIconText ||
                                  isOnlyFansContentText) && (
                                  <img
                                    src="/of-logo.svg"
                                    alt="Creator icon"
                                    className="absolute right-3 top-3 z-20 h-6 w-auto"
                                    loading="lazy"
                                  />
                                )}

                                {/* Center content */}
                                <div className="text-center w-full relative z-10">
                                  {/* Premium logo layout stays stacked in center */}
                                  {isPremiumLogo && (
                                    <div className="mb-2">
                                      {isOnlyFansVipIconText ? (
                                        <div className="flex items-center justify-center">
                                          <img
                                            src={onlyFansVipAsset}
                                            alt=""
                                            className="h-auto max-h-8 w-auto max-w-[76%]"
                                            loading="lazy"
                                          />
                                        </div>
                                      ) : isOnlyFansContentText ? (
                                        <div className="flex items-center justify-center gap-1.5">
                                          {card.style.prefix_text && (
                                            <span
                                              className="font-bold leading-none"
                                              style={{
                                                color: "#ffffff",
                                                fontSize: `${card.style.brand_text_size || 18}px`,
                                                fontFamily:
                                                  '"Gardenia ExtraBold", ui-sans-serif, system-ui, sans-serif',
                                              }}
                                            >
                                              {card.style.prefix_text}
                                            </span>
                                          )}
                                          <img
                                            src={onlyFansContentAsset}
                                            alt=""
                                            className="h-auto max-h-7 w-auto max-w-[38%]"
                                            loading="lazy"
                                          />
                                        </div>
                                      ) : isOnlyFansTextIcon ? (
                                        <div className="flex items-center justify-center">
                                          <span
                                            className="font-bold leading-none"
                                            style={{
                                              color: "#ffffff",
                                              fontSize: `${card.style.brand_text_size || 18}px`,
                                              fontFamily:
                                                '"Gardenia ExtraBold", ui-sans-serif, system-ui, sans-serif',
                                            }}
                                          >
                                            {card.style.prefix_text ||
                                              card.title}
                                          </span>
                                        </div>
                                      ) : (
                                        <div className="flex flex-col items-center gap-1">
                                          {card.style.prefix_text && (
                                            <p
                                              className="text-base font-semibold"
                                              style={{
                                                color:
                                                  card.style.logo_color ||
                                                  "#ffffff",
                                              }}
                                            >
                                              {card.style.prefix_text}
                                            </p>
                                          )}
                                          <div className="flex items-center justify-center gap-2">
                                            <img
                                              src="/of-logo.svg"
                                              alt="Creator icon"
                                              className="h-5 w-auto"
                                              loading="lazy"
                                            />
                                            <img
                                              src="/of.webp"
                                              alt="Creator link"
                                              className="h-5 w-auto"
                                              loading="lazy"
                                            />
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  )}

                                  {/* Centered title/description for non-branded or premium-logo cards */}
                                  {!isBrandedNonPremium &&
                                    card.title &&
                                    card.title.trim() !== "" && (
                                      <h3
                                        className={`${sizeTitleClass} font-semibold ${
                                          card.style.type === "image" ||
                                          card.style.type === "gradient" ||
                                          card.style.type === "solid" ||
                                          card.style.type === "video"
                                            ? "text-white"
                                            : "text-foreground"
                                        }`}
                                        style={{
                                          textShadow:
                                            card.style.type === "image" ||
                                            card.style.type === "video"
                                              ? "0 2px 8px rgba(0,0,0,0.5)"
                                              : "none",
                                        }}
                                      >
                                        {card.title}
                                      </h3>
                                    )}

                                  {!isBrandedNonPremium && card.description && (
                                    <p
                                      className={`${sizeDescriptionClass} mt-1 ${
                                        card.style.type === "image" ||
                                        card.style.type === "gradient" ||
                                        card.style.type === "solid" ||
                                        card.style.type === "video"
                                          ? "text-white/90"
                                          : "text-default-500"
                                      }`}
                                      style={{
                                        textShadow:
                                          card.style.type === "image" ||
                                          card.style.type === "video"
                                            ? "0 1px 4px rgba(0,0,0,0.5)"
                                            : "none",
                                      }}
                                    >
                                      {card.description}
                                    </p>
                                  )}
                                </div>

                                {/* Brand overlay for non-premium branded buttons */}
                                {isBrandedNonPremium && (
                                  <>
                                    {card.style.logo_icon && (
                                      <div className="absolute top-2 right-2 z-20">
                                        <div
                                          className="rounded-full px-2 py-2 flex items-center justify-center shadow-md"
                                          style={{
                                            backgroundColor: isSnapchatLogo
                                              ? "#000000"
                                              : "#ffffff",
                                          }}
                                        >
                                          <Icon
                                            icon={card.style.logo_icon}
                                            width={18}
                                            style={{
                                              color:
                                                card.style.logo_color ||
                                                "#ffffff",
                                            }}
                                          />
                                        </div>
                                      </div>
                                    )}

                                  </>
                                )}
                            </div>
                          );

                          const renderCardContent = () => (
                            <Card
                              isPressable
                              onPress={handleCardClick}
                              className="w-full rounded-2xl shadow-lg relative overflow-hidden"
                              style={{
                                ...getCardStyle(),
                                ...ctaRoundedClipStyle,
                              }}
                            >
                              <CardBody className="overflow-hidden rounded-2xl p-0">
                                {renderCardBodyContent()}
                              </CardBody>
                            </Card>
                          );

                          const baseCardContent = cardLinkProps ? (
                            <a
                              href={cardLinkProps.href}
                              target={cardLinkProps.target}
                              rel={cardLinkProps.rel}
                              onClick={cardLinkProps.onClick}
                              className="block w-full rounded-2xl shadow-lg overflow-hidden"
                              style={{
                                ...getCardStyle(),
                                ...ctaRoundedClipStyle,
                              }}
                            >
                              {renderCardBodyContent()}
                            </a>
                          ) : (
                            renderCardContent()
                          );

                          const cardWithMechanisms = card.ctr_mechanisms ? (
                            <CTACardWithMechanisms
                              card={card}
                              onReveal={() => {
                                // just reveal, no navigation
                              }}
                            >
                              {baseCardContent}
                            </CTACardWithMechanisms>
                          ) : (
                            baseCardContent
                          );

                          const finalContent =
                            showingAgeConfirmationFor === card.id ? (
                              <AgeConfirmationModal
                                isOpen={true}
                                onConfirm={() => {
                                  setShowingAgeConfirmationFor(null);
                                  if (ageConfirmLinkProps) {
                                    trackClick(link.id, isPreview);
                                    if (onButtonClick) {
                                      onButtonClick();
                                    }
                                    if (ageConfirmLinkProps.attemptExternalOpen()) {
                                      return;
                                    }
                                    window.location.href = ageConfirmLinkProps.href;
                                    return;
                                  }
                                  handleAgeConfirm();
                                }}
                                onCancel={handleAgeCancel}
                                confirmHref={ageConfirmLinkProps?.href}
                                confirmTargetBlank={
                                  ageConfirmLinkProps?.target === "_blank"
                                }
                              >
                                {cardWithMechanisms}
                              </AgeConfirmationModal>
                            ) : (
                              cardWithMechanisms
                            );
                          const urgencyBadge = card.style.countdown_badge;
                          const urgencyPosition =
                            urgencyBadge?.position || "below";
                          const urgencyBadgeElement = urgencyBadge?.enabled ? (
                            <CTAUrgencyBadge
                              label={urgencyBadge.label}
                              message={urgencyBadge.message}
                              durationSeconds={
                                urgencyBadge.duration_seconds
                              }
                              className={
                                urgencyPosition === "inside_bottom"
                                  ? "!mt-0"
                                  : ""
                              }
                            />
                          ) : null;

                          return (
                            <motion.div
                              key={card.id}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                delay: 0.6 + index * 0.1,
                                duration: 0.3,
                              }}
                              className={`relative overflow-visible ${sizeColSpanClass}`}
                            >
                              {urgencyBadgeElement &&
                                urgencyPosition === "above" && (
                                  <div className="mb-2 flex w-full justify-center">
                                    {urgencyBadgeElement}
                                  </div>
                                )}
                              <div
                                className="relative z-10 rounded-2xl transition-transform hover:scale-[1.02]"
                                style={ctaEffectStyle}
                              >
                                <div className="relative z-10 rounded-2xl overflow-hidden">
                                  {finalContent}
                                </div>
                                {urgencyBadgeElement &&
                                  urgencyPosition === "inside_bottom" && (
                                    <div className="pointer-events-none absolute inset-x-0 bottom-2 z-20 flex justify-center px-3">
                                      {urgencyBadgeElement}
                                    </div>
                                  )}
                              </div>
                              {urgencyBadgeElement &&
                                urgencyPosition === "below" && (
                                  <div className="flex w-full justify-center pb-4">
                                    {urgencyBadgeElement}
                                  </div>
                                )}
                            </motion.div>
                          );
                        })}
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.3 }}
                      className="w-full px-4"
                    >
                      {!isPreview && link.destination_url ? (
                        <a
                          {...getNativeLinkProps(link.destination_url)}
                          className="block w-full rounded-xl bg-content1 shadow-lg transition-transform hover:scale-[1.02]"
                        >
                          <div className="p-6">
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <h3 className="text-lg font-semibold text-foreground">
                                  {link.title || "Click here"}
                                </h3>
                                {link.description && (
                                  <p className="text-sm text-default-500 mt-1">
                                    {link.description}
                                  </p>
                                )}
                              </div>
                              <Icon
                                icon="solar:arrow-right-line-duotone"
                                width={24}
                                className="text-default-400 ml-4"
                              />
                            </div>
                          </div>
                        </a>
                      ) : (
                        <Card
                          isPressable
                          onPress={handleButtonClick}
                          className="w-full hover:scale-[1.02] transition-transform shadow-lg"
                        >
                          <CardBody className="p-6">
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <h3 className="text-lg font-semibold text-foreground">
                                  {link.title || "Click here"}
                                </h3>
                                {link.description && (
                                  <p className="text-sm text-default-500 mt-1">
                                    {link.description}
                                  </p>
                                )}
                              </div>
                              <Icon
                                icon="solar:arrow-right-line-duotone"
                                width={24}
                                className="text-default-400 ml-4"
                              />
                            </div>
                          </CardBody>
                        </Card>
                      )}
                    </motion.div>
                  )}
                </div>
              )}

              {/* Gallery */}
              {isSectionEnabled("gallery") && hasGallery && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                  className={`w-full ${getSectionSpacingClass("gallery")}`}
                  style={{ order: getSectionOrder("gallery") }}
                >
                  {(() => {
                    const total = galleryImages.length;
                    if (total === 0) return null;

                    const index = Math.min(activeGalleryIndex, total - 1);

                    const goPrev = () => {
                      if (total <= 1) return;
                      setActiveGalleryIndex(
                        (prev) => (prev - 1 + total) % total,
                      );
                    };

                    const goNext = () => {
                      if (total <= 1) return;
                      setActiveGalleryIndex((prev) => (prev + 1) % total);
                    };

                    const handleTouchStart = (
                      e: React.TouchEvent<HTMLDivElement>,
                    ) => {
                      galleryTouchStartX.current = e.touches[0].clientX;
                    };

                    const handleTouchEnd = (
                      e: React.TouchEvent<HTMLDivElement>,
                    ) => {
                      if (galleryTouchStartX.current == null) return;
                      const deltaX =
                        e.changedTouches[0].clientX -
                        galleryTouchStartX.current;
                      const threshold = 40;
                      if (deltaX > threshold) {
                        goPrev();
                      } else if (deltaX < -threshold) {
                        goNext();
                      }
                      galleryTouchStartX.current = null;
                    };

                    return (
                      <>
                        <div
                          className="relative w-full flex items-center justify-center"
                          onTouchStart={handleTouchStart}
                          onTouchEnd={handleTouchEnd}
                        >
                          <div className="relative w-full max-w-md h-64 sm:h-72 overflow-visible flex items-center justify-center">
                            {(() => {
                              const cards = [];
                              // Show up to 5 cards: two to the left, center, two to the right
                              for (let offset = -2; offset <= 2; offset++) {
                                const imgIndex =
                                  (index + offset + total) % total;
                                const url = galleryImages[imgIndex];
                                const absOffset = Math.abs(offset);
                                const isActive = offset === 0;
                                const translateX = offset * 120;
                                const scale = isActive ? 1 : 0.85;
                                const opacity = isActive ? 1 : 0.35;
                                const blur = isActive ? "none" : "blur(3px)";
                                const zIndex = 20 - absOffset;

                                cards.push(
                                  <div
                                    key={`gallery-card-${offset}-${imgIndex}`}
                                    className="absolute rounded-3xl overflow-hidden shadow-2xl bg-default-100 cursor-pointer transition-all duration-300 ease-out"
                                    style={{
                                      width: "13rem",
                                      height: "17rem",
                                      transform: `translateX(${translateX}%) scale(${scale})`,
                                      opacity,
                                      filter: blur,
                                      zIndex,
                                    }}
                                    onClick={() => {
                                      if (isActive) {
                                        setLightboxUrl(url);
                                      } else {
                                        setActiveGalleryIndex(imgIndex);
                                      }
                                    }}
                                  >
                                    <img
                                      src={url}
                                      alt={`Gallery ${imgIndex + 1}`}
                                      className="w-full h-full object-cover"
                                      loading="lazy"
                                    />
                                  </div>,
                                );
                              }
                              return cards;
                            })()}
                          </div>
                        </div>

                        {total > 1 && (
                          <div className="mt-5 flex justify-center gap-1.5">
                            {galleryImages.map((url, dotIndex) => (
                              <button
                                key={`${url}-${dotIndex}`}
                                type="button"
                                onClick={() => setActiveGalleryIndex(dotIndex)}
                                className={`h-1.5 rounded-full transition-all ${
                                  dotIndex === index
                                    ? "w-4 bg-[#5EC8D6]"
                                    : "w-1.5 bg-[#5EC8D6]/40"
                                }`}
                              />
                            ))}
                          </div>
                        )}
                      </>
                    );
                  })()}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
