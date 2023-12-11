"use client";
import { FaCode } from "react-icons/fa6";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
const NavDrawer = ({ isOpen, setIsOpen }) => {
  const [activeLink, setActiveLink] = useState("home");
  const navItems = [
    {
      href: "home",
      name: "Home",
    },
    {
      href: "about",
      name: "About Me",
    },
    {
      href: "skills",
      name: "My Skills",
    },
    {
      href: "projects",
      name: "Projects",
    },
    {
      href: "education",
      name: "Experience",
    },
    {
      href: "contact",
      name: "Contact",
    },
  ];

  const handleSetActive = (to) => {
    setActiveLink(to);
  };
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && e.target.closest(".navDrawer") === null) {
        setIsOpen(false);
      }
    };
    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, setIsOpen]);
  return (
    <div
      className={`${
        isOpen ? "w-full min-h-screen bg-[#00000080] fixed z-50" : ""
      } duration-700 `}
    >
      <div
        className={`${
          isOpen ? "right-0" : "right-[-400px]"
        } navDrawer duration-700 min-h-screen bg-primary-blue-gray text-white fixed  z-50`}
      >
        <div className=" flex justify-between p-8 bg-primary-gray">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="flex gap-4 items-center cursor-pointer"
          >
            <span
              onClick={scrollToTop}
              className="text-primary-blue-gray bg-primary-main h-14 w-14 flex justify-center items-center text-3xl"
            >
              <FaCode />
            </span>
            <h2 className="text-white uppercase text-xl  font-medium">
              Shipon
            </h2>
          </ScrollLink>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-4xl hover:text-primary-main duration-300 "
          >
            <IoCloseCircleSharp />
          </button>
        </div>
        <nav className=" space-y-6 min-h-screen flex flex-col px-20 pt-20">
          {navItems.map((route) => (
            <ScrollLink
              className={`font-medium text-xl uppercase hover:text-primary-main duration-300 cursor-pointer ${
                activeLink === route.href ? "text-primary-main" : ""
              }`}
              key={route.name}
              to={route.href}
              smooth={true}
              duration={500}
              offset={-80}
              onSetActive={() => handleSetActive(route.href)}
              spy={() => handleSetActive(route.href)}
            >
              {route.name}
            </ScrollLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavDrawer;
