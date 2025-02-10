import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      <div className={`toggle-slider ${theme === 'dark' ? 'dark' : 'light'}`}>
        {theme === 'light' ? (
          <FaSun className="toggle-icon" />
        ) : (
          <FaMoon className="toggle-icon" />
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;