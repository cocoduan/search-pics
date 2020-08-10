import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = (props) => {
  return (
    <div>
      <ul className="image-list">
        {
          props.images.map(image => (
            <ImageCard key={image.id} image={image} />
          ))
        }
      </ul>
    </div>
  )
}
export default ImageList;