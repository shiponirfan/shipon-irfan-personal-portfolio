"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nzx4f3c",
        "template_v0p1pnn",
        form.current,
        "otPToC7jpVlYUG5mj"
      )
      .then(
        (result) => {
          toast.success("Message Send Successfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        },
        (error) => {
            toast.error('Message Send Failed', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail} className="flex w-full space-x-3">
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
                name="name"
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
                name="email"
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
                name="subject"
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
      <ToastContainer />
    </form>
  );
};

export default ContactForm;
