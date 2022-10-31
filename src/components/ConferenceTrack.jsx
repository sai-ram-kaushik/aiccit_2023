import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const ConferenceTrack = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);


  return (
    <section className="py-10 text-gray" data-aos="fade-right">
      <div className="text-center mt-14">
        <h3 className="text-gray-600 font-semibold text-4xl">
          Conference <span className="text-[#3FBA96]">Tracks</span>
        </h3>
      </div>

      {/* TRACK - 1 */}
      <div className="mt-14 justify-center mx-6 flex text-gray-600" data-aos="fade-right">
        <table className="md:mx-6 mx-[-8px]" width="700px">
          <thead>
            <tr>
              <th className="text-3xl justify-start text-[#A8271A]">Track 1</th>
            </tr>
            <tr>
              <th className="text-2xl">
                Theme: Artificial Intelligence, Machine Learning & Data Science
              </th>
            </tr>
            <tr className="text-2xl">
              <th>Topics</th>
              {/* <th>Related IEEE Society(ies)</th>
              <th>Chair</th> */}
            </tr>
          </thead>
          <tbody>
            <tr className="justify-start text-lg">
              <td>
                <ul role="list" className="list-disc pl-5 text-slate-500">
                  <li>Case-Based Reasoning and Learning</li>
                  <li>Classification and Clustering</li>
                  <li>Deep Learning</li>
                  <li>Inductive Learning</li>
                  <li>Inference Rule Learning</li>
                  <li>Learning and Adaptive control</li>
                  <li>Real Time Event Learning and Detection</li>
                  <li>Natural Language Processing</li>
                  <li>Similarity Measures and Learning of Similarity</li>
                  <li>Statistical and Evolutionary Learning Soft Computing</li>
                  <li>Image Processing and Computer Vision</li>
                  <li>Internet of Things</li>
                  <li>Virtual Reality and Augmented Reality</li>
                  <li>Robotics</li>
                  <li>Annotation of Media content</li>
                  <li>Data Handling and Pre-processing</li>
                  <li>Pattern Recognitions</li>
                  <li>Feature Engineering and Feature Selection</li>
                  <li>Computational Biology &amp; Bioinformatics</li>
                  <li>Data Modeling &amp; Semantic Engineering</li>
                  <li>
                    High Performance Scientific/Engineering/ Commercial
                    Applications
                  </li>
                  <li>Infoscience &amp; Computational Informatics</li>
                  <li>Information Network Analytics</li>
                  <li>Data Science Techniques for Handling</li>
                  <li>Epidemic and Pandemic Situations</li>
                  <li>Time Series and Sequential Pattern Mining</li>
                </ul>
              </td>
              {/* <td><b>-</b></td>
              <td><b>-</b></td> */}
            </tr>
          </tbody>
        </table>

        {/* Track- 2 */}

        <table className="md:mx-6 mx-[5px]" width="700px">
          <thead>
            <tr>
              <th className="text-3xl text-[#A8271A]">Track 2</th>
            </tr>
            <tr>
              <th className="text-2xl">
                Theme : Cloud Computing, Block Chain &amp; Cyber Security
              </th>
            </tr>
            <tr className="text-2xl">
              <th>Topics</th>
              {/* <th>Related IEEE Society(ies)</th>
              <th>Chair</th> */}
            </tr>
          </thead>
          <tbody>
            <tr className="justify-start text-lg">
              <td>
                <ul role="list" className="list-disc pl-5 text-slate-500">
                  <li>Cloud Management and Operations</li>
                  <li>Cloud Security</li>
                  <li>Cloud Computing in Business Intelligence</li>
                  <li>Cloud Performance</li>
                  <li>Scalability and Reliability</li>
                  <li>Data Analytics in Cloud</li>
                  <li>Cloud Development and its Applications</li>
                  <li>Bit coin and Cryptocurrency</li>
                  <li>Transaction and Security Awareness Ethereum and <br /> Smart contract development</li>
                  <li>Public vs Private Blockchain</li>
                  <li>Current Blockchain Application and Platforms</li>
                  <li>Identity and Authorization Systems Building Decentralized Autonomous Solutions</li>
                  <li>Building Communication Network on Blockchain</li>
                  <li>Access and Identity Management</li>
                  <li>Integrity Issues and Ethical Hacking</li>
                  <li>Emerging Threats.</li>
                  <li>Cyber Crime and its Solutions</li>
                  <li>Data Privacy</li>
                </ul>
              </td>
              {/* <td className="text-center"><b>-</b></td>
              <td className="text-center"><b>-</b></td> */}
            </tr>
          </tbody>
        </table>
      </div>

      {/* TRACK - 3 */}
      <div className="mt-14 justify-center mx-6 flex text-gray-600" data-aos="fade-right">
        <table className="md:mx-6 mx-10" width="700px">
          <thead>
            <tr>
              <th className="text-3xl justify-start text-[#A8271A]">Track 3</th>
            </tr>
            <tr>
              <th className="text-2xl">
              Theme : Big Data Analytics &amp; Visualization
              </th>
            </tr>
            <tr className="text-2xl">
              <th>Topics</th>
              {/* <th>Related IEEE Society(ies)</th>
              <th>Chair</th> */}
            </tr>
          </thead>
          <tbody>
            <tr className="justify-start text-lg">
              <td>
                <ul role="list" className="list-disc pl-5 text-slate-500">
                  <li>Big Data Analytics, and Applications</li>
                  <li>Big Data Search and Mining</li>
                  <li>Visualization Analytics for Big Data</li>
                  <li>Data Acquisition, Integration,</li>
                  <li>Cleaning, and Best Practices</li>
                  <li>Scalability and Efficiency</li>
                  <li>Critical Infrastructure Security</li>
                </ul>
              </td>
              {/* <td><b>-</b></td>
              <td><b>-</b></td> */}
            </tr>
          </tbody>
        </table>

        {/* Track- 4 */}

        <table className="md:mx-6 mx-10">
          <thead>
            <tr>
              <th className="text-3xl text-[#A8271A]">Track 4 </th>
            </tr>
            <tr>
              <th className="text-2xl">
              Theme : Semantic Web &amp; Information Retrieval
              </th>
            </tr>
            <tr className="text-2xl">
              <th>Topics</th>
              {/* <th>Related IEEE Society(ies)</th>
              <th>Chair</th> */}
            </tr>
          </thead>
          <tbody>
            <tr className="justify-start text-lg">
              <td>
                <ul role="list" className="list-disc pl-5 text-slate-500">
                  <li>Databases and Ontology-based data access, integration and exchange on Web</li>
                  <li>Information retrieval and semantic analysis</li>
                  <li>Semantic approaches in and for Information Extraction</li>
                  <li>Knowledge Driven NLP</li>
                  <li>Novel Techniques for the Semantic Web</li>
                  <li>Multi-agent and autonomous systems</li>
                  <li>Knowledge (e.g. construction, maintenance, reasoning) and virtual knowledge graphs</li>
                  <li>Ontology based neural symbolic reasoning and learning</li>
                  <li>Robust and scalable management of semantics and data</li>
                  <li>Processing and storage of semantic data on the Blockchain</li>
                  <li>Multi-modal semantic reasoning Programming the Semantic Web</li>
                  <li>Semantic social network mining, analysis, representation, and management</li>
                  <li>Geospatial semantics and data Trust, privacy, and security</li>
                </ul>
              </td>
              {/* <td className="text-center"><b>-</b></td>
              <td className="text-center"><b>-</b></td> */}
            </tr>
          </tbody>
        </table>
      </div>
      

      {/* TRACK - 5 */}
      <div className="mt-14 justify-center mx-6 flex text-gray-600" data-aos="fade-right">
        <table className="md:mx-6 mx-10" width="700px">
          <thead>
            <tr>
              <th className="text-3xl justify-start text-[#A8271A]">Track 5</th>
            </tr>
            <tr>
              <th className="text-2xl">
              Theme : GPU &amp; Parallel Computing
              </th>
            </tr>
            <tr className="text-2xl">
              <th>Topics</th>
              {/* <th>Related IEEE Society(ies)</th>
              <th>Chair</th> */}
            </tr>
          </thead>
          <tbody>
            <tr className="justify-start text-lg">
              <td>
                <ul role="list" className="list-disc pl-5 text-slate-500">
                  <li>Multicore and Many Core Systems</li>
                  <li>High Performance Systems</li>
                  <li>Interconnection Networks</li>
                  <li>Energy Efficient Design</li>
                  <li>Performance Evaluation of Paralle Algorithms</li>
                  <li>Parallel Programming Languages FPGA’s and GPGPU</li>
                  <li>Compilers in Parallel Environment Stream Processors in GPU</li>
                  <li>Parallel Computing in Big Data Analytics</li>
                  <li>Virtual and Augmented Reality (VR and AR)</li>
                  <li>Robotics</li>
                  <li>Efficient Resource Utilization</li>
                  <li>Operating Systems and Middleware for Parallel Architecture</li>
                  <li>Parallel Methods for Deep Learning and AI Design Patterns for Parallel Computing</li>
                  <li>Parallel Sparse Matrix Computations</li>
                  <li>Load Balancing</li>
                  <li>Theoretical Studies on Parallel/Grid Computing</li>
                  <li>Novel System Architectures</li>
                  <li>Heterogeneous Systems</li>
                  <li>Real World Applications</li>
                  <li>High Performance Computing</li>
                  <li>Software-Hardware Co-design</li>
                </ul>
              </td>
              {/* <td><b>-</b></td>
              <td><b>-</b></td> */}
            </tr>
          </tbody>
        </table>

        {/* Track- 6 */}

        <table className="md:mx-6 mx-10" width="700px">
          <thead>
            <tr>
              <th className="text-3xl text-[#A8271A]">Track 6 </th>
            </tr>
            <tr>
              <th className="text-2xl">
              Theme : 6 Internet of Everything
              </th>
            </tr>
            <tr className="text-2xl">
              <th>Topics</th>
              {/* <th>Related IEEE Society(ies)</th>
              <th>Chair</th> */}
            </tr>
          </thead>
          <tbody>
            <tr className="justify-start text-lg">
              <td>
                <ul role="list" className="list-disc pl-5 text-slate-500">
                  <li>Smart cloud and IoT</li>
                  <li>ISmart homes and cities</li>
                  <li>SAdaptive user interfaces for smart applications</li>
                  <li>Interconnection of smart devices (things)</li>
                  <li>NDynamic urban communications</li>
                  <li>Indoor communications</li>
                  <li>SMART healthcare and assisted living</li>
                  <li>SMART transportation and vehicles</li>
                  <li>SMART phones applications and services</li>
                  <li>PIoT network design and Cloud networks</li>
                  <li>Networking technologies for data centres</li>
                  <li>Software defined networking</li>
                  <li>Network virtualization technologies</li>
                  <li>Embedded system architecture</li>
                  <li>Adaptive and cognitive networks</li>
                  <li>Wireless networks for IoT and Cloud</li>
                  <li>IoT-enabled home networks.</li>
                  <li>IoT and SMART cities</li>
                </ul>
              </td>
              {/* <td className="text-center"><b>-</b></td>
              <td className="text-center"><b>-</b></td> */}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ConferenceTrack;
