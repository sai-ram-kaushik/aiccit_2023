import React from "react";

const Partners = () => {
  const partners = [
    { link: "images/aws.png" },
    { link: "images/oracle.png" },
    { link: "images/ibm.png" },
    { link: "images/microsoft.png" },
    { link: "images/infosis1.png" },
  ];
  return (
    <section className="w-full mt-14 ">
      <div className="text-center mt-14">
        <h3 className="text-gray-600 font-semibold text-5xl">
          Academic <span className="text-[#3FBA96]">Partners</span>
        </h3>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {partners?.map((partners, i) => (
            <div key={i} className="relative min-w-[5rem] max-w-[15rem] p-10">
              <img src={partners?.link} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
