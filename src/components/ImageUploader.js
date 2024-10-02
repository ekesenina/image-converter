import React, { useState, useEffect } from 'react';
import './ImageUploader.scss';

function ImageUploader({ onFilesSelected, clearFiles }) {
  const [previews, setPreviews] = useState([]);

  useEffect(() => {
    // Если нужно очистить файлы, освобождаем превью
    if (clearFiles && previews.length > 0) {
      previews.forEach((url) => URL.revokeObjectURL(url));
      setPreviews([]);
    }
  }, [clearFiles, previews]);

  const handleFileChange = (event) => {
    const files = [...event.target.files];
    onFilesSelected(files);

    // Освобождаем предыдущие URL
    previews.forEach((url) => URL.revokeObjectURL(url));

    // Создаем новые превью изображений
    const previewsArray = files.map((file) => URL.createObjectURL(file));
    setPreviews(previewsArray);
  };

  return (
    <div className="image-uploader">
      <label htmlFor="file-input" className="upload-label">
        Выбрать изображения
      </label>
      <input
        id="file-input"
        type="file"
        multiple
        accept="image/png, image/jpeg"
        onChange={handleFileChange}
      />
      <div className="preview-list">
        {previews.map((src, index) => (
          <div key={index} className="preview-item">
            <img src={src} alt={`preview-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageUploader;


































