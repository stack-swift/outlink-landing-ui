"use client";

import React, { useState } from "react";
import { Button } from "@heroui/button";
import { Progress } from "@heroui/progress";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

interface ClickToRevealProps {
  clicksRequired: number;
  buttonText: string;
  onReveal: () => void;
  children?: React.ReactNode;
}

export function ClickToReveal({
  clicksRequired,
  buttonText,
  onReveal,
  children,
}: ClickToRevealProps) {
  const [clickCount, setClickCount] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount >= clicksRequired) {
      setIsRevealed(true);
      onReveal();
    }
  };

  const progress = (clickCount / clicksRequired) * 100;

  if (isRevealed) {
    return <>{children}</>;
  }

  return (
    <div className="relative overflow-hidden rounded-xl">
      <div className="absolute inset-0 backdrop-blur-md bg-black/60 z-[5] flex flex-col items-center justify-center px-4 py-4 rounded-xl">
        <motion.div
          animate={clickCount > 0 ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.3 }}
          className="text-center space-y-2"
        >
          <Icon
            icon="solar:click-bold-duotone"
            width={40}
            className="text-white mx-auto drop-shadow-lg"
          />
          <div className="space-y-1">
            <p className="text-white font-semibold text-base drop-shadow-md">{buttonText}</p>
            <p className="text-white/80 text-xs drop-shadow-sm">
              {clicksRequired - clickCount} more {clicksRequired - clickCount === 1 ? 'tap' : 'taps'} to unlock
            </p>
          </div>
          <Button
            size="md"
            // Use brand pink for the primary CTA
            onPress={handleClick}
            className="font-bold shadow-lg bg-[#ec4899] hover:bg-[#db2777] text-white"
          >
            Tap to Unlock ({clickCount}/{clicksRequired})
          </Button>
          <Progress
            value={progress}
            className="max-w-[200px]"
            // Brand pink progress bar
            color="primary"
            classNames={{
              indicator: "bg-[#ec4899]",
            }}
            size="sm"
          />
        </motion.div>
      </div>
      <div className="opacity-30 pointer-events-none">{children}</div>
    </div>
  );
}

