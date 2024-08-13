import { FaPlus } from "react-icons/fa";
import CarrerPhoto from "./assets/Carrer photo.png";
import arrow from "./assets/Symbol.png";
import One from "./assets/1.png";
import Two from "./assets/2.png";
import Footer from "./comonents/footer";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Carrer = () => {
  const toggleDropdown = (index) => {
    const updatedDropdowns = [...dropdowns];
    updatedDropdowns[index].isOpen = !updatedDropdowns[index].isOpen;
    setDropdowns(updatedDropdowns);
  };

  const [dropdowns, setDropdowns] = useState([
    {
      title: "Employee recognition programs",
      content:
        "Companies can implement programs to recognize and reward employees for their hard work and achievements, which can help boost morale and motivation.",
      isOpen: false,
    },
    {
      title: "Remote-Work Option",
      content:
        "Offering remote work options can enhance work-life balance and attract a wider range of talent.",
      isOpen: false,
    },
    {
      title: "Market-Competitive Salary",
      content:
        "Providing market-competitive salaries helps to attract and retain top talent in your industry.",
      isOpen: false,
    },
    {
      title: "Job flexibility",
      content:
        "Flexible work hours can increase employee satisfaction and productivity.",
      isOpen: false,
    },
    {
      title: "Professional Development Opportunities",
      content:
        "Investing in professional development shows employees that their growth is valued.",
      isOpen: false,
    },
  ]);

  return (
    <div className="Special-background">
      <div className="background-red text-white py-20">
        <div className="cont">
          <div className="m-10">
            <h3 className="text-5xl font-bold pb-3 text">Carrer</h3>
            <div className="flex pt-4">
              <div>Home</div>
              <li className="flex items-center ">
                <img src={arrow} alt="ok" className="px-5" />
              </li>
              <div>Carrer</div>
            </div>
          </div>
        </div>
      </div>

      {/* Join Us Now */}

      <div className="">
        <div className="cont">
          <div className="flex flex-col  lg:px-0 md:px-0 xl:flex-row lg:flex-row md:flex-col sm:flex-col ">
            <div className="flex justify-center sm:justify-start my-10 px-8">
              <img src={CarrerPhoto} alt="ok" className="object-contain xl:w-full lg:w-full md:w-full sm:w-auto" />
            </div>
            <div className="flex flex-col text-white lg:pl-6 xl:pl-20 sm:w-1/3 sm:py-20 xl:w-1/2 lg:w-1/2 sm:pl-10 md:w-full md:pl-5 px-8 ">
              <div className="text-center">
                <p className="bg-custom pb-3">Join Us Now</p>
              </div>
              <div className="flex flex-col justify-between">
                <h3 className="text-3xl sm:text-5xl font-bold pb-3 text-center sm:text-left">
                  Discover Your Potential at World Digital.ai
                </h3>
                <p className="text-center sm:text-left mt-8 mb-3">
                  We are passionate about Innovation and AI Revolution. We are
                  looking for talented and motivated individuals who share our
                  vision and want to be part of a dynamic and innovative team.
                </p>
                <div>
                  {dropdowns.map((dropdown, index) => (
                    <div key={index} className="w-full my-8">
                      <div className="overflow-hidden">
                        <div
                          onClick={() => toggleDropdown(index)}
                          className={`flex justify-between items-center rounded-full cursor-pointer p-4 text-white transition-all duration-300 ${
                            dropdown.isOpen
                              ? "bg-gradient-to-r from-red-600 via-purple-600 to-blue-600"
                              : "bg-gray-800"
                          }`}
                        >
                          <span>{dropdown.title}</span>
                          {dropdown.isOpen ? (
                            <FaChevronUp />
                          ) : (
                            <FaChevronDown />
                          )}
                        </div>
                        {dropdown.isOpen && (
                          <div className="p-4 px-20 text-gray-300">
                            <p className="mb-4">{dropdown.content}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="mb-10">
        <div className="cont">
          {/* <div className="flex flex-col justify-center align-middle text-white py-20 px-5 text-center">
            <div className="flex align-middle justify-center">
              <p className="bg-custom pb-3">Case Studies</p>
            </div>
            <h3 className="text-5xl font-bold pb-3">
              Our Case Studies Coming Soon!
            </h3>
            <p className="mt-4 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div> */}

          <div className="my-24 xl:flex xl:flex-row lg:flex lg:flex-row md:flex md:flex-col md:gap-8 sm:gap-8 md:justify-center sm:flex sm:flex-col lg:gap-4 sm:px-4 gap-4 px-8">
            <div className="flex flex-col text-white p-8 border-white bg-custom-radial border-2 rounded-lg flex-1 min-w-[300px] min-h-[400px]">
              <div className="flex justify-center align-middle my-6">
                <img className="w-14 h-14 " src={One} alt="Hand Icon" />
              </div>
              <h3 className="text-3xl font-bold pb-3 text-center">
                AI Bot Screening
              </h3>
              <p className="text-2xl text-center">
                The first step is the screening conducted by AI Bot. Write down
                your introduction of 200 words, and we’ll let you know if you’re
                qualified for the HR Interview via email!
              </p>
            </div>
            <div className="flex flex-col text-white p-8 border-white bg-custom-radial border-2 rounded-lg flex-1 min-w-[300px]">
              <div className="flex justify-center align-middle my-6">
                <img
                  className="w-14 h-14 bg-center"
                  src={Two}
                  alt="Hand Icon"
                />
              </div>
              <h3 className="text-3xl font-bold pb-3 text-center">
                Interview with the HR
              </h3>
              <p className="text-2xl text-center">
                Now that you’ve qualified for the next step,  the HR will
                conduct an online interview with you. Good luck!
              </p>
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

export default Carrer;
