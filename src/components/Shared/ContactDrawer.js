"use client";
import { FaCode } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useEffect } from "react";
import ContactForm from "./ContactForm";
const ContactDrawer = ({ isFormOpen, setIsFormOpen }) => {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isFormOpen && e.target.closest(".contactDrawer") === null) {
        setIsFormOpen(false);
      }
    };
    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [isFormOpen, setIsFormOpen]);
  return (
    <div
      className={`${
        isFormOpen ? "w-full min-h-screen bg-[#00000080] fixed z-50" : ""
      } duration-700 `}
    >
      <div
        className={`${
          isFormOpen ? "right-0" : "right-[-500px]"
        } contactDrawer duration-700 w-96 min-h-screen bg-primary-gray text-white fixed  z-50`}
      >
        <div className=" flex justify-between p-8 bg-primary-blue-gray">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="flex gap-4 items-center cursor-pointer"
          >
            <span className="text-primary-blue-gray bg-primary-main h-14 w-14 flex justify-center items-center text-3xl">
              <FaCode />
            </span>
            <h2 className="text-white uppercase text-xl  font-medium">
              Shipon
            </h2>
          </ScrollLink>
          <button
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="text-4xl hover:text-primary-main duration-300 "
          >
            <IoCloseCircleSharp />
          </button>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactDrawer;
