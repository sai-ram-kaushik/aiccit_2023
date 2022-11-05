import React from "react";
import {useEffect} from "react";
import Aos from "aos";
const Submission = () => {

  useEffect(() =>{
    Aos.init({duration: 2000});
  }, []);

  return (
    <section className="py-10 text-gray-600">
      <div className="text-center mt-14" data-aos="fade-right">
        <h3 className="text-gray-600 md:text-5xl text-3xl font-semibold ">
          Submission <span className="text-[#3FBA96]">Guidelines</span>
        </h3>
        <p className="text-[#A8271A] my-3 text-2xl mt-14 font-bold">
          Information to help prepare the Blinded Manuscripts:
        </p>
        <div className="text-gray-600 my-3 mt-8 flex justify-center">
          <p className="justify-center leading-8 text-lg">
            Authors must ensure that their works are produced in a way that
            conceals their identities. Please ensure the following while
            submitting to assist with this preparation:
            <br />
            The Following are the main factors to keep in mind to help with this
            process:
            <br />
          </p>
        </div>
        <div className="justify-center flex">
          <ul
            role="list"
            className="marker:text-slate-500 list-disc text-start pl-5 text-lg"
          >
            <li>
              Make sure there are no affiliation-related identifiers in the
              figures.
            </li>
            <li>For blinding in the delete reference list.</li>
            <li>Remove references to funding sources.</li>
            <li>Do not include acknowledgments.</li>
            <li>Remove any identifying information.</li>
          </ul>
        </div>
        <p className="text-[#A8271A] my-3 text-2xl mt-14 font-bold">
          Submitted Papers to include:
        </p>
        <div className="justify-center flex">
          <ul
            role="list"
            className="marker:text-slate-500 list-disc text-start pl-5 text-lg"
          >
            <li>Maximum number of pages (6 pages)</li>
            <li>Abstract (maximum of 200 words)</li>
            <li>Keywords</li>
            <li>Paper content</li>
            <li>References</li>
          </ul>
        </div>
        <p className="text-[#A8271A] my-3 text-2xl mt-20 font-bold" data-aos="fade-right">
          IEEE Template Link:
        </p>
        <p className="md:text-2xl text-xl text-blue-500" data-aos="fade-right" >
          <a
            href="https://www.ieee.org/conferences/publishing/templates.html"
            target="__blank"
          >
            https://www.ieee.org/conferences<br />/publishing/templates.html
          </a>
        </p>
        <p className="text-[#A8271A] my-3 text-3xl mt-14 font-bold" data-aos="fade-right">
          Paper Submission:
        </p>
        <p className="font-bold text-xl leading-14" data-aos="fade-right">Authors can submit the abstract/full paper for AICCIT-2023 via easy chair using the link:</p>
        <a href="https://easychair.org/conferences/?conf=aiccit2023" target="__black" className="text-lg text-blue-500" data-aos="fade-right">https://easychair.org/conferences/?conf=aiccit2023</a>
      </div>
    </section>
  );
};

export default Submission;