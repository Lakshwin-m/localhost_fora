import React, { useState, useEffect } from "react";
import {
  Clock,
  Lock,
  Unlock,
  Share2,
  MessageCircle,
  Calendar,
  Shield,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { BouncyCardsFeatures } from "@/components/ui/bounce-card-features";
import HowTimeCapsuleWorks from "./HowTimeCapsuleWorks";

const LandingPage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [unlockedMessages, setUnlockedMessages] = useState<number[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const simulateUnlock = (messageId: number) => {
    setTimeout(() => {
      setUnlockedMessages((prev) => [...prev, messageId]);
    }, 2000);
  };

  const features = [
    {
      icon: Clock,
      title: "Time-Based Unlocking",
      description:
        "Schedule messages to unlock at precise moments in the future",
      gradient: "from-orange-400 via-orange-500 to-orange-600",
      mockup: {
        title: "Morning Reminder",
        subtitle: "Unlocks in 2 hours",
        time: "8:00 AM",
      },
    },
    {
      icon: Shield,
      title: "Privacy Controls",
      description: "Choose between private personal messages or public sharing",
      gradient: "from-purple-400 via-purple-500 to-purple-600",
      mockup: {
        title: "Smart Tracking",
        subtitle: "Track messages securely",
        time: "Private Mode",
      },
    },
    {
      icon: MessageCircle,
      title: "Future Self Messaging",
      description:
        "Send messages to your future self for motivation and reminders",
      gradient: "from-yellow-400 via-yellow-500 to-yellow-600",
      mockup: {
        title: "Personal Growth",
        subtitle: "Messages tailored for you",
        time: "Daily",
      },
    },
    {
      icon: Share2,
      title: "Smart Sharing",
      description:
        "Share time-locked messages with friends, family, or the world",
      gradient: "from-pink-400 via-pink-500 to-pink-600",
      mockup: {
        title: "Group Messages",
        subtitle: "Share with loved ones",
        time: "Family",
      },
    },
  ];

  const steps = [
    {
      step: 1,
      title: "Create Your Message",
      description: "Write a message to yourself or others",
      icon: MessageCircle,
    },
    {
      step: 2,
      title: "Set the Unlock Time",
      description: "Choose exactly when your message will be revealed",
      icon: Calendar,
    },
    {
      step: 3,
      title: "Configure Privacy",
      description: "Decide if it's private or public",
      icon: Shield,
    },
    {
      step: 4,
      title: "Send to the Future",
      description: "Your message travels through time",
      icon: Zap,
    },
  ];

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-black to-cyan-900/50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
                  <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                  <span className="text-sm font-medium text-cyan-100">
                    Next-Gen Messaging
                  </span>
                </div>

                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-none tracking-tight">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    TIME
                  </span>
                  <br />
                  <span className="text-white">LOCKED</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    MESSAGES
                  </span>
                </h1>
              </div>

              <div className="space-y-6 text-xl text-gray-300 max-w-xl">
                <p className="leading-relaxed">
                  Send messages into the future with{" "}
                  <span className="font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    military-grade encryption
                  </span>{" "}
                  and precision timing.
                </p>
                <p className="leading-relaxed">
                  Experience the future of communication with{" "}
                  <span className="font-bold text-white">
                    quantum-locked messaging technology
                  </span>{" "}
                  that defies time itself.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 text-white font-bold px-10 py-6 rounded-2xl text-xl shadow-2xl shadow-purple-500/25 border border-purple-400/30 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Enter the Future
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-purple-400/50 text-purple-400 hover:bg-purple-500/10 px-10 py-6 rounded-2xl text-xl backdrop-blur-sm font-semibold transform hover:scale-105 transition-all duration-300"
                  >
                    Watch Demo
                  </Button>
                </div>

                <div className="flex items-center space-x-6 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Live Beta</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span>End-to-End Encrypted</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Floating phone mockup with holographic effect */}
              <div className="relative z-10">
                <div className="relative transform hover:scale-105 transition-all duration-700">
                  {/* Main phone with glassmorphism */}
                  <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-[2.5rem] shadow-2xl p-3 backdrop-blur-2xl border border-white/20 transform rotate-6 hover:rotate-3 transition-transform duration-500">
                    <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-[2rem] p-8 h-[500px] backdrop-blur-xl border border-purple-500/20">
                      {/* Status bar */}
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center space-x-2">
                          <div className="w-1 h-4 bg-white rounded-full"></div>
                          <div className="w-1 h-4 bg-white/60 rounded-full"></div>
                          <div className="w-1 h-4 bg-white/30 rounded-full"></div>
                        </div>
                        <div className="text-sm font-medium text-white">
                          {currentTime.toLocaleTimeString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-4 h-2 border border-white/60 rounded-sm">
                            <div className="w-full h-full bg-gradient-to-r from-green-400 to-cyan-400 rounded-sm"></div>
                          </div>
                        </div>
                      </div>

                      {/* Messages */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-sm border border-purple-400/30 transform hover:scale-105 transition-transform duration-300">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center">
                            <span className="text-white text-lg">🚀</span>
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-bold text-white">
                              Future Vision
                            </div>
                            <div className="text-xs text-purple-300">
                              Unlocks in quantum time
                            </div>
                          </div>
                          <div className="relative">
                            <Lock className="w-5 h-5 text-purple-400" />
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border border-cyan-400/30 transform hover:scale-105 transition-transform duration-300">
                          <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl flex items-center justify-center">
                            <span className="text-white text-lg">⚡</span>
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-bold text-white">
                              Neural Boost
                            </div>
                            <div className="text-xs text-cyan-300">
                              Ready to decrypt
                            </div>
                          </div>
                          <Unlock className="w-5 h-5 text-green-400" />
                        </div>

                        <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-2xl backdrop-blur-sm border border-pink-400/30 transform hover:scale-105 transition-transform duration-300">
                          <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-orange-400 rounded-2xl flex items-center justify-center">
                            <span className="text-white text-lg">🌟</span>
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-bold text-white">
                              Cosmic Message
                            </div>
                            <div className="text-xs text-pink-300">
                              Unlocks in 2025
                            </div>
                          </div>
                          <div className="relative">
                            <Lock className="w-5 h-5 text-pink-400" />
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Secondary floating phone */}
                  <div className="absolute -right-8 top-16 bg-gradient-to-br from-white/10 to-white/5 rounded-[2rem] shadow-xl p-2 backdrop-blur-2xl border border-white/20 transform -rotate-12 hover:-rotate-6 transition-transform duration-500 scale-75">
                    <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-[1.5rem] p-6 h-80 backdrop-blur-xl border border-cyan-500/20">
                      <div className="text-center mb-6">
                        <div className="text-sm font-bold text-cyan-400">
                          AI ASSISTANT
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white p-3 rounded-2xl text-sm font-medium">
                          🎯 Time locked successfully
                        </div>
                        <div className="bg-gradient-to-r from-gray-700/50 to-gray-600/50 text-gray-200 p-3 rounded-2xl text-sm backdrop-blur-sm">
                          Your message will unlock in the future timeline
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Orbital elements */}
                <div className="absolute top-10 -left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-60 animate-bounce"></div>
                <div className="absolute bottom-10 -right-10 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-lg opacity-40 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This App Section */}
      <section className="relative py-32 px-4 bg-gradient-to-br from-gray-900 via-black to-purple-900">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        <div className="relative z-10">
          <HowTimeCapsuleWorks />
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-4 bg-gradient-to-br from-black via-purple-900/50 to-black">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-purple-400/0 via-purple-400/50 to-purple-400/0"></div>
          <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-cyan-400/0 via-cyan-400/50 to-cyan-400/0"></div>
        </div>
        <div className="relative z-10">
          <BouncyCardsFeatures />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-32 px-4 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm mb-8">
              <Clock className="w-5 h-5 text-cyan-400 mr-2" />
              <span className="text-sm font-bold text-cyan-100">
                QUANTUM PROCESS
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Four quantum steps to transcend time itself
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative group">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-3xl border border-gray-700/50 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-500 relative overflow-hidden group-hover:scale-105">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500 shadow-2xl shadow-purple-500/25">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>

                    <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center text-lg font-black text-white transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                      {step.step}
                    </div>

                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-200 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-cyan-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.3)_0%,rgba(255,255,255,0)_70%)]"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-16 rounded-[3rem] border border-gray-700/30 backdrop-blur-2xl shadow-2xl">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full border border-purple-400/40 backdrop-blur-sm">
                <Zap className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-sm font-bold text-cyan-100">
                  LIMITED BETA ACCESS
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
                Ready to
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Hack Time?
                </span>
              </h2>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Join the exclusive beta of the world's first quantum
                time-messaging platform. Your future self is literally waiting
                for your message.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-500 hover:via-pink-500 hover:to-cyan-500 text-white font-bold px-12 py-6 rounded-2xl text-xl shadow-2xl shadow-purple-500/25 border border-purple-400/30 backdrop-blur-sm transform hover:scale-110 transition-all duration-300"
                >
                  <Clock className="w-6 h-6 mr-3" />
                  Join Beta Waitlist
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-300 px-12 py-6 rounded-2xl text-xl backdrop-blur-sm font-bold transform hover:scale-110 transition-all duration-300"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  See Demo
                </Button>
              </div>

              <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Live Beta</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-purple-400" />
                  <span>Quantum Encrypted</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-cyan-400" />
                  <span>10,000+ Beta Users</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-4 bg-black border-t border-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <h3 className="text-3xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                TimeLock
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                The quantum future of messaging. Connect across dimensions of
                time with military-grade encryption and precision timing.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 font-semibold"
                >
                  Twitter
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold"
                >
                  Discord
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-pink-500/50 text-pink-400 hover:bg-pink-500/10 font-semibold"
                >
                  GitHub
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Product</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors duration-300 font-medium"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors duration-300 font-medium"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors duration-300 font-medium"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors duration-300 font-medium"
                  >
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors duration-300 font-medium"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors duration-300 font-medium"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors duration-300 font-medium"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors duration-300 font-medium"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800/50 mt-12 pt-8 text-center">
            <p className="text-gray-500">
              &copy; 2025 TimeLock. Made with ⚡ quantum technology from the
              future. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
