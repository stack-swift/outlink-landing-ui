"use client";

import React, { useState, useEffect, useRef } from "react";

import { Avatar } from "@heroui/avatar";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
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



interface LandingPageViewerProps {
  link: Link;
  settings: LandingPageSettings;
  onButtonClick?: () => void;
  isPreview?: boolean; 
  isFreePlan?: boolean; 
}


function isRedditFlow(): boolean {
  if (typeof window === "undefined") return false;
  const params = new URLSearchParams(window.location.search);
  return params.has("r");
}


function wrapUrlForNavigation(
  url: string | null | undefined,
  isPreview: boolean | undefined,
): string {
  if (!url) return "";
  if (!isPreview && isRedditFlow()) {
    return `/reddit-escape?target=${encodeURIComponent(url)}`;
  }
  return url;
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
}: LandingPageViewerProps) {
  const [showingAgeConfirmationFor, setShowingAgeConfirmationFor] =
    useState<string | null>(null);

  // Gallery state
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [lightboxUrl, setLightboxUrl] = useState<string | null>(null);
  const galleryTouchStartX = useRef<number | null>(null);

  // Motion video gate: don't load MP4 until the user interacts (instant LCP from poster)
  const [enableMotionVideo, setEnableMotionVideo] = useState(!isPreview);
const [heroVideoReady, setHeroVideoReady] = useState(false);
const heroVideoRef = useRef<HTMLVideoElement | null>(null);

const ctaVideoMapRef = useRef(new Map<string, HTMLVideoElement>());

const setCtaVideoRef = (id: string) => (el: HTMLVideoElement | null) => {
  if (!el) {
    ctaVideoMapRef.current.delete(id);
    return;
  }
  ctaVideoMapRef.current.set(id, el);
};

const heroPoster =
  settings.header_video_poster_url || settings.avatar_url || undefined;

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

  const isLightMode = settings.theme_mode === "light";

  // Theme-aware colors
  const themeColors = {
    background: isLightMode ? "#FFFFFF" : "#000000",
    textPrimary: isLightMode ? "#18181b" : "#ffffff",
    textSecondary: isLightMode ? "#64748b" : "#94a3b8",
    cardBg: isLightMode ? "#f8fafc" : "#111111",
    border: isLightMode ? "#e2e8f0" : "#27272a",
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
    return ua.includes("Instagram") || ua.includes("FBAN") || ua.includes("FBAV");
  };

  const isWhitehatLink =
    ((link as { link_type?: string }).link_type || "").toLowerCase() ===
    "whitehat";
  const shouldEscapeInAppBrowser =
    !isPreview &&
    isInAppBrowser() &&
    (isWhitehatLink || (link as any).enable_deeplink !== false);

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

    if (isIOS) {
      const safariScheme = buildDeepLinkUrl(absoluteUrl);
      if (!safariScheme) return false;

      openInNewTabBestEffort(absoluteUrl);
      openInNewTabBestEffort(safariScheme);
      window.location.href = safariScheme;
      window.setTimeout(() => {
        window.location.href = absoluteUrl;
      }, 1400);
      return true;
    }

    if (isAndroid) {
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
    const absoluteUrl = finalUrl.startsWith("http")
      ? finalUrl
      : `${window.location.origin}${finalUrl.startsWith("/") ? "" : "/"}${finalUrl}`;
    const fromUserGesture = opts?.fromUserGesture === true;

    if (shouldEscapeInAppBrowser && fromUserGesture) {
      if (attemptAppBrowserHandoff(absoluteUrl)) {
        return;
      }
    }

    window.location.href = absoluteUrl;
  };

  const getNavigationTargets = (url: string) => {
    const finalUrl = wrapUrlForNavigation(url, isPreview) || url;
    const absoluteUrl =
      typeof window === "undefined" || finalUrl.startsWith("http")
        ? finalUrl
        : `${window.location.origin}${finalUrl.startsWith("/") ? "" : "/"}${finalUrl}`;

    return { finalUrl, absoluteUrl };
  };

  const getNativeLinkProps = (url: string) => {
    const { finalUrl, absoluteUrl } = getNavigationTargets(url);

    const attemptExternalOpen = () => {
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

  const mode = settings.profile_display_mode || "full"; // 'full' | 'avatar' | 'video'
  const isFullMode = mode === "full";
  const isVideoMode = mode === "video";

  // Layout + spacing
  const DEFAULT_LAYOUT_SECTIONS: LayoutSectionKey[] = [
    "header",
    "bio",
    "social_block",
    "voice_note",
    "cta_block",
    "gallery",
    "branding",
  ];

  let layoutSections: LayoutSectionKey[] =
    settings.layout_sections && settings.layout_sections.length
      ? (settings.layout_sections as LayoutSectionKey[])
      : DEFAULT_LAYOUT_SECTIONS;

  // Ensure branding footer is always present and fixed at the end
  layoutSections = [
    ...layoutSections.filter((k) => k !== "branding"),
    "branding",
  ];

  const isSectionEnabled = (key: LayoutSectionKey) =>
    key === "branding" ? true : layoutSections.includes(key);

  const getSectionOrder = (key: LayoutSectionKey) => {
    const index = layoutSections.indexOf(key);
    if (index === -1) return 999;
    // start after header/bio block; higher order = lower on page
    return (index + 1) * 10;
  };

  const getSectionSpacingClass = (key: LayoutSectionKey) => {
    if (key === "branding") {
      // Branding spacing is locked
      return "mt-3";
    }
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

  // Enable MP4 only after first user interaction (scroll/tap/click/keypress)
// useEffect(() => {
//   if (isPreview) return;
//   if (enableMotionVideo) return;

//   const activate = () => setEnableMotionVideo(true);

//   window.addEventListener("pointerdown", activate, { once: true, passive: true });
//   window.addEventListener("touchstart", activate, { once: true, passive: true });
//   window.addEventListener("wheel", activate, { once: true, passive: true });
//   window.addEventListener("scroll", activate, { once: true, passive: true });
//   window.addEventListener("keydown", activate, { once: true });

//   return () => {
//     window.removeEventListener("pointerdown", activate);
//     window.removeEventListener("touchstart", activate);
//     window.removeEventListener("wheel", activate);
//     window.removeEventListener("scroll", activate);
//     window.removeEventListener("keydown", activate);
//   };
// }, [isPreview, enableMotionVideo]);

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

  for (const v of ctaVideoMapRef.current.values()) {
    v.preload = "metadata";
    v.load();
  }

  // Then try to play
  hero?.play().catch(() => {});
  for (const v of ctaVideoMapRef.current.values()) {
    v.play().catch(() => {});
  }
}, [enableMotionVideo]);

  // Auto‑redirect to a CTA button after N seconds (optional)
  useEffect(
    () => {
      if (isPreview) return;
      if (link.link_type !== "whitehat") return;
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
        navigateToUrl(targetCard.url);
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
    if (isVideoMode || isFullMode) return "h-[420px] md:h-[420px]";
    // Avatar / fallback – more compact
    return "h-[320px] md:h-[320px]";
  })();

  return (
    <div
      className="min-h-[100dvh] flex items-start md:items-center justify-center relative overflow-hidden"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
           {/* Blurred background for desktop - only shows on larger screens
          IMPORTANT: don't use a background <video> here (it downloads the hero clip twice). */}
      {isVideoMode && (settings.header_video_poster_url || settings.avatar_url) ? (
        <div
          className="hidden md:block absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${settings.header_video_poster_url || settings.avatar_url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(80px) brightness(0.4)",
            transform: "scale(1.1)",
          }}
        />
      ) : settings.avatar_url ? (
        <div
          className="hidden md:block absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${settings.avatar_url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(80px) brightness(0.4)",
            transform: "scale(1.1)",
          }}
        />
      ) : null}

      {/* Mobile-sized container */}
      <div
        className="relative z-10 w-full md:max-w-md md:min-h-[812px] md:shadow-2xl md:rounded-2xl overflow-y-auto overflow-x-hidden flex flex-col"
        style={{ backgroundColor: themeColors.background }}
      >
        {/* Free-plan ribbon */}
        {isFreePlan && (
          <a
            href="https://app.outlink.bio/signup"
            target="_blank"
            rel="noreferrer"
            className="absolute inset-x-0 top-0 z-20"
          >
            <div className="w-full bg-gradient-to-r from-pink-500 to-orange-400 py-2 px-4 shadow-md flex items-center justify-center gap-2">
              <span className="text-[10px] font-semibold tracking-[0.15em] text-white uppercase">
                Claim your domain
              </span>
              <Icon
                icon="solar:arrow-right-linear"
                width={12}
                className="text-white"
              />
            </div>
          </a>
        )}

        {/* Hero area */}
        {isFullMode || isVideoMode ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={`relative w-full ${heroHeightClass}`}
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
      preload="none"
      autoPlay
      loop
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
          className="flex-1 flex flex-col items-center px-4 sm:px-6 md:px-8 relative z-10"
          style={{ marginTop: isFullMode ? "0" : "0" }}
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
                            style={{ color: "#ec4899" }}
                          />
                        ) : (
                          <Chip
                            size="sm"
                            variant="flat"
                            className="bg-[#ec4899]/10 text-[#ec4899]"
                            startContent={
                              <Icon
                                icon="solar:verified-check-bold"
                                width={16}
                                style={{ color: "#ec4899" }}
                              />
                            }
                          >
                            Verified
                          </Chip>
                        )}
                      </>
                    )}
                  </div>
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
              {mode === "avatar" && (
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="relative"
                >
                  <div
                    className="rounded-full p-1"
                    style={{
                      background:
                        "linear-gradient(135deg, #0EA5E9, #3B82F6, #6366F1)",
                    }}
                  >
                    <Avatar
                      src={settings.avatar_url || undefined}
                      alt={settings.display_name || link.title || "Profile"}
                      className="w-32 h-32 text-large border-4"
                      style={{ borderColor: themeColors.background }}
                      showFallback
                      fallback={
                        <Icon
                          icon="solar:user-bold-duotone"
                          className="w-20 h-20 text-default-500"
                        />
                      }
                    />
                  </div>
                </motion.div>
              )}

              {/* Avatar mode name */}
              {mode === "avatar" && isSectionEnabled("header") && (
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
                            style={{ color: "#ec4899" }}
                          />
                        ) : (
                          <Chip
                            size="sm"
                            variant="flat"
                            className="bg-[#ec4899]/10 text-[#ec4899]"
                            startContent={
                              <Icon
                                icon="solar:verified-check-bold"
                                width={16}
                                style={{ color: "#ec4899" }}
                              />
                            }
                          >
                            Verified
                          </Chip>
                        )}
                      </>
                    )}
                  </div>
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
                          {settings.social_links.map((social, index) => (
                            <Button
                              key={index}
                              as="a"
                              href={social.url ?? ""}
                              target="_blank"
                              rel="noopener noreferrer"
                              isIconOnly
                              size="sm"
                              variant="light"
                              className="hover:scale-110 transition-transform bg-transparent hover:bg-transparent shadow-none min-w-0 w-auto h-auto p-0"
                            >
                              <Icon
                                icon={social.icon}
                                width={20}
                                color={
                                  isLightMode ? "#ec4899" : "#e5e7eb"
                                }
                              />
                            </Button>
                          ))}
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
                    <div className="w-full grid grid-cols-2 gap-3">
                      {settings.cta_cards
                        .sort((a, b) => a.order - b.order)
                        .map((card, index) => {
                          const size = card.style.size || "standard";

                          let sizeBodyClasses = "p-5 min-h-[120px]";
                          let sizeTitleClass = "text-lg";
                          let sizeDescriptionClass = "text-sm";
                          let sizeColSpanClass = "";

                          if (size === "small") {
                            sizeBodyClasses = "p-4 min-h-[110px]";
                            sizeTitleClass = "text-base";
                            sizeDescriptionClass = "text-xs";
                            sizeColSpanClass = "";
                          } else if (size === "standard") {
                            sizeBodyClasses = "p-5 min-h-[150px]";
                            sizeTitleClass = "text-lg";
                            sizeDescriptionClass = "text-sm";
                            sizeColSpanClass = "col-span-2";
                          } else if (size === "large") {
                            sizeBodyClasses = "p-6 min-h-[260px]";
                            sizeTitleClass = "text-lg";
                            sizeDescriptionClass = "text-sm";
                            sizeColSpanClass = "col-span-2";
                          }

                          const isOnlyfansLogo =
                            (card.style.logo_icon || "")
                              .toLowerCase()
                              .includes("onlyfans") ||
                            card.style.logo_icon === "of-local" ||
                            (card.style.logo_name || "")
                              .toLowerCase()
                              === "icon";

                          const isBrandedNonOF =
                            !!card.style.logo_icon && !isOnlyfansLogo;

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
                                return {
                                  backgroundImage: card.style.background_image
                                    ? `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${card.style.background_image})`
                                    : "none",
                                  backgroundSize: "cover",
                                  backgroundPosition: "center",
                                };
                              case "video":
                                return { background: "#000" };
                              default:
                                return {};
                            }
                          };

                          const handleCardClick = () => {
                            if (isPreview) return;

                            if (card.require_18plus) {
                              setShowingAgeConfirmationFor(card.id);
                              return;
                            }

                            trackClick(link.id, isPreview);
                            navigateToUrl(card.url, { fromUserGesture: true });
                          };

                          const handleAgeConfirm = () => {
                            setShowingAgeConfirmationFor(null);
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
                              className={`${sizeBodyClasses} flex items-center justify-center relative`}
                            >
                                {/* Video Background */}
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

                                    return enableMotionVideo ? (
                                      <video
                                      ref={setCtaVideoRef(card.id)}
                                      src={card.style.background_video}
                                      poster={card.style.background_video_poster_url || undefined}
                                      preload="none"
                                      autoPlay
                                      loop
                                      muted
                                      playsInline
                                      className={`${baseClasses} ${fitClass} ${focusClass}`}
                                    />
                                  ) : card.style.background_video_poster_url ? (
                                    <img
                                      src={card.style.background_video_poster_url}
                                      alt=""
                                      className={`${baseClasses} ${fitClass} ${focusClass}`}
                                      loading="lazy"
                                      decoding="async"
                                    />
                                  ) : null;

                                    
                                  })()}

                                {/* Center content */}
                                <div className="text-center w-full relative z-10">
                                  {/* OnlyFans special layout – stacked in center */}
                                  {isOnlyfansLogo && (
                                    <div className="mb-2">
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
                                    </div>
                                  )}

                                  {/* Centered title/description ONLY for non‑branded or OnlyFans */}
                                  {!isBrandedNonOF &&
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

                                  {!isBrandedNonOF && card.description && (
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

                                {/* Brand overlay for non‑OF branded buttons */}
                                {isBrandedNonOF && (
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

                                    {card.style.logo_name && (
                                      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-20">
                                        <p
                                          className="text-xs font-semibold"
                                          style={{
                                            color:
                                              card.style.logo_color ||
                                              "#ffffff",
                                            textShadow:
                                              card.style.type === "image" ||
                                              card.style.type === "video"
                                                ? "0 1px 3px rgba(0,0,0,0.7)"
                                                : "none",
                                          }}
                                        >
                                          {card.style.logo_name}
                                        </p>
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
                              className="w-full hover:scale-[1.02] transition-transform shadow-lg relative"
                              style={getCardStyle()}
                            >
                              <CardBody>
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
                              className="block w-full rounded-xl shadow-lg transition-transform hover:scale-[1.02]"
                              style={getCardStyle()}
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
                            showingAgeConfirmationFor === card.id &&
                            !isPreview ? (
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

                          return (
                            <motion.div
                              key={card.id}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                delay: 0.6 + index * 0.1,
                                duration: 0.3,
                              }}
                              className={`relative ${sizeColSpanClass}`}
                            >
                              {finalContent}
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
                                    key={`${url}-${imgIndex}`}
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
                                    ? "w-4 bg-[#ec4899]"
                                    : "w-1.5 bg-[#ec4899]/40"
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

              {/* Branding / Powered by  of layout */}
              {isSectionEnabled("branding") && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.3 }}
                  className={`${getSectionSpacingClass(
                    "branding",
                  )} pb-8 flex justify-center`}
                  style={{ order: getSectionOrder("branding") }}
                >
                  <a
                    href="https://www.outlink.bio/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-default-500 hover:text-default-300 transition-colors"
                  >
                    <img
                      src="/logo2.svg"
                      alt="Outlink logo"
                      className="h-4 w-4"
                    />
                    <span>Powered by outlink</span>
                  </a>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
