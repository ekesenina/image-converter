import React from 'react';
import ImageItem from './ImageItem';
import './ImageList.scss';

function ImageList({ images }) {
  return (
    <div className="image-list">
      {images.map((file, index) => (
        <ImageItem key={index} file={file} />
      ))}
    </div>
  );
}

export default ImageList;
