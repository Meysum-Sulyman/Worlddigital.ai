import React from 'react';
import container from './assets/Container.png'
import suitcase from './assets/SuitCase.png'
import scale from './assets/Scale.png'
import Simple from './assets/Simple. Fast. Efficient. Precise. Intelligent.Simple. Fast..png'
import Hand from './assets/Hand.png'
import Snowflake from './assets/Snowflake.png'
import Prism from './assets/Prism.png'
import Stack from './assets/Stack.png'









const HomePage = () => {
  return (
    <div className='background-red pt-20'>
     <div className=" text-white py-20">
      <div className="container mx-auto flex">
        <div className="w-2/4 ">
        <p className='bg-custom pb-3'>ChatBot AI</p>
          <h1 className="text-5xl font-bold pb-3">Generate Sales with the Complete Marketing AI</h1>
          <p className="mt-4 text-lg">Instant, affordable, and completely automated marketing for your business on Meta and Google.</p>
          <button className="mt-6 text-white border-b-4 py-3 ">Subscribe Now</button>
        </div>
        <div className="w-1/4">
        <div className="bg-gradient-to-br from-gray-800 to-red-500 rounded-lg shadow-lg p-4 max-w-sm mx-auto">
      <div className="bg-gray-700 rounded-t-lg p-2 flex items-center justify-between">
        <span className="text-blue-300 font-semibold">Chat with AI Bot</span>
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
          It’s simple! What part of the process would you like to know?
          <div className="flex justify-between mt-2">
            <button className="text-green-500"><i className="fas fa-thumbs-up"></i></button>
            <button className="text-red-500"><i className="fas fa-thumbs-down"></i></button>
            <button className="text-gray-500"><i className="fas fa-copy"></i></button>
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
        <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="text-blue-500 mt-2">View Details</button>
      </div>
    </div>
        </div>
        <div className="flex flex-col p-8 space-y-4">
        <div className="mb-6">
        <img src={container} alt="Container Icon" className="" />
        <div>
        <h3 className="text-lg font-semibold">Top Of Mind ChatBot</h3>
        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
  <div className="mb-6">
    <img src={scale} alt="Scale Icon" className="" />
    <div>
      <h3 className="text-lg font-semibold">Trained Team</h3>
      <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
  <div className="mb-6">
    <img src={suitcase} alt="Suitcase Icon" className="" />
    <div>
      <h3 className="text-lg font-semibold">Trusted Clients</h3>
      <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
</div>

      </div>
    </div>
    <div className="marquee mt-8 mb-8" >
        <img src={Simple}></img>
        <img src={Simple}></img>
        <img src={Simple}></img>
        <img src={Simple}></img>
</div>


<div className=''>
<div className="flex justify-center items-center">
  <div className="flex flex-col text-white py-20 text-center">
    <p className="bg-custom pb-3">Our Services</p>
    <h3 className="text-5xl font-bold pb-3">Find an AI solution for your business</h3>
    <p className="mt-4 text-lg">Experience the future of communication with our AI-powered chat solution.</p>
    </div>
    </div>
    
    <div className="flex flex-wrap gap-5 p-2 mr-12 ml-12">
  <div className="flex flex-col text-white p-8 border-red-600 border-2 rounded-lg flex-1 min-w-[200px]">
    <img className="w-14 h-14" src={Hand} alt="Hand Icon" />
    <h3 className="text-2xl font-bold pb-3">AI-Powered Chatbots</h3>
    <p className="text-lg">Implement intelligent chatbots that can handle customer inquiries, provide.</p>
  </div>
  <div className="flex flex-col text-white p-8 border-red-600 border-2 rounded-lg flex-1 min-w-[200px]">
    <img className="w-14 h-14" src={Snowflake} alt="Snowflake Icon" />
    <h3 className="text-2xl font-bold pb-3">Automated Visual Designs</h3>
    <p className="text-lg">Stunning visuals that reflect your brand.</p>
  </div>
  <div className="flex flex-col text-white p-8 border-red-600 border-2 rounded-lg flex-1 min-w-[200px]">
    <img className="w-14 h-14" src={Prism} alt="Prism Icon" />
    <h3 className="text-2xl font-bold pb-3">Automated Ad Campaigns</h3>
    <p className="text-lg">Data-driven advertisements that target the right audience to promote your business.</p>
  </div>
  <div className="flex flex-col text-white p-8 border-red-600 border-2 rounded-lg flex-1 min-w-[200px]">
    <img className="w-14 h-14" src={Stack} alt="Stack Icon" />
    <h3 className="text-2xl font-bold pb-3">Automated Content Generation</h3>
    <p className="text-lg">Initiate proactive conversations with customers based on their profiles.</p>
  </div>
</div>
<div className='text-white text-center p-8'>
<p>If you have any questions in your mind, Just <strong>Click Here</strong> to write Or call to <strong>(+62) 234-567-890</strong></p>
</div>
</div>





    </div>
  );
};

export default HomePage;