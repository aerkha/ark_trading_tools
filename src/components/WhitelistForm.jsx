import React, { useState } from 'react';

// GANTI URL INI DENGAN URL DARI GOOGLE APPS SCRIPT ANDA
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyXu1UvsuXnr2UER2fX5s2Tvpat97KzzTGhLMK8Fp_bhKHM8D0jfaFupG2jL9K0iZR24A/exec"; 

const WhitelistForm = () => {
  const [formData, setFormData] = useState({
    Telegram_Username: '',
    Email: '',
    Wallet: '',
    Network: 'BSC',
    Amount: ''
  });
  const [status, setStatus] = useState(null); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Kita pakai FormData object agar kompatibel dengan Google Apps Script
    const formBody = new FormData();
    for (const key in formData) {
      formBody.append(key, formData[key]);
    }

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formBody
      });
      
      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-[#12121c] flex items-center justify-center p-4">
        <div className="bg-slate-800/50 p-8 rounded-2xl border border-green-500/50 backdrop-blur-sm text-center max-w-md w-full">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-white mb-2">Registration Successful!</h2>
          <p className="text-slate-400">Your spot has been reserved.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-6 text-cyan-400 hover:text-cyan-300 underline"
          >
            Register another wallet
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#12121c] flex items-center justify-center p-4 font-sans text-slate-200 relative overflow-hidden">
      
      {/* Background Effects (Copy dari Home.jsx biar senada) */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 bg-slate-900/60 p-8 rounded-2xl shadow-2xl border border-slate-700/50 w-full max-w-lg backdrop-blur-xl">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Join Whitelist
          </h1>
          <p className="text-slate-400 text-sm mt-2">Secure your allocation for Ark Signal Token</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Telegram Username */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Telegram Username</label>
            <input 
              type="text" 
              name="Username"
              placeholder="@username"
              required
              className="w-full bg-slate-800/50 border border-slate-600/50 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 transition"
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email Address</label>
            <input 
              type="email" 
              name="Email"
              placeholder="you@example.com"
              required
              className="w-full bg-slate-800/50 border border-slate-600/50 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 transition"
              onChange={handleChange}
            />
          </div>

          {/* Wallet Address */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">USDT Wallet Address</label>
            <input 
              type="text" 
              name="Wallet"
              placeholder="0x..."
              required
              className="w-full bg-slate-800/50 border border-slate-600/50 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 transition"
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Network */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Network</label>
              <select 
                name="Network" 
                className="w-full bg-slate-800/50 border border-slate-600/50 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400"
                onChange={handleChange}
              >
                <option value="BSC">BSC (BEP20)</option>
                <option value="BASE">BASE</option>
                <option value="ETH">ETH (ERC20)</option>
                <option value="TRX">TRON (TRC20)</option>
              </select>
            </div>

            {/* Amount */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Fund Amount ($)</label>
              <input 
                type="number" 
                name="Amount"
                placeholder="Min 50"
                min="50"
                required
                className="w-full bg-slate-800/50 border border-slate-600/50 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 transition"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={status === 'loading'}
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold py-3 rounded-lg transition transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed mt-4 shadow-lg shadow-cyan-500/20"
          >
            {status === 'loading' ? 'Processing...' : 'JOIN WHITELIST'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default WhitelistForm;