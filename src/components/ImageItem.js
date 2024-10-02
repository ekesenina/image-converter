import React from 'react';
import './ImageItem.scss';

function ImageItem({ file }) {
  const downloadFile = () => {
    const url = URL.createObjectURL(file);
    const link = document.createElement('a');

    link.href = url;
    link.download = file.name;

    // Триггерим клик для открытия диалога сохранения файла
    link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));

    URL.revokeObjectURL(url);
  };

  return (
    <div className="image-item">
      <img src={URL.createObjectURL(file)} alt={file.name} />
      <button onClick={downloadFile}>Скачать</button>
    </div>
  );
}

export default ImageItem;
