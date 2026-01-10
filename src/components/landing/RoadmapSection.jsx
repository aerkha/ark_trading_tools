import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Rocket, Bot, Zap, Globe } from 'lucide-react';

const roadmapData = [
  {
    phase: 'Phase 1',
    title: 'Foundation & Community',
    date: 'Q4 2025',
    icon: Globe,
    status: 'completed',
    items: [
      'Website & Branding Launch',
      'Community Building (Telegram/X)',
      'Free Signal Distribution',
      'Logical based Trading Bot Released'
    ]
  },
  {
    phase: 'Phase 2',
    title: 'Training & Development',
    date: 'Q1 - Q2 2026',
    icon: Zap,
    status: 'current',
    items: [
      'Machine Learning Model Training',
      'Historical Data Backtesting',
      'Private Beta Access for VIPs'
    ]
  },
  {
    phase: 'Phase 3',
    title: 'AI Bot Launch',
    date: 'Q3 2026 (Target)',
    icon: Bot,
    status: 'upcoming',
    highlight: true, // Special highlight for this phase
    items: [
      'Official ML Bot Public Launch', // The main event
      'Automated Trading Integration with Major Crypto Exchanges',
      'Real-time Market Adaptation'
    ]
  }
];

export default function RoadmapSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
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
              Project
            </span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Roadmap
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Our journey to revolutionize trading with Artificial Intelligence.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Connecting Line (Desktop center / Mobile left) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500/20 via-purple-500/20 to-transparent -translate-x-1/2 md:translate-x-0" />

          <div className="space-y-12">
            {roadmapData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot Icon */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full 
                  bg-[#12121c] border-4 border-[#1e1e2f] z-10
                  flex items-center justify-center
                  shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                  <div className={`w-4 h-4 rounded-full ${
                    item.highlight ? 'bg-cyan-400 animate-pulse' : 
                    item.status === 'completed' ? 'bg-green-500' : 'bg-gray-600'
                  }`} />
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  i % 2 === 0 ? 'md:pr-12 text-left' : 'md:pl-12 text-left'
                }`}>
                  <div className={`relative p-8 rounded-3xl group
                    bg-gradient-to-br from-[#1e1e2f] to-[#12121c]
                    shadow-[12px_12px_30px_#0d0d14,-12px_-12px_30px_#252538]
                    border transition-all duration-300
                    ${item.highlight 
                      ? 'border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.15)]' 
                      : 'border-white/5 hover:border-white/10'
                    }
                  `}>
                    {/* Highligh Badge for Bot Launch */}
                    {item.highlight && (
                      <div className="absolute -top-3 -right-3 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold shadow-lg">
                        MAJOR MILESTONE
                      </div>
                    )}

                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-white/5 ${item.highlight ? 'text-cyan-400' : 'text-gray-400'}`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-cyan-500 tracking-wider uppercase">
                          {item.phase} • {item.date}
                        </div>
                        <h3 className="text-xl font-bold text-white mt-1">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {item.items.map((subItem, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm">
                          {item.status === 'completed' ? (
                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                          ) : (
                            <Circle className={`w-4 h-4 mt-0.5 shrink-0 ${item.highlight ? 'text-cyan-400' : 'text-gray-600'}`} />
                          )}
                          <span className={item.highlight ? 'text-gray-200' : ''}>{subItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty Spacer for Layout Balance */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}