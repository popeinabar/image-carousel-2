import React, { useState } from 'react'
import { images } from "../data/CarouselData";
import "./Carousel.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function CarouselHooks() {
    const [currentImage, nextImage] = useState(0);

    

    const prev = () => {
    
      const index = currentImage===0?images.length-1:currentImage-1
     
      nextImage(index);
    };

    const next = () => {
      
      const index = currentImage===images.length-1?0:currentImage+1
      nextImage(index);
    };

    let data = images[currentImage];
  return (
    <div className='slider'>
      <nav id='back-nav'>
      <ArrowBackIosIcon className="back-arrow" onClick={prev} />
      </nav>
      <nav id="next-nav">
           <ArrowForwardIosIcon className="next-arrow" onClick={next} />
           </nav>
      <h1 id='title'>{data.title}</h1>
      <h3 id='subtitle'>{data.subtitle}</h3>

      <img className='slide-active' src={data.img}/>
    </div>
  )
}

export default CarouselHooks