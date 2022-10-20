import React from "react";

const ConferenceTrack = () => {

  const data = [
    {name: "Case-Based Reasoning and Learning"},
    <br />,
    {name: "Classification and Clustering"},
    <br />,
    {name: "Deep Learning"},
    <br />,
    {name: "Inductive Learning"},
    <br />,
    {name: "Inference Rule Learning"},
    <br />,
    {name: "Learning and Adaptive control"},
    <br />,
    {name: "Real Time Event Learning and Detection"},
    <br />,
    {name: "Natural Language Processing"},
    <br />,
    {name: "Similarity Measures and Learning of Similarity"},
    <br />,
    {name: "Statistical and Evolutionary Learning Soft Computing"},
    <br />,
    {name: "Image Processing and Computer Vision Internet of Things"},
    <br />,
    {name: "Virtual Reality and Augmented Reality Robotics"},
    <br />,
    {name: "Annotation of Media content"},
    <br />,
    {name: "Data Handling and Pre-processing"},
    <br />,
    {name: "Pattern Recognitions"},
    <br />,
    {name: "Feature Engineering and Feature Selection"},
    <br />,
    {name: "Computational Biology &amp; Bioinformatics"},
    <br />,
    {name: "Data Modeling &amp; Semantic Engineering High Performance"},
    <br />,
    {name: "Scientific/Engineering/ Commercial Applications"},
    <br />,
    {name: "Infoscience &amp; Computational Informatics"},
    <br />,
    {name: "Information Network Analytics"},
    <br />,
    {name: "Data Science Techniques for Handling"},
    <br />,
    {name: "Epidemic and Pandemic Situations"},
    <br />,
    {name: "Time Series and Sequential Pattern Mining"},
  ]
  return (
    <section className='py-10 text-gray"'>
      <div className="text-center mt-14">
        <h3 className="text-gray-600 font-semibold text-5xl">
          Conference <span className="text-[#3FBA96]">Tracks</span>
        </h3>
      </div>
      <div className="mt-14 justify-center  flex text-gray-600">
        <table>
          <thead>
            <tr>
              <th colSpan="3" className="text-4xl">
                Track 1
              </th>
            </tr>
            <tr>
              <th colSpan="3" className="text-4xl">
                Theme: Artificial Intelligence, Machine Learning & Data Science
              </th>
            </tr>
            <br />
            <tr className="text-4xl">
              <th>Topics</th>
              <th>Related IEEE Society(ies)</th>
              <th>Chair</th>
            </tr>
          </thead>
          <br />
          <tbody>
            <tr className="justify-start text-lg">
              <td>
                {
                  data?.map((data,i) =>(
                    <p>{data?.name}</p>
                  ))
                }
              </td>
              <td><b>IEEE Computation Intelligence Society Chapter</b></td>
              <td><b>Dr. Mandeep</b></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ConferenceTrack;
