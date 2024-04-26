import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Consultancy = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const doctors = [
    {
      id: 1,
      name: "Dr. Mohit Bhatt",
      image:
        "https://kdahweb-static.kokilabenhospital.com/kdah-2019/product/1579760048.jpg",
      qualifications: "MBBS, MD (Gen Medicine), DM (Neurology)",
      department: "Neurology",
      expertise: "Movement Disorders and Deep Brain Stimulation",
      profileLink:
        "https://www.kokilabenhospital.com/professionals/mohitbhatt.html",
    },
    {
      id: 2,
      name: "Dr. Abhaya Kumar",
      image:
        "https://kdahweb-static.kokilabenhospital.com/kdah-2019/product/1583331422.jpg",
      qualifications: "MS (General Surgery), DNB (General Surgery), FRCS (General Surgery)",
      department: "Neurosurgery, Minimal Access Surgery",
      expertise: "Brain Tumour Surgery, Minimal Invasive Spine Surgery, Trigeminal Neuralgia Surgery",
      profileLink:
        "https://www.kokilabenhospital.com/professionals/abhayakumar.html",
    },
    // Add more doctor data as needed
  ];

  return (
    <>
      <Navbar />

      <div className="bg-gray-100 min-h-screen">
        <Slider {...settings}>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Carousel Image 1" className="w-full" />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 flex justify-center items-center">
              <div className="text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Carousel Content</h2>
                <p className="text-lg">This is some content overlaid on the carousel image.</p>
              </div>
            </div>
          </div>
          {/* Add more carousel slides as needed */}
        </Slider>
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-5xl mx-auto">
            {/* Doctors */}
            <div className="content-part">
              <div className="findadoctor-inner">
                {doctors.map((doctor) => (
                  <div key={doctor.id} className="md:flex justify-center">
                    <div className="findadoctor-box bg-white rounded-lg shadow-md mb-6 overflow-hidden md:w-1/2">
                      <div className="talent-profile flex flex-col md:flex-row">
                        <div className="talent-left w-full md:w-1/3">
                          <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                        <div className="talent-right p-6 flex flex-col justify-center">
                          <h2 className="text-2xl font-bold mb-2">{doctor.name}</h2>
                          <h3 className="text-lg mb-4">{doctor.qualifications}</h3>
                          <div className="mb-4">
                            <h4 className="text-lg font-semibold mb-1">Department</h4>
                            <p className="text-gray-700">
                              <Link to="#" className="text-blue-500 hover:underline">
                                Neurosciences
                              </Link>{" "}
                              /{" "}
                              <Link to="#" className="text-blue-500 hover:underline ml-1">
                                {doctor.department}
                              </Link>
                            </p>
                          </div>
                          <div className="mb-4">
                            <h4 className="text-lg font-semibold mb-1">Expertise</h4>
                            <p className="text-gray-700">{doctor.expertise}</p>
                          </div>
                          <div className="flex mt-4">
                            <div className="mr-4">
                              <a
                                href="javascript:;"
                                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md flex items-center"
                              >
                                <i className="fa fa-calendar mr-2" aria-hidden="true"></i>
                                Request an Appointment
                              </a>
                            </div>
                            <div>
                              <a
                                href={doctor.profileLink}
                                className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center"
                              >
                                <i className="fa fa-user mr-2" aria-hidden="true"></i>
                                View Profile
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Consultancy;
