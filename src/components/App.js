import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { getImages } from '../api/unsplash';
import ImageList from './ImageList';

const App = () => {
  const [images, setImages] = useState([]);
  const onSubmit = async (term) => {
    const results = await getImages(term);
    setImages(results);
  }
  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <SearchBar onSubmit={onSubmit} />
      <p>Found: {images.length} images</p>
      <ImageList images={images}/>
    </div>
  );
};
export default App;