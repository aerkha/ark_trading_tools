import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, LinkIcon, Settings, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    step: '01',
    title: 'Join Telegram',
    description: 'Click the Telegram link and join our signal channel to get started with your free trial.',
  },
  {
    icon: LinkIcon,
    step: '02',
    title: 'Download the bot',
    description: 'Run in your local computer.',
  },
  {
    icon: Settings,
    step: '03',
    title: 'Configure Settings',
    description: 'Set your risk preferences, trading pairs, and notification preferences.',
  },
  {
    icon: TrendingUp,
    step: '04',
    title: 'Start Profiting',
    description: 'Receive signals instantly or let the bot trade automatically. Watch your portfolio grow.',
  },
];

export default function HowToBuySection() {
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
              How to Get
            </span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Started
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Start receiving profitable trading signals in minutes
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative"
            >
              {/* Connection line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500/30 to-transparent z-0" />
              )}
              
              <div className="relative h-full p-8 rounded-3xl
                bg-gradient-to-br from-[#1e1e2f] to-[#12121c]
                shadow-[12px_12px_30px_#0d0d14,-12px_-12px_30px_#252538]
                hover:shadow-[inset_8px_8px_20px_#0d0d14,inset_-8px_-8px_20px_#252538]
                transition-all duration-500 ease-out
                border border-white/5 hover:border-cyan-500/20"
              >
                {/* Step number */}
                <div className="absolute -top-3 -right-3 w-12 h-12 rounded-xl
                  bg-gradient-to-br from-cyan-500 to-purple-600
                  flex items-center justify-center
                  shadow-lg shadow-cyan-500/20
                  text-white font-bold text-sm"
                >
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl mb-6
                  bg-gradient-to-br from-[#12121c] to-[#1e1e2f]
                  shadow-[inset_4px_4px_10px_#0d0d14,inset_-4px_-4px_10px_#252538]
                  flex items-center justify-center
                  group-hover:shadow-[4px_4px_10px_#0d0d14,-4px_-4px_10px_#252538]
                  transition-all duration-300"
                >
                  <step.icon className="w-8 h-8 text-cyan-400" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}