import React, { useEffect, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import mrlogo from "../assets/Images/mrlogo.jpg";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import logo from "../assets/Images/logo.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 30 ? setSticky(true) : setSticky(false);
    });
  });
  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-white text-gray-600" : "text-gray-600"
      }`}
    >
      <div className="flex items-center justify-between ">
        <div className="mx-7">
          <Link to="/">
            <img src={logo} width="200px" />
          </Link>
        </div>
        <div className="text-gray-600 md:block hidden px-7 py-2 font-bold">
          <ul className="flex items-center gap-10 py-2 text-[15px]">
            <Link to="/" className="hover:text-[#3FBA96]">
              Home
            </Link>
            <Link to="/about" className="hover:text-[#3FBA96]">
              About Us
            </Link>
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button className="inline-flex  w-full justify-center text-[13px]  px-4 py-2 font-bold text-gray-700  hover:text-[#3FBA96] focus:outline-none focus:ring-2  focus:ring-offset-2 ">
                Conference Committee
                <ChevronDownIcon
                  className="-mr-1 ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/advisory_committee"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          International and national advisory Committe
                        </Link>

                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/technical_advisory_committee"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Local advisory Committee
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/committee"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Organizing committee
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/resource_person"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Resource Person Committe
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <Link to="/conference_track" className="hover:text-[#3FBA96]">
              Conference Track
            </Link>
            <Link to="/dates" className="hover:text-[#3FBA96]">
              Important Dates
            </Link>
            <Link to="/submission" className="hover:text-[#3FBA96]">
              Submission
            </Link>
            <Link to="/register" className="hover:text-[#3FBA96]">
              Registration
            </Link>
            <Link to="/glimps" className="hover:text-[#3FBA96]">
              Previous Year Conferences
            </Link>
          </ul>
        </div>
        <div className="flex items-center justify-between ">
          <div className="mx-7">
            <a href="https://manavrachna.edu.in/" target="__blank" className="md:flex hidden">
              <img src={mrlogo} width="200px" />
            </a>
          </div>
        </div>

                                   {/* Responsive Mode */}

        <div
          onClick={() => setOpen(!open)}
          className={`z-[999] ${
            open ? "text-gray-900" : "text-gray-800"
          } text-3xl md:hidden m-5`}
        >
          <CgMenuRight />
        </div>
        <div
          className={`md:hidden text-gray-600 absolute w-7/12 h-screen px-3 py-2 font-medium bg-white top-0  duration-1000 ${
            open ? "right-0" : "right-[-100%]"
          }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            <Link to="/" className="hover:text-[#3FBA96] px-6">
              Home
            </Link>
            <Link to="/about" className="hover:text-[#3FBA96] px-6">
              About Us
            </Link>
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button className="inline-flex  w-full justify-center text-[15px]  px-6 font-medium text-gray-700   hover:text-[#3FBA96] focus:outline-none focus:ring-2  focus:ring-offset-2 ">
                Conference Committee
                <ChevronDownIcon
                  className="-mr-1 ml-2 h-6 w-6"
                  aria-hidden="true"
                />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/advisory_committee"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          International and national advisory Commitee
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/technical_advisory_committee"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Local advisory Committee
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/committee"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Organizing committee
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/resource_person"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Resource Person Committe
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <Link to="/conference_track" className="hover:text-[#3FBA96] px-6">
              Conference Track
            </Link>
            <Link to="/dates" className="hover:text-[#3FBA96] px-6">
              Important Dates
            </Link>
            <Link to="/submission" className="hover:text-[#3FBA96]">
              Submission
            </Link>
            <Link to="/register" className="hover:text-[#3FBA96] px-6">
              Registration
            </Link>
            <Link to="/glimps" className="hover:text-[#3FBA96] px-6">
              Previous Year conferences
            </Link>
            <img src={mrlogo} className="w-9/12 mt-14 px-6" />
          </ul>
        </div>
        {/* <div className="mx-7 md:block hidden">
          <img src={mrlogo} className="w-[100px]" />
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
