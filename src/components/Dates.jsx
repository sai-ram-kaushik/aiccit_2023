import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css"
const Dates = () => {


  useEffect(() =>{
    Aos.init({duration: 2000});
  }, []);

  return (
    <section className="py-24 text-gray" data-aos="fade-right">
      <div className="text-center mt-14">
        <h3 className="text-gray-600 text-5xl font-semibold ">
          Important <span className="text-[#3FBA96]">Dates</span>
        </h3>
      </div>

      <div className="mt-48 justify-center  flex text-gray-600">
        <table>
          <tr className="text-2xl">
            <td>Paper Submission Deadline:</td>
            <td>30<sup>th</sup> Dec, 2022</td>
          </tr>
          <tr className="text-2xl">
            <td>Acceptance Notification:</td>
            <td>20<sup>th</sup> March, 2023</td>
          </tr>
          <tr className="text-2xl">
            <td>Camera Ready Paper Submission Deadline:</td>
            <td>30<sup>th</sup> March, 2023</td>
          </tr>
          <tr className="text-2xl">
            <td>Last Date for Registration:</td>
            <td>20<sup>th</sup> April, 2023</td>
          </tr>
          <tr className="text-2xl">
            <td>Conference Dates:</td>
            <td>18 & 19<sup>th</sup> June, 2023</td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default Dates;
