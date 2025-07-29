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
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative -top-[25%] h-[520px] w-[80%] max-w-4xl rounded-2xl origin-top overflow-hidden shadow-2xl border border-white/5"
      >
        {/* Premium gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 pointer-events-none" />

        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.02] bg-white pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative z-10 flex flex-col h-full p-12">
          {/* Header with enhanced number badge */}
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-1 h-16 bg-white/70 rounded-full" />
              <div className="flex flex-col">
                <span className="text-white/80 text-lg font-light tracking-wide">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>

          {/* Main content area */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="text-5xl font-light tracking-tight mb-6 text-white leading-[1.1] font-serif">
                {title}
              </h2>
              <div className="w-20 h-px bg-gradient-to-r from-white/60 to-transparent" />
            </div>

            <p className="text-xl leading-relaxed text-white/85 font-light max-w-2xl mb-8">
              {description}
            </p>
          </div>

          {/* Footer with enhanced CTA */}
          <div className="flex items-center justify-between pt-8 border-t border-white/10">
            <div className="flex items-center space-x-1">
              {Array.from({ length: 4 }).map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === i ? "bg-white/80 w-6" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Ambient glow effect */}
        <div className="absolute -inset-px bg-gradient-to-r from-white/10 via-white/5 to-white/10 rounded-2xl blur-sm opacity-50" />
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
          <section className="text-white grid place-content-center relative py-32">
            <div className="relative z-10 text-center">
              <div className="mb-4"></div>
              <h1 className="2xl:text-7xl text-6xl px-8 font-light text-center tracking-tight leading-[1.1] text-white mb-8 font-serif">
                Creative Horizans
              </h1>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                Elevate your business with our carefully crafted solutions
                designed for excellence
              </p>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto" />
            </div>
          </section>

          <section className="text-white w-full relative">
            {services.map((service, i) => {
              const targetScale = 1 - (services.length - i) * 0.05;
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
  return <Component services={sampleServices} />;
}

export { Component as StackingCard };
