"use client";

import { CiSearch } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <section className="overflow-hidden">
      <Slider {...settings}>
        <div className="h-[500px] w-full bg-hero bg-center bg-no-repeat bg-cover relative">
          <div
            className="w-full h-full flex justify-center items-center md:pt-[100px] md:pb-[100px]"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="w-[95%] flex-col items-center flex md:mt-3">
              <h3 className="font-great-vibes text-[40px] sm:text-[30px] text-[#F27E98] p-0 md:text-[50px]">
                Welcome
              </h3>

              <h2 className="text-white text-[32px] sm:text-[24px] font-bold mt-3 text-center md:text-[28px]">
                HIGH QUALITY MAKEUP
              </h2>

              <p className="text-gray-200 text-[16px] sm:text-[14px] w-[90%] max-w-[600px] text-center mt-3 md:text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>

              <div className="w-full max-w-[600px] sm:max-w-[350px] h-[50px] flex bg-white mt-6 rounded-full items-center overflow-hidden">
                <div className="w-[10%] sm:w-[15%] h-full flex justify-center items-center">
                  <div className="text-[24px]">
                    <CiSearch />
                  </div>
                </div>
                <input
                  type="text"
                  className="flex-1 h-full border-none outline-none text-gray-700 text-sm px-3"
                  placeholder="Search makeups......"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="h-[500px] w-full bg-hero2  bg-center bg-no-repeat bg-cover relative">
          <div
            className="w-full h-full flex justify-center items-center md:pt-[100px] md:pb-[100px]"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="w-[95%] flex-col items-center flex md:mt-3">
              <h3 className="font-great-vibes text-[40px] sm:text-[30px] text-[#F27E98] p-0 md:text-[50px]">
                Welcome
              </h3>

              <h2 className="text-white text-[32px] sm:text-[24px] font-bold mt-3 text-center md:text-[28px]">
                HIGH QUALITY MAKEUP KITS
              </h2>

              <p className="text-gray-200 text-[16px] sm:text-[14px] w-[90%] max-w-[600px] text-center mt-3 md:text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>

              <div className="w-full max-w-[600px] sm:max-w-[350px] h-[50px] flex bg-white mt-6 rounded-full items-center overflow-hidden">
                <div className="w-[10%] sm:w-[15%] h-full flex justify-center items-center">
                  <div className="text-[24px]">
                    <CiSearch />
                  </div>
                </div>
                <input
                  type="text"
                  className="flex-1 h-full border-none outline-none text-gray-700 text-sm px-3"
                  placeholder="Search makeups......"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="h-[500px] w-full bg-hero3  bg-center bg-no-repeat bg-cover relative">
          <div
            className="w-full h-full flex justify-center items-center md:pt-[100px] md:pb-[100px]"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="w-[95%] flex-col items-center flex md:mt-3">
              <h3 className="font-great-vibes text-[40px] sm:text-[30px] text-[#F27E98] p-0 md:text-[50px]">
                Welcome
              </h3>

              <h2 className="text-white text-[32px] sm:text-[24px] font-bold mt-3 text-center md:text-[28px]">
                HIGH QUALITY MAKEUPS
              </h2>

              <p className="text-gray-200 text-[16px] sm:text-[14px] w-[90%] max-w-[600px] text-center mt-3 md:text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>

              <div className="w-full max-w-[600px] sm:max-w-[350px] h-[50px] flex bg-white mt-6 rounded-full items-center overflow-hidden">
                <div className="w-[10%] sm:w-[15%] h-full flex justify-center items-center">
                  <div className="text-[24px]">
                    <CiSearch />
                  </div>
                </div>
                <input
                  type="text"
                  className="flex-1 h-full border-none outline-none text-gray-700 text-sm px-3"
                  placeholder="Search makeups......"
                />
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Hero;
