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
  ChevronDown,
  Github,
  Twitter,
} from "lucide-react";
import { BouncyCardsFeatures } from "@/components/ui/bounce-card-features";
import HowTimeCapsuleWorks from "@/components/HowTimeCapsuleWorks";
import { MarqueeEffect } from "@/components/marquee-effect";
import progressSection from "@/components/progress-section";
import Component from "@/components/progress-section";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
function Waitlist() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const sendWaitlistEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_44v94x5",
        "template_xe6suxc",
        {
          user_name: formData.name,
          user_email: formData.email,
        },
        "_LD4exKDRkSUJ3qOh"
      )
      .then(() => {
        setSubmitted(true);
        setFormData({ name: "", email: "" });
      })
      .catch((err) => {
        alert("Something went wrong!");
        console.error(err);
      });
  };
}
const LandingPage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [unlockedMessages, setUnlockedMessages] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setMobileMenuOpen(false); // Close mobile menu when navigating
  };

  const handleWaitlistSubmit = async () => {
    if (!formData.name || !formData.email) return;

    try {
      const result = await emailjs.send(
        "service_44v94x5",
        "template_xe6suxc",
        {
          user_name: formData.name,
          user_email: formData.email,
        },
        "_LD4exKDRkSUJ3qOh" // NOT secret key
      );
      console.log("Email sent successfully:", result.text);
      setSubmitted(true);
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  const features = [
    {
      icon: Clock,
      title: "Time-Based Unlocking",
      description:
        "Schedule messages to unlock at precise moments in the future",
      gradient: "from-orange-400 via-orange-500 to-orange-600",
    },
    {
      icon: Shield,
      title: "Privacy Controls",
      description: "Choose between private personal messages or public sharing",
      gradient: "from-purple-400 via-purple-500 to-purple-600",
    },
    {
      icon: MessageCircle,
      title: "Future Self Messaging",
      description:
        "Send messages to your future self for motivation and reminders",
      gradient: "from-yellow-400 via-yellow-500 to-yellow-600",
    },
    {
      icon: Share2,
      title: "Smart Sharing",
      description:
        "Share time-locked messages with friends, family, or the world",
      gradient: "from-pink-400 via-pink-500 to-pink-600",
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
    <div className="min-h-screen bg-orange-50">
      {/* Navbar */}
      <nav className="bg-transparent border-b border-white/10 sticky top-0 z-50 backdrop-blur-xl backdrop-saturate-150 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3 group">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-red-500 bg-clip-text text-transparent tracking-tight">
                    Forá
                  </span>
                  <span className="text-xs font-medium text-slate-900 tracking-wide uppercase -mt-1">
                    Time Capsule
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("why-timelock")}
                className="relative text-slate-600 hover:text-slate-900 transition-all duration-200 font-medium group py-2"
              >
                Why Forá
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300"></div>
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="relative text-slate-600 hover:text-slate-900 transition-all duration-200 font-medium group py-2"
              >
                Features
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300"></div>
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="relative text-slate-600 hover:text-slate-900 transition-all duration-200 font-medium group py-2"
              >
                How It Works
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300"></div>
              </button>
              <button
                onClick={() => scrollToSection("waitlist")}
                className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white font-semibold px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-slate-900/25 transition-all duration-300 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Join Waitlist</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-slate-200/50 py-6 bg-gradient-to-b from-white/50 to-slate-50/50 backdrop-blur-sm">
              <div className="flex flex-col space-y-6">
                <button
                  onClick={() => scrollToSection("why-timelock")}
                  className="text-slate-600 hover:text-slate-900 transition-colors font-medium text-left py-2 hover:pl-2 duration-200"
                >
                  Why Forá
                </button>
                a
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-slate-600 hover:text-slate-900 transition-colors font-medium text-left py-2 hover:pl-2 transition-all duration-200"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-slate-600 hover:text-slate-900 transition-colors font-medium text-left py-2 hover:pl-2 transition-all duration-200"
                >
                  How It Works
                </button>
                <button
                  onClick={() => scrollToSection("cta")}
                  className="text-slate-600 hover:text-slate-900 transition-colors font-medium text-left py-2 hover:pl-2 transition-all duration-200"
                >
                  Get Started
                </button>
                <button
                  onClick={() => scrollToSection("")}
                  className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white font-semibold px-6 py-3 rounded-full hover:shadow-lg hover:shadow-slate-900/25 transition-all duration-300 w-fit overflow-hidden group mt-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Join Waitlist</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Hero Section */}
      <section className="bg-orange-50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
                  Own{" "}
                  <span className="bg-red-600 text-white px-4 py-2 rounded-lg inline-block">
                    Every Moment
                  </span>
                  <br />
                  with Forá
                </h1>
              </div>

              <div className="space-y-4 text-lg text-gray-600 max-w-xl">
                <p>
                  Unlock the power of time. With Forá, experience instant, time
                  controlled messaging delivered precisely when it matters. Our
                  advanced message scheduling system is always ready, designed
                  around your timeline with smart unlocking and built in
                  delivery guidance. Send with confidence. Schedule with
                  precision.
                </p>
                <p>
                  Communicate confidently, with{" "}
                  <span className="font-semibold text-gray-900">
                    Forá - the Time Messaging app you'll ever need.
                  </span>
                </p>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => scrollToSection("waitlist")}
                  className="bg-black text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-gray-800 transition-colors"
                >
                  Join Waitlist
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                {/* Phone mockups */}
                <div className="relative">
                  {/* Main phone */}
                  <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-3 transform rotate-3 hover:rotate-0 transition-transform duration-500 border border-gray-100 relative">
                    <div className="bg-gray-50 rounded-2xl p-6 h-96 relative overflow-hidden">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg flex items-center justify-center">
                            <Clock className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm font-semibold text-gray-800">
                            Forá Messages
                          </span>
                        </div>
                        <div className="flex space-x-1">
                          <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                          <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                          <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                        </div>
                      </div>

                      {/* Message Cards */}
                      <div className="space-y-3">
                        {/* First Message Card */}
                        <div className="bg-white rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-pink-100 to-pink-50 rounded-xl flex items-center justify-center">
                                <span className="text-pink-600 text-sm">
                                  😊
                                </span>
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-gray-900">
                                  Good Morning!
                                </div>
                                <div className="text-xs text-gray-500">
                                  Unlocks in 2 hours
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                              <Lock className="w-4 h-4 text-gray-400" />
                            </div>
                          </div>
                        </div>

                        {/* Second Message Card */}
                        <div className="bg-white rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-xl flex items-center justify-center">
                                <span className="text-yellow-600 text-sm">
                                  ☀️
                                </span>
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-gray-900">
                                  Daily Motivation
                                </div>
                                <div className="text-xs text-gray-500">
                                  Ready to unlock
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              <Unlock className="w-4 h-4 text-green-500" />
                            </div>
                          </div>
                        </div>

                        {/* Third Message Card */}
                        <div className="bg-white rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl flex items-center justify-center">
                                <span className="text-purple-600 text-sm">
                                  🎉
                                </span>
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-gray-900">
                                  Birthday Wish
                                </div>
                                <div className="text-xs text-gray-500">
                                  Unlocks Dec 25
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                              <Lock className="w-4 h-4 text-gray-400" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Subtle background decoration */}
                      <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-orange-100/30 to-pink-100/30 rounded-full blur-xl"></div>
                      <div className="absolute bottom-8 left-4 w-12 h-12 bg-gradient-to-tl from-purple-100/40 to-blue-100/40 rounded-full blur-lg"></div>
                    </div>
                  </div>

                  {/* Secondary phone */}
                  <div className="absolute -right-4 top-12 bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.12)] p-3 transform -rotate-6 hover:rotate-0 transition-transform duration-500 scale-75 border border-gray-100">
                    <div className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-4 h-64 relative overflow-hidden">
                      {/* Header */}
                      <div className="text-center mb-4">
                        <div className="flex items-center justify-center space-x-2 mb-2">
                          <div className="w-5 h-5 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center">
                            <MessageCircle className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm font-semibold text-gray-700">
                            Chat
                          </span>
                        </div>
                      </div>

                      {/* Chat Messages */}
                      <div className="space-y-3">
                        <div className="bg-green-500 text-white p-3 rounded-2xl rounded-tl-md text-xs font-medium shadow-sm max-w-[80%]">
                          Hey Rohan👋
                        </div>
                        <div className="bg-slate-400 border p-3 rounded-2xl rounded-tr-md text-xs text-white shadow-sm ml-auto max-w-[80%]">
                          Ready for your surprise message?
                        </div>
                        <div className="bg-green-500 text-white p-3 rounded-2xl rounded-tl-md text-xs font-medium shadow-sm max-w-[80%]">
                          It's waiting for you! ✨
                        </div>
                      </div>

                      {/* Subtle background decoration */}
                      <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-purple-100/50 to-blue-100/50 rounded-full blur-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-4">
        <MarqueeEffect
          direction="left"
          baseVelocity={-1}
          className="bg-red-400 text-white   py-2"
        >
          Built with purpose • Driven by curiosity • Designed to make a
          difference • Powered by passion • Ideas over hype • Local minds,
          global impact
        </MarqueeEffect>
        <MarqueeEffect
          direction="left"
          baseVelocity={-1}
          className="bg-indigo-400 text-white py-2"
        >
          Forá – Unlock the future • Smart systems, simple UX • Tools that add
          real value • Messaging reimagined • Apps with soul • Technology that
          speaks human
        </MarqueeEffect>
        <MarqueeEffect
          direction="left"
          baseVelocity={-1}
          className="bg-amber-400 text-white py-2"
        >
          A team of friends with big ideas • Engineers, designers, dreamers •
          Breaking things to build better • Constantly experimenting • Rooted in
          localhost, aimed at the world
        </MarqueeEffect>
      </div>
      <section id="why-timelock" className="py-20 px-4 bg-orange-50">
        <Component />
      </section>

      {/* Features Section */}
      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-orange-50">
        <BouncyCardsFeatures />
      </section>
      <section
        id="how-it-works"
        className="py-20 px-4 bg-orange-50 relative py-32 px-4 bg-orange-50"
      >
        <HowTimeCapsuleWorks />
      </section>

      {/* CTA Section */}
      <section
        id="waitlist"
        className="relative py-32 px-4 bg-orange-50 overflow-hidden"
      >
        {/* Card */}
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="relative bg-white/80 backdrop-blur-xl border border-slate-200 rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-16 transition-all duration-700 group hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)]">
            {/* Top Accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-px w-32 h-1 bg-gradient-to-r from-transparent via-slate-900 to-transparent rounded-full"></div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/70 backdrop-blur-md border border-slate-300 rounded-full text-sm font-semibold text-slate-600 uppercase tracking-wider mb-10 shadow-sm group-hover:bg-white/80 transition">
              Early Access
            </div>

            {/* Heading */}
            <h2 className="text-5xl md:text-7xl font-light mb-8 text-slate-800 leading-tight tracking-tight">
              Ready to Message
              <br />
              <span className="text-slate-400 font-normal">the Future?</span>
            </h2>

            {/* Description */}
            <p className="text-xl md:text-2xl text-slate-600 mb-14 max-w-3xl mx-auto leading-relaxed font-light">
              Create meaningful connections across time.
              <br />
              Your future self is waiting.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <button
                onClick={() => setShowModal(true)}
                className="group px-10 py-4 bg-slate-900 text-white text-lg font-semibold rounded-xl transition-transform duration-300 hover:bg-slate-800 hover:scale-105 shadow-md min-w-[200px]"
              >
                Get Early Access
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-3xl p-8 max-w-md w-full relative mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>

            {!submitted ? (
              <>
                <h3 className="text-2xl font-semibold mb-6 text-center">
                  Join the Waitlist
                </h3>
                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                  <button
                    onClick={handleWaitlistSubmit}
                    className="mt-4 bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-slate-800 transition"
                  >
                    Join Waitlist
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-4">
                  You're on the list!
                </h3>
                <p className="mb-6 text-gray-600">
                  We'll let you know when it's your turn to try Forá.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setShowModal(false);
                  }}
                  className="bg-slate-900 text-white py-2 px-6 rounded-xl font-semibold hover:bg-slate-800 transition"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <footer className="bg-zinc-900 border-t border-zinc-800 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent mb-6">
                Forá
              </h3>
              <p className="text-zinc-300 text-lg leading-relaxed mb-8 max-w-md">
                The future of messaging is here. Connect with yourself and
                others across time.
              </p>
            </div>

            {/* Company Links */}

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold text-white mb-6">Legal</h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-zinc-300 hover:text-white transition-colors duration-200"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms-and-conditions"
                    className="text-zinc-300 hover:text-white transition-colors duration-200"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-zinc-800 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <p className="text-zinc-400 text-sm">
                Made with ❤️ from 127.0.0.1
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
