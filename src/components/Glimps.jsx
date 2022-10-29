import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import mr from "../assets/Images/mr.png";

const Glimps = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const glimps = [
    { link: "images/glimps1.png" },
    { link: "images/glimps2.png" },
    { link: "images/glimps3.png" },
    { link: "images/glimps4.png" },
    { link: "images/glimps5.png" },
    { link: "images/glimps6.png" },
    { link: "images/glimps7.png" },
    { link: "images/glimps8.png" },
    { link: "images/glimps9.png" },
  ];

  return (
    <section className="py-10 text-gray-600" data-aos="fade-right">
      <div className="text-center mt-14">
        <h3 className="text-gray-600 text-5xl font-semibold ">
          Previous <span className="text-[#3FBA96]">Conferences</span>
        </h3>

        <p className="text-[#A8271A] my-3 text-2xl mt-20 font-bold" data-aos="fade-right">
          COM-IT-CON 2022
        </p>
        <div className="flex md:flex-row flex-col-reverse item-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto" data-aos="fade-right">
          <div>
            <div className="text-gray-600 my-3 mt-14">
              <p className="text-justify leading-8 text-lg">
                The Department of Computer Science and Engineering, FET, Manav
                Rachna International Institute of Research and Studies (MRIIRS)
                has organized the two-day International Conference on "Machine
                Learning, Big Data, Cloud and Parallel Computing: Trends,
                Perspectives and Prospects" (COM-IT-CON-2022), co-sponsored by
                IEEE Delhi Section. The main objective of this conference is to
                bring together academicians, researchers, and industry leaders
                from around the world to discuss and debate the most recent
                advancements in computing disciplines like Machine Learning, Big
                Data, Cloud Computing, and Parallel Computing. The conference aims to establish scientifically the link between research team and experts from other nations to facilitate future collaboration. In this two-day event, we will see presentations in different tracks such as Artificial Intelligence & Machine Learning, Cloud Computing & Virtualization, Big Data Analytics & Virtualization, Semantic Web & Information Retrieval, Blockchain & Cyber Security, Data Science & Engineering, GPU & Parallel Computing. The Conference aims to provide an opportunity to share the ideas, build competency, contribute to advancement using technology and tools and learn about new offerings in different domains.
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-12/12 max-w-full mt-56">
              <img src={mr} alt="about_image" className="w-full object-cover" />
            </div>
          </div>
        </div>

        <p className="text-[#A8271A] my-3 text-2xl mt-20 font-bold" data-aos="fade-right">
          COM-IT-CON 2019
        </p>
        <div className="flex md:flex-row flex-col-reverse item-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto" data-aos="fade-right">
          <div>
            <div className="text-gray-600 my-3 mt-14">
              <p className="text-justify leading-8 text-lg">
                The International Conference on Machine Learning, Big Data,
                Cloud and Parallel Computing’- Com-IT-Con 2019 was organized
                during 14th Feb’19 to 16th Feb’19. More than three hundred
                research papers from different part of globe were submitted to
                the conference. After rigorous review process 120 research
                papers were accepted for presentation in the conference. One
                hundred fourteen research papers were presented and are
                submitted to IEEE for inclusion in ieeeexplore. The proceedings
                of the Com-IT-Con 2019 are available at:<br />
                 <a href="https://ieeexplore.ieee.org/xpl/conhome/8851231/proceeding" target="__blank" className="text-blue-500">https://ieeexplore.ieee.org/xpl/conhome/8851231/proceeding</a>
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-12/12 max-w-full mt-20">
              <img src={mr} alt="about_image" className="w-full object-cover" />
            </div>
          </div>
        </div>

        <p className="text-[#A8271A] my-3 text-2xl mt-20 font-bold" data-aos="fade-right">
          ICROIT-2014
        </p>
        <div className="flex md:flex-row flex-col-reverse item-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto" data-aos="fade-right">
          <div>
            <div className="text-gray-600 my-3 mt-20">
              <p className="text-justify leading-8 text-lg">
                The International conference on Reliability, Optimization and
                Information Technology (ICROIT-2014) was organized during Feb
                06-08, 2014. One hundred and twelve research papers were
                presented and are submitted to IEEE for inclusion in ieeexplore.
                The proceedings of ICROIT-2014 are available at:<br />
                <a href="https://ieeexplore.ieee.org/xpl/conhome/6784149/proceeding" target="__blank" className="text-blue-500">https://ieeexplore.ieee.org/xpl/conhome/6784149/proceeding</a>
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-12/12 max-w-full mt-20">
              <img src={mr} alt="about_image" className="w-full object-cover" />
            </div>
          </div>
        </div>

        <p className="text-[#A8271A] my-3 text-2xl mt-20 font-bold" data-aos="fade-right">
          Glimps
        </p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap" data-aos="fade-right">
          {glimps?.map((glimps, i) => (
            <div key={i} className="relative min-w-[10rem] max-w-[35rem] p-10">
              <img src={glimps?.link} className="rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Glimps;
