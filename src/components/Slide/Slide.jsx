import React from "react";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderData from "../Slide/Sliderdata";
import "./Slide.css";

const Slide = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
        <div className='slide'>
        <Slider {...settings}>
          {SliderData.map((value) => {
            return (
              <div className='box'>
                <div className='img'>
                  <img src={value.cover} alt='' />
                </div>
                <div className='text'>
                  <span>{value.category}</span>
                  <h2>{value.title}</h2>
                  <p>{value.desc}</p>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
        </>
    );
};

export default Slide;
