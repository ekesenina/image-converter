import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

function ThemeSwitcher() {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="app__themeSwitcher">
      <label className="app__themeSwitcher__switch">
        <input className="app__themeSwitcher__switch__checkbox" type="checkbox" checked={isDarkTheme} onChange={toggleTheme} />
        <span className="app__themeSwitcher__switch__slider"></span>
      </label>
    </div>
  );
}

export default ThemeSwitcher;
