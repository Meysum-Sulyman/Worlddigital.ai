import React from 'react';
import logo from './assets/Group.png'; 
import user from './assets/user-cirle.png'
import vertical from './assets/VerticalBorder.png'

const Navbar = () => {
  return (
    <nav className="background-red p-4 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={logo} 
 alt="Logo" className="h-10" />
        
        </div>
        <div className="flex space-x-6 text-white">
          <a href="#" className="hover:text-red-500">Home</a>
          <a href="#" className="hover:text-red-500">About</a>
          <a href="#" className="hover:text-red-500">Services</a> 

          <a href="#" className="hover:text-red-500">Career</a>
          <a href="#" className="hover:text-red-500">Contact</a>
        </div>
        <div className="flex space-x-4 items-center">
          <button className="text-white">
            <img src={vertical}></img>
          </button>
          <button className="text-white">
            <img src={user}></img>
            </button>
          <button className="bg-gradient-to-r from-purple-500 to-red-500 text-white px-12 py-2 rounded-full">Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;