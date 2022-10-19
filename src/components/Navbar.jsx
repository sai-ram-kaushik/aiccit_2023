import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import mrlogo from '../assets/Images/mrlogo.jpg'
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Conference Committee", link: "/conference_committee" },
    { name: "Conference Track", link: "/conference_track" },
    { name: "Glimps", link: "/glimps" },
    { name: "Important Dates", link: "/dates" },
    { name: "Registration", link: "/register" },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
        const nav = document.querySelector('nav')
        window.scrollY > 30 ? setSticky(true) : setSticky(false);
    })
})
  return (
    <nav className={`fixed w-full left-0 top-0 z-[999] ${sticky ? "bg-white text-gray-600" : "text-gray-600"}`}>
      <div className="flex items-center justify-between ">
        <div className="mx-7">
          <h4 className="text-4xl uppercase font-bold font-sans m-3">Logo</h4>
        </div>
        <div className="text-gray-600 md:block hidden px-7 py-2 font-medium">
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-[#3FBA96]">
                <Link to={menu?.link}>{menu?.name}</Link> 
              </li>
            ))}
          </ul>
        </div>
        <div className="flex mx-7">
          <img src={mrlogo} className="w-9/12"/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
