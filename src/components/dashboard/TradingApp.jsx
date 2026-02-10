import React, { useState, useEffect } from 'react';
import { 
  Play, Square, Activity, Wallet, 
  Settings, Terminal, TrendingUp, AlertCircle 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const TradingApp = () => {
  // --- STATE MANAGEMENT ---
  const [isRunning, setIsRunning] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [pnl, setPnl] = useState(0.00);
  
  // Konfigurasi User
  const [config, setConfig] = useState({
    exchange: 'binance',
    apiKey: '',
    apiSecret: '',
    symbol: 'BTC/USDT',
    timeframe: '15m',
    targetProfit: 1.5, // persen
    stopLoss: 0.5,     // persen
    leverage: 10
  });

  // Log Simulasi (Nanti diganti data real dari Backend Python)
  const [logs, setLogs] = useState([
    { time: '10:00:01', msg: 'System initialized.', type: 'info' }
  ]);

  // --- HANDLER FUNCTIONS ---
  const handleConnectWallet = () => {
    // Simulasi koneksi wallet
    setWalletConnected(true);
    addLog('Wallet 0x71C...9A2 connected successfully.', 'success');
  };

  const toggleBot = () => {
    if (!walletConnected) {
      alert("Please connect wallet first!");
      return;
    }

    if (isRunning) {
      setIsRunning(false);
      addLog('Bot stopping... Closing connections.', 'warning');
    } else {
      // Validasi Input Sederhana
      if (!config.apiKey || !config.apiSecret) {
        alert("API Key & Secret are required!");
        return;
      }
      setIsRunning(true);
      addLog(`Starting Bot on ${config.exchange.toUpperCase()} [${config.symbol}]...`, 'success');
      addLog(`Strategy Loaded: TF ${config.timeframe}, TP ${config.targetProfit}%, SL ${config.stopLoss}%`, 'info');
    }
  };

  const addLog = (msg, type = 'info') => {
    const time = new Date().toLocaleTimeString();
    setLogs(prev => [{ time, msg, type }, ...prev].slice(0, 50));
  };

  const handleChange = (e) => {
    setConfig({ ...config, [e.target.name]: e.target.value });
  };

  // Efek Simulasi PnL Bergerak (Hanya Visual)
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        const change = (Math.random() - 0.45) * 2; // Random fluctuation
        setPnl(prev => prev + change);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="min-h-screen bg-[#0f1016] text-slate-200 font-sans">
      
      {/* --- HEADER --- */}
      <header className="border-b border-slate-800 bg-[#12121c]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-2xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent cursor-pointer">
              ARK TRADER
            </Link>
            <span className="text-xs px-2 py-1 bg-cyan-900/30 text-cyan-400 border border-cyan-500/30 rounded-full">BETA v1.0</span>
          </div>

          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold ${isRunning ? 'bg-green-500/10 text-green-400 border border-green-500/50' : 'bg-slate-800 text-slate-400'}`}>
              <div className={`w-2 h-2 rounded-full ${isRunning ? 'bg-green-400 animate-pulse' : 'bg-slate-500'}`} />
              {isRunning ? 'SYSTEM ACTIVE' : 'SYSTEM IDLE'}
            </div>
            
            <button 
              onClick={handleConnectWallet}
              disabled={walletConnected}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all ${
                walletConnected 
                  ? 'bg-slate-800 text-cyan-400 border border-cyan-500/30 cursor-default'
                  : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg shadow-cyan-900/20'
              }`}
            >
              <Wallet className="w-4 h-4" />
              {walletConnected ? '0x71C...9A2' : 'Connect Wallet'}
            </button>
          </div>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT COLUMN: CONFIGURATION */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* 1. API Configuration Card */}
          <div className="bg-[#1e1e2f] border border-slate-700 rounded-xl p-6 shadow-xl">
            <div className="flex items-center gap-2 mb-6 text-cyan-400">
              <Settings className="w-5 h-5" />
              <h2 className="font-bold text-lg">Exchange Setup</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Exchange</label>
                <select 
                  name="exchange" 
                  value={config.exchange}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:border-cyan-500 outline-none"
                  disabled={isRunning}
                >
                  <option value="binance">Binance Futures</option>
                  <option value="bybit">Bybit</option>
                  <option value="hyperliquid">Hyperliquid (DEX)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">API Key</label>
                <input 
                  type="password" 
                  name="apiKey" 
                  value={config.apiKey}
                  onChange={handleChange}
                  placeholder="Paste API Key"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:border-cyan-500 outline-none placeholder-slate-600"
                  disabled={isRunning}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">API Secret</label>
                <input 
                  type="password" 
                  name="apiSecret" 
                  value={config.apiSecret}
                  onChange={handleChange}
                  placeholder="Paste Secret Key"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:border-cyan-500 outline-none placeholder-slate-600"
                  disabled={isRunning}
                />
              </div>
            </div>
          </div>

          {/* 2. Strategy Configuration Card */}
          <div className="bg-[#1e1e2f] border border-slate-700 rounded-xl p-6 shadow-xl">
            <div className="flex items-center gap-2 mb-6 text-purple-400">
              <Activity className="w-5 h-5" />
              <h2 className="font-bold text-lg">Strategy Parameters</h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Asset Symbol</label>
                <input 
                  type="text" 
                  name="symbol"
                  value={config.symbol}
                  onChange={handleChange} 
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white font-mono"
                  disabled={isRunning}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Timeframe</label>
                <select 
                  name="timeframe"
                  value={config.timeframe}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white"
                  disabled={isRunning}
                >
                  <option value="5m">M5</option>
                  <option value="15m">M15</option>
                  <option value="1h">H1</option>
                  <option value="4h">H4</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Leverage</label>
                <input 
                  type="number" 
                  name="leverage"
                  value={config.leverage}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white"
                  disabled={isRunning}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-green-500 uppercase mb-1">Target Profit (%)</label>
                <input 
                  type="number" 
                  name="targetProfit"
                  value={config.targetProfit}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-green-900/50 text-green-400 rounded-lg p-3"
                  disabled={isRunning}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-red-500 uppercase mb-1">Stop Loss (%)</label>
                <input 
                  type="number" 
                  name="stopLoss"
                  value={config.stopLoss}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-red-900/50 text-red-400 rounded-lg p-3"
                  disabled={isRunning}
                />
              </div>
            </div>

            <button
              onClick={toggleBot}
              className={`w-full mt-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                isRunning 
                  ? 'bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/50'
                  : 'bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]'
              }`}
            >
              {isRunning ? (
                <><Square className="w-5 h-5 fill-current" /> STOP TRADING BOT</>
              ) : (
                <><Play className="w-5 h-5 fill-current" /> RUN AUTO TRADING</>
              )}
            </button>
          </div>

        </div>

        {/* RIGHT COLUMN: MONITORING */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* 1. Live Stats (PnL) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#1e1e2f] border border-slate-700 rounded-xl p-6">
              <p className="text-slate-400 text-xs font-bold uppercase">Realized PnL</p>
              <div className={`text-3xl font-mono font-bold mt-2 ${pnl >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {pnl >= 0 ? '+' : ''}{pnl.toFixed(2)} USDT
              </div>
            </div>
            
            <div className="bg-[#1e1e2f] border border-slate-700 rounded-xl p-6">
              <p className="text-slate-400 text-xs font-bold uppercase">Active Position</p>
              <div className="text-3xl font-mono font-bold mt-2 text-white">
                {isRunning ? 'LONG' : 'NONE'}
              </div>
            </div>

            <div className="bg-[#1e1e2f] border border-slate-700 rounded-xl p-6">
              <p className="text-slate-400 text-xs font-bold uppercase">Server Status</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-ping" />
                <span className="text-xl font-bold text-slate-200">Connected</span>
              </div>
            </div>
          </div>

          {/* 2. Terminal Log */}
          <div className="bg-black/40 border border-slate-800 rounded-xl overflow-hidden h-[500px] flex flex-col font-mono text-sm shadow-2xl">
            <div className="bg-slate-900/80 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-400">
                <Terminal className="w-4 h-4" />
                <span>Ark Bot Console Output</span>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500"></div>
              </div>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-slate-700">
              {logs.length === 0 && <span className="text-slate-600 italic">Waiting for bot to start...</span>}
              {logs.map((log, index) => (
                <div key={index} className="flex gap-3">
                  <span className="text-slate-500">[{log.time}]</span>
                  <span className={`${
                    log.type === 'error' ? 'text-red-400' : 
                    log.type === 'success' ? 'text-green-400' : 
                    log.type === 'warning' ? 'text-yellow-400' : 
                    'text-cyan-200'
                  }`}>
                    {log.type === 'success' ? '✔ ' : log.type === 'error' ? '✖ ' : '> '}
                    {log.msg}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg flex gap-3 items-start">
            <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-200">
              <p className="font-bold mb-1">Safety Notice:</p>
              <p className="opacity-80">
                Your API Keys are encrypted before being sent to our secure server. 
                We never ask for "Withdrawal" permission. Please ensure your API Key only has "Trade" permissions enabled.
              </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default TradingApp;