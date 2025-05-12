/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="mainHero hidden lg:block">
        <div className="bg-lavender h-[90vh] 2xl:pb-16 w-screen flex">
          <div className="left lg:w-[52%]">
            <p className="text-[9.55vmin] 2xl:text-[11vmin] tracking-[0.35vmin]  font-lora text-darkviolet mt-9 ml-3   p-8 2xl:pl-12 leading-[13vmin]  2xl:leading-[13.95vmin]">
              The latest in the makeup & <br></br>
              <span>beauty world</span>
            </p>

            <p className="ml-12 w-[80%] text-[2vmin] leading-[4vmin] 2xl:ml-14">
              Your go to source for cosmetic product, tutorials, quetions{" "}
              <br></br> and product reviews
            </p>

            <div className="searchHolder w-[80%] flex   ml-10 mt-8 rounded-4xl">
              <input
                className="inputHolder w-[70%] h-[7vmin] bg-white rounded-l-4xl text-gray-600 pl-5 pt-[0.75px]s"
                placeholder="Search Articles..."
              />

              <div className="inputHolder w-[30%] h-[7vmin] ml-[-4vmin] flex justify-center items-center  rounded-l-4xl rounded-r-4xl bg-[#4f1f51] text-white">
                <p>Search</p>
              </div>
            </div>
          </div>
          <div className="right h-full lg:w-[48%] pb-5 mt-4 ">
            <Image
              src="/cosmetic-hero.png"
              alt="cosmetic image"
              className="rounded-lg "
              height={580}
              width={580}
            />
          </div>
        </div>
      </div>

      {/* Mobile screen hero section */}
      <div className="relative mainHero block lg:hidden ">
        <div className="bg-lavender h-[70vh] md:h-[80vh] flex">
          <div className="left w-[70%]">
            <p className="pl-4 md:pl-8 mt-10 md:mt-18 text-[9.5vmin] md:text-[9vmin] absolute z-[100] 2xl:text-[9.5vmin] tracking-[0.55vmin]  font-lora font-extrabold text-darkviolet leading-[13.15vmin] md:leading-[12.15vmin] 2xl:leading-[9vmin]">
              The latest in <br></br>
              <span>makeup &</span>
              <br></br>
              <span> beauty</span>
            </p>
            <p className="ml-13 md:ml-15 w-[32%] pr-[4px] absolute top-[39%]  z-[100]  left-[-10%] text-[3.75vmin]  leading-[7vmin] md:top-[45%] md:text-[2.15vmin] md:leading-[4vmin] md:left-[-4%] text-start">
              You own blog platform for all your beauty needs from our experts
            </p>
          </div>

          <div className="imageHolder absolute top-[19%] left-[36%]  w-[61vw] h-[58vh] ">
            <img
              src="/cosmetic-hero.png"
              className="max-h-full max-w-full rounded-2xl"
            />
          </div>
          <div className="searchHolder absolute top-[75%]  w-[95%] md:top-[86%] md:w-[85%] flex  ml-4  md:ml-12 mt-6 rounded-4xl">
            <input
              type="text"
              placeholder="Search articles..."
              className="inputHolder w-[70%] h-[13vmin] md:h-[8.35vmin] bg-white rounded-l-4xl text-gray-600 pl-5 pt-1 md:pt-1 text-sm md:text-lg"
            />

            <div className="inputHolder w-[30%]  h-[13vmin] md:h-[8.35vmin] ml-[-6vmin] flex justify-center items-center  rounded-l-4xl rounded-r-4xl bg-[#4f1f51] text-white text-sm md:text-lg">
              <p>Search</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
