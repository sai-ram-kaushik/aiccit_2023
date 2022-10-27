import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css"
const Committee = () => {

  useEffect(() =>{
    Aos.init({duration: 2000});
  }, []);

  return (
    <section className="py-10 text-gray-600" data-aos="fade-right">
      <div className="text-center mt-14">
        <h3 className="text-gray-600 text-5xl font-semibold ">
          Conference <span className="text-[#3FBA96]">Committee</span>
        </h3>
        <p className="text-[#A8271A] my-3 text-3xl mt-14 font-bold">
          Chief Patrons
        </p>
        <p className="text-gray-600 my-3 text-2xl mt-14 font-bold leading-10">
        Dr. Prashant Bhalla, President,MREI <br />
        Dr. Amit Bhalla, Vice President,MREI
        </p>
        <p className="text-[#A8271A] my-3 text-3xl mt-14 font-bold">
           Patrons
        </p>
        <p className="text-gray-600 my-3 text-2xl mt-14 font-bold leading-10">
        Dr. Sanjay Shrivastava, Vice Chancellor, MRIIRS <br />
        Dr. Naresh Grover, Pro Vice Chancellor, MRIIRS <br />
        Dr. Pardeep Kumar, Pro Vice Chancellor, MRIIRS <br/>
        Shri R .K Arora, Registrar, MRIIRS
        </p>
        <p className="text-[#A8271A] my-3 text-3xl mt-14 font-bold">
           General Chair
        </p>
        <p className="text-gray-600 my-3 text-2xl mt-14 font-bold leading-10">
        Dr. Geeta  Nijhawan , Associate Dean , FET,MRIIRS <br />
        Dr. Brijesh Kumar, Associate Dean Academics , MRIIRS <br />
        </p>
        <p className="text-[#A8271A] my-3 text-3xl mt-14 font-bold">
           Chair
        </p>
        <p className="text-gray-600 my-3 text-2xl mt-14 font-bold leading-10">
        Dr. Tapas Kumar, Professor, Head, IBM Program, CSE, FET, MRIIRS
        </p>
        <p className="text-[#A8271A] my-3 text-3xl mt-14 font-bold">
           Co-Chair
        </p>
        <p className="text-gray-600 my-3 text-2xl mt-14 font-bold leading-10">
        Dr. Charu Virmani, Professor Head, CSE, FET, MRIIRS <br />
        Dr. Suresh Kumar, Professor, CSE, FET, MRIIRS
        </p>
        <p className="text-[#A8271A] my-3 text-3xl mt-14 font-bold">
           Convener
        </p>
        <p className="text-gray-600 my-3 text-2xl mt-14 font-bold leading-10">
        Dr. Poonam Tanwar, Professor, CSE, FET, MRIIRS
        </p>
      </div>
    </section>
  );
};

export default Committee;
