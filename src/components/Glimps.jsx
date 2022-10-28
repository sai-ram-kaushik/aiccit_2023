import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css"
const Glimps = () => {


  useEffect(() =>{
    Aos.init({duration: 2000});
  }, []);


  const glimps = [
    {link: "images/glimps1.png"},
    {link: "images/glimps2.png"},
    {link: "images/glimps3.png"},
    {link: "images/glimps4.png"},
    {link: "images/glimps5.png"},
    {link: "images/glimps6.png"},
    {link: "images/glimps7.png"},
    {link: "images/glimps8.png"},
    {link: "images/glimps9.png"},
  ]

  return (
    <section className="py-10 text-gray-600" data-aos="fade-right">
      <div className="text-center mt-14">
        <h3 className="text-gray-600 text-5xl font-semibold ">
          Glimps <span className="text-[#3FBA96]">of Previous Year</span>
        </h3>
        <p className="my-3 text-lg  mt-14">
          The Department of Computer Science and Engineering, FET, Manav Rachna
          International Institute of Research and Studies (MRIIRS) has organized
          the two-day International Conference on “Machine Learning, Big Data,
          Cloud & Parallel Computing: Trends, Perspectives, and Prospects”
          (Com-IT-Con-2022), cosponsored by IEEE Delhi Section.   The main
          objective of this conference is to bring together academicians,
          researchers, and industry leaders from around the world to discuss and
          debate the most recent advancements in computing disciplines like
          Machine Learning, Big Data, Cloud Computing, and Parallel Computing.
          The conference aims to establish scientifically the links between
          research teams and experts from other nations to facilitate future
          collaborations. In this two-day event, we will see presentations in
          different tracks such as Artificial Intelligence & Machine Learning,
          Cloud Computing & Virtualization, Big Data Analytics & Visualization,
          Semantic Web & Information Retrieval, Blockchain & Cyber Security,
          Data Science & Engineering, GPU & Parallel Computing. The conference
          aims to provide an opportunity to share ideas, build competency,
          contribute to advancement using technology and tools and learn about
          new offerings in different domains. 
        </p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {
            glimps?.map((glimps,i) =>(
              <div key={i} className="relative min-w-[10rem] max-w-[35rem] p-10">
                <img src={glimps?.link} className="rounded-2xl"/>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Glimps;
