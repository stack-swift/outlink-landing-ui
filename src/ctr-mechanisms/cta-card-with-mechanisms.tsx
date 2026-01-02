"use client";

import React, { useState } from "react";
import { CTACard } from "../../src/types";
import { Chip } from "@heroui/chip";
import { Icon } from "@iconify/react";
import { ClickToReveal } from "./click-to-reveal";
import { CountdownReveal } from "./countdown-reveal";
import { ScarcityBadge } from "./scarcity-badge";
import { BlurOverlay } from "./blur-overlay";
import { ProgressBarReveal } from "./progress-bar-reveal";
import { ConfettiEffect } from "./confetti-effect";
import { motion } from "framer-motion";

interface CTACardWithMechanismsProps {
  card: CTACard;
  onReveal: () => void;
  children?: React.ReactNode;
}

export function CTACardWithMechanisms({
  card,
  onReveal,
  children,
}: CTACardWithMechanismsProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const mechanisms = card.ctr_mechanisms;

  const handleReveal = () => {
    // Trigger confetti if enabled
    if (mechanisms?.visual_effects?.confetti_on_reveal) {
      setShowConfetti(true);
    }

    // Mark as revealed
    setIsRevealed(true);

    // Call the actual reveal callback
    onReveal();
  };

  // Wrap with appropriate mechanisms
  let content = children;

  // Apply visual effects (pulse, glow)
  if (
    mechanisms?.visual_effects?.pulse_animation ||
    mechanisms?.visual_effects?.glow_effect
  ) {
    const className = `
      ${mechanisms.visual_effects.pulse_animation ? "animate-pulse" : ""}
      ${
        mechanisms.visual_effects.glow_effect
          ? "shadow-lg shadow-[rgba(236,72,153,0.5)]"
          : ""
      }
    `.trim();

    content = (
      <motion.div
        animate={
          mechanisms.visual_effects.pulse_animation
            ? { scale: [1, 1.02, 1] }
            : {}
        }
        transition={{ duration: 2, repeat: Infinity }}
        className={className}
      >
        {content}
      </motion.div>
    );
  }

  // Apply blocking mechanisms (only one can be active at a time)
  // Click-to-reveal has full priority; if it's enabled, it's the ONLY
  // blocking overlay until it completes, then we fall back to others.
  if (mechanisms?.click_to_reveal?.enabled && !isRevealed) {
    content = (
      <ClickToReveal
        clicksRequired={mechanisms.click_to_reveal.clicks_required}
        buttonText={mechanisms.click_to_reveal.button_text}
        onReveal={handleReveal}
      >
        {content}
      </ClickToReveal>
    );
  } else if (mechanisms?.progress_bar?.enabled && !isRevealed) {
    content = (
      <ProgressBarReveal
        durationSeconds={mechanisms.progress_bar.duration_seconds}
        message={mechanisms.progress_bar.message}
        onReveal={handleReveal}
      >
        {content}
      </ProgressBarReveal>
    );
  } else if (mechanisms?.countdown_timer?.enabled && !isRevealed) {
    content = (
      <CountdownReveal
        durationSeconds={mechanisms.countdown_timer.duration_seconds}
        message={mechanisms.countdown_timer.message}
        onReveal={handleReveal}
      >
        {content}
      </CountdownReveal>
    );
  } else if (mechanisms?.blur_preview?.enabled && !isRevealed) {
    content = (
      <BlurOverlay
        blurAmount={mechanisms.blur_preview.blur_amount}
        teaserText={mechanisms.blur_preview.teaser_text}
        onReveal={handleReveal}
      >
        {content}
      </BlurOverlay>
    );
  }

  // Add scarcity badges and exclusive badge (these go on top, not blocking)
  // When any blocking mechanism is active (click-to-reveal, timer, progress),
  // hide badges until the content is revealed to avoid clutter.
  const blockingActive =
    !isRevealed &&
    (mechanisms?.click_to_reveal?.enabled ||
      mechanisms?.progress_bar?.enabled ||
      mechanisms?.countdown_timer?.enabled);

  const showBadges = !blockingActive;

  const hasMultipleBadges =
    showBadges &&
    [
      mechanisms?.limited_slots?.enabled,
      mechanisms?.live_viewers?.enabled,
      mechanisms?.exclusive_badge?.enabled,
    ].filter(Boolean).length > 1;

  // Wrap everything in a relative container to contain overlays and badges
  return (
    <div className="relative overflow-hidden rounded-xl">
      {showBadges && mechanisms?.limited_slots?.enabled && (
        <ScarcityBadge
          type="slots"
          count={mechanisms.limited_slots.current}
          total={mechanisms.limited_slots.total}
          message={mechanisms.limited_slots.message}
        />
      )}
      {showBadges && mechanisms?.live_viewers?.enabled && (
        <ScarcityBadge
          type="viewers"
          count={mechanisms.live_viewers.count}
        />
      )}
      {showBadges && mechanisms?.exclusive_badge?.enabled && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`absolute z-[10] ${
            hasMultipleBadges ? "bottom-2 left-2" : "top-2 left-2"
          }`}
        >
          <Chip
            color="secondary"
            variant="solid"
            size="sm"
            className="font-semibold"
            startContent={<Icon icon="solar:crown-bold" width={14} />}
          >
            {mechanisms.exclusive_badge.text}
          </Chip>
        </motion.div>
      )}
      {content}
      <ConfettiEffect trigger={showConfetti} />
    </div>
  );
}