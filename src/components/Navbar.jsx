import React, { useEffect, useState } from "react";
import {CgMenuRight} from 'react-icons/cg'
import { Link } from "react-router-dom";
import mrlogo from "../assets/Images/mrlogo.jpg";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import logo from '../assets/Images/logo.png'


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Conference Track", link: "/conference_track" },
    { name: "Glimps", link: "/glimps" },
    { name: "Important Dates", link: "/dates" },
    { name: "Registration", link: "/register" },
  ];

const dropDownLinks = [
  {name: "Committee", link: "/committee"}
]

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
            <img src={logo} width="100px"/>
        </div>
        <div className="text-gray-600 md:block hidden px-7 py-2 font-medium">
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-[#3FBA96]">
                <Link to={menu?.link}>{menu?.name}</Link>
              </li>
            ))}
            <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex  w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          Conference Committee
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

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
                  to="/committee"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Committee
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/advisory_committee"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Advisory Committee
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/technical_advisory_committee"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Technical Advisory
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
          </ul>
        </div>
        <div onClick={() => setOpen(!open)} className={`z-[999] ${open ? "text-gray-900" : "text-gray-800"} text-3xl md:hidden m-5`}>
                    <CgMenuRight />
                </div>
                <div className={`md:hidden text-gray-600 absolute w-2/2 h-screen px-3 py-2 font-medium bg-white top-0  duration-1000 ${open ? 'right-0' : 'right-[-100%]'}`}>
                    <ul className='flex flex-col justify-center h-full gap-10 py-2 text-lg'>
                        {
                            menuLinks?.map((menu, i) => (
                                <li key={i} className='px-6 hover:text-cyan-600'>
                                    <a href={menu?.link}>{menu?.name}</a>
                                </li>
                            ))
                        }
                        <img src={mrlogo} className="w-9/12 mt-14" />
                    </ul>
                </div>
        <div className="mx-7 md:block hidden">
          <img src={mrlogo} className="w-9/12" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
