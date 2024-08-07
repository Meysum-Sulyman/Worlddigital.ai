import React from "react";
import Slider from "react-slick";
import InvertedComma from '../assets/InvertedComma.png'
import Man1 from '../assets/man-on-roof-6U7EKRL-150x150.jpg.png'
import Man2 from '../assets/portrait-of-a-cool-man-LB6N598-150x150.jpg.png'
import Woman1 from '../assets/woman-FFR87TU-150x150.jpg.png'
import Woman2 from '../assets/woman-MQU5ZC6-150x150.jpg.png'
import Star from '../assets/Item.png'


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div className="Review-box flex flex-col text-white p-8 border-red-600 border-2 rounded-lg flex-1 ">
        <img className="w-14 h-14" src={InvertedComma} alt="Inverted Comma" />
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin aliquet maurisa volutpat lobortis erat libero condimentum metuseu tincidunt.</p>
        <div className="Image-box flex flex-col items-center mt-4">
          <img className="w-16 h-16 rounded-full" src={Man1} alt="Reviewer" />
          <div className="flex ml-4">
            {Array(5).fill().map((_, i) => (
              <img key={i} className="w-5 h-5" src={Star} alt="Star" />
            ))}
          </div>
        </div>
      </div>
      <div className="Review-box flex flex-col text-white p-8 border-red-600 border-2 rounded-lg flex-1  ">
        <img className="w-14 h-14" src={InvertedComma} alt="Inverted Comma" />
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin aliquet maurisa volutpat lobortis erat libero condimentum metuseu tincidunt.</p>
        <div className="Image-box flex flex-col items-center mt-4">
          <img className="w-16 h-16 rounded-full" src={Man2} alt="Reviewer" />
          <div className="flex ml-4">
            {Array(5).fill().map((_, i) => (
              <img key={i} className="w-5 h-5" src={Star} alt="Star" />
            ))}
          </div>
        </div>
      </div>
      <div className="Review-box flex flex-col text-white p-8 border-red-600 border-2 rounded-lg flex-1  ">
        <img className="w-14 h-14" src={InvertedComma} alt="Inverted Comma" />
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin aliquet maurisa volutpat lobortis erat libero condimentum metuseu tincidunt.</p>
        <div className="Image-box flex flex-col items-center mt-4">
          <img className="w-16 h-16 rounded-full" src={Woman1} alt="Reviewer" />
          <div className="flex ml-4">
            {Array(5).fill().map((_, i) => (
              <img key={i} className="w-5 h-5" src={Star} alt="Star" />
            ))}
          </div>
        </div>
      </div>
      <div className="Review-box flex flex-col text-white p-8 border-red-600 border-2 rounded-lg flex-1  ">
        <img className="w-14 h-14" src={InvertedComma} alt="Inverted Comma" />
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin aliquet maurisa volutpat lobortis erat libero condimentum metuseu tincidunt.</p>
        <div className="Image-box flex flex-col items-center mt-4">
          <img className="w-16 h-16 rounded-full" src={Woman2} alt="Reviewer" />
          <div className="flex ml-4">
            {Array(5).fill().map((_, i) => (
              <img key={i} className="w-5 h-5" src={Star} alt="Star" />
            ))}
          </div>
        </div>
      </div>
    </Slider>
  );
}