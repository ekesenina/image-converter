import React, { useContext, useEffect } from 'react';
import './App.scss';
import ImageUploader from './components/ImageUploader';
import ImageList from './components/ImageList';
import ThemeSwitcher from './components/ThemeSwitcher';
import { ThemeContext } from './ThemeContext';
import { convertImagesToWebP } from './utils/imageConversion';

function App() {
  const [selectedFiles, setSelectedFiles] = React.useState([]);
  const [convertedFiles, setConvertedFiles] = React.useState([]);
  const { isDarkTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      isDarkTheme ? 'dark' : 'light'
    );
  }, [isDarkTheme]);

  const handleFilesSelected = (files) => {
    setSelectedFiles(files);
  };

  const convertImages = async () => {
    const quality = 1; // Качество по умолчанию
    const results = await convertImagesToWebP(selectedFiles, quality);
    setConvertedFiles(results);
    // Очистка выбранных файлов после конвертации
    setSelectedFiles([]);
  };

  return (
    <div className="app">
      <ThemeSwitcher />
      <h1>Конвертер изображений в WebP</h1>
      <ImageUploader
        onFilesSelected={handleFilesSelected}
        clearFiles={selectedFiles.length === 0}
      />
      <button onClick={convertImages} disabled={selectedFiles.length === 0}>
        Конвертировать в WebP
      </button>
      <ImageList images={convertedFiles} />
    </div>
  );
}

export default App;
