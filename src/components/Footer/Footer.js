"use client";
import ScrollToTop from "react-scroll-to-top";
const Footer = () => {
  return (
    <div className="bg-primary-gray py-8 text-center text-white">
      <p>
        Copyright © {new Date().getFullYear()} Shipon Irfan - All Right Reserved
      </p>
      <ScrollToTop className="flex justify-center items-center" smooth />
    </div>
  );
};

export default Footer;
