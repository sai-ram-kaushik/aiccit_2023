import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
const Footer = () => {
  const contact = [
    {
      name: "Call Support",
      details: "+91 99108 91864",
      icons: <BiPhoneCall />,
    },
    {
      name: "Email Support",
      details: "aiccit2023@gmail.com",
      icons: <AiOutlineMail />,
    },
    { name: "Location", details: "MRIIRS Campus", icons: <GoLocation /> },
  ];
  return (
    <div className="w-full bg-[#1B1464] mt-14 p-3">
      <div className="text-white flex md:flex-row flex-col items-center leading-5 justify-center md:gap-80 gap-10 text-2xl">
        {contact?.map((contact, i) => (
          <div key={i}>
            <div className="flex justify-center items-center gap-3">
              {contact?.icons}
              {contact?.name}
            </div>
            <br />
            <div>
              {contact?.details}
            </div>
          </div>
        ))}
      </div>
      <p className="text-white flex text-center items-center justify-center mt-8">
        Copyright &#169; AICCIT - 2023. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
