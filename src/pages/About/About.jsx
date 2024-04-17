/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "DreamDwell-AboutUs";
  }, []);
  return (
    <div className="my-5">
      <div
        className="hero min-h-screen rounded-2xl  mb-10"
        style={{
          backgroundImage: "url(about.jpg)",
        }}
      >
        <div className="hero-overlay rounded-2xl bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-4xl text-white font-bold">About Us</h1>
            <p className="font-semibold text-xl max-w-4xl">
              Welcome to Dream Dwell! We are more than just a real estate
              company — we are your trusted partner in finding the perfect place
              to call home. With passion, innovation, and integrity, we are
              committed to exceeding your expectations and turning your dreams
              into reality. Whether you are buying, selling, or investing, let
              us guide you on your journey to your dream home.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 ">
        <h1 className="text-center font-extrabold text-3xl text-black mt-4 mb-10">
          At A Glance
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-5 lg:gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center lg:grid-cols-2 gap-5">
            <img
              data-aos="flip-right"
              data-aos-delay="20"
              data-aos-duration="800"
              src="Rectangle 14.png"
              alt=""
            />
            <img
              data-aos="flip-left"
              data-aos-delay="30"
              data-aos-duration="1000"
              src="Rectangle 15.png"
              alt=""
            />
            <img
              data-aos="flip-right"
              data-aos-delay="40"
              data-aos-duration="1000"
              src="Rectangle 16.png"
              alt=""
            />
            <img
              data-aos="flip-left"
              data-aos-delay="50"
              data-aos-duration="1000"
              src="Rectangle 17.png"
              alt=""
            />
          </div>
          <p className="text-neutral-600 text-lg mx-auto">
            Since our inception in 2016, DreamDwell has emerged as the premier
            destination for real estate solutions, proudly serving as
            Bangladesh's foremost transacting real estate company. With a unique
            blend of cutting-edge technology and personalized service,
            DreamDwell has revolutionized the real estate landscape, offering a
            seamless experience for buyers, sellers, and investors alike. At
            DreamDwell, we leverage our extensive online and offline presence,
            coupled with a vast database of information, to address all your
            real estate needs. Whether you're searching for the perfect property
            or seeking expert guidance on legal matters, mortgages, or interior
            design, DreamDwell is your one-stop solution, providing
            comprehensive services under one roof. We are ready to provide you
            the best we can forming in teams whenever and whatever you need for.
            Driven by our commitment to innovation and excellence, DreamDwell
            utilizes technology to empower all stakeholders in the real estate
            industry, ensuring that every Bangladeshi has access to a trusted
            and secure real estate service provider. Join us on our journey to
            redefine the way you experience real estate.
          </p>
        </div>
      </div>
      <div className="mb-12 mt-8">
        <h1 className="text-center font-extrabold text-3xl text-black mt-4 mb-4">
          Our Team
        </h1>
        <p className="text-center font-medium text-base max-w-5xl mx-auto text-neutral-500 mb-12">
          Inspired leadership drives our success at DreamDwell. Meet our
          dedicated team heads, each bringing expertise and passion to our
          mission of redefining real estate excellence
        </p>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 items-center justify-center">
          <div  data-aos="zoom-in"
              data-aos-delay="40"
              data-aos-duration="1000" className="col-span-3  ">
            <img src="imtiaz.png" alt="" className="mx-auto" />
            <p className="text-center font-semibold mt-2">Imtiaz Hossain</p>
            <p className="text-center text-neutral-600 font-medium mt-1">
              CEO, DreamDwell LTD
            </p>
          </div>
          <div data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000" className=" col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-7 mx-auto items-center justify-center mt-2 ">
            <div className="">
              <img src="jubair.png" alt="" />
              <p className="text-center font-semibold mt-2">Jubair Alam</p>
              <p className="text-center font-medium mt-1 text-neutral-600">
                Associate Director, Accounts & Finance
              </p>
            </div>
            <div>
              <img src="monir.png " alt="" />
              <p className="text-center font-semibold mt-2">Monir Ahmed</p>
              <p className="text-center font-medium mt-1 text-neutral-600">
                General Manager, Product & Growth
              </p>
            </div>
          </div>
          <div data-aos="zoom-in"
              data-aos-delay="60"
              data-aos-duration="1000" className=" col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-7 mx-auto items-center justify-center">
            <div className="">
              <img src="nahid.png" alt="" />
              <p className="text-center font-semibold mt-2">Nahid Abdullah</p>
              <p className="text-center font-medium mt-1 text-neutral-600">
                General Manager
              </p>
            </div>
            <div className="">
              <img src="khan.png" alt="" />
              <p className="text-center font-semibold mt-2">Rizvi Khan</p>
              <p className="text-center font-medium mt-1 text-neutral-600">
                General Manager, Rental Operations
              </p>
            </div>
            <div className="">
              <img src="zaimul1_1.png" alt="" />
              <p className="text-center font-semibold mt-2">Zaimul Hossain</p>
              <p className="text-center font-medium mt-1 text-neutral-600">
                General Manager, Customer Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
