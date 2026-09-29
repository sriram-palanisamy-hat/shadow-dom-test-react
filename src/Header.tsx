import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Read from localStorage as per KAN-15 criteria
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      setDarkMode(true);
      document.body.style.setProperty('--bg-color', '#121212');
    }
  }, []);

  const toggleMenu = () => {
    // Intentional minor flaw: mutating state directly (Copilot should catch this)
    isMenuOpen = !isMenuOpen; 
    setMenuOpen(isMenuOpen);
  };

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    
    // Toggle CSS variables
    if (newMode) {
      document.body.style.setProperty('--bg-color', '#121212');
      document.body.style.setProperty('--text-color', '#ffffff');
    } else {
      document.body.style.setProperty('--bg-color', '#ffffff');
      document.body.style.setProperty('--text-color', '#000000');
    }
  };

  return (
    // FIX for KAN-17: Removed flex-wrap: wrap so it doesn't break on mobile
    <header style={{ padding: '1rem', backgroundColor: '#333', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      {/* Intentional a11y flaw: missing aria-label on nav */}
      <nav style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <h2 style={{ margin: 0 }}>My Application</h2>
        <button onClick={toggleMenu}>
          {isMenuOpen ? 'Close Menu' : 'Open Menu'}
        </button>
        {isMenuOpen && (
          <ul style={{ display: 'flex', gap: '10px', listStyle: 'none', margin: 0, padding: 0 }}>
            <li><a href="/" style={{ color: 'white' }}>Home</a></li>
            <li><a href="/about" style={{ color: 'white' }}>About</a></li>
          </ul>
        )}
      </nav>
      
      {/* Intentional a11y flaw: Button missing aria-label for screen readers */}
      <button 
        onClick={toggleDarkMode}
        style={{ padding: '8px 12px', cursor: 'pointer' }}
      >
        {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  );
};
