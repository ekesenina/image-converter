import React, { useState } from 'react';
import { convertImagesToWebP } from '../utils/imageConversion';

function ImageConverter() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [convertedFiles, setConvertedFiles] = useState([]);
  const [previews, setPreviews] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);

    // Освобождаем предыдущие URL
    previews.forEach((url) => URL.revokeObjectURL(url));

    // Создаем новые превью изображений
    const previewsArray = files.map((file) => URL.createObjectURL(file));
    setPreviews(previewsArray);
  };

  const convertImages = async () => {
    const quality = 1; // Качество по умолчанию
    const results = await convertImagesToWebP(selectedFiles, quality);
    setConvertedFiles(results);
    // Очистка выбранных файлов после конвертации
    setSelectedFiles([]);
    setPreviews([]);
  };

  const downloadFile = (file) => {
    const url = URL.createObjectURL(file);
    const link = document.createElement('a');

    link.href = url;
    link.download = file.name;

    // Триггерим клик для открытия диалога сохранения файла
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="app__container">
      <h1 className="app__container__title">Конвертер изображений в WebP</h1>
      <div className="app__container__uploader">
        <div className="app__container__uploader__box glow">
          <div className="block">
            <label htmlFor="file-input" className="app__container__uploader__box__button block__content">
              Выбрать изображения
            </label>
          </div>
          <input
            id="file-input"
            type="file"
            multiple
            accept="image/png, image/jpeg"
            onChange={handleFileChange}
            className="app__container__uploader__input"
          />
        </div>
        <div className="app__container__uploader__preview">
          {previews.map((src, index) => (
            <div key={index} className="app__container__uploader__preview__item">
              <img src={src} alt={`preview-${index}`} className="app__container__uploader__preview__item__img" />
            </div>
          ))}
        </div>
      </div>
      <div className="app__container__convertButton glow">
        <button className="app__container__convertButton__layout block" onClick={convertImages} disabled={selectedFiles.length === 0}>
          <p className="app__container__convertButton__layout__text block__content">
            Конвертировать в WebP
          </p>
        </button>
      </div>
      <div className="app__container__converted">
        {convertedFiles.map((file, index) => (
          <div key={index} className="app__container__converted__item">
            <img src={URL.createObjectURL(file)} alt={`converted-${index}`} className="app__container__converted__item__img"/>
            <div className=" glow">
              <div className=" block">
                  <button onClick={() => downloadFile(file)} className="app__container__converted__item__button">Скачать изображение</button>
                </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageConverter;
