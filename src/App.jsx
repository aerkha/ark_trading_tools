import React from 'react';
import Home from './Home';
import WhitelistForm from './components/WhitelistForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman Utama (Landing Page) */}
        <Route path="/" element={<Home />} />
        
        {/* Halaman Whitelist (Formulir) */}
        <Route path="/whitelist" element={<WhitelistForm />} />
      </Routes>
    </Router>
  );
}

export default App;