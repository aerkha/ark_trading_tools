import React from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle } from 'lucide-react';

export default function CommunitySection() {
  const socials = [
    {
      name: 'X (Twitter)',
      description: 'Follow for market insights and updates',
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      href: 'https://x.com/aerkha',
      color: 'from-gray-600 to-gray-800',
      hoverColor: 'group-hover:text-white',
    },
    {
      name: 'Telegram Bot',
      description: 'Start receiving signals now',
      icon: Send,
      href: 'https://t.me/arktradingtools',
      color: 'from-blue-500 to-blue-700',
      hoverColor: 'group-hover:text-blue-400',
    },
  ];

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
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
              Join the
            </span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Community
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Join thousands of traders receiving profitable signals daily
          </p>
        </motion.div>

        {/* Social Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group block"
            >
              <div className="relative h-full p-10 rounded-3xl
                bg-gradient-to-br from-[#1e1e2f] to-[#12121c]
                shadow-[16px_16px_40px_#0d0d14,-16px_-16px_40px_#252538]
                hover:shadow-[inset_10px_10px_30px_#0d0d14,inset_-10px_-10px_30px_#252538]
                transition-all duration-500 ease-out
                border border-white/5 hover:border-white/10
                overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Icon container */}
                  <div className={`w-20 h-20 rounded-2xl mb-6
                    bg-gradient-to-br from-[#12121c] to-[#1e1e2f]
                    shadow-[inset_6px_6px_15px_#0d0d14,inset_-6px_-6px_15px_#252538]
                    group-hover:shadow-[6px_6px_15px_#0d0d14,-6px_-6px_15px_#252538]
                    flex items-center justify-center
                    transition-all duration-300
                    text-gray-400 ${social.hoverColor}`}
                  >
                    {typeof social.icon === 'function' ? (
                      React.createElement(social.icon)
                    ) : (
                      <social.icon className="w-8 h-8" />
                    )}
                  </div>
                  
                  <h3 className={`text-2xl font-bold text-white mb-2 ${social.hoverColor} transition-colors`}>
                    {social.name}
                  </h3>
                  
                  <p className="text-gray-500">
                    {social.description}
                  </p>

                  {/* Arrow indicator */}
                  <div className="mt-6 flex items-center gap-2 text-gray-500 group-hover:text-cyan-400 transition-colors">
                    <span className="text-sm font-medium">Join Now</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}