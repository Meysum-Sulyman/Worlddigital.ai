import arrow from "./assets/Symbol.png";
import Footer from "./comonents/footer";
import Hand from "./assets/Hand.png";
import Snowflake from "./assets/Snowflake.png";
import Prism from "./assets/Prism.png";
import Stack from "./assets/Stack.png";



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
                <img src={arrow} className="px-5" />
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
      

    
      <Footer />
    </div>
  );
};

export default AboutUs;
