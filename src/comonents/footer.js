import logo from "../assets/logoAI.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer-Sec bg-black text-white py-10">
      <div className="cont">
        {/* Newsletter Section */}
        <div className="flex flex-col items-center text-center pt-10 px-4">
          <p className="bg-custom pb-3">Our Newsletter</p>
          <h3 className="text-3xl lg:text-5xl font-bold pb-3">
            Subscribe And Ask For Free
          </h3>
          <p className="mt-4 text-base lg:text-lg max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>

        <div className="flex justify-center items-center pt-8 pb-16">
          <input
            className="bg-transparent border-b border-red-800 py-2 px-6 lg:px-40 focus:outline-none mr-4 border-2 rounded-full w-full max-w-xs lg:max-w-md"
            type="email"
            placeholder="Your Email"
          />
          <button className="bg-gradient-to-r from-red-600 to-blue-600 text-white font-bold py-2 px-6 lg:px-8 rounded-full">
            Subscribe
          </button>
        </div>

        {/* Footer Content */}
        <footer className="text-white pb-8">
          <div className="w-11/12 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-24 mb-12">
              <div>
                <img src={logo} alt="World Digital AI Logo" className="mb-4" />
                <p className="text-sm lg:text-base">
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet ut et voluptates repudiandae sint
                  et molestiae non recusandae.
                </p>
                <div className="flex space-x-4 mt-4 justify-center lg:justify-start">
                  <FaFacebookF className="hover:text-red-500 cursor-pointer" />
                  <FaTwitter className="hover:text-red-500 cursor-pointer" />
                  <FaInstagram className="hover:text-red-500 cursor-pointer" />
                  <FaYoutube className="hover:text-red-500 cursor-pointer" />
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-4 text-center lg:text-left">
                  Useful Links
                </h3>
                <ul className="space-y-2 text-center lg:text-left">
                  <li className="hover:text-red-500 cursor-pointer">About</li>
                  <li className="hover:text-red-500 cursor-pointer">Project</li>
                  <li className="hover:text-red-500 cursor-pointer">
                    News & Update
                  </li>
                  <li className="hover:text-red-500 cursor-pointer">Pricing</li>
                  <li className="hover:text-red-500 cursor-pointer">Contact</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4 text-center lg:text-left">
                  Support
                </h3>
                <ul className="space-y-2 text-center lg:text-left">
                  <li className="hover:text-red-500 cursor-pointer">
                    Privacy Policy
                  </li>
                  <li className="hover:text-red-500 cursor-pointer">Support</li>
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
                <h3 className="font-bold mb-4 text-center lg:text-left">
                  Company
                </h3>
                <ul className="space-y-2 text-center lg:text-left">
                  <li className="hover:text-red-500 cursor-pointer">Sitemap</li>
                  <li className="hover:text-red-500 cursor-pointer">
                    Work Hours
                  </li>
                  <li className="hover:text-red-500 cursor-pointer">Office</li>
                  <li className="hover:text-red-500 cursor-pointer">Payment</li>
                </ul>
              </div>
            </div>

            {/* Bottom Footer Section */}
            <div className="border-t border-red-950 pt-6 text-center flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-2 lg:space-y-0">
              <p>WorldDigital.ai</p>
              <p>© 2024. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
