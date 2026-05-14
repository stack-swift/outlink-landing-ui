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
  const glassVars = {
    "--btn-primary-bg":
      "linear-gradient(135deg, rgba(255,255,255,0.24), rgba(236,72,153,0.72) 46%, rgba(190,24,93,0.72))",
    "--btn-primary-hover-bg":
      "linear-gradient(135deg, rgba(255,255,255,0.3), rgba(236,72,153,0.82) 46%, rgba(190,24,93,0.78))",
    "--btn-primary-text": "#ffffff",
    "--btn-primary-shadow":
      "inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(120,20,70,0.24), 0 10px 24px rgba(236,72,153,0.24)",
    "--btn-primary-glow": "0 0 28px rgba(236,72,153,0.34)",
    "--btn-secondary-bg":
      "linear-gradient(135deg, rgba(255,255,255,0.16), rgba(255,255,255,0.07) 48%, rgba(12,18,29,0.46))",
    "--btn-secondary-hover-bg":
      "linear-gradient(135deg, rgba(255,255,255,0.22), rgba(255,255,255,0.1) 48%, rgba(12,18,29,0.52))",
    "--btn-secondary-text": "#ffffff",
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
    <div className="relative overflow-hidden rounded-xl">
      {/* Blurred background */}
      <div className="pointer-events-none opacity-30">
        {children}
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40 z-[5] flex flex-col items-center justify-center px-4 py-3 rounded-xl">
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
          <div
            className="mt-2 flex justify-center gap-2.5"
            style={glassVars}
          >
            {confirmHref ? (
              <ButtonGlass
                asChild
                className="h-9 min-w-[86px] px-4 text-sm font-bold"
                size="sm"
                variant="default"
              >
                <a
                href={confirmHref}
                target={confirmTargetBlank ? "_blank" : undefined}
                rel={confirmTargetBlank ? "noopener noreferrer" : undefined}
                onClick={confirmTargetBlank ? onConfirm : handleConfirm}
              >
                  I&apos;m 18+
                </a>
              </ButtonGlass>
            ) : (
              <ButtonGlass
                className="h-9 min-w-[86px] px-4 text-sm font-bold"
                onClick={handleConfirm}
                size="sm"
                variant="default"
              >
                I&apos;m 18+
              </ButtonGlass>
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
