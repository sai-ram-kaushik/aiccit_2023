import React from "react";

const ConferenceTrack = () => {

  const track1 = [
    {topic: "Case-Based Reasoning and Learning"},
    <br />,
    {topic: "Classification and Clustering"},
    <br />,
    {topic: "Deep Learning"},
    <br />,
    {topic: "Inductive Learning"},
    <br />,
    {topic: "Inference Rule Learning"},
    <br />,
    {topic: "Learning and Adaptive control"},
    <br />,
    {topic: "Real Time Event Learning and Detection"},
    <br />,
    {topic: "Natural Language Processing"},
    <br />,
    {topic: "Similarity Measures and Learning of Similarity"},
    <br />,
    {topic: "Statistical and Evolutionary Learning Soft Computing"},
    <br />,
    {topic: "Image Processing and Computer Vision Internet of Things"},
    <br />,
    {topic: "Virtual Reality and Augmented Reality Robotics"},
    <br />,
    {topic: "Annotation of Media content"},
    <br />,
    {topic: "Data Handling and Pre-processing"},
    <br />,
    {topic: "Pattern Recognitions"},
    <br />,
    {topic: "Feature Engineering and Feature Selection"},
    <br />,
    {topic: "Computational Biology &amp; Bioinformatics"},
    <br />,
    {topic: "Data Modeling &amp; Semantic Engineering High Performance"},
    <br />,
    {topic: "Scientific/Engineering/ Commercial Applications"},
    <br />,
    {topic: "Infoscience &amp; Computational Informatics"},
    <br />,
    {topic: "Information Network Analytics"},
    <br />,
    {topic: "Data Science Techniques for Handling"},
    <br />,
    {topic: "Epidemic and Pandemic Situations"},
    <br />,
    {topic: "Time Series and Sequential Pattern Mining"},
  ]

  const track2 = [
    {topic: "Cloud Management and Operations"},
    <br />,
    {topic: "Cloud Security"},
    <br />,
    {topic: "Cloud Computing in Business"},
    <br />,
    {topic: "Cloud Performance"},
    <br />,
    {topic: "Scalability and Reliability"},
    <br />,
    {topic: "Data Analytics in Cloud"},
    <br />,
    {topic: "Cloud Development and its Applications"},
    <br />,
    {topic: "Bit coin and Cryptocurrency"},
    <br />,
    {topic: "Intelligence"},
    <br />,
    {topic: "Transaction and Security Awareness"},
    <br />,
    {topic: "Ethereum and Smart contract development"},
    <br />,
    {topic: "Public vs Private Blockchain"},
    <br />,
    {topic: "Current Blockchain Application and Platforms"},
    <br />,
    {topic: "Identity and Authorization Systems"},
    <br />,
    {topic: "Building Decentralized Autonomous Solutions"},
    <br />,
    {topic: "Building Communication Network on Blockchain"},
    <br />,
    {topic: "Access and Identity Management"},
    <br />,
    {topic: "Integrity Issues and Ethical Hacking"},
    <br />,
    {topic: "Emerging Threats."},
    <br />,
    {topic: "Cyber Crime and its Solutions"},
    <br />,
    {topic: "Data Privacy"},
  ]


  return (
    <section className='py-10 text-gray"'>
      <div className="text-center mt-14">
        <h3 className="text-gray-600 font-semibold text-5xl">
          Conference <span className="text-[#3FBA96]">Tracks</span>
        </h3>
      </div>

              {/* TRACK - 1 */}

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
                  track1?.map((track1,i) =>(
                    <p>{track1?.topic}</p>
                  ))
                }
              </td>
              <td><b>IEEE Computation Intelligence Society Chapter</b></td>
              <td><b>Dr. Mandeep</b></td>
            </tr>
          </tbody>
        </table>
      </div>

                {/* Track- 2 */}

      <div className="mt-14 justify-center  flex text-gray-600">
        <table>
          <thead>
            <tr>
              <th colSpan="3" className="text-4xl">
                Track 2
              </th>
            </tr>
            <tr>
              <th colSpan="3" className="text-4xl">
              Theme : Cloud Computing, Block Chain &amp; Cyber Security
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
                  track2?.map((track2,i) =>(
                    <p>{track2?.topic}</p>
                  ))
                }
              </td>
              <td className="text-center"><b>IEEE Computer Society Chapter</b></td>
              <td className="text-center"><b>Dr. Mandeep</b></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ConferenceTrack;
