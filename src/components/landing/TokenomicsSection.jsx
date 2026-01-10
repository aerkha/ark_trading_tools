import React from 'react';
import { motion } from 'framer-motion';

// Data Alokasi Token yang sebenarnya (Standar Project Utility)
const tokenomics = [
  { label: 'Liquidity Pool', percentage: 100, color: 'from-cyan-400 to-cyan-600' },
  { label: 'Community & Airdrop', percentage: 0, color: 'from-purple-400 to-purple-600' },
  { label: 'Marketing & Partnerships', percentage: 0, color: 'from-green-400 to-green-600' },
  { label: 'Development & Team', percentage: 0, color: 'from-orange-400 to-orange-600' },
  { label: 'CEX Listing Reserve', percentage: 0, color: 'from-pink-400 to-pink-600' },
];

export default function TokenomicsSection() {
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
              Token
            </span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Allocation
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            100% Fairlaunch - Community driven tokenomics.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Donut Chart Visual */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Neumorphic circle background */}
              <div className="absolute inset-0 rounded-full
                bg-gradient-to-br from-[#1e1e2f] to-[#12121c]
                shadow-[20px_20px_60px_#0d0d14,-20px_-20px_60px_#252538]
                border border-white/5"
              />
              
              {/* Inner circle */}
              <div className="absolute inset-8 md:inset-12 rounded-full
                bg-gradient-to-br from-[#12121c] to-[#1e1e2f]
                shadow-[inset_8px_8px_20px_#0d0d14,inset_-8px_-8px_20px_#252538]
                flex items-center justify-center flex-col"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  1B
                </div>
                <div className="text-gray-500 text-sm md:text-base">Total Supply</div>
              </div>

              {/* Animated ring segments */}
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                {tokenomics.map((item, i) => {
                  const offset = tokenomics.slice(0, i).reduce((acc, t) => acc + t.percentage, 0);
                  const circumference = 2 * Math.PI * 40;
                  const strokeDasharray = (item.percentage / 100) * circumference;
                  const strokeDashoffset = -(offset / 100) * circumference;
                  
                  return (
                    <motion.circle
                      key={i}
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      strokeWidth="8"
                      className={`stroke-current ${
                        item.color.includes('cyan') ? 'text-cyan-500' : 
                        item.color.includes('purple') ? 'text-purple-500' :
                        item.color.includes('pink') ? 'text-pink-500' :
                        item.color.includes('orange') ? 'text-orange-500' : 'text-green-500'
                      }`}
                      strokeDasharray={`${strokeDasharray} ${circumference}`}
                      strokeDashoffset={strokeDashoffset}
                      initial={{ strokeDasharray: `0 ${circumference}` }}
                      whileInView={{ strokeDasharray: `${strokeDasharray} ${circumference}` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                    />
                  );
                })}
              </svg>
            </div>
          </motion.div>

          {/* Distribution List */}
          <div className="space-y-4">
            {tokenomics.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-5 rounded-2xl
                  bg-gradient-to-br from-[#1e1e2f] to-[#12121c]
                  shadow-[8px_8px_20px_#0d0d14,-8px_-8px_20px_#252538]
                  border border-white/5
                  hover:border-white/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-semibold">{item.label}</span>
                  <span className={`text-lg font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.percentage}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-[#12121c] overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Token Info & Tax (Pengganti Pricing) */}
        <motion.div
          className="mt-16 grid sm:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            { label: 'Network', value: 'Solana' },
            { label: 'Buy / Sell Tax', value: '0% / 0%' },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl
                bg-gradient-to-br from-[#1e1e2f] to-[#12121c]
                shadow-[8px_8px_20px_#0d0d14,-8px_-8px_20px_#252538]
                border border-white/5"
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {item.value}
              </div>
              <div className="text-gray-500 mt-1">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}