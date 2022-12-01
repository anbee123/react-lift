import React from "react";

const SmallImage = ({className,src,alt,handleClick}) => { 
    return (
        <img
        className={className}
        src={src}
        alt={alt}
        onClick={()=> handleClick(src)}

      />

    )
}
export default SmallImage;