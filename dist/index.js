"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AgeConfirmationModal: () => AgeConfirmationModal,
  CTACardWithMechanisms: () => CTACardWithMechanisms,
  LandingPageViewer: () => LandingPageViewer,
  ModernAudioPlayer: () => ModernAudioPlayer
});
module.exports = __toCommonJS(index_exports);

// src/landing-page-viewer.tsx
var import_react21 = __toESM(require("react"));
var import_react22 = require("@heroui/react");
var import_react23 = require("@heroui/react");
var import_react24 = require("@heroui/react");
var import_react25 = require("@heroui/react");
var import_react26 = require("@iconify/react");
var import_framer_motion10 = require("framer-motion");

// src/modern-audio-player.tsx
var import_react = require("react");
var import_react2 = require("@iconify/react");
var import_framer_motion = require("framer-motion");
var import_wavesurfer = __toESM(require("wavesurfer.js"));
var import_jsx_runtime = require("react/jsx-runtime");
function ModernAudioPlayer({ src, theme = "dark" }) {
  const [isPlaying, setIsPlaying] = (0, import_react.useState)(false);
  const [isLoading, setIsLoading] = (0, import_react.useState)(true);
  const [duration, setDuration] = (0, import_react.useState)(0);
  const [currentTime, setCurrentTime] = (0, import_react.useState)(0);
  const waveformRef = (0, import_react.useRef)(null);
  const wavesurferRef = (0, import_react.useRef)(null);
  const isDestroyedRef = (0, import_react.useRef)(false);
  const isLightMode = theme === "light";
  const brandAccent = "#5EC8D6";
  (0, import_react.useEffect)(() => {
    if (!waveformRef.current) return;
    isDestroyedRef.current = false;
    const wavesurfer = import_wavesurfer.default.create({
      container: waveformRef.current,
      waveColor: isLightMode ? "rgba(94, 200, 214, 0.18)" : "rgba(94, 200, 214, 0.28)",
      progressColor: brandAccent,
      cursorColor: "transparent",
      barWidth: 2,
      barGap: 2,
      barRadius: 2,
      height: 32,
      normalize: true,
      backend: "WebAudio"
    });
    wavesurferRef.current = wavesurfer;
    wavesurfer.load(src);
    wavesurfer.on("ready", () => {
      if (!isDestroyedRef.current) {
        setIsLoading(false);
        setDuration(wavesurfer.getDuration());
      }
    });
    wavesurfer.on("audioprocess", () => {
      if (!isDestroyedRef.current) {
        setCurrentTime(wavesurfer.getCurrentTime());
      }
    });
    wavesurfer.on("finish", () => {
      if (!isDestroyedRef.current) {
        setIsPlaying(false);
      }
    });
    wavesurfer.on("error", () => {
      if (!isDestroyedRef.current) {
        setIsLoading(false);
      }
    });
    return () => {
      isDestroyedRef.current = true;
      if (wavesurfer) {
        wavesurfer.unAll();
        setTimeout(() => {
          try {
            wavesurfer.destroy();
          } catch (e) {
          }
        }, 0);
      }
    };
  }, [src, isLightMode]);
  const togglePlay = () => {
    if (!wavesurferRef.current) return;
    if (isPlaying) {
      wavesurferRef.current.pause();
    } else {
      wavesurferRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: "flex items-center gap-3 p-3 rounded-2xl backdrop-blur-sm",
      style: {
        backgroundColor: isLightMode ? "#f1f5f9" : "rgba(255, 255, 255, 0.05)"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_framer_motion.motion.button,
          {
            whileTap: { scale: 0.95 },
            onClick: togglePlay,
            disabled: isLoading,
            className: "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
            style: {
              backgroundColor: brandAccent,
              boxShadow: "0 10px 24px rgba(94, 200, 214, 0.22)"
            },
            children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_react2.Icon,
              {
                icon: isPlaying ? "solar:pause-bold" : "solar:play-bold",
                width: 20,
                className: "text-white",
                style: { marginLeft: isPlaying ? 0 : 2 }
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex-1 flex items-center gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              ref: waveformRef,
              className: "flex-1 cursor-pointer",
              style: { minHeight: "32px" }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "span",
            {
              className: "text-xs font-medium tabular-nums min-w-[35px]",
              style: { color: isLightMode ? "#64748b" : "#94a3b8" },
              children: formatTime(isPlaying ? currentTime : duration)
            }
          )
        ] })
      ]
    }
  );
}

// src/ctr-mechanisms/cta-card-with-mechanisms.tsx
var import_react18 = require("react");
var import_react19 = require("@heroui/react");
var import_react20 = require("@iconify/react");

// src/ctr-mechanisms/click-to-reveal.tsx
var import_react3 = require("react");
var import_react4 = require("@heroui/react");
var import_react5 = require("@heroui/react");
var import_framer_motion2 = require("framer-motion");
var import_react6 = require("@iconify/react");
var import_jsx_runtime2 = require("react/jsx-runtime");
function ClickToReveal({
  clicksRequired,
  buttonText,
  onReveal,
  children
}) {
  const [clickCount, setClickCount] = (0, import_react3.useState)(0);
  const [isRevealed, setIsRevealed] = (0, import_react3.useState)(false);
  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount >= clicksRequired) {
      setIsRevealed(true);
      onReveal();
    }
  };
  const progress = clickCount / clicksRequired * 100;
  if (isRevealed) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "relative overflow-hidden rounded-xl", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "absolute inset-0 bg-black/10 z-[5] flex flex-col items-center justify-center px-4 py-4 rounded-xl", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      import_framer_motion2.motion.div,
      {
        animate: clickCount > 0 ? { scale: [1, 1.1, 1] } : {},
        transition: { duration: 0.3 },
        className: "text-center space-y-2",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_react6.Icon,
            {
              icon: "solar:click-bold-duotone",
              width: 40,
              className: "text-white mx-auto drop-shadow-lg"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "space-y-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "text-white font-semibold text-base drop-shadow-md", children: buttonText }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("p", { className: "text-white/80 text-xs drop-shadow-sm", children: [
              clicksRequired - clickCount,
              " more ",
              clicksRequired - clickCount === 1 ? "tap" : "taps",
              " to unlock"
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
            import_react4.Button,
            {
              size: "md",
              onPress: handleClick,
              className: "font-bold shadow-lg bg-[#5EC8D6] hover:bg-[#4FB6C4] text-[#08080A]",
              children: [
                "Tap to Unlock (",
                clickCount,
                "/",
                clicksRequired,
                ")"
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_react5.Progress,
            {
              value: progress,
              className: "max-w-[200px]",
              color: "primary",
              classNames: {
                indicator: "bg-[#5EC8D6]"
              },
              size: "sm"
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "opacity-30 pointer-events-none", children })
  ] });
}

// src/ctr-mechanisms/countdown-reveal.tsx
var import_react7 = require("react");
var import_framer_motion3 = require("framer-motion");
var import_react8 = require("@iconify/react");
var import_jsx_runtime3 = require("react/jsx-runtime");
function CountdownReveal({
  durationSeconds,
  message,
  onReveal,
  children
}) {
  const [secondsLeft, setSecondsLeft] = (0, import_react7.useState)(durationSeconds);
  const [isRevealed, setIsRevealed] = (0, import_react7.useState)(false);
  (0, import_react7.useEffect)(() => {
    if (secondsLeft <= 0) {
      setIsRevealed(true);
      onReveal();
      return;
    }
    const timer = setTimeout(() => {
      setSecondsLeft(secondsLeft - 1);
    }, 1e3);
    return () => clearTimeout(timer);
  }, [secondsLeft]);
  if (isRevealed) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "relative overflow-hidden rounded-xl", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "absolute inset-0  bg-black/10 z-[5] flex flex-col items-center justify-center px-4 py-3 rounded-xl", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      import_framer_motion3.motion.div,
      {
        animate: { scale: [1, 1.05, 1] },
        transition: { duration: 1, repeat: Infinity },
        className: "text-center space-y-1.5",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_react8.Icon,
            {
              icon: "solar:clock-circle-bold-duotone",
              width: 36,
              className: "text-white mx-auto drop-shadow-lg"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "space-y-0.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-white font-semibold text-sm drop-shadow-md", children: message }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              import_framer_motion3.motion.div,
              {
                initial: { scale: 1.2, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                className: "text-3xl font-bold text-white drop-shadow-lg",
                children: secondsLeft
              },
              secondsLeft
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-white/80 text-xs drop-shadow-sm", children: "seconds remaining..." })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "opacity-30 pointer-events-none", children })
  ] });
}

// src/ctr-mechanisms/scarcity-badge.tsx
var import_react9 = require("@heroui/react");
var import_react10 = require("@iconify/react");
var import_framer_motion4 = require("framer-motion");
var import_jsx_runtime4 = require("react/jsx-runtime");
function ScarcityBadge({
  type,
  count,
  total,
  message
}) {
  const isSlots = type === "slots";
  const getDisplayMessage = () => {
    if (message) {
      return message.replace("{current}", String(count)).replace("{total}", String(total || 0));
    }
    return isSlots ? `Only ${count}/${total} left!` : `${count} watching now`;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: isSlots ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    import_framer_motion4.motion.div,
    {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      className: "absolute top-2 left-2 z-[10]",
      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        import_react9.Chip,
        {
          size: "sm",
          variant: "flat",
          classNames: {
            base: "bg-black/70 text-white border border-white/15 shadow-[0_8px_22px_rgba(0,0,0,0.35)] backdrop-blur-md",
            content: "font-semibold"
          },
          startContent: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react10.Icon, { icon: "solar:fire-bold", width: 14 }),
          children: getDisplayMessage()
        }
      )
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    import_framer_motion4.motion.div,
    {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      className: "absolute top-2 right-2 z-[10]",
      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        import_react9.Chip,
        {
          variant: "flat",
          size: "sm",
          classNames: {
            base: "bg-black/70 text-white border border-white/15 shadow-[0_8px_22px_rgba(0,0,0,0.35)] backdrop-blur-md",
            content: "font-semibold"
          },
          startContent: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_framer_motion4.motion.span,
            {
              animate: { opacity: [1, 0.3, 1] },
              transition: { duration: 2, repeat: Infinity },
              className: "inline-block w-2 h-2 rounded-full bg-white mr-1"
            }
          ) }),
          children: getDisplayMessage()
        }
      )
    }
  ) });
}

// src/ctr-mechanisms/blur-overlay.tsx
var import_react11 = require("react");
var import_react12 = require("@heroui/react");
var import_framer_motion5 = require("framer-motion");
var import_react13 = require("@iconify/react");
var import_jsx_runtime5 = require("react/jsx-runtime");
function BlurOverlay({
  blurAmount,
  teaserText,
  onReveal,
  children
}) {
  const [isRevealed, setIsRevealed] = (0, import_react11.useState)(false);
  const handleReveal = () => {
    setIsRevealed(true);
    onReveal();
  };
  if (isRevealed) {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, { children });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "relative overflow-hidden rounded-xl", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "div",
      {
        style: { filter: `blur(${blurAmount}px)` },
        className: "pointer-events-none select-none",
        "aria-hidden": "true",
        children
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "div",
      {
        className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-[5] flex flex-col items-center justify-center px-4 py-3 rounded-xl cursor-default",
        onClick: (e) => e.stopPropagation(),
        onPointerDown: (e) => e.stopPropagation(),
        onPointerUp: (e) => e.stopPropagation(),
        onTouchStart: (e) => e.stopPropagation(),
        onTouchEnd: (e) => e.stopPropagation(),
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
          import_framer_motion5.motion.div,
          {
            initial: { y: 20, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            className: "text-center space-y-1.5",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                import_react13.Icon,
                {
                  icon: "solar:eye-bold-duotone",
                  width: 36,
                  className: "text-white mx-auto drop-shadow-lg"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "space-y-0.5", children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "text-white font-semibold text-sm drop-shadow-md", children: teaserText }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "text-white/80 text-xs drop-shadow-sm", children: "Click below to reveal" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                import_react12.Button,
                {
                  size: "sm",
                  onPress: handleReveal,
                  className: "font-bold shadow-lg bg-[#5EC8D6] hover:bg-[#4FB6C4] text-[#08080A]",
                  startContent: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react13.Icon, { icon: "solar:eye-linear", width: 16 }),
                  children: "Reveal Now"
                }
              )
            ]
          }
        )
      }
    )
  ] });
}

// src/ctr-mechanisms/progress-bar-reveal.tsx
var import_react14 = require("react");
var import_react15 = require("@heroui/react");
var import_framer_motion6 = require("framer-motion");
var import_react16 = require("@iconify/react");
var import_jsx_runtime6 = require("react/jsx-runtime");
function ProgressBarReveal({
  durationSeconds,
  message,
  onReveal,
  children
}) {
  const [progress, setProgress] = (0, import_react14.useState)(0);
  const [isRevealed, setIsRevealed] = (0, import_react14.useState)(false);
  (0, import_react14.useEffect)(() => {
    const interval = 50;
    const totalSteps = durationSeconds * 1e3 / interval;
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
  }, [durationSeconds]);
  if (isRevealed) {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, { children });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "relative overflow-hidden rounded-xl", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "absolute rounded-xl inset-0 backdrop-blur-sm bg-black/40 z-[5] flex items-center justify-center px-3 py-3", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_framer_motion6.motion.div, { className: "text-center space-y-1 w-full max-w-[210px] mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        import_react16.Icon,
        {
          icon: "solar:hourglass-bold-duotone",
          width: 32,
          className: "text-white mx-auto drop-shadow-lg"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "space-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-white font-semibold text-sm drop-shadow-md", children: message }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          import_react15.Progress,
          {
            value: progress,
            className: "w-[150px] mx-auto",
            color: "primary",
            classNames: {
              indicator: "bg-[#5EC8D6]"
            },
            size: "sm"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("p", { className: "text-white/80 text-[11px] drop-shadow-sm", children: [
          Math.round(progress),
          "% loaded..."
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "opacity-30 pointer-events-none", children })
  ] });
}

// src/ctr-mechanisms/confetti-effect.tsx
var import_react17 = require("react");
var import_framer_motion7 = require("framer-motion");
var import_jsx_runtime7 = require("react/jsx-runtime");
function ConfettiEffect({ trigger, duration = 3e3 }) {
  const [particles, setParticles] = (0, import_react17.useState)([]);
  (0, import_react17.useEffect)(() => {
    if (!trigger) return;
    const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8", "#F7DC6F"];
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    setParticles(newParticles);
    const timer = setTimeout(() => {
      setParticles([]);
    }, duration);
    return () => clearTimeout(timer);
  }, [trigger, duration]);
  if (particles.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "fixed inset-0 pointer-events-none z-50 overflow-hidden", children: particles.map((particle) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    import_framer_motion7.motion.div,
    {
      initial: {
        top: -20,
        left: `${particle.x}%`,
        opacity: 1,
        scale: 1
      },
      animate: {
        top: "110%",
        opacity: 0,
        scale: 0,
        rotate: Math.random() * 720 - 360
      },
      transition: {
        duration: 2 + Math.random() * 2,
        ease: "easeOut"
      },
      className: "absolute w-3 h-3 rounded-full",
      style: { backgroundColor: particle.color }
    },
    particle.id
  )) });
}

// src/ctr-mechanisms/cta-card-with-mechanisms.tsx
var import_framer_motion8 = require("framer-motion");
var import_jsx_runtime8 = require("react/jsx-runtime");
function CTACardWithMechanisms({
  card,
  onReveal,
  children
}) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
  const [isRevealed, setIsRevealed] = (0, import_react18.useState)(false);
  const [showConfetti, setShowConfetti] = (0, import_react18.useState)(false);
  const mechanisms = card.ctr_mechanisms;
  const handleReveal = () => {
    var _a2;
    if ((_a2 = mechanisms == null ? void 0 : mechanisms.visual_effects) == null ? void 0 : _a2.confetti_on_reveal) {
      setShowConfetti(true);
    }
    setIsRevealed(true);
    onReveal();
  };
  let content = children;
  if (((_a = mechanisms == null ? void 0 : mechanisms.visual_effects) == null ? void 0 : _a.pulse_animation) || ((_b = mechanisms == null ? void 0 : mechanisms.visual_effects) == null ? void 0 : _b.glow_effect)) {
    const className = `
      ${mechanisms.visual_effects.pulse_animation ? "animate-pulse" : ""}
      ${mechanisms.visual_effects.glow_effect ? "shadow-lg shadow-[rgba(94,200,214,0.38)]" : ""}
    `.trim();
    content = /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      import_framer_motion8.motion.div,
      {
        animate: mechanisms.visual_effects.pulse_animation ? { scale: [1, 1.02, 1] } : {},
        transition: { duration: 2, repeat: Infinity },
        className,
        children: content
      }
    );
  }
  if (((_c = mechanisms == null ? void 0 : mechanisms.click_to_reveal) == null ? void 0 : _c.enabled) && !isRevealed) {
    content = /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      ClickToReveal,
      {
        clicksRequired: mechanisms.click_to_reveal.clicks_required,
        buttonText: mechanisms.click_to_reveal.button_text,
        onReveal: handleReveal,
        children: content
      }
    );
  } else if (((_d = mechanisms == null ? void 0 : mechanisms.progress_bar) == null ? void 0 : _d.enabled) && !isRevealed) {
    content = /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      ProgressBarReveal,
      {
        durationSeconds: mechanisms.progress_bar.duration_seconds,
        message: mechanisms.progress_bar.message,
        onReveal: handleReveal,
        children: content
      }
    );
  } else if (((_e = mechanisms == null ? void 0 : mechanisms.countdown_timer) == null ? void 0 : _e.enabled) && !isRevealed) {
    content = /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      CountdownReveal,
      {
        durationSeconds: mechanisms.countdown_timer.duration_seconds,
        message: mechanisms.countdown_timer.message,
        onReveal: handleReveal,
        children: content
      }
    );
  } else if (((_f = mechanisms == null ? void 0 : mechanisms.blur_preview) == null ? void 0 : _f.enabled) && !isRevealed) {
    content = /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      BlurOverlay,
      {
        blurAmount: mechanisms.blur_preview.blur_amount,
        teaserText: mechanisms.blur_preview.teaser_text,
        onReveal: handleReveal,
        children: content
      }
    );
  }
  const blockingActive = !isRevealed && (((_g = mechanisms == null ? void 0 : mechanisms.click_to_reveal) == null ? void 0 : _g.enabled) || ((_h = mechanisms == null ? void 0 : mechanisms.progress_bar) == null ? void 0 : _h.enabled) || ((_i = mechanisms == null ? void 0 : mechanisms.countdown_timer) == null ? void 0 : _i.enabled) || ((_j = mechanisms == null ? void 0 : mechanisms.blur_preview) == null ? void 0 : _j.enabled));
  const showBadges = !blockingActive;
  const hasMultipleBadges = showBadges && [
    (_k = mechanisms == null ? void 0 : mechanisms.limited_slots) == null ? void 0 : _k.enabled,
    (_l = mechanisms == null ? void 0 : mechanisms.live_viewers) == null ? void 0 : _l.enabled,
    (_m = mechanisms == null ? void 0 : mechanisms.exclusive_badge) == null ? void 0 : _m.enabled
  ].filter(Boolean).length > 1;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "relative overflow-hidden rounded-2xl", children: [
    showBadges && ((_n = mechanisms == null ? void 0 : mechanisms.limited_slots) == null ? void 0 : _n.enabled) && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      ScarcityBadge,
      {
        type: "slots",
        count: mechanisms.limited_slots.current,
        total: mechanisms.limited_slots.total,
        message: mechanisms.limited_slots.message
      }
    ),
    showBadges && ((_o = mechanisms == null ? void 0 : mechanisms.live_viewers) == null ? void 0 : _o.enabled) && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      ScarcityBadge,
      {
        type: "viewers",
        count: mechanisms.live_viewers.count
      }
    ),
    showBadges && ((_p = mechanisms == null ? void 0 : mechanisms.exclusive_badge) == null ? void 0 : _p.enabled) && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      import_framer_motion8.motion.div,
      {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        className: `absolute z-[10] ${hasMultipleBadges ? "bottom-3 left-3" : "top-3 left-3"}`,
        children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          import_react19.Chip,
          {
            color: "default",
            size: "sm",
            variant: "flat",
            classNames: {
              base: "border border-white/10 bg-black/70 px-1.5 text-white shadow-[0_8px_22px_rgba(0,0,0,0.35)] backdrop-blur-md",
              content: "text-[12px] font-semibold text-white"
            },
            startContent: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
              import_react20.Icon,
              {
                icon: "solar:crown-bold",
                width: 14,
                className: "text-white"
              }
            ),
            children: mechanisms.exclusive_badge.text
          }
        )
      }
    ),
    content,
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(ConfettiEffect, { trigger: showConfetti })
  ] });
}

// src/ctr-mechanisms/age-confirmation-modal.tsx
var import_framer_motion9 = require("framer-motion");
var import_components = require("shadcn-glass-ui/components");
var import_jsx_runtime9 = require("react/jsx-runtime");
function AgeConfirmationModal({
  isOpen,
  onConfirm,
  onCancel,
  confirmHref,
  confirmTargetBlank = false,
  children
}) {
  const roundedClipStyle = {
    borderRadius: "1rem",
    overflow: "hidden",
    isolation: "isolate",
    transform: "translateZ(0)",
    WebkitTransform: "translateZ(0)"
  };
  const confirmButtonClass = "inline-flex h-9 min-w-[88px] items-center justify-center rounded-xl bg-[#5EC8D6] px-4 text-sm font-extrabold text-[#08080A] shadow-[0_10px_24px_rgba(94,200,214,0.28)] ring-1 ring-white/25 transition hover:bg-[#4FB6C4] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5EC8D6]/60";
  const glassVars = {
    "--btn-primary-bg": "linear-gradient(135deg, rgba(255,255,255,0.22), rgba(94,200,214,0.9) 46%, rgba(79,182,196,0.72))",
    "--btn-primary-hover-bg": "linear-gradient(135deg, rgba(255,255,255,0.3), rgba(94,200,214,0.98) 46%, rgba(135,221,229,0.78))",
    "--btn-primary-text": "#0A0A0C",
    "--btn-primary-shadow": "inset 0 1px 0 rgba(255,255,255,0.46), inset 0 -1px 0 rgba(16,80,88,0.22), 0 10px 24px rgba(94,200,214,0.24)",
    "--btn-primary-glow": "0 0 28px rgba(94,200,214,0.28)",
    "--btn-secondary-bg": "linear-gradient(135deg, rgba(233,226,208,0.14), rgba(233,226,208,0.06) 48%, rgba(16,16,20,0.54))",
    "--btn-secondary-hover-bg": "linear-gradient(135deg, rgba(233,226,208,0.2), rgba(233,226,208,0.1) 48%, rgba(16,16,20,0.6))",
    "--btn-secondary-text": "#E9E2D0",
    "--btn-secondary-border": "rgba(255,255,255,0)",
    "--btn-secondary-glow": "0 0 22px rgba(255,255,255,0.12)",
    "--focus-glow": "0 0 0 2px rgba(255,255,255,0.32)"
  };
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
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_jsx_runtime9.Fragment, { children });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "relative overflow-hidden rounded-2xl", style: roundedClipStyle, children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "pointer-events-none opacity-20", children }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "div",
      {
        className: "absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/75 z-[5] flex flex-col items-center justify-center px-4 py-3 rounded-2xl",
        style: roundedClipStyle,
        children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
          import_framer_motion9.motion.div,
          {
            initial: { y: 10, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            className: "flex flex-col items-center text-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-center text-sm font-semibold text-white drop-shadow-md", children: "Adult Content (18+)" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "mt-2 flex justify-center gap-2.5", style: glassVars, children: [
                confirmHref ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                  "a",
                  {
                    href: confirmHref,
                    target: confirmTargetBlank ? "_blank" : void 0,
                    rel: confirmTargetBlank ? "noopener noreferrer" : void 0,
                    onClick: confirmTargetBlank ? onConfirm : handleConfirm,
                    className: confirmButtonClass,
                    children: "I'm 18+"
                  }
                ) : /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                  "button",
                  {
                    type: "button",
                    className: confirmButtonClass,
                    onClick: handleConfirm,
                    children: "I'm 18+"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                  import_components.ButtonGlass,
                  {
                    className: "h-9 min-w-[72px] border-0 px-4 text-sm font-bold",
                    onClick: handleCancel,
                    size: "sm",
                    variant: "secondary",
                    children: "Exit"
                  }
                )
              ] })
            ]
          }
        )
      }
    )
  ] });
}

// src/landing-page-viewer.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var CONTENT_VERTICAL_OFFSET_KEY = "__content_vertical_offset";
var MIN_CONTENT_VERTICAL_OFFSET = -160;
var MAX_CONTENT_VERTICAL_OFFSET = 240;
function getContentVerticalOffset(sectionSpacing) {
  const raw = sectionSpacing == null ? void 0 : sectionSpacing[CONTENT_VERTICAL_OFFSET_KEY];
  const value = typeof raw === "number" ? raw : typeof raw === "string" ? Number(raw) : 0;
  if (!Number.isFinite(value)) return 0;
  return Math.min(
    MAX_CONTENT_VERTICAL_OFFSET,
    Math.max(MIN_CONTENT_VERTICAL_OFFSET, Math.round(value))
  );
}
function CTAUrgencyBadge({
  label,
  message,
  durationSeconds,
  className = ""
}) {
  const safeDuration = Math.max(1, Math.floor(durationSeconds || 0));
  const [remaining, setRemaining] = (0, import_react21.useState)(safeDuration);
  (0, import_react21.useEffect)(() => {
    setRemaining(safeDuration);
    const startedAt = Date.now();
    const interval = window.setInterval(() => {
      const elapsed = Math.floor((Date.now() - startedAt) / 1e3);
      setRemaining(Math.max(0, safeDuration - elapsed));
    }, 1e3);
    return () => window.clearInterval(interval);
  }, [safeDuration]);
  const hours = Math.floor(remaining / 3600);
  const minutes = Math.floor(remaining % 3600 / 60);
  const seconds = remaining % 60;
  const time = `${hours > 0 ? `${hours}h ` : ""}${minutes}m ${String(seconds).padStart(2, "0")}s`;
  const fallbackText = `${label || "FREE"} ends in ${time}`;
  const text = message && message.trim().length > 0 ? message.replace(/\{time\}/gi, time).replace(/\{label\}/gi, label || "FREE") : fallbackText;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    "div",
    {
      className: `mt-2 inline-flex max-w-full items-center px-1 py-0.5 text-sm font-extrabold leading-none ${className}`,
      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        "span",
        {
          className: "truncate text-[#5EC8D6]",
          style: {
            textShadow: "0 1px 2px rgba(0,0,0,0.95), 0 0 10px rgba(94,200,214,0.55)"
          },
          children: text
        }
      )
    }
  );
}
function isRedditFlow() {
  if (typeof window === "undefined") return false;
  const params = new URLSearchParams(window.location.search);
  return params.has("r");
}
function isTwitterFlow() {
  if (typeof window === "undefined") return false;
  const params = new URLSearchParams(window.location.search);
  return params.has("x");
}
function isAbsoluteOrSchemeUrl(url) {
  return /^[a-z][a-z0-9+.-]*:/i.test(url);
}
function toAbsoluteUrl(url) {
  if (typeof window === "undefined" || isAbsoluteOrSchemeUrl(url)) return url;
  return `${window.location.origin}${url.startsWith("/") ? "" : "/"}${url}`;
}
function toSafariHandoffUrl(url) {
  const absoluteUrl = toAbsoluteUrl(url);
  return absoluteUrl.startsWith("https://") ? `x-safari-${absoluteUrl}` : absoluteUrl;
}
function wrapUrlForNavigation(url, isPreview) {
  const normalizedUrl = String(url || "").trim();
  if (!normalizedUrl) return "";
  const safeUrl = /^go\//i.test(normalizedUrl) ? `/${normalizedUrl}` : normalizedUrl;
  if (!isPreview && isRedditFlow()) {
    return `/reddit-escape?target=${encodeURIComponent(safeUrl)}`;
  }
  if (!isPreview && isTwitterFlow()) {
    return toSafariHandoffUrl(safeUrl);
  }
  return safeUrl;
}
var VISITOR_ID_KEY = "halevora_visitor_id";
var SESSION_ID_KEY = "halevora_session_id";
function createAnalyticsId(prefix) {
  const id = typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
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
function trackClick(linkId, isPreview) {
  if (!linkId || isPreview || typeof window === "undefined") return;
  fetch("/api/analytics/track", {
    method: "POST",
    keepalive: true,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      link_id: linkId,
      event_type: "click",
      ...getAnalyticsIdentity()
    })
  }).catch(() => {
  });
}
function LandingPageViewer({
  link,
  settings,
  onButtonClick,
  isPreview = false,
  isFreePlan = false,
  visitorLocationLabel = null
}) {
  var _a, _b, _c;
  const [showingAgeConfirmationFor, setShowingAgeConfirmationFor] = (0, import_react21.useState)(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = (0, import_react21.useState)(0);
  const [lightboxUrl, setLightboxUrl] = (0, import_react21.useState)(null);
  const galleryTouchStartX = (0, import_react21.useRef)(null);
  const viewerRootRef = (0, import_react21.useRef)(null);
  const protectPublicContent = !isPreview;
  const contentProtectionStyle = protectPublicContent ? {
    paddingTop: "env(safe-area-inset-top)",
    userSelect: "none",
    WebkitUserSelect: "none",
    WebkitTouchCallout: "none",
    WebkitUserDrag: "none"
  } : { paddingTop: "env(safe-area-inset-top)" };
  const preventContentSave = (event) => {
    if (!protectPublicContent) return;
    event.preventDefault();
    event.stopPropagation();
  };
  const [enableMotionVideo, setEnableMotionVideo] = (0, import_react21.useState)(false);
  const [heroVideoReady, setHeroVideoReady] = (0, import_react21.useState)(false);
  const heroVideoRef = (0, import_react21.useRef)(null);
  const heroPoster = settings.header_video_poster_url || settings.avatar_url || void 0;
  const mode = settings.profile_display_mode === "avatar" && ((_a = settings.section_spacing) == null ? void 0 : _a.__profile_video_background) ? "video_background" : settings.profile_display_mode || "full";
  const isFullMode = mode === "full";
  const isVideoMode = mode === "video";
  const isVideoBackgroundMode = mode === "video_background";
  const usesMotionVideo = isVideoMode || isVideoBackgroundMode;
  const hideVideoBackgroundAvatar = isVideoBackgroundMode && !!((_b = settings.section_spacing) == null ? void 0 : _b.__profile_video_background_hide_avatar);
  const showAvatarMedia = mode === "avatar" || isVideoBackgroundMode && !hideVideoBackgroundAvatar;
  const usesAvatarProfile = mode === "avatar" || isVideoBackgroundMode;
  (0, import_react21.useEffect)(() => {
    if (!heroPoster) return;
    const l = document.createElement("link");
    l.rel = "preload";
    l.as = "image";
    l.href = heroPoster;
    l.fetchPriority = "high";
    document.head.appendChild(l);
    return () => {
      try {
        document.head.removeChild(l);
      } catch {
      }
    };
  }, [heroPoster]);
  (0, import_react21.useEffect)(() => {
    if (isPreview) {
      setEnableMotionVideo(false);
      return;
    }
    if (!usesMotionVideo || !settings.header_video_url) {
      setEnableMotionVideo(false);
      return;
    }
    if (enableMotionVideo) return;
    const connection = navigator.connection;
    if (connection == null ? void 0 : connection.saveData) return;
    setEnableMotionVideo(true);
  }, [
    enableMotionVideo,
    isPreview,
    settings.header_video_url,
    usesMotionVideo
  ]);
  const isLightMode = settings.theme_mode === "light";
  const themeColors = {
    background: isLightMode ? "#FFFFFF" : "#000000",
    textPrimary: isLightMode ? "#18181b" : "#ffffff",
    textSecondary: isLightMode ? "#64748b" : "#94a3b8",
    cardBg: isLightMode ? "#f8fafc" : "#111111",
    border: isLightMode ? "#e2e8f0" : "#27272a"
  };
  const brandAccent = "#5EC8D6";
  (0, import_react21.useEffect)(() => {
    if (!protectPublicContent) return;
    const root = viewerRootRef.current;
    if (!root) return;
    const prevent = (event) => {
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
  const getSocialIconColor = (social) => {
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
  const isMonochromeSocialIcon = (social) => {
    const value = `${social.platform || ""} ${social.icon || ""}`.toLowerCase();
    return value.includes("twitter") || value.includes("x.com");
  };
  const isSnapchatSocialIcon = (social) => {
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
  const isInAppBrowser = () => {
    if (typeof window === "undefined") return false;
    const ua = navigator.userAgent || "";
    return ua.includes("Instagram") || ua.includes("FBAN") || ua.includes("FBAV") || /Twitter|TwitterAndroid|Twitter for iPhone|Twitter-iPhone/i.test(ua);
  };
  const isInstagramInAppBrowser = () => {
    if (typeof window === "undefined") return false;
    const ua = navigator.userAgent || "";
    return ua.includes("Instagram") || ua.includes("IABMV");
  };
  const isTwitterInAppBrowser = () => {
    if (typeof window === "undefined") return false;
    const ua = navigator.userAgent || "";
    return /Twitter|TwitterAndroid|Twitter for iPhone|Twitter-iPhone/i.test(ua);
  };
  const isMobileBrowser = () => {
    if (typeof window === "undefined") return false;
    const ua = navigator.userAgent || "";
    return /Mobi|iPhone|iPad|iPod|Android/i.test(ua);
  };
  const normalizedLinkType = (link.link_type || "").toLowerCase();
  const isWhitehatLink = normalizedLinkType === "whitehat" || normalizedLinkType === "whitehat_v2";
  const shouldEscapeInAppBrowser = !isPreview && (isWhitehatLink || isInAppBrowser()) && (isWhitehatLink || link.enable_deeplink !== false) && (!isWhitehatLink || isMobileBrowser());
  const buildDeepLinkUrl = (absoluteUrl) => {
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
  const buildChromeNavigateUrl = (absoluteUrl) => {
    try {
      const parsed = new URL(absoluteUrl);
      return `googlechrome://navigate?url=${encodeURIComponent(
        `${parsed.protocol}//${parsed.host}${parsed.pathname}${parsed.search}${parsed.hash}`
      )}`;
    } catch {
      return null;
    }
  };
  const openInNewTabBestEffort = (absoluteUrl) => {
    try {
      const popup = window.open(absoluteUrl, "_blank", "noopener,noreferrer");
      if (popup) return;
    } catch {
    }
    try {
      const a = document.createElement("a");
      a.href = absoluteUrl;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch {
    }
  };
  const attemptAppBrowserHandoff = (absoluteUrl) => {
    const ua = navigator.userAgent || "";
    const isIOS = /iPhone|iPad|iPod/i.test(ua);
    const isAndroid = /Android/i.test(ua);
    if (isInstagramInAppBrowser()) {
      window.location.href = `instagram://extbrowser/?url=${encodeURIComponent(absoluteUrl)}`;
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
  const navigateToUrl = (url, opts) => {
    if (!url) return;
    const finalUrl = wrapUrlForNavigation(url, isPreview) || url;
    if (!finalUrl) return;
    const absoluteUrl = toAbsoluteUrl(finalUrl);
    const fromUserGesture = (opts == null ? void 0 : opts.fromUserGesture) === true;
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
  const getNavigationTargets = (url) => {
    const finalUrl = wrapUrlForNavigation(url, isPreview) || url;
    const absoluteUrl = toAbsoluteUrl(finalUrl);
    return { finalUrl, absoluteUrl };
  };
  const getNativeLinkProps = (url) => {
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
      target: shouldEscapeInAppBrowser ? "_blank" : void 0,
      rel: shouldEscapeInAppBrowser ? "noopener noreferrer" : void 0,
      attemptExternalOpen,
      onClick: (event) => {
        trackClick(link.id, isPreview);
        if (onButtonClick) {
          onButtonClick();
        }
        if (attemptExternalOpen()) {
          event.preventDefault();
        }
      }
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
  const hasProfileSignals = !!settings.show_active_now || !!settings.show_location && !!visitorLocationLabel || !!settings.show_response_time && !!((_c = settings.response_time_text) == null ? void 0 : _c.trim());
  const renderProfileSignals = () => {
    var _a2;
    if (!hasProfileSignals) return null;
    const signalClass = "inline-flex items-center gap-1 whitespace-nowrap text-[11px] font-semibold leading-none sm:text-xs";
    const divider = /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "span",
      {
        "aria-hidden": "true",
        className: "mx-0.5 text-[10px] font-bold opacity-70",
        style: { color: themeColors.textSecondary },
        children: "\u2022"
      }
    );
    const signals = [];
    if (settings.show_active_now) {
      signals.push(
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { className: signalClass, children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "halevora-active-dot h-2.5 w-2.5 rounded-full bg-[#22C55E]" }),
          "Online"
        ] }, "active")
      );
    }
    if (settings.show_location && visitorLocationLabel) {
      signals.push(
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { className: signalClass, children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react26.Icon, { icon: "solar:map-point-bold", width: 14 }),
          visitorLocationLabel
        ] }, "location")
      );
    }
    if (settings.show_response_time && ((_a2 = settings.response_time_text) == null ? void 0 : _a2.trim())) {
      signals.push(
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { className: signalClass, children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react26.Icon, { icon: "solar:clock-circle-bold", width: 14 }),
          settings.response_time_text.trim()
        ] }, "response")
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "div",
      {
        className: "flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 px-2 text-center",
        style: { color: themeColors.textPrimary },
        children: signals.map((signal, index) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react21.default.Fragment, { children: signal }, index))
      }
    );
  };
  const DEFAULT_LAYOUT_SECTIONS = [
    "header",
    "bio",
    "social_block",
    "voice_note",
    "cta_block",
    "gallery"
  ];
  let layoutSections = Array.isArray(settings.layout_sections) ? settings.layout_sections : DEFAULT_LAYOUT_SECTIONS;
  layoutSections = layoutSections.filter((k) => k !== "branding");
  const contentVerticalOffset = getContentVerticalOffset(
    settings.section_spacing
  );
  const isSectionEnabled = (key) => layoutSections.includes(key);
  const getSectionOrder = (key) => {
    const index = layoutSections.indexOf(key);
    if (index === -1) return 999;
    return (index + 1) * 10;
  };
  const getSectionSpacingClass = (key) => {
    var _a2;
    const spacing = ((_a2 = settings.section_spacing) == null ? void 0 : _a2[key]) || "normal";
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
  const rawGallery = settings.gallery_images;
  const galleryImages = Array.isArray(rawGallery) ? rawGallery.slice(0, 6) : [];
  const hasGallery = galleryImages.length > 0;
  (0, import_react21.useEffect)(() => {
    if (!lightboxUrl) return;
    const handler = (e) => {
      if (e.key === "Escape") {
        setLightboxUrl(null);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxUrl]);
  (0, import_react21.useEffect)(() => {
    if (!enableMotionVideo) return;
    setHeroVideoReady(false);
  }, [enableMotionVideo]);
  (0, import_react21.useEffect)(() => {
    if (!enableMotionVideo) return;
    const hero = heroVideoRef.current;
    if (hero) {
      hero.preload = "metadata";
      hero.load();
    }
    hero == null ? void 0 : hero.play().catch(() => {
    });
  }, [enableMotionVideo]);
  (0, import_react21.useEffect)(
    () => {
      var _a2;
      if (isPreview) return;
      if (link.link_type !== "whitehat" && link.link_type !== "whitehat_v2") return;
      if (!settings.auto_redirect_enabled) return;
      const cards = settings.cta_cards || [];
      if (!cards.length) return;
      const targetId = settings.auto_redirect_cta_id || cards[0] && cards[0].id || null;
      if (!targetId) return;
      const targetCard = cards.find((c) => c.id === targetId);
      if (!targetCard || !targetCard.url) return;
      const delaySec = (_a2 = settings.auto_redirect_delay_seconds) != null ? _a2 : 10;
      const delayMs = Math.max(1, delaySec) * 1e3;
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
      link.id
    ]
  );
  const heroHeightClass = (() => {
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
    return "h-[320px] md:h-[320px]";
  })();
  const heroHeightStyle = isFullMode && settings.header_image_height ? { height: `${settings.header_image_height}px` } : void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
    "div",
    {
      ref: viewerRootRef,
      "data-halevora-protected": protectPublicContent ? "true" : void 0,
      onContextMenuCapture: preventContentSave,
      onDragStartCapture: preventContentSave,
      onDropCapture: preventContentSave,
      className: "min-h-[100dvh] flex items-start md:items-center justify-center relative overflow-hidden",
      style: contentProtectionStyle,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("style", { children: `
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
        ` }),
        (isFullMode || isVideoMode || isVideoBackgroundMode) && (heroPoster || usesMotionVideo && settings.header_video_url) ? /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "hidden md:block absolute inset-0 z-0 pointer-events-none overflow-hidden", children: [
          usesMotionVideo && settings.header_video_url && enableMotionVideo ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "video",
            {
              src: settings.header_video_url,
              poster: heroPoster,
              preload: "none",
              autoPlay: true,
              loop: true,
              muted: true,
              playsInline: true,
              "aria-hidden": "true",
              className: "absolute inset-0 h-full w-full object-cover scale-110 opacity-55"
            }
          ) : heroPoster ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "img",
            {
              src: heroPoster,
              alt: "",
              "aria-hidden": "true",
              className: `absolute inset-0 h-full w-full object-cover scale-110 opacity-65 ${usesMotionVideo ? "" : "blur-3xl"}`
            }
          ) : null,
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "div",
            {
              className: "absolute inset-0",
              style: {
                background: "rgba(0,0,0,0.36)"
              }
            }
          )
        ] }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
          "div",
          {
            className: isVideoBackgroundMode ? "halevora-landing-scroll relative z-10 min-h-[812px] w-full overflow-x-hidden flex flex-col" : "halevora-landing-scroll relative z-10 w-full max-w-[430px] md:min-h-[812px] md:shadow-2xl md:rounded-[2rem] overflow-x-hidden flex flex-col",
            style: {
              backgroundColor: themeColors.background,
              maxWidth: isVideoBackgroundMode ? void 0 : "430px"
            },
            children: [
              isVideoBackgroundMode && settings.header_video_url ? /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "absolute inset-0 z-0 overflow-hidden", children: [
                heroPoster ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                  "img",
                  {
                    src: heroPoster,
                    alt: "",
                    "aria-hidden": "true",
                    className: "absolute inset-0 h-full w-full object-cover",
                    loading: "eager",
                    decoding: "async",
                    fetchPriority: "high"
                  }
                ) : null,
                enableMotionVideo ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                  "video",
                  {
                    ref: heroVideoRef,
                    src: settings.header_video_url,
                    poster: heroPoster,
                    preload: "metadata",
                    autoPlay: true,
                    loop: !isPreview,
                    muted: true,
                    playsInline: true,
                    onPlaying: () => setHeroVideoReady(true),
                    className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-200 ${heroVideoReady ? "opacity-100" : "opacity-0"}`
                  }
                ) : null,
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "absolute inset-0 bg-black/55" }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                  "div",
                  {
                    className: "absolute inset-x-0 bottom-0 h-56 pointer-events-none",
                    style: {
                      background: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, ${themeColors.background} 100%)`
                    }
                  }
                )
              ] }) : null,
              isFullMode || isVideoMode ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                import_framer_motion10.motion.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { duration: 0.6 },
                  className: `relative w-full ${heroHeightClass}`,
                  style: heroHeightStyle,
                  children: isVideoMode ? (() => {
                    if (settings.header_video_url) {
                      const focus = settings.header_video_focus || "center";
                      let focusClass = "object-center";
                      if (focus === "top") focusClass = "object-top";
                      else if (focus === "bottom") focusClass = "object-bottom";
                      return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
                        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "relative w-full h-full overflow-hidden", children: [
                          heroPoster ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                            "img",
                            {
                              src: heroPoster,
                              alt: settings.display_name || link.title || "Profile",
                              className: `absolute inset-0 w-full h-full object-cover ${focusClass} transition-opacity duration-200 ${heroVideoReady ? "opacity-0" : "opacity-100"}`,
                              loading: "eager",
                              decoding: "async",
                              fetchPriority: "high"
                            }
                          ) : null,
                          enableMotionVideo ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                            "video",
                            {
                              ref: heroVideoRef,
                              src: settings.header_video_url,
                              poster: heroPoster,
                              preload: "metadata",
                              autoPlay: true,
                              loop: !isPreview,
                              muted: true,
                              playsInline: true,
                              onPlaying: () => setHeroVideoReady(true),
                              className: `absolute inset-0 w-full h-full object-cover ${focusClass} transition-opacity duration-200 ${heroVideoReady ? "opacity-100" : "opacity-0"}`
                            }
                          ) : null
                        ] }),
                        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                          "div",
                          {
                            className: "absolute inset-x-0 bottom-0 h-48 pointer-events-none",
                            style: {
                              background: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, ${themeColors.background} 100%)`
                            }
                          }
                        )
                      ] });
                    }
                    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "w-full h-full bg-default-100 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                      import_react26.Icon,
                      {
                        icon: "solar:clapperboard-play-bold-duotone",
                        className: "w-16 h-16 text-default-300"
                      }
                    ) });
                  })() : settings.avatar_url ? /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "relative w-full h-full overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                      "img",
                      {
                        src: settings.avatar_url,
                        alt: settings.display_name || link.title || "Profile",
                        className: "w-full h-full object-cover object-center"
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                      "div",
                      {
                        className: "absolute inset-x-0 bottom-0 h-32 pointer-events-none",
                        style: {
                          background: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, ${themeColors.background} 100%)`
                        }
                      }
                    )
                  ] }) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "w-full h-full bg-default-100 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                    import_react26.Icon,
                    {
                      icon: "solar:user-bold-duotone",
                      className: "w-24 h-24 text-default-300"
                    }
                  ) })
                }
              ) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "w-full pt-8" }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                "div",
                {
                  className: "flex-1 flex flex-col items-center px-4 pb-[calc(4rem+env(safe-area-inset-bottom))] sm:px-6 sm:pb-[calc(5rem+env(safe-area-inset-bottom))] md:px-8 md:pb-16 relative z-10",
                  style: {
                    marginTop: isFullMode ? "0" : "0",
                    transform: contentVerticalOffset ? `translateY(${contentVerticalOffset}px)` : void 0
                  },
                  children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "w-full max-w-md", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex flex-col items-center gap-4", children: [
                    (isFullMode || isVideoMode) && isSectionEnabled("header") && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                      import_framer_motion10.motion.div,
                      {
                        initial: { opacity: 0, y: 10 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: 0.2, duration: 0.3 },
                        className: `flex flex-col items-center gap-2 ${getSectionSpacingClass(
                          "header"
                        )}`,
                        style: { order: getSectionOrder("header") },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                              "h1",
                              {
                                className: "text-2xl sm:text-3xl font-bold",
                                style: { color: themeColors.textPrimary },
                                children: settings.display_name || link.title || "Profile"
                              }
                            ),
                            settings.verified_badge && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_jsx_runtime10.Fragment, { children: settings.verified_badge_style === "solid" ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                              import_react26.Icon,
                              {
                                icon: "solar:verified-check-bold",
                                width: 24,
                                style: { color: brandAccent }
                              }
                            ) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                              import_react25.Chip,
                              {
                                size: "sm",
                                variant: "flat",
                                classNames: {
                                  base: "bg-[#5EC8D6]/12 border border-[#5EC8D6]/25",
                                  content: "text-[#5EC8D6] font-semibold"
                                },
                                startContent: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                                  import_react26.Icon,
                                  {
                                    icon: "solar:verified-check-bold",
                                    width: 16,
                                    style: { color: brandAccent }
                                  }
                                ),
                                children: "Verified"
                              }
                            ) })
                          ] }),
                          renderProfileSignals(),
                          settings.show_domain_handle && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                            "p",
                            {
                              className: "text-sm",
                              style: { color: themeColors.textSecondary },
                              children: [
                                link.domain,
                                "/",
                                link.path
                              ]
                            }
                          )
                        ]
                      }
                    ),
                    showAvatarMedia && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                      import_framer_motion10.motion.div,
                      {
                        initial: { scale: 0.8 },
                        animate: { scale: 1 },
                        transition: { delay: 0.1, duration: 0.3 },
                        className: "relative",
                        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "rounded-full", children: isVideoBackgroundMode && settings.header_video_url ? /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "relative h-32 w-32 overflow-hidden rounded-full bg-default-100", children: [
                          heroPoster ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                            "img",
                            {
                              src: heroPoster,
                              alt: settings.display_name || link.title || "Profile",
                              className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-200 ${heroVideoReady ? "opacity-0" : "opacity-100"}`,
                              loading: "eager",
                              decoding: "async",
                              fetchPriority: "high"
                            }
                          ) : null,
                          enableMotionVideo ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                            "video",
                            {
                              src: settings.header_video_url,
                              poster: heroPoster,
                              preload: "metadata",
                              autoPlay: true,
                              loop: !isPreview,
                              muted: true,
                              playsInline: true,
                              className: "absolute inset-0 h-full w-full object-cover"
                            }
                          ) : null,
                          !heroPoster && !enableMotionVideo ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "flex h-full w-full items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                            import_react26.Icon,
                            {
                              icon: "solar:clapperboard-play-bold-duotone",
                              className: "h-16 w-16 text-default-500"
                            }
                          ) }) : null
                        ] }) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                          import_react22.Avatar,
                          {
                            src: settings.avatar_url || void 0,
                            alt: settings.display_name || link.title || "Profile",
                            className: "w-32 h-32 text-large",
                            showFallback: true,
                            fallback: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                              import_react26.Icon,
                              {
                                icon: "solar:user-bold-duotone",
                                className: "w-20 h-20 text-default-500"
                              }
                            )
                          }
                        ) })
                      }
                    ),
                    usesAvatarProfile && isSectionEnabled("header") && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                      import_framer_motion10.motion.div,
                      {
                        initial: { opacity: 0, y: 10 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: 0.2, duration: 0.3 },
                        className: `flex flex-col items-center gap-1 ${getSectionSpacingClass(
                          "header"
                        )}`,
                        style: { order: getSectionOrder("header") },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                              "h1",
                              {
                                className: "text-2xl sm:text-3xl font-bold",
                                style: { color: themeColors.textPrimary },
                                children: settings.display_name || link.title || "Profile"
                              }
                            ),
                            settings.verified_badge && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_jsx_runtime10.Fragment, { children: settings.verified_badge_style === "solid" ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                              import_react26.Icon,
                              {
                                icon: "solar:verified-check-bold",
                                width: 24,
                                style: { color: brandAccent }
                              }
                            ) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                              import_react25.Chip,
                              {
                                size: "sm",
                                variant: "flat",
                                classNames: {
                                  base: "bg-[#5EC8D6]/12 border border-[#5EC8D6]/25",
                                  content: "text-[#5EC8D6] font-semibold"
                                },
                                startContent: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                                  import_react26.Icon,
                                  {
                                    icon: "solar:verified-check-bold",
                                    width: 16,
                                    style: { color: brandAccent }
                                  }
                                ),
                                children: "Verified"
                              }
                            ) })
                          ] }),
                          renderProfileSignals(),
                          settings.show_domain_handle && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                            "p",
                            {
                              className: "text-sm",
                              style: { color: themeColors.textSecondary },
                              children: [
                                link.domain,
                                "/",
                                link.path
                              ]
                            }
                          )
                        ]
                      }
                    ),
                    isSectionEnabled("social_block") && (settings.social_links && settings.social_links.length > 0 || settings.show_follower_count && (settings.follower_count || 0) > 0) && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                      "div",
                      {
                        className: `flex flex-col items-center gap-2 ${getSectionSpacingClass(
                          "social_block"
                        )}`,
                        style: { order: getSectionOrder("social_block") },
                        children: [
                          settings.social_links && settings.social_links.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                            import_framer_motion10.motion.div,
                            {
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              transition: { delay: 0.3, duration: 0.3 },
                              className: "flex flex-wrap items-center justify-center gap-3",
                              children: settings.social_links.map((social, index) => {
                                var _a2;
                                const isMono = isMonochromeSocialIcon(social);
                                const isSnapchat = isSnapchatSocialIcon(social);
                                return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                                  import_react24.Button,
                                  {
                                    as: "a",
                                    href: (_a2 = social.url) != null ? _a2 : "",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    isIconOnly: true,
                                    size: "sm",
                                    variant: "light",
                                    className: `h-10 w-10 min-w-10 rounded-full bg-white p-0 shadow-[0_10px_24px_rgba(0,0,0,0.28)] ring-1 ring-black/5 transition-transform hover:scale-110 ${isSnapchat ? "text-[#111111] hover:bg-[#111111] hover:text-[#FFFC00]" : isMono ? "text-[#111111] hover:bg-[#111111] hover:text-white" : "text-[#111111] hover:bg-white"}`,
                                    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                                      import_react26.Icon,
                                      {
                                        icon: social.icon,
                                        width: 20,
                                        className: isMono || isSnapchat ? "text-current" : void 0,
                                        color: isMono || isSnapchat ? void 0 : getSocialIconColor(social)
                                      }
                                    )
                                  },
                                  index
                                );
                              })
                            }
                          ),
                          settings.show_follower_count && (settings.follower_count || 0) > 0 && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                            import_framer_motion10.motion.div,
                            {
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              transition: { delay: 0.4, duration: 0.3 },
                              className: "text-center",
                              children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                                "p",
                                {
                                  className: "text-sm",
                                  style: { color: themeColors.textSecondary },
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                                      "span",
                                      {
                                        className: "font-semibold",
                                        style: { color: themeColors.textPrimary },
                                        children: settings.follower_count.toLocaleString()
                                      }
                                    ),
                                    " ",
                                    "Total Followers"
                                  ]
                                }
                              )
                            }
                          )
                        ]
                      }
                    ),
                    isSectionEnabled("voice_note") && settings.voice_note_url && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                      import_framer_motion10.motion.div,
                      {
                        initial: { opacity: 0, y: 10 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: 0.45, duration: 0.3 },
                        className: `w-full max-w-sm ${getSectionSpacingClass(
                          "voice_note"
                        )}`,
                        style: { order: getSectionOrder("voice_note") },
                        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                          ModernAudioPlayer,
                          {
                            src: settings.voice_note_url,
                            theme: settings.theme_mode
                          }
                        )
                      }
                    ),
                    lightboxUrl && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                      "div",
                      {
                        className: "fixed inset-0 z-[9999] flex items-center justify-center bg-black/80",
                        onClick: () => setLightboxUrl(null),
                        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                          "div",
                          {
                            className: "max-w-3xl max-h-[90vh] px-4",
                            onClick: (e) => e.stopPropagation(),
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                                "img",
                                {
                                  src: lightboxUrl,
                                  alt: "Gallery full view",
                                  className: "w-full h-full object-contain rounded-2xl"
                                }
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "mt-3 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                                "button",
                                {
                                  type: "button",
                                  className: "px-4 py-1.5 rounded-full bg-white/90 text-sm font-medium text-black hover:bg-white",
                                  onClick: () => setLightboxUrl(null),
                                  children: "Close"
                                }
                              ) })
                            ]
                          }
                        )
                      }
                    ),
                    isSectionEnabled("bio") && settings.bio && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                      import_framer_motion10.motion.p,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { delay: 0.5, duration: 0.3 },
                        className: `text-center max-w-sm ${getSectionSpacingClass(
                          "bio"
                        )}`,
                        style: {
                          color: themeColors.textSecondary,
                          order: getSectionOrder("bio")
                        },
                        children: settings.bio
                      }
                    ),
                    isSectionEnabled("cta_block") && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                      "div",
                      {
                        className: `w-full ${getSectionSpacingClass("cta_block")}`,
                        style: { order: getSectionOrder("cta_block") },
                        children: settings.cta_cards && settings.cta_cards.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "w-full grid grid-cols-1 sm:grid-cols-2 gap-3", children: settings.cta_cards.sort((a, b) => a.order - b.order).map((card, index) => {
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
                          const imageAspectRatio = size === "large" ? "16 / 9" : size === "standard" ? "2.35 / 1" : "16 / 9";
                          const exactButtonHeight = card.style.button_height;
                          const imageBodyShapeClass = card.style.type === "image" ? "!min-h-0" : "";
                          const imageBodyShapeStyle = card.style.type === "image" ? {
                            aspectRatio: exactButtonHeight ? void 0 : imageAspectRatio,
                            height: exactButtonHeight ? `${exactButtonHeight}px` : void 0,
                            minHeight: 0
                          } : exactButtonHeight ? { height: `${exactButtonHeight}px` } : void 0;
                          const isOnlyFansLogo = card.style.logo_icon === "of-local";
                          const isOnlyFansTextIcon = isOnlyFansLogo && card.style.brand_layout === "icon_text";
                          const isOnlyFansVipIconText = isOnlyFansLogo && (card.style.brand_layout === "vip_icon_text" || card.style.brand_layout === "asset_combo_a");
                          const isOnlyFansContentText = isOnlyFansLogo && (card.style.brand_layout === "content_text" || card.style.brand_layout === "asset_combo_b");
                          const onlyFansVipAsset = card.style.brand_asset || "/vipec.svg";
                          const onlyFansContentAsset = card.style.brand_asset || "/c.svg";
                          const isPremiumLogo = isOnlyFansLogo || (card.style.logo_name || "").toLowerCase() === "icon";
                          const isBrandedNonPremium = !!card.style.logo_icon && !isPremiumLogo;
                          const isSnapchatLogo = (card.style.logo_icon || "").toLowerCase().includes("snapchat");
                          const getCardStyle = () => {
                            switch (card.style.type) {
                              case "solid":
                                return {
                                  background: card.style.background_color || "#666"
                                };
                              case "gradient":
                                return {
                                  background: card.style.background_gradient ? `linear-gradient(135deg, ${card.style.background_gradient.start}, ${card.style.background_gradient.end})` : "linear-gradient(135deg, #667eea, #764ba2)"
                                };
                              case "image":
                                return { background: "#000" };
                              case "video":
                                return { background: "#000" };
                              default:
                                return {};
                            }
                          };
                          const glowEffect = card.style.dashboard_glow_effect || "none";
                          const glowShadow = glowEffect === "strong" ? "drop-shadow(0 0 8px rgba(255,255,255,0.98)) drop-shadow(0 0 22px rgba(255,255,255,0.86)) drop-shadow(0 0 42px rgba(255,255,255,0.52)) drop-shadow(0 18px 28px rgba(0,0,0,0.62))" : glowEffect === "soft" ? "drop-shadow(0 0 7px rgba(255,255,255,0.78)) drop-shadow(0 0 18px rgba(255,255,255,0.48)) drop-shadow(0 14px 22px rgba(0,0,0,0.48))" : void 0;
                          const ctaEffectStyle = {
                            borderRadius: "1rem",
                            filter: glowShadow,
                            WebkitFilter: glowShadow,
                            padding: glowShadow ? "1px" : void 0,
                            background: glowShadow ? "rgba(255,255,255,0.78)" : void 0,
                            ...card.style.dashboard_bounce_effect ? {
                              animation: "halevoraCtaBounce 1.15s ease-in-out infinite"
                            } : {}
                          };
                          const ctaRoundedClipStyle = {
                            borderRadius: "1rem",
                            overflow: "hidden",
                            isolation: "isolate",
                            transform: "translateZ(0)",
                            WebkitTransform: "translateZ(0)"
                          };
                          const ctaRoundedLayerStyle = {
                            borderRadius: "1rem"
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
                          const useNativeCardLink = !isPreview && !!card.url && !card.require_18plus;
                          const cardLinkProps = useNativeCardLink ? getNativeLinkProps(card.url) : null;
                          const ageConfirmLinkProps = shouldEscapeInAppBrowser && card.url ? getNativeLinkProps(card.url) : null;
                          const renderCardBodyContent = () => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                            "div",
                            {
                              className: `${sizeBodyClasses} ${imageBodyShapeClass} flex items-center justify-center relative overflow-hidden rounded-2xl`,
                              style: {
                                ...imageBodyShapeStyle,
                                ...ctaRoundedClipStyle
                              },
                              children: [
                                card.style.type === "image" && card.style.background_image && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                                    "img",
                                    {
                                      src: card.style.background_image,
                                      alt: "",
                                      className: "absolute inset-0 h-full w-full object-cover object-center",
                                      style: ctaRoundedLayerStyle,
                                      loading: "lazy",
                                      decoding: "async"
                                    }
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                                    "div",
                                    {
                                      className: "absolute inset-0 bg-gradient-to-b from-black/30 to-black/60",
                                      style: ctaRoundedLayerStyle
                                    }
                                  )
                                ] }),
                                card.style.type === "video" && card.style.background_video && (() => {
                                  const fit = card.style.background_fit || "fill";
                                  const focus = card.style.background_focus || "top";
                                  const baseClasses = "absolute inset-0 w-full h-full opacity-60";
                                  const fitClass = fit === "fit" ? "object-contain" : "object-cover";
                                  let focusClass = "";
                                  if (fit === "fill") {
                                    if (focus === "top")
                                      focusClass = "object-top";
                                    else if (focus === "bottom")
                                      focusClass = "object-bottom";
                                    else focusClass = "object-center";
                                  }
                                  return card.style.background_video_poster_url ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                                    "img",
                                    {
                                      src: card.style.background_video_poster_url,
                                      alt: "",
                                      className: `${baseClasses} ${fitClass} ${focusClass}`,
                                      style: ctaRoundedLayerStyle,
                                      loading: "lazy",
                                      decoding: "async"
                                    }
                                  ) : null;
                                })(),
                                (isOnlyFansTextIcon || isOnlyFansVipIconText || isOnlyFansContentText) && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                                  "img",
                                  {
                                    src: "/of-logo.svg",
                                    alt: "Creator icon",
                                    className: "absolute right-3 top-3 z-20 h-6 w-auto",
                                    loading: "lazy"
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "text-center w-full relative z-10", children: [
                                  isPremiumLogo && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "mb-2", children: isOnlyFansVipIconText ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                                    "img",
                                    {
                                      src: onlyFansVipAsset,
                                      alt: "",
                                      className: "h-auto max-h-8 w-auto max-w-[76%]",
                                      loading: "lazy"
                                    }
                                  ) }) : isOnlyFansContentText ? /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex items-center justify-center gap-1.5", children: [
                                    card.style.prefix_text && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                                      "span",
                                      {
                                        className: "font-bold leading-none",
                                        style: {
                                          color: "#ffffff",
                                          fontSize: `${card.style.brand_text_size || 18}px`,
                                          fontFamily: '"Gardenia ExtraBold", ui-sans-serif, system-ui, sans-serif'
                                        },
                                        children: card.style.prefix_text
                                      }
                                    ),
                                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                                      "img",
                                      {
                                        src: onlyFansContentAsset,
                                        alt: "",
                                        className: "h-auto max-h-7 w-auto max-w-[38%]",
                                        loading: "lazy"
                                      }
                                    )
                                  ] }) : isOnlyFansTextIcon ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                                    "span",
                                    {
                                      className: "font-bold leading-none",
                                      style: {
                                        color: "#ffffff",
                                        fontSize: `${card.style.brand_text_size || 18}px`,
                                        fontFamily: '"Gardenia ExtraBold", ui-sans-serif, system-ui, sans-serif'
                                      },
                                      children: card.style.prefix_text || card.title
                                    }
                                  ) }) : /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex flex-col items-center gap-1", children: [
                                    card.style.prefix_text && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                                      "p",
                                      {
                                        className: "text-base font-semibold",
                                        style: {
                                          color: card.style.logo_color || "#ffffff"
                                        },
                                        children: card.style.prefix_text
                                      }
                                    ),
                                    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex items-center justify-center gap-2", children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                                        "img",
                                        {
                                          src: "/of-logo.svg",
                                          alt: "Creator icon",
                                          className: "h-5 w-auto",
                                          loading: "lazy"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                                        "img",
                                        {
                                          src: "/of.webp",
                                          alt: "Creator link",
                                          className: "h-5 w-auto",
                                          loading: "lazy"
                                        }
                                      )
                                    ] })
                                  ] }) }),
                                  !isBrandedNonPremium && card.title && card.title.trim() !== "" && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                                    "h3",
                                    {
                                      className: `${sizeTitleClass} font-semibold ${card.style.type === "image" || card.style.type === "gradient" || card.style.type === "solid" || card.style.type === "video" ? "text-white" : "text-foreground"}`,
                                      style: {
                                        textShadow: card.style.type === "image" || card.style.type === "video" ? "0 2px 8px rgba(0,0,0,0.5)" : "none"
                                      },
                                      children: card.title
                                    }
                                  ),
                                  !isBrandedNonPremium && card.description && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                                    "p",
                                    {
                                      className: `${sizeDescriptionClass} mt-1 ${card.style.type === "image" || card.style.type === "gradient" || card.style.type === "solid" || card.style.type === "video" ? "text-white/90" : "text-default-500"}`,
                                      style: {
                                        textShadow: card.style.type === "image" || card.style.type === "video" ? "0 1px 4px rgba(0,0,0,0.5)" : "none"
                                      },
                                      children: card.description
                                    }
                                  )
                                ] }),
                                isBrandedNonPremium && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_jsx_runtime10.Fragment, { children: card.style.logo_icon && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "absolute top-2 right-2 z-20", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                                  "div",
                                  {
                                    className: "rounded-full px-2 py-2 flex items-center justify-center shadow-md",
                                    style: {
                                      backgroundColor: isSnapchatLogo ? "#000000" : "#ffffff"
                                    },
                                    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                                      import_react26.Icon,
                                      {
                                        icon: card.style.logo_icon,
                                        width: 18,
                                        style: {
                                          color: card.style.logo_color || "#ffffff"
                                        }
                                      }
                                    )
                                  }
                                ) }) })
                              ]
                            }
                          );
                          const renderCardContent = () => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                            import_react23.Card,
                            {
                              isPressable: true,
                              onPress: handleCardClick,
                              className: "w-full rounded-2xl shadow-lg relative overflow-hidden",
                              style: {
                                ...getCardStyle(),
                                ...ctaRoundedClipStyle
                              },
                              children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react23.CardBody, { className: "overflow-hidden rounded-2xl p-0", children: renderCardBodyContent() })
                            }
                          );
                          const baseCardContent = cardLinkProps ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                            "a",
                            {
                              href: cardLinkProps.href,
                              target: cardLinkProps.target,
                              rel: cardLinkProps.rel,
                              onClick: cardLinkProps.onClick,
                              className: "block w-full rounded-2xl shadow-lg overflow-hidden",
                              style: {
                                ...getCardStyle(),
                                ...ctaRoundedClipStyle
                              },
                              children: renderCardBodyContent()
                            }
                          ) : renderCardContent();
                          const cardWithMechanisms = card.ctr_mechanisms ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                            CTACardWithMechanisms,
                            {
                              card,
                              onReveal: () => {
                              },
                              children: baseCardContent
                            }
                          ) : baseCardContent;
                          const finalContent = showingAgeConfirmationFor === card.id ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                            AgeConfirmationModal,
                            {
                              isOpen: true,
                              onConfirm: () => {
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
                              },
                              onCancel: handleAgeCancel,
                              confirmHref: ageConfirmLinkProps == null ? void 0 : ageConfirmLinkProps.href,
                              confirmTargetBlank: (ageConfirmLinkProps == null ? void 0 : ageConfirmLinkProps.target) === "_blank",
                              children: cardWithMechanisms
                            }
                          ) : cardWithMechanisms;
                          const urgencyBadge = card.style.countdown_badge;
                          const urgencyPosition = (urgencyBadge == null ? void 0 : urgencyBadge.position) || "below";
                          const urgencyBadgeElement = (urgencyBadge == null ? void 0 : urgencyBadge.enabled) ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                            CTAUrgencyBadge,
                            {
                              label: urgencyBadge.label,
                              message: urgencyBadge.message,
                              durationSeconds: urgencyBadge.duration_seconds,
                              className: urgencyPosition === "inside_bottom" ? "!mt-0" : ""
                            }
                          ) : null;
                          return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                            import_framer_motion10.motion.div,
                            {
                              initial: { opacity: 0, y: 10 },
                              animate: { opacity: 1, y: 0 },
                              transition: {
                                delay: 0.6 + index * 0.1,
                                duration: 0.3
                              },
                              className: `relative overflow-visible ${sizeColSpanClass}`,
                              children: [
                                urgencyBadgeElement && urgencyPosition === "above" && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "mb-2 flex w-full justify-center", children: urgencyBadgeElement }),
                                /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                                  "div",
                                  {
                                    className: "relative z-10 rounded-2xl transition-transform hover:scale-[1.02]",
                                    style: ctaEffectStyle,
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "relative z-10 rounded-2xl overflow-hidden", children: finalContent }),
                                      urgencyBadgeElement && urgencyPosition === "inside_bottom" && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "pointer-events-none absolute inset-x-0 bottom-2 z-20 flex justify-center px-3", children: urgencyBadgeElement })
                                    ]
                                  }
                                ),
                                urgencyBadgeElement && urgencyPosition === "below" && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "flex w-full justify-center pb-4", children: urgencyBadgeElement })
                              ]
                            },
                            card.id
                          );
                        }) }) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                          import_framer_motion10.motion.div,
                          {
                            initial: { opacity: 0, y: 10 },
                            animate: { opacity: 1, y: 0 },
                            transition: { delay: 0.6, duration: 0.3 },
                            className: "w-full px-4",
                            children: !isPreview && link.destination_url ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                              "a",
                              {
                                ...getNativeLinkProps(link.destination_url),
                                className: "block w-full rounded-xl bg-content1 shadow-lg transition-transform hover:scale-[1.02]",
                                children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "p-6", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex items-center justify-between", children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex-1", children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h3", { className: "text-lg font-semibold text-foreground", children: link.title || "Click here" }),
                                    link.description && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "text-sm text-default-500 mt-1", children: link.description })
                                  ] }),
                                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                                    import_react26.Icon,
                                    {
                                      icon: "solar:arrow-right-line-duotone",
                                      width: 24,
                                      className: "text-default-400 ml-4"
                                    }
                                  )
                                ] }) })
                              }
                            ) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                              import_react23.Card,
                              {
                                isPressable: true,
                                onPress: handleButtonClick,
                                className: "w-full hover:scale-[1.02] transition-transform shadow-lg",
                                children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react23.CardBody, { className: "p-6", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex items-center justify-between", children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex-1", children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h3", { className: "text-lg font-semibold text-foreground", children: link.title || "Click here" }),
                                    link.description && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "text-sm text-default-500 mt-1", children: link.description })
                                  ] }),
                                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                                    import_react26.Icon,
                                    {
                                      icon: "solar:arrow-right-line-duotone",
                                      width: 24,
                                      className: "text-default-400 ml-4"
                                    }
                                  )
                                ] }) })
                              }
                            )
                          }
                        )
                      }
                    ),
                    isSectionEnabled("gallery") && hasGallery && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                      import_framer_motion10.motion.div,
                      {
                        initial: { opacity: 0, y: 10 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: 0.7, duration: 0.3 },
                        className: `w-full ${getSectionSpacingClass("gallery")}`,
                        style: { order: getSectionOrder("gallery") },
                        children: (() => {
                          const total = galleryImages.length;
                          if (total === 0) return null;
                          const index = Math.min(activeGalleryIndex, total - 1);
                          const goPrev = () => {
                            if (total <= 1) return;
                            setActiveGalleryIndex(
                              (prev) => (prev - 1 + total) % total
                            );
                          };
                          const goNext = () => {
                            if (total <= 1) return;
                            setActiveGalleryIndex((prev) => (prev + 1) % total);
                          };
                          const handleTouchStart = (e) => {
                            galleryTouchStartX.current = e.touches[0].clientX;
                          };
                          const handleTouchEnd = (e) => {
                            if (galleryTouchStartX.current == null) return;
                            const deltaX = e.changedTouches[0].clientX - galleryTouchStartX.current;
                            const threshold = 40;
                            if (deltaX > threshold) {
                              goPrev();
                            } else if (deltaX < -threshold) {
                              goNext();
                            }
                            galleryTouchStartX.current = null;
                          };
                          return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
                            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                              "div",
                              {
                                className: "relative w-full flex items-center justify-center",
                                onTouchStart: handleTouchStart,
                                onTouchEnd: handleTouchEnd,
                                children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "relative w-full max-w-md h-64 sm:h-72 overflow-visible flex items-center justify-center", children: (() => {
                                  const cards = [];
                                  for (let offset = -2; offset <= 2; offset++) {
                                    const imgIndex = (index + offset + total) % total;
                                    const url = galleryImages[imgIndex];
                                    const absOffset = Math.abs(offset);
                                    const isActive = offset === 0;
                                    const translateX = offset * 120;
                                    const scale = isActive ? 1 : 0.85;
                                    const opacity = isActive ? 1 : 0.35;
                                    const blur = isActive ? "none" : "blur(3px)";
                                    const zIndex = 20 - absOffset;
                                    cards.push(
                                      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                                        "div",
                                        {
                                          className: "absolute rounded-3xl overflow-hidden shadow-2xl bg-default-100 cursor-pointer transition-all duration-300 ease-out",
                                          style: {
                                            width: "13rem",
                                            height: "17rem",
                                            transform: `translateX(${translateX}%) scale(${scale})`,
                                            opacity,
                                            filter: blur,
                                            zIndex
                                          },
                                          onClick: () => {
                                            if (isActive) {
                                              setLightboxUrl(url);
                                            } else {
                                              setActiveGalleryIndex(imgIndex);
                                            }
                                          },
                                          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                                            "img",
                                            {
                                              src: url,
                                              alt: `Gallery ${imgIndex + 1}`,
                                              className: "w-full h-full object-cover",
                                              loading: "lazy"
                                            }
                                          )
                                        },
                                        `gallery-card-${offset}-${imgIndex}`
                                      )
                                    );
                                  }
                                  return cards;
                                })() })
                              }
                            ),
                            total > 1 && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "mt-5 flex justify-center gap-1.5", children: galleryImages.map((url, dotIndex) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                              "button",
                              {
                                type: "button",
                                onClick: () => setActiveGalleryIndex(dotIndex),
                                className: `h-1.5 rounded-full transition-all ${dotIndex === index ? "w-4 bg-[#5EC8D6]" : "w-1.5 bg-[#5EC8D6]/40"}`
                              },
                              `${url}-${dotIndex}`
                            )) })
                          ] });
                        })()
                      }
                    )
                  ] }) })
                }
              )
            ]
          }
        )
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AgeConfirmationModal,
  CTACardWithMechanisms,
  LandingPageViewer,
  ModernAudioPlayer
});
//# sourceMappingURL=index.js.map