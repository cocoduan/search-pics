import React, { useState, useCallback } from 'react';

const ImageCard = (props) => {
  const { alt_description, urls } = props.image;
  const [spans, setSpans] = useState(0);
  const setSpansByHeight = (height) => {
    // divide by 10 b/c `grid-auto-rows: 10px`;
    // and round to the next unit to take the remains into account
    setSpans(Math.ceil(height / 10));
  };
  const ref = useCallback((node) => {
    if (node !== null) {
      node.addEventListener('load', () => setSpansByHeight(node.clientHeight));
    }
    return () => { node.removeEventListener('load', () => setSpansByHeight(node.clientHeight)); }
  }, []);
  return (
    <li style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={ref} alt={alt_description}
        src={urls.regular} />
    </li>
  )
};
export default ImageCard;