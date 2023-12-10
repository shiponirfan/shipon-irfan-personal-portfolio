"use client";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";

const Navbar = () => {
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
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="fixed z-40 container left-1/2 -translate-x-1/2 bg-primary-blue-gray h-20 flex justify-between items-center">
      <div className="w-48 flex justify-start">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="flex gap-4 items-center cursor-pointer"
        >
          <span
            onClick={scrollToTop}
            className="text-primary-blue-gray bg-primary-main h-20 w-20 flex justify-center items-center text-4xl"
          >
            <FaCode />
          </span>
          <h2 className="text-white uppercase text-3xl font-medium">Shipon</h2>
        </ScrollLink>
      </div>
      <nav className="text-white space-x-8">
        {navItems.map((route) => (
          <ScrollLink
            className="font-medium uppercase cursor-pointer"
            key={route.name}
            to={route.href}
            smooth={true}
            duration={500}
            offset={-80}
          >
            {route.name}
          </ScrollLink>
        ))}
      </nav>
      <div className="w-48 flex justify-end">
        <button className="text-primary-blue-gray bg-primary-main h-20 w-20 flex justify-center items-center text-3xl">
          <FaBars />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
