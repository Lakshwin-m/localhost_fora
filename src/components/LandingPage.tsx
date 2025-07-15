import React, { useState, useEffect } from 'react';
import { Clock, Lock, Unlock, Share2, MessageCircle, Calendar, Shield, Zap, Users, CheckCircle, ArrowRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
      setUnlockedMessages(prev => [...prev, messageId]);
    }, 2000);
  };

  const features = [
    {
      icon: Clock,
      title: "Time-Based Unlocking",
      description: "Schedule messages to unlock at precise moments in the future",
      gradient: "from-orange-400 via-orange-500 to-orange-600",
      mockup: {
        title: "Morning Reminder",
        subtitle: "Unlocks in 2 hours",
        time: "8:00 AM"
      }
    },
    {
      icon: Shield,
      title: "Privacy Controls",
      description: "Choose between private personal messages or public sharing",
      gradient: "from-purple-400 via-purple-500 to-purple-600",
      mockup: {
        title: "Smart Tracking",
        subtitle: "Track messages securely",
        time: "Private Mode"
      }
    },
    {
      icon: MessageCircle,
      title: "Future Self Messaging",
      description: "Send messages to your future self for motivation and reminders",
      gradient: "from-yellow-400 via-yellow-500 to-yellow-600",
      mockup: {
        title: "Personal Growth",
        subtitle: "Messages tailored for you",
        time: "Daily"
      }
    },
    {
      icon: Share2,
      title: "Smart Sharing",
      description: "Share time-locked messages with friends, family, or the world",
      gradient: "from-pink-400 via-pink-500 to-pink-600",
      mockup: {
        title: "Group Messages",
        subtitle: "Share with loved ones",
        time: "Family"
      }
    }
  ];

  const steps = [
    {
      step: 1,
      title: "Create Your Message",
      description: "Write a message to yourself or others",
      icon: MessageCircle
    },
    {
      step: 2,
      title: "Set the Unlock Time",
      description: "Choose exactly when your message will be revealed",
      icon: Calendar
    },
    {
      step: 3,
      title: "Configure Privacy",
      description: "Decide if it's private or public",
      icon: Shield
    },
    {
      step: 4,
      title: "Send to the Future",
      description: "Your message travels through time",
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 text-center py-3 px-4">
        <p className="text-sm text-gray-700">
          <span className="underline cursor-pointer hover:text-purple-600">Try TimeLock risk free with our 14-day free trial!</span>
        </p>
      </div>

      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                TimeLock
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">Features & Pricing</a>
                <a href="#" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">📱 Gift TimeLock</a>
                <a href="#" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">Blog</a>
                <a href="#" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">What's New?</a>
              </div>
            </div>

            <div className="hidden md:block">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-full font-medium">
                Get Started For Free
              </Button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-purple-600"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Features & Pricing</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-purple-600">📱 Gift TimeLock</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Blog</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-purple-600">What's New?</a>
              <Button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full">
                Get Started For Free
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-100 via-pink-50 to-purple-100 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                  Message Chaos Stops
                </h1>
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mt-2">
                  Here. Meet 🔮 TimeLock.
                </h1>
              </div>
              
              <div className="space-y-4 text-lg text-gray-600 max-w-xl">
                <p>
                  Get instant, time-controlled messaging the moment you need it. TimeLock has{' '}
                  <span className="font-semibold text-gray-900">award-winning, 24/7 message scheduling</span>{' '}
                  tailored to your timeline with smart unlocking and guidance.
                </p>
                <p>
                  Communicate confidently, with{' '}
                  <span className="font-semibold text-gray-900">the only time-messaging app you'll ever need.</span>
                </p>
              </div>

              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-full text-lg"
                >
                  Get Started For Free
                </Button>
                <p className="text-sm text-gray-500">Available on: 📱 💻</p>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                {/* Phone mockups */}
                <div className="relative">
                  {/* Main phone */}
                  <div className="bg-white rounded-3xl shadow-2xl p-2 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="bg-gradient-to-b from-blue-50 to-white rounded-2xl p-6 h-96">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
                        <div className="text-sm font-medium text-gray-600">Tracking</div>
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-sm">
                          <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                            <span className="text-pink-600 text-sm">😊</span>
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900">Good Morning!</div>
                            <div className="text-xs text-gray-500">Unlocks in 2 hours</div>
                          </div>
                          <Lock className="w-4 h-4 text-gray-400" />
                        </div>
                        
                        <div className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-sm">
                          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                            <span className="text-yellow-600 text-sm">☀️</span>
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900">Daily Motivation</div>
                            <div className="text-xs text-gray-500">Ready to unlock</div>
                          </div>
                          <Unlock className="w-4 h-4 text-green-500" />
                        </div>
                        
                        <div className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-sm">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                            <span className="text-purple-600 text-sm">🎉</span>
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900">Birthday Wish</div>
                            <div className="text-xs text-gray-500">Unlocks Dec 25</div>
                          </div>
                          <Lock className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Secondary phone */}
                  <div className="absolute -right-4 top-12 bg-white rounded-3xl shadow-xl p-2 transform -rotate-6 hover:rotate-0 transition-transform duration-500 scale-75">
                    <div className="bg-gradient-to-b from-purple-50 to-white rounded-2xl p-4 h-64">
                      <div className="text-center mb-4">
                        <div className="text-sm font-medium text-gray-600">Talk to TimeLock</div>
                      </div>
                      <div className="space-y-2">
                        <div className="bg-purple-500 text-white p-2 rounded-xl text-xs">
                          Hey Rebecca 👋
                        </div>
                        <div className="bg-gray-100 p-2 rounded-xl text-xs">
                          Ready for your surprise message?
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This App Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">TimeLock</span> Changes Everything
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Traditional messaging is instant. But what if you could control when your message appears? 
              What if you could send wisdom to your future self or surprise someone at the perfect moment?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`relative p-8 rounded-3xl bg-gradient-to-br ${feature.gradient} text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 rounded-3xl">
                  <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-white/20"></div>
                  <div className="absolute bottom-8 left-8 w-24 h-24 rounded-full bg-white/10"></div>
                </div>
                
                {/* Content Container */}
                <div className="relative z-10">
                  {/* Header with Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs opacity-75">{feature.mockup.time}</div>
                    </div>
                  </div>

                  {/* Mock Interface */}
                  <div className="bg-white/95 rounded-2xl p-6 mb-6 text-gray-900">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{feature.mockup.title}</div>
                        <div className="text-xs text-gray-500">{feature.mockup.subtitle}</div>
                      </div>
                      <div className="ml-auto">
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">Active</div>
                      <div className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">Scheduled</div>
                    </div>
                  </div>

                  {/* Title and Description */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                    <p className="text-white/90 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every feature designed to give you complete control over your messages through time
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Precision Timing</h3>
                    <p className="text-gray-600">Set exact dates and times down to the minute. Schedule messages for birthdays, anniversaries, or important milestones.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Advanced Privacy</h3>
                    <p className="text-gray-600">Choose who can see your messages. Keep them private, share with friends, or make them public for the world to discover.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-teal-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Social Time Capsules</h3>
                    <p className="text-gray-600">Create shared experiences with friends and family. Send group messages that unlock simultaneously for everyone.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900">Live Message Preview</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((id) => (
                    <div key={id} className={`p-4 rounded-xl border-2 transition-all duration-500 ${
                      unlockedMessages.includes(id) 
                        ? 'bg-gradient-to-r from-green-50 to-teal-50 border-green-200 animate-pulse' 
                        : 'bg-gray-50 border-gray-200'
                    }`}>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Message {id}</span>
                        {unlockedMessages.includes(id) ? (
                          <Unlock className="w-4 h-4 text-green-500" />
                        ) : (
                          <Lock className="w-4 h-4 text-gray-400" />
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {unlockedMessages.includes(id) ? 'Unlocked!' : 'Locked until future date'}
                      </p>
                    </div>
                  ))}
                </div>
                <Button 
                  onClick={() => simulateUnlock(Math.floor(Math.random() * 3) + 1)}
                  className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl"
                >
                  Simulate Unlock
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four simple steps to send your message into the future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center text-sm font-bold text-white">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-purple-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white p-12 rounded-3xl shadow-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Ready to Message the Future?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already using TimeLock to create meaningful connections across time. 
              Your future self is waiting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-full text-lg"
              >
                Get Early Access
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-full text-lg"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent mb-4">TimeLock</h3>
              <p className="text-gray-600 mb-4">
                The future of messaging is here. Connect with yourself and others across time.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-gray-300 text-gray-600 hover:text-gray-900">
                  Twitter
                </Button>
                <Button size="sm" variant="outline" className="border-gray-300 text-gray-600 hover:text-gray-900">
                  Discord
                </Button>
                <Button size="sm" variant="outline" className="border-gray-300 text-gray-600 hover:text-gray-900">
                  GitHub
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2024 TimeLock. All rights reserved. Built for the future.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
