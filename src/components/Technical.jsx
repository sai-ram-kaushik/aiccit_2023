import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Technical = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);


  const local = [
    {
      photo: "images/local/sarita.jpg", name: "Prof. Sarita Sachdeva", designation: "Ex Director & Dean R&D, MRIIRS"
    },
    {
      photo: "images/local/leena.jpg", name: "Prof. Leena G", designation: "HOD - EEE, FET, MRIIRS"
    },
    {
      photo: "images/local/devendra.png", name: "Prof. Devendra Vashist", designation: "HOD - AU, FET, MRIIRS"
    },
    {
      photo: "images/local/Manoj.png", name: "Prof. Monoj Nayak", designation: "HOD - ME, FET, MRIIRS"
    },
    {
      photo: "images/local/Sunita.png", name: "Prof. Sunita Bansal", designation: "HOD - Civil, FET, MRIIRS"
    },
    {
      photo: "images/local/jyoti.png", name: "Prof. Jyoti Chawla", designation: "HOD - Applied Sciences, FET, MRIIRS"
    },
    {
      photo: "images/local/abhiruchi.png", name: "Prof. Abhiruchi Passi", designation: "HOD - ECE, FET, MRIIRS"
    },
    {
      photo: "images/local/rashmi.jpeg", name: "Prof. Rashmi Agarwal", designation: "Head, FCA, MRIIRS"
    },
  ]

  const organizing = [
    {
      photo: "images/organizing/poonam_nandal.jpg", name: "Dr. Poonam Nandal", designation: "Professor, CSE, FET, MRIIRS"
    },
    {
      photo: "images/organizing/deepa_bura.jpg", name: "Dr. Deepa Bura", designation: "Professor, CSE, FET, MRIIRS"
    },
    {
      photo: "images/organizing/rosy_madaan.png", name: "Dr. Rosy Madaan", designation: "Professor, CSE, FET, MRIIRS"
    },
    {
      photo: "images/organizing/nitasha_soni.jpg", name: "Dr. Nitasha Soni", designation: "Professor, CSE, FET, MRIIRS"
    }
  ]

  return (
    <section id="skills" className="py-10 relative">
      <div className="mt-20 text-gray-600 text-center">
        <h3 className="text-4xl font-semibold" data-aos="fade-right">
          Advisory <span className="text-[#3FBA96]">Committee</span>
        </h3>
        <p
          className="text-[#A8271A] mt-14 text-3xl font-bold"
          data-aos="fade-right"
        >
          Local Technical Advisory Committee
        </p>
        <div
          className="flex items-center justify-center mt-12 gap-10 flex-wrap"
          data-aos="fade-right"
        >
          {local?.map((local, i) => (
            <div
              key={i}
              className="border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] h-[350px]  p-10 rounded-xl"
            >
              <div className="flex items-center justify-center">
                <div className="text-6xl group-hover:text-cyan-600">
                  <img src={local.photo} className="rounded-full" />
                </div>
              </div>
              <p className="text-lg mt-2 text-gray-600">{local.name}</p>
              <p className="text-lg mt-3 text-gray-600">
                {local.designation}
              </p>
            </div>
          ))}
        </div>

        <p
          className="text-[#A8271A] mt-14 text-3xl font-bold"
          data-aos="fade-right"
        >
          Organizing Secretaries
        </p>
        <div
          className="flex items-center justify-center mt-12 gap-10 flex-wrap"
          data-aos="fade-right"
        >
          {organizing?.map((organizing, i) => (
            <div
              key={i}
              className="border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] h-[350px]  p-10 rounded-xl"
            >
              <div className="flex items-center justify-center">
                <div className="text-6xl group-hover:text-cyan-600">
                  <img src={organizing.photo} className="rounded-full" />
                </div>
              </div>
              <p className="text-lg mt-2 text-gray-600">{organizing.name}</p>
              <p className="text-lg mt-3 text-gray-600">
                {organizing.designation}
              </p>
            </div>
          ))}
        </div>
        <p className='text-[#A8271A] mt-20 text-3xl font-bold' data-aos="fade-right">Organizing Committee</p>
        <p className='text-gray-600  mt-20 text-3xl font-bold' data-aos="fade-right">CSE, FET, MRIIRS</p>
      </div>
    </section>
  );
};

export default Technical;
