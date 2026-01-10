import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles } from 'lucide-react';
import botIcon from '../../assets/bot_icon.png';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-cyan-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Floating bot logo */}
        <motion.div
          className="mb-12 inline-block"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="relative">
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-3xl mx-auto
              bg-gradient-to-br from-[#1e1e2f] to-[#12121c]
              shadow-[20px_20px_60px_#0d0d14,-20px_-20px_60px_#252538]
              flex items-center justify-center
              border border-cyan-500/10 p-4"
            >
              <img 
                src={botIcon} 
                alt="Aerkha Trading Bot"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-cyan-400/10 blur-3xl -z-10" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            ARK TRADING TOOLS
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-xl md:text-2xl text-gray-400 mb-4 font-light tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          AI-Powered Trading Signals & Automated Bot
        </motion.p>

        <motion.p
          className="text-gray-500 mb-12 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Professional trading signals delivered instantly. Smart automated trading bot. Maximize your profits with AI-driven market analysis.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="https://whop.com/ark-96ce/" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 rounded-2xl
            bg-gradient-to-br from-[#1e1e2f] to-[#12121c]
            shadow-[8px_8px_24px_#0d0d14,-8px_-8px_24px_#252538]
            hover:shadow-[inset_8px_8px_24px_#0d0d14,inset_-8px_-8px_24px_#252538]
            transition-all duration-300 ease-out
            border border-cyan-500/20 hover:border-cyan-400/40
            flex items-center gap-3"
          >
            <Rocket className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span className="text-white font-semibold">Buy or Try MT5 Trading Bot</span>
          </a>

          <a
            href="https://t.me/Aerkha_signal_bot" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 rounded-2xl
            bg-gradient-to-br from-[#1e1e2f] to-[#12121c]
            shadow-[8px_8px_24px_#0d0d14,-8px_-8px_24px_#252538]
            hover:shadow-[inset_8px_8px_24px_#0d0d14,inset_-8px_-8px_24px_#252538]
            transition-all duration-300 ease-out
            border border-purple-500/20 hover:border-purple-400/40
            flex items-center gap-3"
          >
            <Sparkles className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
            <span className="text-white font-semibold">Get Signals</span>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            //{ label: 'Active Traders', value: '5K+' },
            { label: 'Win Rate', value: '75%' },
            { label: 'Signals Sent', value: '5K+' },
            //{ label: 'Avg ROI', value: '250%' },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl
                bg-gradient-to-br from-[#1e1e2f] to-[#12121c]
                shadow-[8px_8px_24px_#0d0d14,-8px_-8px_24px_#252538]
                border border-white/5"
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}