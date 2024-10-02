import React, { useState } from 'react';
import './App.scss';
import ImageUploader from './components/ImageUploader';
import ImageList from './components/ImageList';
import { convertImagesToWebP } from './utils/imageConversion';

function App() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [convertedFiles, setConvertedFiles] = useState([]);

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




