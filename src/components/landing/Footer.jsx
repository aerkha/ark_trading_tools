import React from 'react';
import { Send } from 'lucide-react';
import botIcon from '../../assets/bot_icon.png';

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl
              bg-gradient-to-br from-[#1e1e2f] to-[#12121c]
              shadow-[6px_6px_15px_#0d0d14,-6px_-6px_15px_#252538]
              flex items-center justify-center
              border border-cyan-500/10 p-1.5 overflow-hidden"
            >
              <img 
                src={botIcon} 
                alt="Aerkha"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              ARK Trading Tools
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://x.com/aerkha"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl
                bg-gradient-to-br from-[#1e1e2f] to-[#12121c]
                shadow-[6px_6px_15px_#0d0d14,-6px_-6px_15px_#252538]
                hover:shadow-[inset_4px_4px_10px_#0d0d14,inset_-4px_-4px_10px_#252538]
                flex items-center justify-center
                border border-white/5 hover:border-white/10
                transition-all duration-300
                text-gray-400 hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://t.me/arktradingtools"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl
                bg-gradient-to-br from-[#1e1e2f] to-[#12121c]
                shadow-[6px_6px_15px_#0d0d14,-6px_-6px_15px_#252538]
                hover:shadow-[inset_4px_4px_10px_#0d0d14,inset_-4px_-4px_10px_#252538]
                flex items-center justify-center
                border border-white/5 hover:border-white/10
                transition-all duration-300
                text-gray-400 hover:text-blue-400"
            >
              <Send className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-600 text-sm max-w-3xl mx-auto">
            Disclaimer: Trading involves risk and past performance does not guarantee future results. 
            Trade responsibly and never invest more than you can afford to lose.
          </p>
          <p className="text-gray-700 text-sm mt-4">
            © 2026 ARK Trading Tools. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}