import arrow from "./assets/Symbol.png";
import Snowflake from "./assets/Snowflake.png";
import AboutRobot from "./assets/ABoutRobot.png";
import dots from "./assets/﮸.png";
import wallet from "./assets/Wallet.png";
import screen from "./assets/Screen.png";
import Howitworks from "./assets/HowItWOrks.png";
import facebook from "./assets/2.png";
import Google from "./assets/3.png";
import Footer from "./comonents/footer";
import Symbol1 from "./assets/Symbol 1.png";
import Badge from "./assets/Badge.png";
import UserLock from "./assets/UserLock.png";
import Fingerprint from "./assets/Fingerprint.png";
import Wallet2 from "./assets/Wallet2.png";
import downloadIicon from "./assets/Download Icon.png";

const AboutUs = () => {
  return (
    <div className="Special-background">
      <div className="background-red text-white py-20">
        <div className="cont">
          <div className="m-10">
            <h3 className="text-5xl font-bold pb-3 text">About</h3>
            <div className="flex pt-4">
              <div>Home</div>
              <li className="flex items-center ">
                <img src={arrow} alt="ok" className="px-5" />
              </li>
              <div>About</div>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="Our-Story-background">
          <div className="cont">
            <div class="flex flex-col justify-center align-middle text-white py-20 text-center ">
              <div class="flex align-middle justify-center">
                <p class="bg-custom pb-3">Our Story</p>
              </div>
              <h3 class="text-5xl font-bold pb-3">
                Welcome to Worlddigital.ai
              </h3>
              <p class="mt-4 text-lg">
                Welcome to Worlddigital.ai, your trusted partner in transforming
                digital marketing for Small to Medium Enterprises (SMEs).
                Founded in 2023, our mission is to provide an affordable,
                efficient, and user-friendly solution that maximizes your
                marketing potential across Meta (Facebook and Instagram) and
                Google.
              </p>
              <p className="mt-4 text-lg">
                At Worlddigital.ai, we understand the unique challenges SMEs
                face. Our advanced AI technology automates every step of the
                marketing process—from content creation to ad posting and
                monitoring—so you can focus on running your business.
              </p>
              <p className="mt-4 text-lg">
                Based in the United States, we're dedicated to empowering local
                businesses to thrive in the digital age. Experience the future
                of marketing with Worlddigital.ai—where innovation meets
                simplicity.
              </p>
              <div className="flex justify-center align-middle pt-8">
                <button className="bg-gradient-to-r from-red-500 to-blue-500 text-white rounded-full p-4 w-12">
                  <img src={downloadIicon} alt="ok" />
                </button>
              </div>{" "}
            </div>
          </div>
        </div>

        {/* About Company */}
        <div className="background-red text-white py-20">
          <div className="cont">
            <div class="flex flex-col text-white py-20 text-center ">
              <div class=" ">
                <p class="bg-custom pb-3">About Company</p>
              </div>
              <div className="flex justify-between">
                <h3 class="text-5xl font-bold pb-3">
                  Why Should Use Worlddigital.ai
                </h3>
                <button class="bg-gradient-to-r from-red-600 via-red-500 to-blue-600 text-white font-bold py-2 px-12 rounded-full ">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="flex gap-6 ">
              <div className="flex text-white p-8 border-blue-950 border-2 rounded-2xl ">
                <div className="img-content">
                  <div className="flex gap-7">
                    <img
                      className="w-14 h-14"
                      src={Symbol1}
                      alt="Snowflake Icon"
                    />
                    <div className="flex flex-col">
                      <h3 className="text-2xl font-bold pb-3">
                        Automated Visual Designs
                      </h3>
                      <p className="text-lg">
                        Stunning visuals that reflect your brand.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex text-white p-8 border-blue-950 border-2 rounded-2xl ">
                <div className="img-content">
                  <div className="flex gap-7">
                    <img
                      className="w-14 h-14"
                      src={Snowflake}
                      alt="Snowflake Icon"
                    />
                    <div className="flex flex-col">
                      <h3 className="text-2xl font-bold pb-3">
                        Automated Visual Designs
                      </h3>
                      <p className="text-lg">
                        Stunning visuals that reflect your brand.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex text-white p-8 border-blue-950 border-2 rounded-2xl ">
                <div className="img-content">
                  <div className="flex gap-7">
                    <img
                      className="w-14 h-14"
                      src={Badge}
                      alt="Snowflake Icon"
                    />
                    <div className="flex flex-col">
                      <h3 className="text-2xl font-bold pb-3">
                        Automated Visual Designs
                      </h3>
                      <p className="text-lg">
                        Stunning visuals that reflect your brand.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-6 mt-6">
              <div className="flex text-white p-8 border-blue-950 border-2 rounded-2xl ">
                <div className="img-content">
                  <div className="flex gap-7">
                    <img
                      className="w-14 h-14"
                      src={UserLock}
                      alt="Snowflake Icon"
                    />
                    <div className="flex flex-col">
                      <h3 className="text-2xl font-bold pb-3">
                        Automated Visual Designs
                      </h3>
                      <p className="text-lg">
                        Stunning visuals that reflect your brand.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex text-white p-8 border-blue-950 border-2 rounded-2xl ">
                <div className="img-content">
                  <div className="flex gap-7">
                    <img
                      className="w-14 h-14"
                      src={Wallet2}
                      alt="Snowflake Icon"
                    />
                    <div className="flex flex-col">
                      <h3 className="text-2xl font-bold pb-3">
                        Automated Visual Designs
                      </h3>
                      <p className="text-lg">
                        Stunning visuals that reflect your brand.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex text-white p-8 border-blue-950 border-2 rounded-2xl ">
                <div className="img-content">
                  <div className="flex gap-7">
                    <img
                      className="w-14 h-14"
                      src={Fingerprint}
                      alt="Snowflake Icon"
                    />
                    <div className="flex flex-col">
                      <h3 className="text-2xl font-bold pb-3">
                        Automated Visual Designs
                      </h3>
                      <p className="text-lg">
                        Stunning visuals that reflect your brand.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}

      <div className="">
        <div className="flex">
          <div className="flex">
            <img src={AboutRobot} alt="ok" />
          </div>
          <div class="flex flex-col text-white w-1/3 py-20 pl-24">
            <div class=" ">
              <p class="bg-custom pb-3">About Company</p>
            </div>
            <div className="flex flex-col justify-between">
              <h3 class="text-5xl font-bold pb-3">
                Why Should Use Worlddigital.ai
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud xercitation ullamco laboris
                nisi ut aliquip ex ea commodo tempor incididunt ut labore et
                dolore magna.
              </p>
              <div className="">
                <div className="flex justify-between my-5">
                  <p>Lorem Ispum</p>
                  <p>90%</p>
                </div>
                <div className="bg-gradient-to-r from-red-600 via-red-500 to-blue-600 text-white font-bold py-1 px-12 rounded-full "></div>
              </div>
              <div className="">
                <div className="flex justify-between my-5">
                  <p>Lorem Ispum</p>
                  <p>90%</p>
                </div>
                <div className="bg-gradient-to-r from-red-600 via-red-500 to-blue-600 text-white font-bold py-1 px-12 rounded-full "></div>
              </div>
              <div className="">
                <div className="flex justify-between my-5">
                  <p>Lorem Ispum</p>
                  <p>90%</p>
                </div>
                <div className="bg-gradient-to-r from-red-600 via-red-500 to-blue-600 text-white font-bold py-1 px-12 rounded-full "></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How we Work */}
      <div className="">
        <div className="">
          <div className="cont">
            <div class="flex flex-col justify-center align-middle text-white py-20 text-center ">
              <div class="flex align-middle justify-center">
                <p class="bg-custom pb-3">How We Works</p>
              </div>
              <h3 class="text-5xl font-bold pb-3">Our Working Process</h3>
              <p class="mt-4 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
            <div className="flex gap-3 mb-10 pl-7">
              <div className="max-w-sm p-6 bg-navy rounded-lg shadow-lg">
                <div className="bg-gradient-to-r from-blue-950 to-black p-6 rounded-t-lg shadow-md">
                  <div className="flex items-center space-x-3">
                    <div className="bg-transparent p-2 rounded-full">
                      <img className="w-12 h-12" src={dots} alt="ok" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                      Make A Payment
                    </h3>
                  </div>
                </div>
                <div className="p-6 bg-navy rounded-b-lg">
                  <p className="mt-4 text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </p>
                </div>
              </div>
              <div className="max-w-sm p-6 bg-navy rounded-lg shadow-lg">
                <div className="bg-gradient-to-r from-blue-950 to-black p-6 rounded-t-lg shadow-md">
                  <div className="flex items-center space-x-3">
                    <div className="bg-transparent p-2 rounded-full">
                      <img className="w-12 h-12" src={wallet} alt="ok" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                      Make A Payment
                    </h3>
                  </div>
                </div>
                <div className="p-6 bg-navy rounded-b-lg">
                  <p className="mt-4 text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </p>
                </div>
              </div>
              <div className="max-w-sm p-6 bg-navy rounded-lg shadow-lg">
                <div className="bg-gradient-to-r from-blue-950 to-black p-6 rounded-t-lg shadow-md">
                  <div className="flex items-center space-x-3">
                    <div className="bg-transparent p-2 rounded-full">
                      <img className="w-12 h-12" src={screen} alt="ok" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                      Make A Payment
                    </h3>
                  </div>
                </div>
                <div className="p-6 bg-navy rounded-b-lg">
                  <p className="mt-4 text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10">
        <div className="cont">
          <div className="flex align-middle justify-center">
            <img src={Howitworks} alt="Howitworks"></img>
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="mb-10">
        <div className="cont">
          <div class="flex flex-col justify-center align-middle text-white py-20 text-center ">
            <div class="flex align-middle justify-center">
              <p class="bg-custom pb-3">Case Studies</p>
            </div>
            <h3 class="text-5xl font-bold pb-3">
              Our Case Studies Comming Soon!
            </h3>
            <p class="mt-4 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
          <div className="flex">
            <img src={facebook} alt="ok" />
            <img src={Google} alt="ok" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
