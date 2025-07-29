"use client";

import {
  Clock,
  Mail,
  Calendar,
  Users,
  ArrowRight,
  Shield,
  Sparkles,
} from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Mock Card component since we don't have shadcn/ui
const Card = ({ children, className, style }) => (
  <div className={`rounded-lg ${className}`} style={style}>
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export default function Component() {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-10%" });
  const cardsInView = useInView(cardsRef, { once: true, margin: "-20%" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-10%" });
  const statsInView = useInView(statsRef, { once: true, margin: "-10%" });

  const headerControls = useAnimation();
  const cardsControls = useAnimation();
  const ctaControls = useAnimation();

  const steps = [
    {
      icon: Mail,
      title: "Craft Your Message",
      description:
        "Compose thoughtful messages with our intuitive editor. Share dreams, wisdom, or heartfelt notes to your future self or loved ones.",
      detail:
        "Rich media support including photos, voice recordings, and formatted text.",
      color: "blue",
      gradient: "from-blue-500/10 via-blue-600/5 to-transparent",
      borderGradient: "from-blue-400 to-blue-600",
      iconBg: "from-blue-500 to-blue-600",
      number: "01",
    },
    {
      icon: Calendar,
      title: "Select Delivery Time",
      description:
        "Choose the perfect moment for delivery with precision timing. Set specific dates, anniversaries, or milestone moments.",
      detail:
        "Advanced scheduling with timezone support and reminder notifications.",
      color: "emerald",
      gradient: "from-emerald-500/10 via-emerald-600/5 to-transparent",
      borderGradient: "from-emerald-400 to-emerald-600",
      iconBg: "from-emerald-500 to-emerald-600",
      number: "02",
    },
    {
      icon: Users,
      title: "Choose Recipients",
      description:
        "Curate your audience with care. Send to yourself for reflection, or create shared experiences with family and friends.",
      detail:
        "Group capsules, privacy controls, and recipient management tools.",
      color: "violet",
      gradient: "from-violet-500/10 via-violet-600/5 to-transparent",
      borderGradient: "from-violet-400 to-violet-600",
      iconBg: "from-violet-500 to-violet-600",
      number: "03",
    },
    {
      icon: Clock,
      title: "Secure Delivery",
      description:
        "Your messages are encrypted and safely stored until the perfect moment arrives. Experience the magic of time travel.",
      detail:
        "Bank-level encryption with guaranteed delivery and backup systems.",
      color: "amber",
      gradient: "from-amber-500/10 via-amber-600/5 to-transparent",
      borderGradient: "from-amber-400 to-amber-600",
      iconBg: "from-amber-500 to-amber-600",
      number: "04",
    },
  ];

  // Animate header when in view
  useEffect(() => {
    if (headerInView) {
      headerControls.start("visible");
    }
  }, [headerInView, headerControls]);

  // Animate cards when in view
  useEffect(() => {
    if (cardsInView) {
      cardsControls.start("visible");
    }
  }, [cardsInView, cardsControls]);

  // Animate CTA when in view
  useEffect(() => {
    if (ctaInView) {
      ctaControls.start("visible");
    }
  }, [ctaInView, ctaControls]);

  // Container variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Header animation variants
  const headerItemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
      },
    },
  };

  // Enhanced card variants with 3D effects
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      rotateX: -15,
      scale: 0.85,
      filter: "blur(10px)",
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    }),
    hover: {
      y: -15,
      scale: 1.03,
      rotateX: 5,
      rotateY: 2,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: {
        duration: 0.4,
        ease: "easeOut",
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  // Icon animation variants
  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.2,
      rotate: [0, -8, 8, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        rotate: {
          duration: 0.8,
          ease: "easeInOut",
        },
      },
    },
    tap: {
      scale: 0.9,
      transition: { duration: 0.1 },
    },
  };

  // Progress bar variants
  const progressVariants = {
    hidden: { scaleX: 0, opacity: 0.5 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.4,
      },
    },
  };

  // Text reveal variants
  const textRevealVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Floating sparkles animation
  const sparkleVariants = {
    animate: {
      rotate: 360,
      scale: [1, 1.2, 1],
      transition: {
        rotate: {
          duration: 3,
          ease: "linear",
          repeat: Infinity,
        },
        scale: {
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        },
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-emerald-50/30"
        animate={{
          background: [
            "linear-gradient(to bottom right, rgb(239 246 255 / 0.3), rgb(250 245 255 / 0.2), rgb(236 253 245 / 0.3))",
            "linear-gradient(to bottom right, rgb(250 245 255 / 0.3), rgb(236 253 245 / 0.2), rgb(239 246 255 / 0.3))",
            "linear-gradient(to bottom right, rgb(236 253 245 / 0.3), rgb(239 246 255 / 0.2), rgb(250 245 255 / 0.3))",
          ],
        }}
        transition={{
          duration: 8,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      {/* Premium Header Section */}
      <motion.div
        ref={headerRef}
        className="text-center mb-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={headerControls}
      >
        <motion.div
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-white/80 to-slate-50/80 rounded-full border border-slate-200/60 mb-8 shadow-lg backdrop-blur-sm"
          variants={headerItemVariants}
          whileHover={{
            scale: 1.05,
            y: -3,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Sparkles className="w-5 h-5 text-slate-600 mr-3" />

          <span className="text-sm font-semibold text-slate-700 tracking-wide">
            How It Works
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-8 leading-[1.05] tracking-tight"
          variants={headerItemVariants}
        >
          Your Journey Through Time
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light"
          variants={headerItemVariants}
        >
          Experience the future of digital time capsules with our premium
          platform designed for meaningful connections across time.
        </motion.p>
      </motion.div>

      {/* Premium Cards Grid */}
      <motion.div
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={cardsControls}
      >
        {steps.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              whileHover="hover"
              className="perspective-1000"
            >
              <Card
                className="group relative overflow-hidden border-0 bg-white/90 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-700 h-full rounded-2xl"
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))`,
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                {/* Animated border gradient */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl opacity-0 bg-gradient-to-br ${step.borderGradient}`}
                  style={{ padding: "1px" }}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="h-full w-full rounded-2xl bg-white"></div>
                </motion.div>

                <CardContent className="relative z-10 p-8 h-full flex flex-col">
                  {/* Step number and icon */}
                  <div className="flex items-start justify-between mb-8">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.iconBg} shadow-xl flex items-center justify-center group-hover:shadow-2xl transition-shadow duration-500`}
                      variants={iconVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>

                    <motion.div
                      className="text-right"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                    >
                      <div className="text-3xl font-bold text-slate-200 group-hover:text-slate-300 transition-colors duration-300">
                        {step.number}
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <motion.h3
                      className="text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-slate-800 transition-colors duration-300"
                      variants={textRevealVariants}
                    >
                      {step.title}
                    </motion.h3>

                    <motion.p
                      className="text-slate-600 mb-6 leading-relaxed text-sm font-medium"
                      variants={textRevealVariants}
                      transition={{ delay: 0.1 }}
                    >
                      {step.description}
                    </motion.p>
                  </div>

                  {/* Bottom section */}
                  <div className="mt-auto">
                    {/* Enhanced progress indicator */}
                    <div className="h-1 bg-slate-100 rounded-full mb-4 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${step.borderGradient} rounded-full origin-left`}
                        variants={progressVariants}
                        transition={{ delay: index * 0.1 + 0.6 }}
                      />
                    </div>

                    <motion.p
                      className="text-xs text-slate-500 leading-relaxed font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.8, duration: 0.5 }}
                    >
                      {step.detail}
                    </motion.p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
