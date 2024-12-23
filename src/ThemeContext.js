import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Загружаем тему из локального хранилища при загрузке приложения
  useEffect(() => {
    const theme = localStorage.getItem('isDarkTheme');
    if (theme) {
      setIsDarkTheme(JSON.parse(theme));
    }
  }, []);

  // Сохраняем тему в локальное хранилище при изменении
  useEffect(() => {
    localStorage.setItem('isDarkTheme', isDarkTheme);
    document.documentElement.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
