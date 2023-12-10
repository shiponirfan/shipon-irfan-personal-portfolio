"use client";
import Image from "next/image";
import heroBg from "@/assets/images/hero-bg.jpg";
import heroImage from "@/assets/images/shipon-transparent .png";
import { FaDownload } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="h-screen">
      <div className="absolute w-full h-full -z-10">
        <Image
          src={heroBg}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="banner"
        />
      </div>
      <div className="container px-6 lg:px-8 h-full mx-auto flex justify-between items-center text-white">
        <div className="w-1/3 space-y-6">
          <div>
            <h2 className="uppercase font-bold text-6xl">HI, I&apos;M</h2>
            <h2 className="uppercase font-bold text-6xl text-primary-main">
              Shipon Irfan!
            </h2>
            <h2 className="uppercase font-bold text-4xl">Frontend Developer</h2>
          </div>
          <p className="pr-20">
            Dedicated MERN Stack Developer, Passionate about Front-End,
            Elevating User Experiences with React.js, Turning Ideas into Web
            Solutions 💻✨
          </p>
          <div>
            <button className="flex justify-center items-center gap-2 bg-primary-main py-5 px-8 text-primary-blue-gray font-medium hover:bg-primary-blue-gray hover:text-white duration-300">
              Download CV <FaDownload />
            </button>
          </div>
        </div>

        <div className="w-[650px]">
          <Image src={heroImage} height={650} width={650} alt="shipon irfan" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
