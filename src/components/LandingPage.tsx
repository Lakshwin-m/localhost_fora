
import React, { useState, useEffect } from 'react';
import { Clock, Lock, Unlock, Share2, MessageCircle, Calendar, Shield, Zap, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const LandingPage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [unlockedMessages, setUnlockedMessages] = useState<number[]>([]);

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
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: Shield,
      title: "Privacy Controls",
      description: "Choose between private personal messages or public sharing",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: MessageCircle,
      title: "Future Self Messaging",
      description: "Send messages to your future self for motivation and reminders",
      color: "from-green-500 to-teal-400"
    },
    {
      icon: Share2,
      title: "Smart Sharing",
      description: "Share time-locked messages with friends, family, or the world",
      color: "from-orange-500 to-red-400"
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
    <div className="min-h-screen bg-gradient-to-br from-dark-bg via-dark-card to-dark-surface text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-purple/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-neon-blue/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-neon-pink/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Messages That
              <span className="block text-gradient">Unlock the Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Schedule messages to yourself or others with precise time controls and privacy settings. 
              Experience communication that transcends time.
            </p>
          </div>

          {/* Interactive Message Preview */}
          <div className="relative mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-8 max-w-md mx-auto hover-lift">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-gray-400">Future Message</span>
                </div>
                <div className="flex items-center space-x-1 text-neon-blue">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs">{currentTime.toLocaleTimeString()}</span>
                </div>
              </div>
              <div className="text-left">
                <p className="text-gray-300 mb-2">"Remember to celebrate the small wins..."</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Unlocks in 2 days</span>
                  <Lock className="w-4 h-4 text-neon-purple" />
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-neon-purple to-neon-blue hover:from-neon-blue hover:to-neon-purple text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow"
            >
              Start Time Traveling
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why This App Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why <span className="text-gradient">TimeLock</span> Changes Everything
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Traditional messaging is instant. But what if you could control when your message appears? 
              What if you could send wisdom to your future self or surprise someone at the perfect moment?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card hover-lift group">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every feature designed to give you complete control over your messages through time
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="glass-card p-6 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-neon-purple to-neon-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Precision Timing</h3>
                    <p className="text-gray-300">Set exact dates and times down to the minute. Schedule messages for birthdays, anniversaries, or important milestones.</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-neon-pink to-neon-purple rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Advanced Privacy</h3>
                    <p className="text-gray-300">Choose who can see your messages. Keep them private, share with friends, or make them public for the world to discover.</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Social Time Capsules</h3>
                    <p className="text-gray-300">Create shared experiences with friends and family. Send group messages that unlock simultaneously for everyone.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center text-white">Live Message Preview</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((id) => (
                    <div key={id} className={`p-4 rounded-lg border transition-all duration-500 ${
                      unlockedMessages.includes(id) 
                        ? 'bg-gradient-to-r from-green-500/20 to-teal-500/20 border-green-500/50 animate-message-unlock' 
                        : 'bg-gray-800/50 border-gray-600/50'
                    }`}>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-300">Message {id}</span>
                        {unlockedMessages.includes(id) ? (
                          <Unlock className="w-4 h-4 text-green-400" />
                        ) : (
                          <Lock className="w-4 h-4 text-gray-400" />
                        )}
                      </div>
                      <p className="text-xs text-gray-400 mt-1">
                        {unlockedMessages.includes(id) ? 'Unlocked!' : 'Locked until future date'}
                      </p>
                    </div>
                  ))}
                </div>
                <Button 
                  onClick={() => simulateUnlock(Math.floor(Math.random() * 3) + 1)}
                  className="w-full mt-6 bg-gradient-to-r from-neon-purple to-neon-blue hover:from-neon-blue hover:to-neon-purple"
                >
                  Simulate Unlock
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Four simple steps to send your message into the future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="glass-card p-8 hover-lift group">
                  <div className="w-16 h-16 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-neon-pink rounded-full flex items-center justify-center text-sm font-bold text-white">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-neon-blue" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Ready to Message the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already using TimeLock to create meaningful connections across time. 
              Your future self is waiting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-neon-purple to-neon-blue hover:from-neon-blue hover:to-neon-purple text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Early Access
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white px-8 py-4 rounded-full text-lg transition-all duration-300"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-700/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-gradient mb-4">TimeLock</h3>
              <p className="text-gray-300 mb-4">
                The future of messaging is here. Connect with yourself and others across time.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:text-white">
                  Twitter
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:text-white">
                  Discord
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:text-white">
                  GitHub
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700/50 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TimeLock. All rights reserved. Built for the future.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
