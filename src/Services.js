import arrow from "./assets/Symbol.png";
import Footer from "./comonents/footer";
import Hand from "./assets/Hand.png";
import Snowflake from "./assets/Snowflake.png";
import Prism from "./assets/Prism.png";
import Stack from "./assets/Stack.png";
import Slider from "./comonents/carosel";
import digg from "./assets/2Artboard-1.png.png";
import fish from "./assets/3Artboard-1.png.png";
import crown from "./assets/5Artboard-1.png.png";
import ring from "./assets/4Artboard-1.png.png";
import round from "./assets/6Artboard-1-800x800.png.png";
import A from "./assets/1Artboard-1.png.png";
import Circle from "./assets/Group 1000001779.png";

const AboutUs = () => {
  return (
    <div className="Special-background">
      <div className="background-red text-white py-20">
        <div className="cont">
          <div className="m-10">
            <h3 className="text-5xl font-bold pb-3 text">Services</h3>
            <div className="flex pt-4">
              <div>Home</div>
              <li className="flex items-center ">
                <img src={arrow} alt="ok" className="px-5" />
              </li>
              <div>Service</div>
            </div>
          </div>
        </div>
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
      <div className="flex flex-wrap gap-5 p-2 mr-12 ml-12 md:flex-col sm:flex-col ">
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
      <div className="text-white text-center p-8">
        <p>
          If you have any questions in your mind, Just{" "}
          <strong>Click Here</strong> to write Or call to{" "}
          <strong>(+62) 234-567-890</strong>
        </p>
      </div>
      <div className="cont">
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center text-white">
      {/* Left Content */}
      <div className="lg:w-1/2 px-8 text-center lg:text-left">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">
          Power Your Business With Modern AI Capabilities
        </h2>
        <div className="mb-4">
          <p className="text-4xl lg:text-6xl font-bold text-red-600">100%</p>
          <p className="text-lg lg:text-xl">
            Our team of experts have developed the most effective solution
            according to today's business needs
          </p>
        </div>
        <div className="mb-8">
          <p className="text-4xl lg:text-6xl font-bold text-red-600">20+</p>
          <p className="text-lg lg:text-xl">
            Our team of experts have developed the most effective solution
            according to today's business needs
          </p>
        </div>
        <button className="bg-gradient-to-r from-red-600 to-blue-600 text-white font-bold py-2 px-6 lg:px-8 rounded-full">
          Explore More
        </button>
      </div>

      {/* Right Image */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
        <img src={Circle} alt="AI Capabilities" className="w-full lg:w-auto max-w-lg sm:w-60" />
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

          <div className="flex justify-center mt-8 sm:mt-14 gap-8 sm:gap-48 flex-wrap  ">
            <img src={crown} alt="logos" className=" sm:w-auto" />
            <img src={ring} alt="logos" className=" sm:w-auto" />
            <img src={digg} alt="logos" className=" sm:w-auto" />
            <img src={fish} alt="logos" className=" sm:w-auto" />
            <img src={round} alt="logos" className=" sm:w-auto" />
            <img src={A} alt="logos" className=" sm:w-auto" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
