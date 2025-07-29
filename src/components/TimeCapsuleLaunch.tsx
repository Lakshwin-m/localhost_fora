"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, Transition } from "framer-motion";
import { Clock, ArrowRight, Sparkles, Star } from "lucide-react";

// GlowEffect Component
export type GlowEffectProps = {
  className?: string;
  style?: React.CSSProperties;
  colors?: string[];
  mode?:
    | "rotate"
    | "pulse"
    | "breathe"
    | "colorShift"
    | "flowHorizontal"
    | "static";
  blur?:
    | number
    | "softest"
    | "soft"
    | "medium"
    | "strong"
    | "stronger"
    | "strongest"
    | "none";
  transition?: Transition;
  scale?: number;
  duration?: number;
};

function GlowEffect({
  className,
  style,
  colors = ["#6B7280", "#9CA3AF", "#D1D5DB", "#F3F4F6"],
  mode = "pulse",
  blur = "medium",
  transition,
  scale = 1,
  duration = 4,
}: GlowEffectProps) {
  const BASE_TRANSITION = {
    repeat: Infinity,
    duration: duration,
    ease: "linear" as const,
  };

  const animations = {
    rotate: {
      background: [
        `conic-gradient(from 0deg at 50% 50%, ${colors.join(", ")})`,
        `conic-gradient(from 360deg at 50% 50%, ${colors.join(", ")})`,
      ],
      transition: {
        ...(transition ?? BASE_TRANSITION),
      },
    },
    pulse: {
      background: colors.map(
        (color) =>
          `radial-gradient(circle at 50% 50%, ${color} 0%, transparent 100%)`
      ),
      scale: [1 * scale, 1.15 * scale, 1 * scale],
      opacity: [0.4, 0.8, 0.4],
      transition: {
        ...(transition ?? {
          ...BASE_TRANSITION,
          repeatType: "mirror" as const,
        }),
      },
    },
    breathe: {
      background: [
        ...colors.map(
          (color) =>
            `radial-gradient(circle at 50% 50%, ${color} 0%, transparent 100%)`
        ),
      ],
      scale: [1 * scale, 1.08 * scale, 1 * scale],
      transition: {
        ...(transition ?? {
          ...BASE_TRANSITION,
          repeatType: "mirror" as const,
        }),
      },
    },
    colorShift: {
      background: colors.map((color, index) => {
        const nextColor = colors[(index + 1) % colors.length];
        return `conic-gradient(from 0deg at 50% 50%, ${color} 0%, ${nextColor} 50%, ${color} 100%)`;
      }),
      transition: {
        ...(transition ?? {
          ...BASE_TRANSITION,
          repeatType: "mirror" as const,
        }),
      },
    },
    flowHorizontal: {
      background: colors.map((color) => {
        const nextColor = colors[(colors.indexOf(color) + 1) % colors.length];
        return `linear-gradient(to right, ${color}, ${nextColor})`;
      }),
      transition: {
        ...(transition ?? {
          ...BASE_TRANSITION,
          repeatType: "mirror" as const,
        }),
      },
    },
    static: {
      background: `linear-gradient(to right, ${colors.join(", ")})`,
    },
  };

  const getBlurClass = (blur: GlowEffectProps["blur"]) => {
    if (typeof blur === "number") {
      return "";
    }

    const presets = {
      softest: "blur-sm",
      soft: "blur",
      medium: "blur-md",
      strong: "blur-lg",
      stronger: "blur-xl",
      strongest: "blur-2xl",
      none: "blur-none",
    };

    return presets[blur as keyof typeof presets];
  };

  return (
    <motion.div
      style={
        {
          ...style,
          "--scale": scale,
          willChange: "transform",
          backfaceVisibility: "hidden",
        } as React.CSSProperties
      }
      animate={animations[mode]}
      className={`pointer-events-none absolute inset-0 h-full w-full scale-[var(--scale)] transform-gpu ${getBlurClass(
        blur
      )} ${className}`}
    />
  );
}

// Enhanced Background Beams Component
const BackgroundBeams = React.memo(({ className }: { className?: string }) => {
  const paths = [
    "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
    "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
    "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
    "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
    "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
    "M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835",
  ];

  return (
    <div
      className={`absolute h-full w-full inset-0 flex items-center justify-center opacity-20 ${className}`}
    >
      <svg
        className="z-0 h-full w-full pointer-events-none absolute"
        width="100%"
        height="100%"
        viewBox="0 0 696 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {paths.map((path, index) => (
          <motion.path
            key={`path-${index}`}
            d={path}
            stroke={`url(#linearGradient-${index})`}
            strokeOpacity="0.6"
            strokeWidth="0.8"
          />
        ))}
        <defs>
          {paths.map((_, index) => (
            <motion.linearGradient
              id={`linearGradient-${index}`}
              key={`gradient-${index}`}
              initial={{
                x1: "0%",
                x2: "0%",
                y1: "0%",
                y2: "0%",
              }}
              animate={{
                x1: ["0%", "100%"],
                x2: ["0%", "95%"],
                y1: ["0%", "100%"],
                y2: ["0%", `${93 + Math.random() * 8}%`],
              }}
              transition={{
                duration: Math.random() * 12 + 8,
                ease: "easeInOut",
                repeat: Infinity,
                delay: Math.random() * 10,
              }}
            >
              <stop stopColor="#374151" stopOpacity="0" />
              <stop stopColor="#6B7280" />
              <stop offset="32.5%" stopColor="#9CA3AF" />
              <stop offset="100%" stopColor="#E5E7EB" stopOpacity="0" />
            </motion.linearGradient>
          ))}
        </defs>
      </svg>
    </div>
  );
});

BackgroundBeams.displayName = "BackgroundBeams";

// Floating Particles Component
const FloatingParticles = React.memo(() => {
  const particles = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        />
      ))}
    </div>
  );
});

FloatingParticles.displayName = "FloatingParticles";

// Enhanced Button Component
const EnhancedButton = ({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <motion.div
      className="relative group"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <GlowEffect
        colors={["#FFFFFF", "#F9FAFB", "#F3F4F6"]}
        mode="breathe"
        blur="medium"
        className="rounded-lg"
        duration={4}
      />
      <button
        onClick={onClick}
        className={`relative bg-white/95 hover:bg-white text-black px-8 py-3 text-sm font-medium tracking-wide shadow-xl border border-gray-200/50 uppercase group transition-all duration-500 rounded-lg backdrop-blur-sm ${className}`}
      >
        <span className="relative z-10 flex items-center gap-3">
          {children}
          <motion.div
            animate={{ x: [0, 3, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />
          </motion.div>
        </span>
      </button>
    </motion.div>
  );
};

// Time Capsule Component
interface TimeCapsuleLaunchProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  features?: string[];
}

function TimeCapsuleLaunch({
  title = "Forá",
  subtitle = "The Time Capsule",
  description = "Experience the future of memory preservation. Our revolutionary time capsule app transforms how you capture, store, and rediscover life's most precious moments across the fabric of time.",
  ctaText = "Discover the Future of Memories",
  features = [
    "Secure Memory Vault",
    "AI-Powered Organization",
    "Future Delivery System",
    "Cross-Platform Sync",
    "Privacy First Design",
  ],
}: TimeCapsuleLaunchProps) {
  const handleCTAClick = () => {
    // Navigate to /capsula
    if (typeof window !== "undefined") {
      window.location.href = "/fora";
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      <BackgroundBeams />
      <FloatingParticles />

      {/* Ambient light effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-950/5 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-950/5 to-transparent" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white uppercase mb-4">
            And We Are Launching..
          </h2>
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="space-y-8"
          >
            {/* Coming Soon Badge */}
            <motion.div
              className="relative inline-block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <GlowEffect
                colors={["#1F2937", "#374151", "#4B5563"]}
                mode="breathe"
                blur="strong"
                className="rounded-full"
                duration={5}
              />
            </motion.div>

            {/* Main Title */}
            <motion.h1
              className="text-7xl md:text-8xl lg:text-9xl font-thin tracking-tight bg-gradient-to-b from-white via-gray-100 to-gray-400 bg-clip-text text-transparent leading-none select-none"
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1.8,
                delay: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{
                fontFamily:
                  "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontFeatureSettings: '"kern" 1, "liga" 1',
                textRendering: "optimizeLegibility",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
              }}
            >
              {title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-3xl md:text-4xl text-gray-100 font-extralight tracking-wide max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              {subtitle}
            </motion.p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.8 }}
            className="text-xl text-gray-300 font-light max-w-5xl mx-auto leading-loose tracking-wide"
          >
            {description}
          </motion.p>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="flex flex-col gap-8 justify-center items-center pt-8"
          >
            <EnhancedButton onClick={handleCTAClick}>{ctaText}</EnhancedButton>
          </motion.div>

          {/* Features Grid */}

          {/* Status Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 2.2 }}
            className="flex items-center justify-center gap-4 text-gray-500 text-sm mt-16 tracking-[0.2em] uppercase"
          >
            <motion.div
              className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full shadow-lg shadow-green-500/50"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [1, 0.6, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.span
              className="font-light text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 2.4 }}
            >
              Development in progress
            </motion.span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function TimeCapsuleLaunchComponent() {
  return <TimeCapsuleLaunch />;
}
