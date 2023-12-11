"use client";
import Image from "next/image";
import heroBg from "@/assets/images/hero-bg.jpg";
import heroImage from "@/assets/images/shipon-transparent.png";
import { TypeAnimation } from "react-type-animation";
import DownloadResume from "../Shared/DownloadResume";

const Hero = () => {
  return (
    <div id="home" className="h-screen">
      <div className="absolute w-full h-full -z-10">
        <Image
          src={heroBg}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="banner"
        />
      </div>
      <div className="container px-6 lg:px-8 h-full mx-auto py-32 lg:py-0 flex flex-col lg:flex-row justify-between items-center text-white">
        <div className="lg:w-1/2 w-full md:space-y-5 space-y-3">
          <div>
            <h2 className="uppercase font-bold md:text-6xl text-3xl">
              HI, I&apos;M
            </h2>
            <h2 className="uppercase font-bold md:text-6xl text-3xl text-primary-main">
              Shipon Irfan!
            </h2>
            <TypeAnimation
              sequence={[
                "Creative Frontend Developer",
                1500,
                "Digital Experience Engineer",
                1500,
                "Web Design Wizard",
                1500,
                "Code Enthusiast",
                1500,
              ]}
              wrapper="span"
              speed={50}
              style={{
                display: "inline-block",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
              className="2xl:text-4xl md:text-2xl xl:text-3xl text-lg"
              repeat={Infinity}
            />
          </div>
          <p className="md:pr-20">
            Dedicated MERN Stack Developer, Passionate about Front-End,
            Elevating User Experiences with React.js, Turning Ideas into Web
            Solutions 💻✨
          </p>
          <div>
            <DownloadResume />
          </div>
        </div>

        <div className="xl:w-[650px] lg:w-[500px]">
          <Image src={heroImage} alt="shipon irfan" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
