import React, { Component } from "react";
import Carousel from "./components/Carousel";
import "./App.css";
import CarouselHooks from "./components/CarouselHooks";



export default class App extends Component {
  render() {
    return (
      <div className="App">
        <CarouselHooks/>
        {/* <Carousel /> */}
      </div>
    );
  }
}