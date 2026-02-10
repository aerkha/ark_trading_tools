import React from 'react';
import Home from './Home';
import WhitelistForm from './components/WhitelistForm';
import TradingApp from './components/dashboard/TradingApp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whitelist" element={<WhitelistForm />} />
        
        {/* TAMBAHKAN ROUTE INI */}
        <Route path="/trading-app" element={<TradingApp />} /> 
      </Routes>
    </Router>
  );
}

export default App;