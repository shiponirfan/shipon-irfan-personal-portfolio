import projectImage1 from "@/assets/projects-images/dreamJobs.png";
import projectImage2 from "@/assets/projects-images/mealMaster.png";
import projectImage3 from "@/assets/projects-images/brandByte.png";
import Image from "next/image";
import { LuExternalLink } from "react-icons/lu";

const Projects = () => {
  return (
    <div id="projects" className="bg-primary-dark md:py-28 py-16">
      <div className="container px-6 lg:px-8 mx-auto">
        <div className="md:space-y-5 space-y-3 text-xs md:text-base text-white">
          <h3 className="uppercase text-xl font-medium text-primary-main">
            Projects
          </h3>
          <h2 className="md:text-5xl text-3xl font-semibold">Recent Project</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-4 md:mt-16 mt-6">
          <div className="bg-white p-3 rounded-lg text-primary-dark group">
            <div className="w-full relative xl:h-[350px] lg:h-[250px]  overflow-hidden rounded-lg before:absolute before:z-10 before:w-full before:h-full before:group-hover:bg-black before:opacity-50 before:duration-300">
              <Image
                className="rounded-lg  group-hover:scale-110 duration-500 h-full w-full object-cover"
                src={projectImage1}
                alt="project image"
              />
              <a
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 opacity-0 flex justify-center items-center gap-2  duration-300  bg-white py-2 px-3 rounded z-20"
                href="https://dream-jobs-76f13.web.app"
                target="_blank"
              >
                Live Link
                <LuExternalLink />
              </a>
            </div>
            <div className="pt-5">
              <h3 className="text-xl font-semibold">Dream Jobs</h3>
              <p>Job Listing Website</p>
            </div>
          </div>
          <div className="bg-white p-3 rounded-lg text-primary-dark group">
            <div className="w-full relative xl:h-[350px] lg:h-[250px] overflow-hidden rounded-lg before:absolute before:z-10 before:w-full before:h-full before:group-hover:bg-black before:opacity-50 before:duration-300">
              <Image
                className="rounded-lg  group-hover:scale-110 duration-500 h-full w-full object-cover"
                src={projectImage2}
                alt="project image"
              />
              <a
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 opacity-0 flex justify-center items-center gap-2  duration-300  bg-white py-2 px-3 rounded z-20"
                href="https://mealmaster-ea76d.web.app"
                target="_blank"
              >
                Live Link
                <LuExternalLink />
              </a>
            </div>
            <div className="pt-5">
              <h3 className="text-xl font-semibold">Meal Master</h3>
              <p>Full Stack Hostel Meal Management Website</p>
            </div>
          </div>
          <div className="bg-white p-3 rounded-lg text-primary-dark group">
            <div className="w-full red-500 relative xl:h-[350px] lg:h-[250px] overflow-hidden rounded-lg before:absolute before:z-10 before:w-full before:h-full before:group-hover:bg-black before:opacity-50 before:duration-300">
              <Image
                className="rounded-lg group-hover:scale-110 duration-500 h-full w-full object-cover"
                src={projectImage3}
                alt="project image"
              />
              <a
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 opacity-0 flex justify-center items-center gap-2  duration-300  bg-white py-2 px-3 rounded z-20"
                href="https://brand-byte.web.app"
                target="_blank"
              >
                Live Link
                <LuExternalLink />
              </a>
            </div>
            <div className="pt-5">
              <h3 className="text-xl font-semibold">Brand Byte</h3>
              <p>Car Renowned Brands Collections</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
