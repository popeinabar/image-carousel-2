import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
        currentSlide:0
       }

     }

     nextSlide = () => {
      let newSlide =
        this.state.currentSlide === images.length - 1
          ? 0
          : this.state.currentSlide + 1;
      this.setState({ currentSlide: newSlide });
    };
  
    prevSlide = () => {
      let newSlide =
        this.state.currentSlide === 0
          ? images.length - 1
          : this.state.currentSlide - 1;
      this.setState({ currentSlide: newSlide });
    };
    
  render(){
    return(
        <div className="slider">
          <nav id="back-nav">
           <ArrowBackIosIcon className="back-arrow" onClick={this.prevSlide}/>
           </nav>
           <nav id="next-nav">
           <ArrowForwardIosIcon className="next-arrow" onClick = {this.nextSlide}/>
           </nav>
            
           {images.map((slide, imgState) => {
              return (
                <>
                
                <h1 id="title" className={imgState === this.state.currentSlide
                    ? "slide.active"
                    : "slide"}>{slide.title}</h1>
                    

                    <h3 id="subtitle" className={imgState === this.state.currentSlide
                    ? "slide.active"
                    : "slide"}>{slide.subtitle}</h3>
                <img
                  src={slide.img}
                  alt="This is a carousel slide"
                  className={imgState === this.state.currentSlide
                    ? "slide-active"
                    : "slide"} /></>
              );
            })}
            
            

        </div>
    )
  }
  
}

export default Carousel;