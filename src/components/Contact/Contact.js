import Image from "next/image";
import personalImage from "@/assets/images/shipon-irfan.jpg";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import ContactForm from "../Shared/ContactForm";
const Contact = () => {
  return (
    <div id="contact" className="bg-primary-dark md:py-28 py-16">
      <div className="container px-6 lg:px-8 mx-auto flex flex-col-reverse lg:flex-row gap-8 justify-center items-center text-white">
        <div className="lg:w-1/3 w-full flex flex-col items-center lg:items-stretch">
          <Image
            src={personalImage}
            alt="Shipon irfan"
            width={420}
            height={500}
            className="rounded-3xl  mb-10"
          />
          <div className="space-y-6">
            <div>
              <h3 className="uppercase font-medium text-gray-300">
                Write An E-mail
              </h3>
              <h2 className="text-xl font-medium">shiponirfan.dev@gmail.com</h2>
            </div>
            <div>
              <h3 className="uppercase font-medium text-gray-300">WhatsApp</h3>
              <h2 className="text-xl font-medium">+8801710467100</h2>
            </div>
            <div className="space-x-3">
              <button className="bg-primary-blue-gray rounded-full hover:bg-primary-main duration-300 hover:text-primary-gray p-3 text-xl">
                <a
                  href="https://www.linkedin.com/in/shiponirfan"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
              </button>
              <button className="bg-primary-blue-gray rounded-full hover:bg-primary-main duration-300 hover:text-primary-gray p-3 text-xl">
                <a
                  href="https://www.facebook.com/shiponirfan.dev"
                  target="_blank"
                >
                  <FaFacebookF />
                </a>
              </button>
              <button className="bg-primary-blue-gray rounded-full hover:bg-primary-main duration-300 hover:text-primary-gray p-3 text-xl">
                <a href="https://github.com/shiponirfan" target="_blank">
                  <FaGithub />
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-2/3 w-full">
          <div className="md:space-y-5 space-y-3">
            <h3 className="uppercase text-xl font-medium text-primary-main">
              Contact
            </h3>
            <h2 className="md:text-5xl text-3xl font-semibold">
              Let’s Discuss Your Project
            </h2>
          </div>

          <ContactForm/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
