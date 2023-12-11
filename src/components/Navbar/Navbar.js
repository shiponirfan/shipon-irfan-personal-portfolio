"use client";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import NavDrawer from "../Shared/NavDrawer";
import { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import ContactDrawer from "../Shared/ContactDrawer";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
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
  return (
    <>
      <div className="fixed z-40 container left-1/2 -translate-x-1/2 bg-primary-blue-gray h-20 flex justify-between items-center">
        <div className=" flex justify-start">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="flex gap-4 items-center cursor-pointer"
            onSetActive={() => handleSetActive("home")}
          >
            <span
              onClick={scrollToTop}
              className="text-primary-blue-gray bg-primary-main h-20 w-20 flex justify-center items-center text-4xl"
            >
              <FaCode />
            </span>
            <h2 className="text-white uppercase text-3xl font-medium">
              Shipon
            </h2>
          </ScrollLink>
        </div>
        <nav className="text-white space-x-8 hidden lg:flex">
          {navItems.map((route) => (
            <ScrollLink
              className={`font-medium uppercase hover:text-primary-main duration-300 cursor-pointer ${
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
        <div className="xl:w-48 flex justify-end">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary-blue-gray lg:hidden bg-primary-main h-20 w-20 flex justify-center items-center text-3xl"
          >
            <FaBars />
          </button>
          <button
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="text-primary-blue-gray hidden bg-primary-main h-20 w-20 lg:flex justify-center items-center text-3xl"
          >
            <FaRegEnvelope /> 
          </button>
        </div>
      </div>
      <NavDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
      <ContactDrawer isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen}/>
    </>
  );
};

export default Navbar;
