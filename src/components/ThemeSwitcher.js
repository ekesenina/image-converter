import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import './ThemeSwitcher.scss';

function ThemeSwitcher() {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-switcher">
      <label className="switch">
        <input type="checkbox" checked={isDarkTheme} onChange={toggleTheme} />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default ThemeSwitcher;
