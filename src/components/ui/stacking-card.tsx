"use client";
import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef, forwardRef } from "react";

interface ServiceData {
  title: string;
  description: string;
  color: string;
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const Card = ({
  i,
  title,
  description,
  color,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 px-4 sm:px-6 md:px-8"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 15}px)`, // Reduced stacking offset for mobile
        }}
        className="flex flex-col relative -top-[15%] sm:-top-[20%] md:-top-[25%] 
                   h-[400px] xs:h-[450px] sm:h-[480px] md:h-[520px]
                   w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl 
                   rounded-xl sm:rounded-2xl origin-top overflow-hidden 
                   shadow-lg sm:shadow-xl md:shadow-2xl border border-white/5"
      >
        {/* Premium gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 pointer-events-none" />

        {/* Subtle texture overlay - reduced opacity on mobile */}
        <div
          className="absolute inset-0 opacity-[0.01] sm:opacity-[0.02] bg-white pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative z-10 flex flex-col h-full p-4 xs:p-6 sm:p-8 md:p-10 lg:p-12">
          {/* Header with enhanced number badge */}
          <div className="flex items-start justify-between mb-4 sm:mb-6 md:mb-8">
            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
              <div className="w-0.5 sm:w-1 h-8 sm:h-12 md:h-16 bg-white/70 rounded-full" />
              <div className="flex flex-col">
                <span className="text-white/80 text-sm sm:text-base md:text-lg font-light tracking-wide">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>

          {/* Main content area */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="mb-4 sm:mb-6 md:mb-8">
              <h2
                className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl 
                           font-light tracking-tight mb-3 sm:mb-4 md:mb-6 
                           text-white leading-[1.1] font-serif"
              >
                {title}
              </h2>
              <div className="w-12 sm:w-16 md:w-20 h-px bg-gradient-to-r from-white/60 to-transparent" />
            </div>

            <p
              className="text-sm xs:text-base sm:text-lg md:text-xl 
                         leading-relaxed text-white/85 font-light 
                         max-w-none sm:max-w-lg md:max-w-2xl 
                         mb-4 sm:mb-6 md:mb-8"
            >
              {description}
            </p>
          </div>

          {/* Footer with enhanced CTA - responsive dots */}
          <div className="flex items-center justify-between pt-4 sm:pt-6 md:pt-8 border-t border-white/10">
            <div className="flex items-center space-x-1">
              {Array.from({ length: 4 }).map((_, idx) => (
                <div
                  key={idx}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                    idx === i ? "bg-white/80 w-4 sm:w-6" : "bg-white/30"
                  }`}
                />
              ))}
            </div>

            {/* Optional: Add swipe indicator on mobile */}
            <div className="block sm:hidden">
              <div className="flex items-center space-x-1 text-white/50">
                <span className="text-xs">Scroll</span>
                <svg
                  className="w-3 h-3 rotate-90"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Ambient glow effect - reduced on mobile for performance */}
        <div className="hidden sm:block absolute -inset-px bg-gradient-to-r from-white/10 via-white/5 to-white/10 rounded-2xl blur-sm opacity-50" />
      </motion.div>
    </div>
  );
};

interface ComponentRootProps {
  services: ServiceData[];
}

const Component = forwardRef<HTMLElement, ComponentRootProps>(
  ({ services }, ref) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start start", "end end"],
    });

    return (
      <ReactLenis root>
        <main ref={container}>
          {/* Hero Section - Mobile Optimized */}
          <section
            className="text-white grid place-content-center relative 
                            py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 
                            min-h-[60vh] sm:min-h-[70vh] md:min-h-screen"
          >
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <div className="mb-4"></div>
              <h1
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                           px-2 sm:px-4 md:px-8 font-light text-center tracking-tight 
                           leading-[1.1] text-white mb-4 sm:mb-6 md:mb-8 font-serif"
              >
                Creative Horizons
              </h1>
              <p
                className="text-base sm:text-lg md:text-xl text-white/70 
                         mb-6 sm:mb-8 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto 
                         font-light leading-relaxed px-2"
              >
                Elevate your business with our carefully crafted solutions
                designed for excellence
              </p>
              <div className="w-12 sm:w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto" />
            </div>
          </section>

          {/* Cards Section */}
          <section className="text-white w-full relative">
            {services.map((service, i) => {
              // Reduced scale difference for mobile to prevent cards from becoming too small
              const targetScale =
                1 -
                (services.length - i) *
                  (window.innerWidth < 640
                    ? 0.03
                    : window.innerWidth < 768
                    ? 0.04
                    : 0.05);

              return (
                <Card
                  key={`s_${i}`}
                  i={i}
                  title={service.title}
                  color={service.color}
                  description={service.description}
                  progress={scrollYProgress}
                  range={[i * 0.25, 1]}
                  targetScale={targetScale}
                />
              );
            })}
          </section>

          {/* Bottom spacing for better mobile experience */}
          <section className="h-32 sm:h-48 md:h-64" />
        </main>
      </ReactLenis>
    );
  }
);

Component.displayName = "Component";

// Example usage with premium service data
const sampleServices = [
  {
    title: "Empower Digital Creativity",
    description:
      "Comprehensive digital transformation strategies that align technology with your business objectives, driving sustainable growth and competitive advantage.",
    color: "#667eea",
  },
  {
    title: "Product Design",
    description:
      "User-centric design solutions that combine aesthetic excellence with functional innovation, creating memorable experiences that resonate with your audience.",
    color: "#f093fb",
  },
  {
    title: "Brand Identity",
    description:
      "Sophisticated brand development that captures your essence and communicates your values, establishing a powerful presence in your market.",
    color: "#4facfe",
  },
  {
    title: "Growth Marketing",
    description:
      "Data-driven marketing strategies that accelerate growth through precise targeting, compelling messaging, and measurable results.",
    color: "#43e97b",
  },
];

export default function PremiumStackingCards() {
  return (
    <div className="bg-black min-h-screen">
      <Component services={sampleServices} />
    </div>
  );
}

export { Component as StackingCard };
