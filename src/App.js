// 1. IMPORT useState
import { useState } from "react";
import React from "react";
import "./styles.css";
// 2. IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr
import imagesArr from "./imageData.js";
import BigImage from "./BigImage.js";
import SmallImage from "./SmallImage";

export default function App() {
  // 3. USE useState TO CREATE  [bigImage, setBigImage]
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY
  const [bigImage, setBigImage] = useState(imagesArr[0].img);

  // 4. CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL
  const handleClick = (imgUrl) => {
    setBigImage(imgUrl);
  };

  // 5. CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL
  const images = imagesArr.map((image, index) => {
    return (
      <SmallImage 
      className={image.class}
      src ={image.img}
      alt ={image.alt }
      handleClick={handleClick}
      key={index}
      />
    );
  });

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        {/* 6. RENDER THE IMAGES ARRAY  */}
        <div id="thumbnails">{images}</div>
        {/* 7. THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}
        {/* <img src={bigImage} id="bigimage" alt="bigImage" /> */}
        <BigImage image ={bigImage} />
      </div>
    </div>
  );
}
