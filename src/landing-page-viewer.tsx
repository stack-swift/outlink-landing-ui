"use client";

import React, { useState } from "react";
import { Avatar } from "@heroui/avatar";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { ModernAudioPlayer } from "./modern-audio-player";
import { CTACardWithMechanisms } from "./ctr-mechanisms/cta-card-with-mechanisms";
import { AgeConfirmationModal } from "./ctr-mechanisms/age-confirmation-modal";
import type { Link, LandingPageSettings } from "./types";

interface LandingPageViewerProps {
  link: Link;
  settings: LandingPageSettings;
  onButtonClick?: () => void;
  isPreview?: boolean; // When true, disables navigation
  isFreePlan?: boolean; // When true, show free-plan promo badge + footer
}

// Helper: detect Reddit flow via ?r=1
function isRedditFlow(): boolean {
  if (typeof window === "undefined") return false;
  const params = new URLSearchParams(window.location.search);
  return params.has("r");
}

// Helper: for Reddit, send navigation through /reddit-escape (live mode only)
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

  const isLightMode = settings.theme_mode === "light";

  // Theme-aware colors
  const themeColors = {
    background: isLightMode ? "#FFFFFF" : "#18181b",
    textPrimary: isLightMode ? "#18181b" : "#ffffff",
    textSecondary: isLightMode ? "#64748b" : "#94a3b8",
    cardBg: isLightMode ? "#f8fafc" : "#27272a",
    border: isLightMode ? "#e2e8f0" : "#3f3f46",
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

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }

    // Skip navigation in preview mode
    if (isPreview) return;
    if (!link.destination_url) return;

    // record click
    trackClick(link.id, isPreview);

    const target = wrapUrlForNavigation(link.destination_url, isPreview);
    if (!target) return;
    window.location.href = target;
  };

  const mode = settings.profile_display_mode || "full"; // 'full' | 'avatar' | 'video'
  const isFullMode = mode === "full";
  const isVideoMode = mode === "video";

  const heroHeightClass = (() => {
    if (isVideoMode) return "h-[520px] md:h-[520px]";
    if (isFullMode) return "h-[420px] md:h-[420px]";
    // Avatar / fallback – more compact
    return "h-[320px] md:h-[320px]";
  })();

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Blurred background for desktop - only shows on larger screens */}
      {isVideoMode && settings.header_video_url ? (
        <video
          className="hidden md:block absolute inset-0 z-0 w-full h-full object-cover"
          src={settings.header_video_url}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          style={{
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
        className="relative z-10 w-full md:max-w-md md:min-h-[812px] md:shadow-2xl md:rounded-2xl overflow-y-auto flex flex-col"
        style={{ backgroundColor: themeColors.background }}
      >
        {isFreePlan && (
          <a
            href="https://www.outlink.bio/"
            target="_blank"
            rel="noreferrer"
            className="absolute left-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-lg"
          >
            <img src="/logo2.svg" alt="Outlink" className="h-5 w-5" />
          </a>
        )}

        {/* Hero area for Full Display & Video Header modes */}
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
                          <video
                            src={settings.header_video_url}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className={`w-full h-full object-cover ${focusClass}`}
                          />
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
                    {/* Profile Image Container */}
                    <div className="relative w-full h-full overflow-hidden">
                      <img
                        src={settings.avatar_url}
                        alt={settings.display_name || link.title || "Profile"}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    {/* Gradient overlay to blend into page background */}
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
          /* Avatar Mode - Circular Profile Picture */
          <div className="w-full pt-8" />
        )}

        {/* Content Section */}
        <div
          className="flex-1 flex flex-col items-center px-4 sm:px-6 md:px-8 relative z-10"
          style={{ marginTop: isFullMode ? "0" : "0" }}
        >
          <div className="w-full max-w-md">
            <div className="flex flex-col items-center gap-4">
              {/* Name and Verification - Hero modes */}
              {(isFullMode || isVideoMode) && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="flex flex-col items-center gap-2 mt-4"
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

              {/* Avatar Mode Display */}
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

              {/* Name and Verification - Avatar mode */}
              {mode === "avatar" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="flex flex-col items-center gap-1"
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

              {/* Social Links */}
              {settings.social_links &&
                settings.social_links.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    className="flex flex-wrap items-center justify-center gap-2"
                  >
                    {settings.social_links.map((social, index) => (
                      <Button
                        key={index}
                        as="a"
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        isIconOnly
                        size="sm"
                        variant="flat"
                        className="hover:scale-110 transition-transform"
                      >
                        <Icon icon={social.icon} width={20} />
                      </Button>
                    ))}
                  </motion.div>
                )}

              {/* Follower Count */}
              {settings.show_follower_count &&
                settings.follower_count > 0 && (
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

              {/* Voice Note */}
              {settings.voice_note_url && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.3 }}
                  className="w-full max-w-sm"
                >
                  <ModernAudioPlayer
                    src={settings.voice_note_url}
                    theme={settings.theme_mode}
                  />
                </motion.div>
              )}

              {/* Bio */}
              {settings.bio && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="text-center max-w-sm"
                  style={{ color: themeColors.textSecondary }}
                >
                  {settings.bio}
                </motion.p>
              )}

              {/* CTA Cards */}
              {settings.cta_cards && settings.cta_cards.length > 0 ? (
                <div className="w-full space-y-3 mt-4">
                  {settings.cta_cards
                    .sort((a, b) => a.order - b.order)
                    .map((card, index) => {
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
                        // Skip everything in preview mode
                        if (isPreview) return;

                        // Age gate
                        if (card.require_18plus) {
                          setShowingAgeConfirmationFor(card.id);
                          return;
                        }

                        // record click
                        trackClick(link.id, isPreview);

                        const navUrl = wrapUrlForNavigation(
                          card.url,
                          isPreview,
                        );
                        if (!navUrl) return;
                        window.location.href = navUrl;
                      };

                      const handleAgeConfirm = () => {
                        // record click
                        trackClick(link.id, isPreview);

                        const navUrl = wrapUrlForNavigation(
                          card.url,
                          isPreview,
                        );
                        if (!navUrl) return;
                        window.location.href = navUrl;
                      };

                      const handleAgeCancel = () => {
                        setShowingAgeConfirmationFor(null);
                      };

                      const renderCardContent = () => (
                        <Card
                          isPressable
                          onPress={handleCardClick}
                          className="w-full hover:scale-[1.02] transition-transform shadow-lg relative"
                          style={getCardStyle()}
                        >
                          <CardBody
                            className={`p-6 flex items-center justify-center relative ${
                              card.ctr_mechanisms
                                ? "min-h-[150px] md:min-h-[140px]"
                                : "min-h-[120px]"
                            }`}
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
                                return (
                                  <video
                                    src={card.style.background_video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className={`${baseClasses} ${fitClass} ${focusClass}`}
                                  />
                                );
                              })()}

                            <div className="text-center w-full relative z-10">
                              {/* Logo Style */}
                              {card.style.logo_icon && (
                                <div className="mb-2">
                                  <Icon
                                    icon={card.style.logo_icon}
                                    width={36}
                                    style={{
                                      color:
                                        card.style.logo_color || "#fff",
                                      filter:
                                        card.style.type === "image" ||
                                        card.style.type === "video"
                                          ? "drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
                                          : "none",
                                    }}
                                    className="mx-auto"
                                  />
                                  {card.style.logo_name && (
                                    <p
                                      className="font-bold text-lg mt-1"
                                      style={{
                                        color:
                                          card.style.logo_color || "#fff",
                                        textShadow:
                                          card.style.type === "image" ||
                                          card.style.type === "video"
                                            ? "0 2px 4px rgba(0,0,0,0.3)"
                                            : "none",
                                      }}
                                    >
                                      {card.style.prefix_text && (
                                        <span className="mr-1">
                                          {card.style.prefix_text}
                                        </span>
                                      )}
                                      {card.style.logo_name}
                                    </p>
                                  )}
                                </div>
                              )}

                              {/* Title and Description */}
                              <h3
                                className={`text-lg font-semibold ${
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
                              {card.description && (
                                <p
                                  className={`text-sm mt-1 ${
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
                          </CardBody>
                        </Card>
                      );

                      // First render card with CTR mechanisms
                      const cardWithMechanisms = card.ctr_mechanisms ? (
                        <CTACardWithMechanisms
                          card={card}
                          onReveal={() => {
                            // just reveal, no navigation
                          }}
                        >
                          {renderCardContent()}
                        </CTACardWithMechanisms>
                      ) : (
                        renderCardContent()
                      );

                      // Then wrap with age confirmation if needed
                      const finalContent =
                        showingAgeConfirmationFor === card.id && !isPreview ? (
                          <AgeConfirmationModal
                            isOpen={true}
                            onConfirm={handleAgeConfirm}
                            onCancel={handleAgeCancel}
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
                          className="relative"
                        >
                          {finalContent}
                        </motion.div>
                      );
                    })}
                </div>
              ) : (
                // Fallback to default button if no CTA cards
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  className="w-full px-4"
                >
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
                </motion.div>
              )}

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.3 }}
                className="mt-8 pb-8 flex justify-center"
              >
                {isFreePlan ? (
                  <a
                    href="https://www.outlink.bio/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold shadow-lg hover:brightness-110 transition bg-gradient-to-r from-pink-500 to-orange-400 text-white"
                  >
                    <span className="inline-flex h-6 w-6 items-center justify-center">
                      <img
                        src="/logo2.svg"
                        alt="Outlink logo"
                        className="h-4 w-4"
                      />
                    </span>
                    <span>Build your own premium page with Outlink</span>
                  </a>
                ) : (
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
                    <span>Powered by Outlink</span>
                  </a>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}