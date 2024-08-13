import React from "react";
import container from "./assets/Icon.png";
import suitcase from "./assets/SUITCASE (2).png";
import scale from "./assets/SCALE@.png";
import Simple from "./assets/Simple. Fast. Efficient. Precise. Intelligent.Simple. Fast..png";
import Hand from "./assets/Hand.png";
import Snowflake from "./assets/Snowflake.png";
import Prism from "./assets/Prism.png";
import Stack from "./assets/Stack.png";
import Robot from "./assets/Robot.png";
import Waterdroplet from "./assets/Water Drops.png";
import Slider from "./comonents/carosel";
import digg from "./assets/2Artboard-1.png.png";
import fish from "./assets/3Artboard-1.png.png";
import crown from "./assets/5Artboard-1.png.png";
import ring from "./assets/4Artboard-1.png.png";
import round from "./assets/6Artboard-1-800x800.png.png";
import A from "./assets/1Artboard-1.png.png";
import { FaArrowRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Footer from "./comonents/footer";
import { useNavigate } from "react-router-dom";
import VideoPlayer from "./comonents/video";
import thumbnailImage from "./assets/HowItWOrks.png";

const HomePage = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/about-us");
  };

  return (
    <div className="Special-background">
      <div className="background-red text-white py-20 px-10">
        <div className="cont">
          <div className="container xl:mx-auto lg:mx-auto md:mx-4 sm:ml-2 align-middle flex">
            <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col">
              <div className="xl:w-3/4 lg:w-3/4 md:w-full sm:w-full mb-8 md:mb-4 sm:mb-2 ">
                <p className="bg-custom pb-3">ChatBot AI</p>
                <h1 className="text-5xl font-bold pb-3 md:text-4xl sm:text-3xl">
                  Generate Sales with the Complete Marketing AI
                </h1>
                <p className="mt-4 text-lg md:text-base sm:text-sm">
                  Instant, affordable, and completely automated marketing for
                  your business on Meta and Google.
                </p>
                <button className="mt-6 text-white border-b-4 py-3 md:text-base sm:text-sm">
                  Subscribe Now
                </button>
              </div>
              <div className="xl:w-2/4 lg:w-2/4 md:w-full sm:w-full mb-8 md:mb-4 sm:mb-2">
                <div className="bg-gradient-to-br from-gray-800 to-red-500 rounded-lg shadow-lg p-4 ">
                  <div className="bg-gray-700 rounded-t-lg p-2 flex items-center justify-between">
                    <span className="text-blue-300 font-semibold">
                      Chat with AI Bot
                    </span>
                    <button className="text-gray-400">
                      <i className="fas fa-chevron-up"></i>
                    </button>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-b-lg space-y-4">
                    <div className="bg-gray-700 p-2 rounded text-white">
                      Hey there! I'm AI Bot.
                    </div>
                    <div className="bg-gray-700 p-2 rounded text-white">
                      How does this work?
                    </div>
                    <div className="bg-gray-700 p-2 rounded text-white">
                      It’s simple! What part of the process would you like to
                      know?
                      <div className="flex justify-between mt-2">
                        <button className="text-green-500">
                          <i className="fas fa-thumbs-up"></i>
                        </button>
                        <button className="text-red-500">
                          <i className="fas fa-thumbs-down"></i>
                        </button>
                        <button className="text-gray-500">
                          <i className="fas fa-copy"></i>
                        </button>
                      </div>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Ask me anything..."
                        className="w-full p-2 rounded bg-gray-700 text-white"
                      />
                      <button className="absolute right-2 top-2 text-blue-500">
                        <i className="fas fa-paper-plane"></i>
                      </button>
                    </div>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-lg mt-4 text-white">
                    <h2 className="text-lg font-semibold">Lorem Ipsum</h2>
                    <p className="text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <button className="text-blue-500 mt-2">View Details</button>
                  </div>
                </div>
              </div>
              <div className="xl:w-2/4 xl:flex-col lg:w-2/4 lg:flex-col md:w-full flex flex-col p-8  md:flex-row">
                <div className="mb-6">
                  <img
                    src={container}
                    alt="Container Icon"
                    className="w-12 h-12"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">
                      Top Of Mind ChatBot
                    </h3>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="mb-6">
                  <img src={scale} alt="Scale Icon" className="w-12 h-12" />
                  <div>
                    <h3 className="text-lg font-semibold">Trained Team</h3>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="mb-6">
                  <img
                    src={suitcase}
                    alt="Suitcase Icon"
                    className="w-12 h-12"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">Trusted Clients</h3>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="marquee mt-8 mb-8">
        <img src={Simple} alt="marquee"></img>
        <img src={Simple} alt="marquee"></img>
        <img src={Simple} alt="marquee"></img>
        <img src={Simple} alt="marquee"></img>
      </div>

      {/* // Our Services // */}

      <div className="flex justify-center items-center">
        <div className="cont">
          <div className="flex flex-col text-white py-20 text-center">
            <div className="flex align-middle justify-center">
              <p className="bg-custom pb-3">Our Services</p>
            </div>
            <h3 className="text-5xl font-bold pb-3">
              Find an AI solution for your business
            </h3>
            <p className="mt-4 text-lg">
              Experience the future of communication with our AI-powered chat
              solution.
            </p>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="cont boxx">
          <div className="gap-5 flex-wrap p-2 mr-12 ml-12 lg:flex lg:flex-row md:flex-col sm:flex-col ">
          <div className="flex flex-col text-white p-8 border-red-600 border-2 rounded-lg flex-1 min-w-[200px]">
            <img className="w-14 h-14" src={Hand} alt="Hand Icon" />
            <h3 className="text-2xl font-bold pb-3">AI-Powered Chatbots</h3>
            <p className="text-lg">
              Implement intelligent chatbots that can handle customer inquiries,
              provide.
            </p>
          </div>

          <div className="flex flex-col text-white p-8 border-red-600 border-2 rounded-lg flex-1 min-w-[200px]">
            <div className="img-content">
              <img className="w-14 h-14" src={Snowflake} alt="Snowflake Icon" />
              <h3 className="text-2xl font-bold pb-3">
                Automated Visual Designs
              </h3>
              <p className="text-lg">
                Stunning visuals that reflect your brand.
              </p>
            </div>
          </div>
          <div className="flex flex-col text-white p-8 border-red-600 border-2 rounded-lg flex-1 min-w-[200px]">
            <div className="contents">
              <img className="w-14 h-14" src={Prism} alt="Prism Icon" />
              <h3 className="text-2xl font-bold pb-3">
                Automated Ad Campaigns
              </h3>
              <p className="text-lg">
                Data-driven advertisements that target the right audience to
                promote your business.
              </p>
            </div>
          </div>
          <div className="flex flex-col text-white p-8 border-red-600 border-2 rounded-lg flex-1 min-w-[200px]">
            <div className="new-content">
              <img className="w-14 h-14" src={Stack} alt="Stack Icon" />
              <h3 className="text-2xl font-bold pb-3">
                Automated Content Generation
              </h3>
              <p className="text-lg">
                Initiate proactive conversations with customers based on their
                profiles.
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="text-white text-center p-8">
        <p>
          If you have any questions in your mind, Just{" "}
          <strong>Click Here</strong> to write Or call to{" "}
          <strong>(+62) 234-567-890</strong>
        </p>
      </div>

      {/* // About Us // */}

      <div className="about-background p-6 sm:p-10">
        <div className="cont">
          <div className="text-white flex flex-col lg:flex-row md:flex-col sm:flex-col justify-center items-center w-full">
            <div className="flex flex-col w-full">
              <div className="shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row md:flex-col mb-8">
                <div className="flex md:justify-start">
                  <div className="">
                    <img src={Robot} alt="Robot" className="w-auto min-w-80" />
                  </div>
                </div>
                <div className="flex flex-col text-white p-6 sm:p-8 border-red-600 border-2 rounded-lg flex-1 bg-gradient-to-r from-red-600 via-red-500 to-blue-600">
                  <h3 className="text-xl sm:text-2xl font-bold pb-3">
                    Our AI Chat Bot
                  </h3>
                  <p className="text-base sm:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis.
                  </p>
                  <button className="mt-4 sm:mt-6 text-white border-b-4 py-2 sm:py-3">
                    View Details
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 w-full max-w-4xl sm:grid-cols-3">
                <div className="bg-red-600 p-4 sm:p-6 rounded-lg text-center">
                  <img
                    src={Waterdroplet}
                    alt="waterdroplet"
                    className="mx-auto mb-2 sm:mb-4"
                  />
                  <h3 className="text-xl sm:text-2xl font-bold">100%</h3>
                  <p className="text-sm sm:text-base">Website Accuracy</p>
                </div>
                <div className="bg-red-600 p-4 sm:p-6 rounded-lg text-center">
                  <img
                    src={Waterdroplet}
                    alt="waterdroplet"
                    className="mx-auto mb-2 sm:mb-4"
                  />
                  <h3 className="text-xl sm:text-2xl font-bold">20+</h3>
                  <p className="text-sm sm:text-base">Members</p>
                </div>
                <div className="bg-red-600 p-4 sm:p-6 rounded-lg text-center">
                  <img
                    src={Waterdroplet}
                    alt="waterdroplet"
                    className="mx-auto mb-2 sm:mb-4"
                  />
                  <h3 className="text-xl sm:text-2xl font-bold">Over 240%</h3>
                  <p className="text-sm sm:text-base">
                    Projected user base growth
                  </p>
                </div>
              </div>
            </div>

            <div className="text-white mt-8 lg:pl-20 w-full ">
              <h2 className="bg-custom text-lg sm:text-xl sm:text-left">About Us</h2>
              <h1 className="text-3xl sm:text-4xl font-bold text-red-500">
                worlddigital.ai
              </h1>
              <h1 className="text-3xl sm:text-4xl font-bold">
                promotes your business on Meta and Google.
              </h1>
              <blockquote className="italic mt-4">
                "Based in the United States, we're dedicated to empowering local
                businesses to thrive in the digital age. Experience the future
                of marketing with Worlddigital.ai—where innovation meets
                simplicity."
              </blockquote>
              <p className="mt-4 text-sm sm:text-base">
                World Digital.ai offers fully automated solutions for digital
                marketing and design, tailored for Google and Meta platforms for
                Small & Medium Enterprises. Our advanced AI technology handles
                everything from creating dynamic content and stunning designs to
                optimizing ad campaigns and targeting the right audience to
                boost your business.
              </p>
              <button
                onClick={handleRedirect}
                className="mt-6 bg-gradient-to-r from-purple-500 to-red-500 text-white font-bold py-2 px-8 sm:px-10 rounded-full"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* // How It Works */}
      {/* <div className="p-10">
        <div className="cont">
          <div className="flex align-middle justify-center">
            <img src={Howitworks} alt="Howitworks"></img>
          </div>
        </div>
      </div> */}
      <div className="p-10">
        <div className="cont relative">
          <div className="flex align-middle justify-center relative yt-video">
            <VideoPlayer
              videoId="vNntv2O4QK8?si=lYEQqPHJ4MW7UWT1" // YouTube video ID
              thumbnailSrc={thumbnailImage} // Path to your thumbnail image
            />
          </div>
        </div>
      </div>

      {/* //Testimonial */}
      <div className="testimonial-background xl:p-20 lg:p-20 md:p-20 sm:p-10">
        <div className="cont test">
          <div className="flex justify-center items-center">
            <div className="flex flex-col text-white py-10 px-4 sm:py-20 text-center">
              <div className="flex align-middle justify-center">
                <p className="bg-custom pb-3 text-center">Testimonial</p>
              </div>
              <h3 className="text-4xl sm:text-5xl font-bold pb-3">
                What My Clients Say
              </h3>
              <p className="mt-2 sm:mt-4 text-base sm:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>

          <div className="testimonials-sec">
            <Slider />
          </div>

          <div className="flex justify-center mt-8 sm:mt-14 gap-8 sm:gap-48 flex-wrap">
            <img src={crown} alt="logos" className=" sm:w-auto" />
            <img src={ring} alt="logos" className=" sm:w-auto" />
            <img src={digg} alt="logos" className=" sm:w-auto" />
            <img src={fish} alt="logos" className=" sm:w-auto" />
            <img src={round} alt="logos" className=" sm:w-auto" />
            <img src={A} alt="logos" className=" sm:w-auto" />
          </div>
        </div>
      </div>

      {/* //Special offer */}

      <div className="cont">
        <div className="flex justify-center items-center">
          <div className="flex flex-col text-white py-10 px-4 sm:py-20 sm:px-10 text-center">
            <div className="flex align-middle justify-center">
              <p className="bg-custom pb-3 text-center">Special Offer</p>
            </div>
            <h3 className="text-4xl sm:text-5xl font-bold pb-3">
              Our Plans & Packages
            </h3>
            <p className="mt-2 sm:mt-4 text-base sm:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
        </div>

        <div className="text-white flex justify-center items-center lg:w-full md:w-full sm:px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-6 lg:w-full md:w-full max-w-7xl">
            <div className="background-card p-8 sm:p-12 rounded-lg shadow-lg text-white">
              <div className="text-3xl sm:text-4xl font-bold">
                $1999 <span className="text-lg font-normal">/Year</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-blue-400 mt-2">
                Meta
              </div>
              <div className="text-base sm:text-lg mt-1">
                Facebook + Instagram
              </div>
              <div className="mt-4">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <FaArrowRight className="mr-2" />
                    Content Generation
                  </li>
                  <li className="flex items-center">
                    <FaArrowRight className="mr-2" />
                    Design AI
                  </li>
                  <li className="flex items-center">
                    <FaArrowRight className="mr-2" />
                    Analytics
                  </li>
                  <li className="flex items-center">
                    <FaArrowRight className="mr-2" />
                    Online 24/7 support
                  </li>
                </ul>
              </div>
              <button className="bg-gradient-to-r from-red-600 via-red-500 to-blue-600 lg:mt-6 lg:py-3 lg:px-20 sm:px-8 sm:py-2 sm:mt-2 sm:p-2 md:px-6 md:py-2 mt-2 rounded-full text-white font-bold">
                Choose Plan
              </button>
            </div>

            <div className="background-card p-8 sm:p-12 rounded-lg shadow-lg text-white">
              <div className="text-3xl sm:text-4xl font-bold">
                $1999 <span className="text-lg font-normal">/Year</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-blue-400 mt-2">
                Meta
              </div>
              <div className="text-base sm:text-lg mt-1">
                Facebook + Instagram
              </div>
              <div className="mt-4">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <FaArrowRight className="mr-2" />
                    Content Generation
                  </li>
                  <li className="flex items-center">
                    <FaArrowRight className="mr-2" />
                    Design AI
                  </li>
                  <li className="flex items-center">
                    <FaArrowRight className="mr-2" />
                    Analytics
                  </li>
                  <li className="flex items-center">
                    <FaArrowRight className="mr-2" />
                    Online 24/7 support
                  </li>
                </ul>
              </div>
              <button className="bg-gradient-to-r from-red-600 via-red-500 to-blue-600 lg:mt-6 lg:py-3 lg:px-20 sm:px-8 sm:py-2 sm:mt-2 md:px-6 md:py-2 mt-2 rounded-full text-white font-bold">
                Choose Plan
              </button>
            </div>

            <div className="background-card p-8 sm:p-12 rounded-lg shadow-lg text-white">
              <div className="text-3xl sm:text-4xl font-bold">
                $1999 <span className="text-lg font-normal">/Year</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-blue-400 mt-2">
                Meta
              </div>
              <div className="text-base sm:text-lg mt-1">
                Facebook + Instagram
              </div>
              <div className="mt-4">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <FaArrowRight className="mr-2" />
                    Content Generation
                  </li>
                  <li className="flex items-center">
                    <FaArrowRight className="mr-2" />
                    Design AI
                  </li>
                  <li className="flex items-center">
                    <FaArrowRight className="mr-2" />
                    Analytics
                  </li>
                  <li className="flex items-center">
                    <FaArrowRight className="mr-2" />
                    Online 24/7 support
                  </li>
                </ul>
              </div>
              <button className="bg-gradient-to-r from-red-600 via-red-500 to-blue-600 lg:mt-6 lg:py-3 lg:px-20 sm:px-8 sm:py-2 sm:mt-2 md:px-6 md:py-2 mt-2 rounded-full text-white font-bold">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* // Apply Now //   */}

      <div className="flex justify-center items-center pt-20">
        <div className="cont">
          <div className="flex flex-col text-white py-20">
            <div className="flex align-middle justify-center">
              <p className="bg-custom pb-3 ">Our Career Program</p>
            </div>
            <h3 className="text-5xl font-bold pb-3 text-center">Apply Now!</h3>
            <p className="mt-4 text-lg text-center">
              Join the team behind World Digital.ai
            </p>
          </div>
        </div>
      </div>
      <div className="cont">
      <div className=" text-white p-8 flex justify-center items-center w-full ">
        
          <form className="space-y-8 w-full max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-red-500 mb-2">
                  01 | What's your Full name?
                </label>
                <input
                  className="w-full bg-transparent border-b border-white py-2 focus:outline-none"
                  type="text"
                  placeholder="Type your full name"
                />
              </div>
              <div>
                <label className="block text-red-500 mb-2">
                  05 | Which role you'd like to work?
                </label>
                <select className="w-full bg-transparent border-b border-white py-2 focus:outline-none">
                  <option value="">Full-Time / Part-Time</option>
                  <option value="full-time">Full-Time</option>
                  <option value="part-time">Part-Time</option>
                </select>
              </div>
              <div>
                <label className="block text-red-500 mb-2">
                  02 | What's your email address?
                </label>
                <input
                  className="w-full bg-transparent border-b border-white py-2 focus:outline-none"
                  type="email"
                  placeholder="example@gmail.com"
                />
              </div>
              <div>
                <label className="block text-red-500 mb-2">
                  06 | Resume Upload
                </label>
                <div className="flex items-center border-b border-white">
                  <input
                    className="w-full bg-transparent py-2 focus:outline-none"
                    type="file"
                    accept=".pdf, .doc"
                  />
                  <FaPlus className="text-red-500 ml-2" />
                </div>
                <p className="text-sm">
                  only pdf or .doc are accepted not more than 2mb
                </p>
              </div>
              <div>
                <label className="block text-red-500 mb-2">
                  03 | What's your contact number?
                </label>
                <input
                  className="w-full bg-transparent border-b border-white py-2 focus:outline-none"
                  type="text"
                  placeholder="(+country code) xxxx-xxxxxxxx"
                />
              </div>
              <div>
                <label className="block text-red-500 mb-2">
                  07 | Cover Letter Upload
                </label>
                <div className="flex items-center border-b border-white">
                  <input
                    className="w-full bg-transparent py-2 focus:outline-none"
                    type="file"
                    accept=".pdf, .doc"
                  />
                  <FaPlus className="text-red-500 ml-2" />
                </div>
                <p className="text-sm">
                  only pdf or .doc are accepted not more than 2mb
                </p>
              </div>
              <div>
                <label className="block text-red-500 mb-2">
                  04 | Department you're interested to join
                </label>
                <select className="w-full bg-transparent border-b border-white py-2 focus:outline-none">
                  <option value="">Select One</option>
                  <option value="department-1">Department 1</option>
                  <option value="department-2">Department 2</option>
                  <option value="department-3">Department 3</option>
                </select>
              </div>
              <div>
                <label className="block text-red-500 mb-2">
                  08 | Your message
                </label>
                <textarea
                  className="w-full bg-transparent border-b border-white py-2 focus:outline-none"
                  placeholder="Your introduction in 200 words."
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="bg-gradient-to-r from-red-600 via-red-500 to-blue-600 text-white font-bold py-2 px-12 rounded-full">
                Upload
              </button>
            </div>
            <p className="text-center mt-4 text-sm">
              A confirmation email will be sent once we receive your
              application.
            </p>
          </form>
        </div>
      </div>

      {/* // Our Newsletter // */}

      <Footer />
    </div>
  );
};

export default HomePage;
