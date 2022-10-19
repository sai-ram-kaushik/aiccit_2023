import React from "react";
const Navbar = () => {
  const menuLinks = [
    { name: "Home", link: "#" },
    { name: "About", link: "#" },
    { name: "Conference Committee", link: "#" },
    { name: "Conference Track", link: "#" },
  ];
  return (
    <nav className="fixed w-full h-10 left-0 top-0 z-[999]">
      <div className="flex items-center justify-between ">
        <div className="mx-7">
          <h4 className="text-4xl uppercase font-bold font-sans m-3">Logo</h4>
        </div>
        <div className="text-gray-600 md:block hidden px-7 py-2 font-medium">
          <ul className="flex items-center gap-1 py-2 text-2xl">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-[#3FBA96]">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex mx-7">
          <button className="btn-primary text-2xl mt-2 hover:bg-white hover:text-[#3FBA96] hover:border hover:bo">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
