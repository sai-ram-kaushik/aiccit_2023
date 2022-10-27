import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css"

const ConferenceTrack = () => {


  useEffect(() =>{
    Aos.init({duration: 2000});
  }, []);

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

  const track3 = [
    {topic: "Big Data Analytics, and Applications"},
    <br />,
    {topic: "Big Data Search and Mining"},
    <br />,
    {topic: "Visualization Analytics for Big Data"},
    <br />,
    {topic: "Data Acquisition, Integration, Cleaning, and Best Practices"},
    <br />,
    {topic: "Scalability and Efficiency"},
    <br />,
    {topic: "Critical Infrastructure Security"},
  ]

  const track4 = [
    {topic: "Databases and Ontology-based data access,"},
    <br />,
    {topic: "integration and exchange on Web"},
    <br />,
    {topic: "Information retrieval and semantic analysis"},
    <br />,
    {topic: "Semantic approaches in and for Information Extraction"},
    <br />,
    {topic: "Knowledge Driven NLP"},
    <br />,
    {topic: "Novel Techniques for the Semantic Web"},
    <br />,
    {topic: "Multi-agent and autonomous systems"},
    <br />,
    {topic: "Knowledge (e.g. construction, maintenance, reasoning) and virtual knowledge graphs"},
    <br />,
    {topic: "Ontology based neural symbolic reasoning and learning"},
    <br />,
    {topic: "Robust and scalable management of semantics and data"},
    <br />,
    {topic: "Multi-modal semantic reasoning Programming the Semantic Web"},
    <br />,
    {topic: "Semantic social network mining, analysis, representation, and management"},
    <br />,
    {topic: "Geospatial semantics and data Trust, privacy, and security"},
  ]

  const track5 = [
    {topic: "Multicore and Many Core Systems"},
    <br />,
    {topic: "High Performance Systems"},
    <br />,
    {topic: "Interconnection Networks"},
    <br />,
    {topic: "Energy Efficient Design"},
    <br />,
    {topic: "Performance Evaluation of Parallel Algorithms"},
    <br />,
    {topic: "Parallel Programming Languages FPGA’s and GPGPU"},
    <br />,
    {topic: "Compilers in Parallel Environment Stream Processors in GPU"},
    <br />,
    {topic: "Parallel Computing in Big Data Analytics"},
    <br />,
    {topic: "Virtual and Augmented Reality (VR and AR)"},
    <br />,
    {topic: "Robotics"},
    <br />,
    {topic: "Efficient Resource Utilization"},
    <br />,
    {topic: "Operating Systems and Middleware for Parallel Architecture"},
    <br />,
    {topic: "Parallel Methods for Deep Learning and AI Design Patterns for Parallel Computing"},
    <br />,
    {topic: "Load Balancing"},
    <br />,
    {topic: "Theoretical Studies on Parallel/Grid Computing"},
    <br />,
    {topic: "Novel System Architectures"},
    <br />,
    {topic: "Heterogeneous Systems"},
    <br />,
    {topic: "Real World Applications"},
    <br />,
    {topic: "High Performance Computing"},
    <br />,
    {topic: "Software-Hardware Co-design"},
  ]

  const track6 = [
    {topic: "Smart cloud and IoT"},
    <br />,
    {topic: "Smart homes and cities"},
    <br />,
    {topic: "Adaptive user interfaces for smart applications"},
    <br />,
    {topic: "Interconnection of smart devices (things)"},
    <br />,
    {topic: "Dynamic urban communications Indoor communications"},
    <br />,
    {topic: "SMART healthcare and assisted living"},
    <br />,
    {topic: "SMART transportation and vehicles"},
    <br />,
    {topic: "SMART phones applications and services"},
    <br />,
    {topic: "IoT network design and Cloud networks"},
    <br />,
    {topic: "Networking technologies for data centres"},
    <br />,
    {topic: "Software defined networking"},
    <br />,
    {topic: "Network virtualization technologies"},
    <br />,
    {topic: "Embedded system architecture"},
    <br />,
    {topic: "Adaptive and cognitive networks "},
    <br />,
    {topic: "Wireless networks for IoT and Cloud"},
    <br />,
    {topic: "IoT-enabled home networks."},
    <br />,
    {topic: "IoT and SMART cities"},
  ]


  return (
    <section className='py-10 text-gray' data-aos="fade-right">
      <div className="text-center mt-14">
        <h3 className="text-gray-600 font-semibold text-4xl">
          Conference <span className="text-[#3FBA96]">Tracks</span>
        </h3>
      </div>

              {/* TRACK - 1 */}
      <div className="mt-14 justify-center flex text-gray-600">
        <table className="md:w-[1080px]">
          <thead>
            <tr>
              <th colSpan="3" className="text-3xl text-[#A8271A]">
                Track 1
              </th>
            </tr>
            <tr>
              <th colSpan="3" className="text-3xl">
                Theme: Artificial Intelligence, Machine Learning & Data Science
              </th>
            </tr>
            <br />
            <tr className="text-2xl">
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

      <div className="mt-14 justify-center flex text-gray-600 ">
        <table width="1080px">
          <thead>
            <tr>
              <th colSpan="3" className="text-4xl text-[#A8271A]">
                Track 2
              </th>
            </tr>
            <tr>
              <th colSpan="3" className="text-4xl">
              Theme : Cloud Computing, Block Chain &amp; Cyber Security
              </th>
            </tr>
            <br />
            <tr className="text-2xl">
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

                {/* TRACK - 3 */}

        <div className="mt-14 justify-center  flex text-gray-600">
        <table width="1080px">
          <thead>
            <tr>
              <th colSpan="3" className="text-4xl text-[#A8271A]">
                Track 3
              </th>
            </tr>
            <tr>
              <th colSpan="3" className="text-4xl">
              Theme : Big Data Analytics &amp; Visualization
              </th>
            </tr>
            <br />
            <tr className="text-2xl">
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
                  track3?.map((track3,i) =>(
                    <p>{track3?.topic}</p>
                  ))
                }
              </td>
              <td className="text-center"><b>IEEE Computational Intelligence Society Chapter</b></td>
              <td className="text-center"><b>-</b></td>
            </tr>
          </tbody>
        </table>
      </div>

                                   {/* TRACK - 4 */}

       <div className="mt-14 justify-center  flex text-gray-600">
        <table width="1080px">
          <thead>
            <tr>
              <th colSpan="3" className="text-4xl text-[#A8271A]">
                Track 4
              </th>
            </tr>
            <tr>
              <th colSpan="3" className="text-4xl">
              Theme : Semantic Web &amp; Information Retrieval
              </th>
            </tr>
            <br />
            <tr className="text-2xl">
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
                  track4?.map((track4,i) =>(
                    <p>{track4?.topic}</p>
                  ))
                }
              </td>
              <td className="text-center"><b>IEEE Computational Intelligence Society Chapter</b></td>
              <td className="text-center"><b>Dr Shabana Urooj, GBU, Gr. Noida</b></td>
            </tr>
          </tbody>
        </table>
      </div>


                  {/* TRACK - 5 */}

       <div className="mt-14 justify-center  flex text-gray-600">
        <table width="1080px">
          <thead>
            <tr>
              <th colSpan="3" className="text-4xl text-[#A8271A]">
                Track 5
              </th>
            </tr>
            <tr>
              <th colSpan="3" className="text-4xl">
              Theme : GPU &amp; Parallel Computing
              </th>
            </tr>
            <br />
            <tr className="text-2xl">
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
                  track5?.map((track5,i) =>(
                    <p>{track5?.topic}</p>
                  ))
                }
              </td>
              <td className="text-center"><b>IEEE Technology and Engineering Management Society Chapter</b></td>
              <td className="text-center"><b>-</b></td>
            </tr>
          </tbody>
        </table>
      </div>


       {/* TRACK - 6 */}

       <div className="mt-14 justify-center  flex text-gray-600">
        <table width="1080px">
          <thead>
            <tr>
              <th colSpan="3" className="text-4xl text-[#A8271A]">
                Track 6
              </th>
            </tr>
            <tr>
              <th colSpan="3" className="text-4xl">
              Theme : Internet of Everything
              </th>
            </tr>
            <br />
            <tr className="text-2xl">
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
                  track6?.map((track6,i) =>(
                    <p>{track6?.topic}</p>
                  ))
                }
              </td>
              <td className="text-center"><b>IEEE Technology and Engineering</b></td>
              <td className="text-center"><b>-</b></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ConferenceTrack;
