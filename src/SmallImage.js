import React from 'react';

const SmallImage = (props) => {
  return (
    <img
      style={{ border: props.bigImage === props.image.img ? '5px solid green' : '' }}
      src={props.image.img}
      alt={props.image.city}
      // key is only required inside of a map
      key={props.index}
      className="thumb"
      onClick={() => props.handleClick(props.image.img)}
    />
  );
};

export default SmallImage;
