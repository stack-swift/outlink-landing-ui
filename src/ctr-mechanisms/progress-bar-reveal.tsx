"use client";

import React, { useState, useEffect } from "react";
import { Progress } from "@heroui/progress";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

interface ProgressBarRevealProps {
  durationSeconds: number;
  message: string;
  onReveal: () => void;
  children?: React.ReactNode;
}

export function ProgressBarReveal({
  durationSeconds,
  message,
  onReveal,
  children,
}: ProgressBarRevealProps) {
  const [progress, setProgress] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const interval = 50; // Update every 50ms for smooth animation
    const totalSteps = (durationSeconds * 1000) / interval;
    const incrementPerStep = 100 / totalSteps;
    let currentProgress = 0;

    const timer = setInterval(() => {
      currentProgress += incrementPerStep;
      
      if (currentProgress >= 100) {
        setProgress(100);
        clearInterval(timer);
        setTimeout(() => {
          setIsRevealed(true);
          onReveal();
        }, 300);
      } else {
        setProgress(currentProgress);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [durationSeconds]); // Removed onReveal from dependencies to prevent infinite loop

  if (isRevealed) {
    return <>{children}</>;
  }

  return (
    <div className="relative overflow-hidden rounded-xl">
      <div className="absolute rounded-xl inset-0 backdrop-blur-sm bg-black/40 z-[5] flex items-center justify-center px-3 py-3">
        <motion.div className="text-center space-y-1 w-full max-w-[210px] mx-auto">
          <Icon
            icon="solar:hourglass-bold-duotone"
            width={32}
            className="text-white mx-auto drop-shadow-lg"
          />
          <div className="space-y-1">
            <p className="text-white font-semibold text-sm drop-shadow-md">
              {message}
            </p>
            <Progress
              value={progress}
              className="w-[150px] mx-auto"
              color="primary"
              size="sm"
            />
            <p className="text-white/80 text-[11px] drop-shadow-sm">
              {Math.round(progress)}% loaded...
            </p>
          </div>
        </motion.div>
      </div>
      <div className="opacity-30 pointer-events-none">{children}</div>
    </div>
  );
}

