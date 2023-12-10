"use client";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const navItems = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/about",
      name: "About Me",
    },
    {
      href: "/projects",
      name: "Projects",
    },
    {
      href: "/services",
      name: "Services",
    },
    {
      href: "/blog",
      name: "Blog",
    },
    {
      href: "/contact",
      name: "Contact",
    },
  ];
  return (
    <div className="fixed container left-1/2 -translate-x-1/2 bg-primary-blue-gray h-20 flex justify-between">
      <div className="w-48 h-20">
        <Image src={logo} width={180} height={80} alt="logo" />
      </div>
      <nav className="text-white space-x-8">
        {navItems.map((route) => (
          <Link
            className="font-medium uppercase"
            key={route.name}
            href={route.href}
          >
            {route.name}
          </Link>
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
