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
          backgroundImage: "url(/public/about.jpg)",
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            <img src="/public/Rectangle 14.png" alt="" />
            <img src="/public/Rectangle 15.png" alt="" />
            <img src="/public/Rectangle 16.png" alt="" />
            <img src="/public/Rectangle 17.png" alt="" />
          </div>
          <p className="text-neutral-600 text-lg">
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
            comprehensive services under one roof. We are ready to provide you the best we can forming in teams whenever and whatever you need for. Driven by our commitment to
            innovation and excellence, DreamDwell utilizes technology to empower
            all stakeholders in the real estate industry, ensuring that every
            Bangladeshi has access to a trusted and secure real estate service
            provider. Join us on our journey to redefine the way you experience
            real estate.
          </p>
        </div>
      </div>
      <div className="mb-12 mt-8">
      <h1 className="text-center font-extrabold text-3xl text-black mt-4 mb-4">
        Our Partners
      </h1>
      <p className="text-center font-medium text-base max-w-5xl mx-auto text-neutral-500 mb-12">
      At DreamDwell, we're powered by partnerships. Collaborating with industry leaders and trusted professionals, we deliver exceptional real estate solutions. Together, we're reshaping the future of the industry, ensuring every client's dream becomes a reality
      </p>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5">
        
      </div>

      </div>
    </div>
  );
};

export default About;
