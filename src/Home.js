import React from "react";
import container from "./assets/Container.png";
import suitcase from "./assets/SuitCase.png";
import scale from "./assets/Scale.png";
import Simple from "./assets/Simple. Fast. Efficient. Precise. Intelligent.Simple. Fast..png";
import Hand from "./assets/Hand.png";
import Snowflake from "./assets/Snowflake.png";
import Prism from "./assets/Prism.png";
import Stack from "./assets/Stack.png";
import Robot from "./assets/Robot.png";
import Waterdroplet from "./assets/Water Drops.png";
import Howitworks from "./assets/HowItWOrks.png";
import Slider from "./comonents/carosel";
import digg from "./assets/2Artboard-1.png.png";
import fish from "./assets/3Artboard-1.png.png";
import crown from "./assets/5Artboard-1.png.png";
import ring from "./assets/4Artboard-1.png.png";
import round from "./assets/6Artboard-1-800x800.png.png";
import A from "./assets/1Artboard-1.png.png";
import { FaArrowRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "./assets/logoAI.png";

const HomePage = () => {
  return (
    <div className="Special-background">
      <div className="background-red text-white py-20">
        <div className="cont">
          <div className="container mx-auto flex">
            <div className="w-2/4 ">
              <p className="bg-custom pb-3">ChatBot AI</p>
              <h1 className="text-5xl font-bold pb-3">
                Generate Sales with the Complete Marketing AI
              </h1>
              <p className="mt-4 text-lg">
                Instant, affordable, and completely automated marketing for your
                business on Meta and Google.
              </p>
              <button className="mt-6 text-white border-b-4 py-3 ">
                Subscribe Now
              </button>
            </div>
            <div className="w-1/4">
              <div className="bg-gradient-to-br from-gray-800 to-red-500 rounded-lg shadow-lg p-4 max-w-sm mx-auto">
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
            <div className="flex flex-col p-8 space-y-4">
              <div className="mb-6">
                <img src={container} alt="Container Icon" className="" />
                <div>
                  <h3 className="text-lg font-semibold">Top Of Mind ChatBot</h3>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="mb-6">
                <img src={scale} alt="Scale Icon" className="" />
                <div>
                  <h3 className="text-lg font-semibold">Trained Team</h3>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="mb-6">
                <img src={suitcase} alt="Suitcase Icon" className="" />
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
      <div className="flex flex-wrap gap-5 p-2 mr-12 ml-12">
        <div className="cont boxx">
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
                <img
                  className="w-14 h-14"
                  src={Snowflake}
                  alt="Snowflake Icon"
                />
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
      <div className="text-white text-center p-8">
        <p>
          If you have any questions in your mind, Just{" "}
          <strong>Click Here</strong> to write Or call to{" "}
          <strong>(+62) 234-567-890</strong>
        </p>
      </div>

      {/* // About Us // */}

      <div className="about-background p-10 ">
        <div className="cont">
          <div className=" text-white flex justify-center items-center w-full">
            <div className="flex flex-col w-2/4">
              <div className="shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row mb-8">
                <div className=" flex">
                  <div className="relative">
                    <img src={Robot} alt="Robot" className="h-80 w-72" />
                  </div>
                </div>
                <div className="flex flex-col text-white p-8 border-red-600 border-2 rounded-lg flex-1 bg-gradient-to-r from-red-600 via-red-500 to-blue-600">
                  <h3 className="text-2xl font-bold pb-3">Our AI Chat Bot</h3>
                  <p className="text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis.
                  </p>
                  <button className="mt-6 text-white border-b-4 py-3 ">
                    View Details
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
                <div className="bg-red-600 p-6 rounded-lg align-middle">
                  <img src={Waterdroplet} alt="waterdroplet"></img>
                  <h3 className="text-2xl font-bold">100%</h3>
                  <p>Website Accuracy</p>
                </div>
                <div className="bg-red-600 p-6 rounded-lg align-middle">
                  <img src={Waterdroplet} alt="waterdroplet"></img>
                  <h3 className="text-2xl font-bold">20+</h3>
                  <p>Members</p>
                </div>
                <div className="bg-red-600 p-6 rounded-lg align-middle">
                  <img src={Waterdroplet} alt="waterdroplet"></img>
                  <h3 className="text-2xl font-bold">Over 240%</h3>
                  <p>Projected user base growth</p>
                </div>
              </div>
            </div>

            <div className="text-white mt-8 pl-24 w-2/4 ">
              <h2 className="bg-custom text-xl">About Us</h2>
              <h1 className="text-4xl font-bold text-red-500">
                worlddigital.ai{" "}
              </h1>
              <h1 className="text-4xl font-bold">
                promotes your business on Meta and Google.
              </h1>
              <blockquote className="italic mt-4">
                "Based in the United States, we're dedicated to empowering local
                businesses to thrive in the digital age. Experience the future
                of marketing with Worlddigital.ai—where innovation meets
                simplicity."
              </blockquote>
              <p className="mt-4">
                World Digital.ai offers fully automated solutions for digital
                marketing and design, tailored for Google and Meta platforms for
                Small & Medium Enterprises. Our advanced AI technology handles
                everything from creating dynamic content and stunning designs to
                optimizing ad campaigns and targeting the right audience to
                boost your business.
              </p>
              <button className="mt-6 bg-gradient-to-r from-purple-500 to-red-500 text-white font-bold py-2 px-10 rounded-full">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* // How It Works */}
      <div className="p-10">
        <div className="cont">
          <div className="flex align-middle justify-center">
            <img src={Howitworks} alt="Howitworks"></img>
          </div>
        </div>
      </div>
      {/* //Testimonial */}
      <div className="testimonial-background p-20">
        <div className="cont test">
          <div className="flex justify-center items-center">
            <div className="flex flex-col text-white py-20 text-center">
              <div className="flex align-middle justify-center">
                <p className="bg-custom pb-3 text-center">Testimonial</p>
              </div>
              <h3 className="text-5xl font-bold pb-3">What My Clients Say</h3>
              <p className="mt-4 text-lg ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>

          <div className="testimonials-sec">
            <Slider />
          </div>
          <div className="flex justify-center mt-14 gap-48">
            <img src={crown} alt="logos" />
            <img src={ring} alt="logos"/>
            <img src={digg} alt="logos"/>
            <img src={fish} alt="logos"/>
            <img src={round} alt="logos"/>
            <img src={A} alt="logos"/>
          </div>
        </div>
      </div>

      {/* //Special offer */}

      <div className="cont">
        <div className="flex justify-center items-center">
          <div className="flex flex-col text-white py-20 text-center">
            <div className="flex align-middle justify-center">
              <p className="bg-custom pb-3 text-center">Special Offer</p>
            </div>
            <h3 className="text-5xl font-bold pb-3">Our Plans & Packages</h3>
            <p className="mt-4 text-lg ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
        </div>

        <div className="text-white flex justify-center items-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl">
            <div className="background-card p-12 rounded-lg shadow-lg text-white ">
              <div className="text-4xl font-bold">
                $1999 <span className="text-lg font-normal">/Year</span>
              </div>
              <div className="text-2xl font-bold text-blue-400 mt-2">Meta</div>
              <div className="text-lg mt-1">Facebook + Instagram</div>
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
              <button className="bg-gradient-to-r from-red-600 via-red-500 to-blue-600 mt-6 py-3 px-24 rounded-full text-white font-bold">
                Choose Plan
              </button>
            </div>
            <div className="background-card p-12 rounded-lg shadow-lg text-white ">
              <div className="text-4xl font-bold">
                $1999 <span className="text-lg font-normal">/Year</span>
              </div>
              <div className="text-2xl font-bold text-blue-400 mt-2">Meta</div>
              <div className="text-lg mt-1">Facebook + Instagram</div>
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
              <button className="bg-gradient-to-r from-red-600 via-red-500 to-blue-600 mt-6 py-3 px-24 rounded-full text-white font-bold">
                Choose Plan
              </button>
            </div>
            <div className="background-card p-12 rounded-lg shadow-lg text-white ">
              <div className="text-4xl font-bold">
                $1999 <span className="text-lg font-normal">/Year</span>
              </div>
              <div className="text-2xl font-bold text-blue-400 mt-2">Meta</div>
              <div className="text-lg mt-1">Facebook + Instagram</div>
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
              <button className="bg-gradient-to-r from-red-600 via-red-500 to-blue-600 mt-6 py-3 px-24 rounded-full text-white font-bold">
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

      <div className=" text-white p-8 flex justify-center items-center ">
        <div className="cont">
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

      <div className="Footer-Sec">
        <div className="cont">
          <div className="flex justify-center items-center pt-20">
            <div className="flex flex-col text-white py-5 text-center">
              <div className="flex align-middle justify-center">
                <p className="bg-custom pb-3 text-center">Our Newsletter</p>
              </div>
              <h3 className="text-5xl font-bold pb-3">
                Subscribe And Ask For Free
              </h3>
              <p className="mt-4 text-lg ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>
          {/* <div className="flex items-center border-b border-white">
        <input
          className="w-full bg-transparent focus:outline-none py-2 px-12 rounded-full"
          type="Email"
        />
       </div> */}
          <div className="flex justify-center items-center pb-28">
            <input
              className="bg-transparent border-b border-red-800 py-2 px-40 focus:outline-none mr-4 border-2 rounded-full"
              type="email"
              placeholder="Your Email"
            />
            <button className="bg-gradient-to-r from-red-600 to-blue-600 text-white font-bold py-2 px-8 rounded-full">
              Subscribe
            </button>
          </div>
          <footer className=" text-white pb-16">
            <div className="w-4/5 mx-auto ">
              {/* Newsletter Section */}
              {/* <div className="text-center mb-12">
          <p className="text-red-500 mb-2">Our Newsletter</p>
          <h2 className="text-3xl font-bold mb-4">Subscribe And Ask For Free</h2>
          <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          <div className="flex justify-center items-center">
            <input className="bg-transparent border-b border-white py-2 px-4 focus:outline-none mr-4" type="email" placeholder="Your Email" />
            <button className="bg-gradient-to-r from-red-600 to-blue-600 text-white font-bold py-2 px-8 rounded-full">Subscribe</button>
          </div>
        </div> */}

              {/* Main Footer Section */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-12">
                <div className="">
                  <img
                    src={logo}
                    alt="World Digital AI Logo"
                    className="mb-4"
                  />
                  <p>
                    Temporibus autem quibusdam et aut officiis debitis aut rerum
                    necessitatibus saepe eveniet ut et voluptates repudiandae
                    sint et molestiae non recusandae.
                  </p>
                  <div className="flex space-x-4 mt-4">
                    <FaFacebookF className="hover:text-red-500 cursor-pointer" />
                    <FaTwitter className="hover:text-red-500 cursor-pointer" />
                    <FaInstagram className="hover:text-red-500 cursor-pointer" />
                    <FaYoutube className="hover:text-red-500 cursor-pointer" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-4">Useful Links</h3>
                  <ul className="space-y-2">
                    <li className="hover:text-red-500 cursor-pointer">About</li>
                    <li className="hover:text-red-500 cursor-pointer">
                      Project
                    </li>
                    <li className="hover:text-red-500 cursor-pointer">
                      News & Update
                    </li>
                    <li className="hover:text-red-500 cursor-pointer">
                      Pricing
                    </li>
                    <li className="hover:text-red-500 cursor-pointer">
                      Contact
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-4">Support</h3>
                  <ul className="space-y-2">
                    <li className="hover:text-red-500 cursor-pointer">
                      Privacy Policy
                    </li>
                    <li className="hover:text-red-500 cursor-pointer">
                      Support
                    </li>
                    <li className="hover:text-red-500 cursor-pointer">
                      Disclaimer
                    </li>
                    <li className="hover:text-red-500 cursor-pointer">FAQ</li>
                    <li className="hover:text-red-500 cursor-pointer">
                      Term & Condition
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-4">Company</h3>
                  <ul className="space-y-2">
                    <li className="hover:text-red-500 cursor-pointer">
                      Sitemap
                    </li>
                    <li className="hover:text-red-500 cursor-pointer">
                      Work Hours
                    </li>
                    <li className="hover:text-red-500 cursor-pointer">
                      Office
                    </li>
                    <li className="hover:text-red-500 cursor-pointer">
                      Payment
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom Footer Section */}
              <div className="border-t border-red-950 pt-6 text-center flex justify-between">
                <p>WorldDigital.ai</p>
                <p>© Copyright © 2024. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
