"use client"
import aboutMeImage from "@/assets/images/about-me.png";
import Image from "next/image";
import DownloadResume from "../Shared/DownloadResume";
const AboutMe = () => {
  return (
    <div id="about" className="bg-primary-dark md:py-28 py-16">
      <div className="container md:pt-48 lg:pt-0 pt-0 px-6 lg:px-8 mx-auto flex flex-col lg:flex-row justify-center items-center">
        <div className="lg:w-1/2 w-full text-white md:space-y-5 space-y-3 text-xs md:text-base">
          <h3 className="uppercase text-xl font-medium text-primary-main">
            About Me
          </h3>
          <h2 className="md:text-5xl text-2xl font-semibold">MERN Stack Developer</h2>
          <p>
            👋 Hello, I&apos;m Shipon Irfan, a passionate MERN stack developer
            with a focus on crafting seamless and dynamic user experiences. As a
            dedicated frontend developer, I specialize in React.js, leveraging
            the power of Tailwind CSS and Material UI to bring designs to life.
          </p>
          <p>💻 With a keen eye for detail and a love for clean, elegant code, I strive to create interfaces that not only look great but also deliver exceptional usability. My goal is to build web applications that not only meet but exceed user expectations.</p>
          <p>🚀 Whether it&apos;s transforming design concepts into responsive and interactive web pages or optimizing performance for a smoother user journey, I am committed to delivering high-quality solutions that make a meaningful impact.</p>

          <DownloadResume/>
        </div>
        <div className="lg:w-1/2 w-full lg:justify-end justify-center flex pt-12 lg:pt-0">
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
