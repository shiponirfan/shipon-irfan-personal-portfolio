import Image from "next/image";
import personalImage from "@/assets/images/shipon-irfan.jpg";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
const Contact = () => {
  return (
    <div className="bg-primary-dark py-28">
      <div className="container px-6 lg:px-8 mx-auto flex justify-center items-center text-white">
        <div className="w-1/3 ">
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
        <div className="w-2/3">
          <div className="space-y-5">
            <h3 className="uppercase text-xl font-medium text-primary-main">
              Contact
            </h3>
            <h2 className="text-5xl font-semibold">
              Let’s Discuss Your Project
            </h2>
          </div>

          <form className="flex w-full space-x-3">
            <div className="w-full px-5 py-10 m-auto mt-10 bg-primary-gray rounded-lg shadow">
              <div className="grid grid-cols-2 gap-4 m-auto">
                <div className="col-span-2 lg:col-span-1">
                  <div className=" relative ">
                    <h3 className="uppercase font-medium text-gray-300 mb-1">
                      Your Name
                    </h3>
                    <input
                      type="text"
                      id="name"
                      className=" rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-primary-blue-gray placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-main focus:border-transparent"
                      placeholder="Name *"
                      required
                    />
                  </div>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <div className=" relative ">
                    <h3 className="uppercase font-medium text-gray-300 mb-1">
                      Your Email
                    </h3>
                    <input
                      type="email"
                      id="email"
                      className=" rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-primary-blue-gray placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-main focus:border-transparent"
                      placeholder="Email *"
                      required
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <div className=" relative ">
                    <h3 className="uppercase font-medium text-gray-300 mb-1">
                      Subject
                    </h3>
                    <input
                      type="text"
                      id="subject"
                      className=" rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-primary-blue-gray  placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-main focus:border-transparent"
                      placeholder="Subject *"
                      required
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <h3 className="uppercase font-medium text-gray-300 mb-1">
                    Your Message
                  </h3>
                  <label for="name">
                    <textarea
                      className="flex-1 w-full px-4 py-2 text-base  placeholder-gray-400 bg-primary-blue-gray border border-transparent rounded appearance-none focus:outline-none focus:ring-2 focus:ring-primary-main focus:border-transparent"
                      id="message"
                      placeholder="Your Message *"
                      name="message"
                      rows="5"
                      cols="40"
                      required
                    ></textarea>
                  </label>
                </div>
                <div className="col-span-2 text-right">
                  <button
                    type="submit"
                    className="py-3 px-4 uppercase text-primary-dark bg-primary-main hover:bg-primary-dark focus:ring-primary-main focus:ring-offset-primary-blue-gray hover:text-white w-full transition ease-in duration-300 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded "
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
