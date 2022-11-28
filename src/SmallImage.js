import React from 'react';

const SmallImage = (props) => {
  return (
    <img
      style={{ border: bigImage === image.img ? '5px solid green' : '' }}
      src={image.img}
      alt={image.city}
      // key is only required inside of a map
      key={index}
      className="thumb"
      onClick={() => handleClick(image.img)}
    />
  );
};

export default SmallImage;
