import React from 'react';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, Bell, BarChart3, Shield, Bot } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Analysis',
    description: 'Advanced machine learning algorithms analyze market patterns 24/7 to identify profitable opportunities.',
    color: 'cyan',
  },
  {
    icon: TrendingUp,
    title: 'High Win Rate',
    description: 'Consistent 75%+ win rate backed by historical data and real-time market analysis.',
    color: 'green',
  },
  {
    icon: Bell,
    title: 'Instant Signals',
    description: 'Get real-time trading signals delivered directly to Telegram. Never miss a profitable trade.',
    color: 'purple',
  },
  {
    icon: Bot,
    title: 'Automated Trading',
    description: 'Let our bot execute trades automatically based on proven strategies. Trade while you sleep.',
    color: 'orange',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Detailed performance metrics, profit tracking, and comprehensive trading insights.',
    color: 'yellow',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Your keys & privacy, are stored securely in your local environment.',
    color: 'pink',
  },
];

const colorMap = {
  cyan: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
  orange: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
  purple: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
  yellow: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
  green: 'text-green-400 bg-green-400/10 border-green-400/20',
  pink: 'text-pink-400 bg-pink-400/10 border-pink-400/20',
};

export default function FeaturesSection() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Why Choose
            </span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Ark Trading Tools
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Built with the community in mind. Every feature designed to maximize your gains while keeping you safe.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 rounded-3xl
                bg-gradient-to-br from-[#1e1e2f] to-[#12121c]
                shadow-[12px_12px_30px_#0d0d14,-12px_-12px_30px_#252538]
                hover:shadow-[inset_8px_8px_20px_#0d0d14,inset_-8px_-8px_20px_#252538]
                transition-all duration-500 ease-out
                border border-white/5 hover:border-white/10"
              >
                <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center
                  ${colorMap[feature.color]} border
                  group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}