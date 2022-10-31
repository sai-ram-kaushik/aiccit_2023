import React, { useEffect } from "react";
import hero from "../assets/Images/mrmain.jpg";
import Typed from "react-typed";
import Aos from "aos";
import "aos/dist/aos.css"
const Hero = () => {

  useEffect(() =>{
    Aos.init({duration: 2000});
  }, []);

  
  return (
    <>
      <div className="min-h-full w-full flex md:flex-row flex-col" data-aos="fade-right">
        <div className="flex flex-1 mt-40 mx-32 ">
          <div className="md:text-left text-center mt-28">
            <h1 className="md:text-6xl text-2xl md:leading-normal leading-10 text-white font-bold">
              <span className="text-gray-600 md:text-[5rem] flex text-center text-5xl z-10">
                AICCIT-2023
                <br />
              </span>
              <p className="text-gray-600 text-3xl">
                <span className="text-[#3FBA96]">I</span>nternational{" "}
                <span className="text-[#3FBA96]">C</span>onferene on
              </p>
              <div className="md:text-4xl text-lg md:leading-normal leading-3 mt-1 font-bold text-[#3FBA96] ">
                <span className="text-gray-600 text-3xl">
                  <span className="text-[#3FBA96]">A</span>dvancing in{" "}
                </span>
                <Typed className="md:text-[1.5rem] text-4xl"
                  strings={[
                    "Computation",
                    "Communication",
                    "and Information Technology",
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </div>
            </h1>
          </div>
        </div>
        <div className="flex-1 mt-10 flex item-center justify-center h-full z-10">
          <img
            src={hero}
            alt="image"
            className="md:w-11/12 h-full object-cover rounded-2xl mt-40"
          />
        </div>
      </div>
      <div className="py-10">
        <div className="text-center mt-60 " data-aos="fade-right">
          <h3 className="text-4xl text-gray-600 font-semibold">
            About <span className="text-[#3FBA96]">Conference</span>
          </h3>
          <div className="flex md:flex-row flex-col-reverse item-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
            <div>
              <div className="text-gray-600 my-3">
                <p className="text-justify landing-8 font-sans text-lg">
                  The main objective of <b>AICCIT-2023</b> is to invite all the
                  Academicians, Researchers, and industrialists worldwide to
                  participate and discuss the latest achievements in the
                  advanced field of computing like Advancement in the Artificial
                  Intelligence, Blockchain, Cyber Security, Distributed
                  Computing and Internet of Things. The main goal of the
                  conference is to provide a forum for high-quality reports on
                  the state-of-the-art Theory, Technology, and Applications of
                  advanced fields of computing as used in measurement,
                  automation, and scientific research, in industry and business.
                  The initiative provides a focused and highly interactive forum
                  where both researchers and technologists have the opportunity
                  to present and discuss leading research topics, developments,
                  and future directions in their areas of interest. The
                  importance of the conference is its vision to establish
                  scientific contacts between research teams and scientists from
                  different countries for future joint research collaborations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;