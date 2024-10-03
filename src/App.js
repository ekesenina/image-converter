import React from 'react';
import ThemeContextProvider from './ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import ImageConverter from './components/ImageConverter';

function App() {
  return (
    <ThemeContextProvider>
      <div className="app">
        <ThemeSwitcher />
        <ImageConverter />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
