import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css"
const Register = () => {

  useEffect(() =>{
    Aos.init({duration: 2000});
  }, []);

  return (
    <section className="py-10 text-gray-600" data-aos="fade-right">
      <div className="text-center">
        <h3 className="text-gray-600 md:text-5xl text-4xl md:mt-20 mt-28 font-semibold ">
          Registration <span className="text-[#3FBA96]">Details</span>
        </h3>
        <p className="text-[#A8271A] my-3 text-3xl mt-28 font-bold">
          Conference Regitration Fee and Policy
        </p>
        <p className="my-3 text-lg  mt-14 font-bold">
          At least one of the author of the paper has to register for the conference. It is mandatory to present the paper in the conference for the inclusion of the paper in the conference proceedings.
        </p>
        <div className="mt-14 justify-center flex text-gray-600 md:ml-0 ml-6 md:mr-0 mr-6 ">
          <table>
            <thead>
              <tr>
                <th></th>
                <th colSpan="2" className="text-2xl">
                  For Indian Authors and Deligates in (in INR)
                </th>
                <th colSpan="2" className="text-2xl">
                  For Foreign Authors and Deligates in (in USD)
                </th>
              </tr>

              <tr className="text-xl">
                <th></th>
                <th>
                IEEE Member + 18% GST
                </th>
                <th>
                General ++ 18% GST
                </th>
                <th>
                IEEE Member + 18% GST
                </th>
                <th>
                General ++ 18% GST
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-lg font-bold">UG/PG Students</td>
                <td>4,000</td>
                <td>5,000</td>
                <td>160</td>
                <td>230</td>
              </tr>

              <tr>
                <td className="text-lg font-bold">Faculty and Research Scholar</td>
                <td>6,000</td>
                <td>8,000</td>
                <td>130</td>
                <td>170</td>
              </tr>

              <tr>
                <td className="text-lg font-bold">Industry</td>
                <td>8,000</td>
                <td>10,000</td>
                <td>200</td>
                <td>250</td>
              </tr>

              <tr>
                <td className="text-lg font-bold">Attendee only</td>
                <td>3,000</td>
                <td>5,000</td>
                <td>50</td>
                <td>90</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Register;
