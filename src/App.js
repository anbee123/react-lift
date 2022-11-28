import React, { useState } from 'react';
import './styles.css';
import imagesArr from './imageData';
// import child componentss
import BigImage from './BigImage';
import SmallImage from './SmallImage';

export default function App() {
  // updating state causes the comp to re-render
  const [bigImage, setBigImage] = useState(imagesArr[0].img);

  const handleClick = (imgUrl) => {
    setBigImage(imgUrl);
  };
  // array iterators: map, forEach, filter, reduce
  const images = imagesArr.map((image, index) => {
    return (
      <SmallImage
        // key is only required inside of a map
        key={index}
        // {...image}
        img={image.img}
        city={image.city}
        bigImage={bigImage}
        // this is how we lift state..by passing down a function
        handleClick={handleClick}
      />
    );
  });

  console.log('App - images', images);

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">{images}</div>
        {/* image is a prop (aka property) */}
        <BigImage image={bigImage} />
        {/* <img src={bigImage} id="bigimage" alt="bigImaage" /> */}
      </div>
    </div>
  );
}
