import React from "react";
import aboutMeImage from "@/assets/images/about-me.png";
import Image from "next/image";
import { FaDownload } from "react-icons/fa6";
const AboutMe = () => {
  return (
    <div className="bg-primary-dark py-28">
      <div className="container px-6 lg:px-8 mx-auto flex justify-center items-center">
        <div className="w-1/2 text-white space-y-5">
          <h3 className="uppercase text-xl font-medium text-primary-main">
            About Me
          </h3>
          <h2 className="text-5xl font-semibold">MERN Stack Developer</h2>
          <p>
            👋 Hello, I&apos;m Shipon Irfan, a passionate MERN stack developer
            with a focus on crafting seamless and dynamic user experiences. As a
            dedicated frontend developer, I specialize in React.js, leveraging
            the power of Tailwind CSS and Material UI to bring designs to life.
          </p>
          <p>💻 With a keen eye for detail and a love for clean, elegant code, I strive to create interfaces that not only look great but also deliver exceptional usability. My goal is to build web applications that not only meet but exceed user expectations.</p>
          <p>🚀 Whether it&apos;s transforming design concepts into responsive and interactive web pages or optimizing performance for a smoother user journey, I am committed to delivering high-quality solutions that make a meaningful impact.</p>
          <p>🌐 When I&apos;m not immersed in coding, you can find me exploring the latest trends in frontend development, staying curious about emerging technologies, and continually seeking ways to enhance my skills.</p>
          <p>Let&apos;s collaborate and turn your ideas into captivating digital experiences!</p>
          <button className="flex justify-center items-center gap-2 bg-primary-main py-5 px-8 text-primary-blue-gray font-medium hover:bg-primary-blue-gray hover:text-white duration-300">
              Download CV <FaDownload />
            </button>
        </div>
        <div className="w-1/2 justify-end flex">
          <Image
            src={aboutMeImage}
            alt="Shipon irfan"
            width={420}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
