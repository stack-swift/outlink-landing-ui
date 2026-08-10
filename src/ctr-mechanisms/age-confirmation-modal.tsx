"use client";

import React from "react";
import { motion } from "framer-motion";
import { ButtonGlass } from "shadcn-glass-ui/components";

export interface AgeConfirmationModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  /** When set, "I'm 18+" is rendered as a native <a target="_blank"> so in-app browsers may open in system browser */
  confirmHref?: string;
  confirmTargetBlank?: boolean;
  children: React.ReactNode;
}

export function AgeConfirmationModal({
  isOpen,
  onConfirm,
  onCancel,
  confirmHref,
  confirmTargetBlank = false,
  children,
}: AgeConfirmationModalProps) {
  const roundedClipStyle: React.CSSProperties = {
    borderRadius: "1rem",
    overflow: "hidden",
    isolation: "isolate",
    transform: "translateZ(0)",
    WebkitTransform: "translateZ(0)",
  };
  const confirmButtonClass =
    "inline-flex h-9 min-w-[88px] items-center justify-center rounded-xl bg-[#5EC8D6] px-4 text-sm font-extrabold text-[#08080A] shadow-[0_10px_24px_rgba(94,200,214,0.28)] ring-1 ring-white/25 transition hover:bg-[#4FB6C4] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5EC8D6]/60";

  const glassVars = {
    "--btn-primary-bg":
      "linear-gradient(135deg, rgba(255,255,255,0.22), rgba(94,200,214,0.9) 46%, rgba(79,182,196,0.72))",
    "--btn-primary-hover-bg":
      "linear-gradient(135deg, rgba(255,255,255,0.3), rgba(94,200,214,0.98) 46%, rgba(135,221,229,0.78))",
    "--btn-primary-text": "#0A0A0C",
    "--btn-primary-shadow":
      "inset 0 1px 0 rgba(255,255,255,0.46), inset 0 -1px 0 rgba(16,80,88,0.22), 0 10px 24px rgba(94,200,214,0.24)",
    "--btn-primary-glow": "0 0 28px rgba(94,200,214,0.28)",
    "--btn-secondary-bg":
      "linear-gradient(135deg, rgba(233,226,208,0.14), rgba(233,226,208,0.06) 48%, rgba(16,16,20,0.54))",
    "--btn-secondary-hover-bg":
      "linear-gradient(135deg, rgba(233,226,208,0.2), rgba(233,226,208,0.1) 48%, rgba(16,16,20,0.6))",
    "--btn-secondary-text": "#E9E2D0",
    "--btn-secondary-border": "rgba(255,255,255,0)",
    "--btn-secondary-glow": "0 0 22px rgba(255,255,255,0.12)",
    "--focus-glow": "0 0 0 2px rgba(255,255,255,0.32)",
  } as React.CSSProperties;

  const handleCancel = () => {
    onCancel();
  };

  const handleConfirm = () => {
    onConfirm();

    if (confirmHref && !confirmTargetBlank) {
      window.location.href = confirmHref;
    }
  };

  if (!isOpen) {
    return <>{children}</>;
  }

  return (
    <div className="relative overflow-hidden rounded-2xl" style={roundedClipStyle}>
      {/* Blurred background */}
      <div className="pointer-events-none opacity-20">
        {children}
      </div>
      
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/75 z-[5] flex flex-col items-center justify-center px-4 py-3 rounded-2xl"
        style={roundedClipStyle}
      >
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex flex-col items-center text-center"
        >
          <div>
            <p className="text-center text-sm font-semibold text-white drop-shadow-md">
              Adult Content (18+)
            </p>
          </div>
          <div className="mt-2 flex justify-center gap-2.5" style={glassVars}>
            {confirmHref ? (
              <a
                href={confirmHref}
                target={confirmTargetBlank ? "_blank" : undefined}
                rel={confirmTargetBlank ? "noopener noreferrer" : undefined}
                onClick={confirmTargetBlank ? onConfirm : handleConfirm}
                className={confirmButtonClass}
              >
                I&apos;m 18+
              </a>
            ) : (
              <button
                type="button"
                className={confirmButtonClass}
                onClick={handleConfirm}
              >
                I&apos;m 18+
              </button>
            )}
            <ButtonGlass
              className="h-9 min-w-[72px] border-0 px-4 text-sm font-bold"
              onClick={handleCancel}
              size="sm"
              variant="secondary"
            >
              Exit
            </ButtonGlass>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
