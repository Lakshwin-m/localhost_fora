import { useEffect, useRef, useState } from "react";
import {
  Clock,
  Mail,
  Calendar,
  Heart,
  Send,
  Star,
  Users,
  Shield,
  Gift,
  MessageCircle,
  Sparkles,
  Timer,
  Archive,
  Lock,
  Zap,
  Globe,
  ArrowRight,
} from "lucide-react";

// Enhanced constants
const STATS_DATA = [
  {
    value: 4.2,
    suffix: "M+",
    label: "Messages Delivered",
    color: "text-violet-600",
  },
  { value: 189, suffix: "+", label: "Countries", color: "text-blue-600" },
  {
    value: 99.9,
    suffix: "%",
    label: "Success Rate",
    color: "text-emerald-600",
  },
  { value: 25, suffix: "Y", label: "Max Future Date", color: "text-amber-600" },
];

const FEATURE_BENEFITS = [
  {
    icon: Mail,
    title: "Future Self Messages",
    description: "Send advice, goals, and memories to yourself",
    color: "violet",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Users,
    title: "Family & Friends",
    description: "Create surprise messages for loved ones",
    color: "blue",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: Shield,
    title: "Military-Grade Security",
    description: "AES-256 encryption protects your memories",
    color: "emerald",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "AI suggests optimal delivery times",
    color: "amber",
    gradient: "from-amber-500 to-orange-600",
  },
];

const TESTIMONIALS = [
  {
    text: "Getting my graduation message 5 years later brought me to tears",
    author: "Sarah, Class of 2019",
  },
  {
    text: "My daughter loved receiving her childhood letter on her 18th birthday",
    author: "Michael, Father of 2",
  },
  {
    text: "This helped me track my mental health journey beautifully",
    author: "Alex, Therapist",
  },
];

// Enhanced animated counter
const AnimatedCounter = ({ value, suffix, color, inView }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (inView && !isAnimating) {
      setIsAnimating(true);
      let start = 0;
      const end = value;
      const duration = 2500;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start * 10) / 10);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, value, isAnimating]);

  return (
    <div className="text-center group">
      <div
        className={`text-4xl md:text-5xl font-bold ${color} mb-2 transition-all duration-300 group-hover:scale-110`}
      >
        {displayValue}
        {suffix}
      </div>
    </div>
  );
};

// Enhanced feature benefit component
const FeatureBenefit = ({
  icon: Icon,
  title,
  description,
  color,
  gradient,
}) => (
  <div className="group relative overflow-hidden">
    <div
      className={`flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 relative z-10`}
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-r ${gradient} shadow-lg`}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-gray-900 mb-2 text-lg">{title}</h4>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
    <div
      className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
    />
  </div>
);

// Enhanced message bubble
const MessageBubble = ({
  sender,
  message,
  delay = 0,
  isDelivered = false,
  timestamp,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transform transition-all duration-700 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-6 opacity-0 scale-95"
      }`}
    >
      <div
        className={`flex ${
          sender === "future" ? "justify-end" : "justify-start"
        } mb-4`}
      >
        <div className="max-w-sm">
          <div
            className={`px-5 py-4 rounded-3xl shadow-lg backdrop-blur-sm border ${
              sender === "future"
                ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white border-violet-200"
                : "bg-white/90 text-gray-800 border-gray-200"
            }`}
          >
            <p className="leading-relaxed font-medium">{message}</p>
            {timestamp && (
              <div
                className={`flex items-center gap-1 mt-2 text-xs ${
                  sender === "future" ? "text-violet-100" : "text-gray-500"
                }`}
              >
                <Clock className="w-3 h-3" />
                <span>{timestamp}</span>
              </div>
            )}
          </div>
          {isDelivered && (
            <div className="flex items-center gap-2 mt-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium w-fit ml-auto">
              <Sparkles className="w-3 h-3" />
              <span>
                Delivered from {sender === "past" ? "2019" : "the future"}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Enhanced time capsule with particle effects
const TimeCapsule = ({ isActive }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (isActive) {
      const newParticles = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        delay: i * 100,
        x: Math.random() * 40 - 20,
        y: Math.random() * 40 - 20,
      }));
      setParticles(newParticles);
    }
  }, [isActive]);

  return (
    <div className="relative flex items-center justify-center">
      {/* Particle effects */}
      {isActive &&
        particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-ping"
            style={{
              left: `${50 + particle.x}%`,
              top: `${50 + particle.y}%`,
              animationDelay: `${particle.delay}ms`,
              animationDuration: "1.5s",
            }}
          />
        ))}

      {/* Main capsule */}
      <div
        className={`w-28 h-36 mx-auto rounded-3xl bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 shadow-2xl transform transition-all duration-1000 relative overflow-hidden ${
          isActive ? "scale-110 rotate-2" : "scale-100 rotate-0"
        }`}
      >
        {/* Capsule details */}
        <div className="absolute inset-x-0 top-3 h-5 bg-gradient-to-r from-amber-300 to-amber-500 rounded-full mx-3 shadow-inner" />
        <div className="absolute inset-x-0 top-12 flex items-center justify-center">
          <div className="relative">
            <Lock
              className={`w-7 h-7 text-amber-900 transition-all duration-700 ${
                isActive
                  ? "opacity-0 scale-0 rotate-180"
                  : "opacity-100 scale-100 rotate-0"
              }`}
            />
            <Mail
              className={`w-7 h-7 text-amber-900 absolute inset-0 transition-all duration-700 ${
                isActive
                  ? "opacity-100 scale-100 rotate-0"
                  : "opacity-0 scale-0 -rotate-180"
              }`}
            />
          </div>
        </div>

        {/* Date display */}
        <div className="absolute bottom-6 inset-x-0 text-center">
          <div className="text-sm text-amber-900 font-bold">2030</div>
          <div className="text-xs text-amber-800">Dec 25</div>
        </div>

        {/* Glow effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-transparent to-yellow-300/20 transition-opacity duration-1000 ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Base glow */}
      <div
        className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-amber-300/30 rounded-full blur-lg transition-all duration-1000 ${
          isActive ? "opacity-100 scale-110" : "opacity-50 scale-100"
        }`}
      />
    </div>
  );
};

// Testimonial component
const Testimonial = ({ text, author, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
        <div className="mb-4">
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <p className="text-gray-700 italic leading-relaxed">"{text}"</p>
        </div>
        <p className="text-sm font-semibold text-gray-600">— {author}</p>
      </div>
    </div>
  );
};

export default function Component() {
  const sectionRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);
  const statsRef = useRef(null);
  const testimonialsRef = useRef(null);

  const [isStatsInView, setIsStatsInView] = useState(false);
  const [isLeftCardInView, setIsLeftCardInView] = useState(false);
  const [isRightCardInView, setIsRightCardInView] = useState(false);
  const [isTestimonialsInView, setIsTestimonialsInView] = useState(false);
  const [capsuleActive, setCapsuleActive] = useState(false);

  // Enhanced intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === statsRef.current && entry.isIntersecting) {
            setIsStatsInView(true);
          }
          if (entry.target === leftCardRef.current && entry.isIntersecting) {
            setIsLeftCardInView(true);
          }
          if (entry.target === rightCardRef.current && entry.isIntersecting) {
            setIsRightCardInView(true);
            setTimeout(() => setCapsuleActive(true), 500);
          }
          if (
            entry.target === testimonialsRef.current &&
            entry.isIntersecting
          ) {
            setIsTestimonialsInView(true);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-50px" }
    );

    [statsRef, leftCardRef, rightCardRef, testimonialsRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-orange-50 py-24 px-4 md:px-6 lg:px-8 overflow-hidden relative"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-violet-200/40 to-purple-300/40 rounded-full blur-2xl animate-pulse" />
        <div
          className="absolute bottom-32 right-24 w-48 h-48 bg-gradient-to-br from-blue-200/40 to-indigo-300/40 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 right-16 w-24 h-24 bg-gradient-to-br from-amber-200/40 to-orange-300/40 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-violet-300/30 rounded-full animate-bounce"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Enhanced Header */}
        <header className="text-center mb-24">
          <h1 className="text-6xl md:text-8xl font-normal text-transparent bg-gradient-to-r from-red-300 to-red-600 bg-clip-text  mb-10 tracking-tight leading-none">
            Forá
          </h1>

          <div className="max-w-4xl mx-auto space-y-10 mb-20">
            <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed font-light">
              Deliver messages through time — to your future self or to those
              who matter most.
              <span className="text-red-600 font-semibold">
                {" "}
                Preserve meaning. Capture emotion. Send it when it matters most.
              </span>
            </p>
            <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
              From heartfelt encouragement and personal reflections to timeless
              celebrations, TimeCapsule ensures your words are delivered at just
              the right moment — creating lasting impact from a single note.
            </p>
          </div>

          {/* Enhanced Statistics */}
        </header>

        {/* Enhanced Features Grid */}
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-start mb-24">
          {/* Left Feature - Create Messages */}
          <div
            ref={leftCardRef}
            className={`bg-red-400 rounded-3xl p-12 lg:p-14 relative overflow-hidden shadow-2xl transform transition-all duration-1000 ${
              isLeftCardInView
                ? "translate-x-0 opacity-100 rotate-0"
                : "-translate-x-24 opacity-0 -rotate-3"
            }`}
          >
            {/* Enhanced background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-white/10 to-transparent rounded-full -translate-y-24 translate-x-24" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                  <Send className="w-7 h-7 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white/90 text-base font-bold uppercase tracking-wider">
                    Create & Send
                  </span>
                  <span className="text-white/70 text-sm">
                    Messages to the Future
                  </span>
                </div>
              </div>

              <h2
                className={`text-5xl lg:text-6xl font-black text-white mb-8 leading-tight transform transition-all duration-800 ${
                  isLeftCardInView
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                }`}
              >
                Write to Tomorrow
              </h2>

              <p
                className={`text-xl text-white/95 leading-relaxed mb-10 font-light transform transition-all duration-800 ${
                  isLeftCardInView
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                Compose meaningful messages for your future self, set goals with
                accountability, or create surprise letters for friends and
                family. Choose the perfect moment for delivery and let time work
                its magic.
              </p>
            </div>

            {/* Enhanced Message Interface */}
            <div className="relative z-10 space-y-8">
              <div
                className={`bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/30 max-w-lg transform transition-all duration-800 ${
                  isLeftCardInView
                    ? "translate-y-0 opacity-100 scale-100"
                    : "translate-y-8 opacity-0 scale-95"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      New Time Capsule
                    </h4>
                    <p className="text-sm text-gray-500">
                      To: Future Me • Personal
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-5 mb-6 border border-gray-100">
                  <p className="text-gray-700 leading-relaxed font-medium">
                    "Hey future me! Today I'm starting my dream company. I'm
                    scared but excited. I hope by the time you read this, we've
                    made it big! Remember why we started... 💫✨"
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar className="w-5 h-5" />
                    <span className="font-semibold">Christmas 2030</span>
                  </div>
                  <div className="flex items-center gap-2 bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-bold">
                    <Lock className="w-4 h-4" />
                    <span>Sealed</span>
                  </div>
                </div>
              </div>

              <div
                className={`bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/30 max-w-lg ml-16 transform transition-all duration-800 ${
                  isLeftCardInView
                    ? "translate-y-0 opacity-100 scale-100"
                    : "translate-y-8 opacity-0 scale-95"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Gift className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="font-bold text-gray-900">
                    Capsule Created Successfully!
                  </span>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  Your message is now sealed and will be delivered on{" "}
                  <strong>December 25, 2030</strong>
                </p>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Timer className="w-4 h-4" />
                    <span>2,157 days remaining</span>
                  </div>
                  <div className="flex items-center gap-1 text-violet-600 font-medium">
                    <Zap className="w-4 h-4" />
                    <span>Auto-reminder set</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Feature - Receive Messages */}
          <div
            ref={rightCardRef}
            className={`bg-white/80 backdrop-blur-lg rounded-3xl p-12 lg:p-14 relative overflow-hidden shadow-2xl border border-white/50 transform transition-all duration-1000 ${
              isRightCardInView
                ? "translate-x-0 opacity-100 rotate-0"
                : "translate-x-24 opacity-0 rotate-3"
            }`}
          >
            {/* Enhanced background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(139,92,246,0.05)_1px,transparent_0)] [background-size:24px_24px]" />
            <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-blue-100/50 to-transparent rounded-full -translate-y-24 -translate-x-24" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Archive className="w-7 h-7 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-800 text-base font-bold uppercase tracking-wider">
                    Receive & Reflect
                  </span>
                  <span className="text-gray-600 text-sm">
                    Messages from Your Past
                  </span>
                </div>
              </div>

              <h2
                className={`text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight transform transition-all duration-800 ${
                  isRightCardInView
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
              >
                Hello from Yesterday
              </h2>

              <p
                className={`text-xl text-gray-700 leading-relaxed mb-10 font-light transform transition-all duration-800 ${
                  isRightCardInView
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                Experience the profound joy of receiving thoughtful messages
                from your past self or loved ones. Each delivery is a carefully
                timed gift that arrives exactly when you need it most, creating
                powerful moments of reflection and connection.
              </p>

              {/* Enhanced feature benefits */}

              {/* Enhanced capsule interaction */}
              <div
                className={`relative bg-gradient-to-br from-blue-50/80 to-violet-50/80 rounded-3xl p-8 border border-blue-200/50 backdrop-blur-sm transform transition-all duration-800 ${
                  isRightCardInView
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-0"
                }`}
                style={{ transitionDelay: "800ms" }}
              >
                <div className="flex items-center justify-center mb-8">
                  <TimeCapsule isActive={capsuleActive && isRightCardInView} />
                </div>

                <div className="space-y-6 max-h-80 overflow-hidden">
                  <MessageBubble
                    sender="past"
                    message="Remember when you doubted yourself about starting your business? Look at where you are now! I'm so proud of us. 🌟"
                    delay={isRightCardInView ? 1200 : 0}
                    isDelivered={true}
                    timestamp="From Dec 25, 2019"
                  />

                  <MessageBubble
                    sender="future"
                    message="Thank you past me... I really needed this reminder today. Your courage gave me everything I have now. ❤️"
                    delay={isRightCardInView ? 2200 : 0}
                    timestamp="Today, 3:42 PM"
                  />

                  <MessageBubble
                    sender="past"
                    message="PS: Don't forget to celebrate the small wins along the way. And call mom - she misses you!"
                    delay={isRightCardInView ? 3200 : 0}
                    isDelivered={true}
                    timestamp="From Dec 25, 2019"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Testimonials Section */}
      </div>
    </section>
  );
}
