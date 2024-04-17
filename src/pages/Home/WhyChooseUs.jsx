import { FaDesktop, FaUserFriends } from "react-icons/fa";
import { FaBuilding, FaThumbsUp } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const WhyChooseUs = () => {
  return (
    <div className="mb-12 mt-8">
      <h1 className="text-center font-extrabold text-3xl text-black mt-4 mb-4">
        Why Choose Us?
      </h1>
      <p className="text-center font-medium text-base text-neutral-500 mb-12">
        Explore our enchanting qualities that would meet your hunger for
        luxurious lifestyle and living standards.
      </p>
      <div className="grid grid-cols-1 sm:items-center sm:justify-center lg:grid-cols-2 md:grid-cols-2  gap-6 mt-2 mb-5 mx-auto">
        {/* 1st card */}
        <div
          data-aos="zoom-out-up"
          data-aos-delay="800"
          data-aos-duration="1000"
          className="card  p-2 bg-gradient-to-br from-red-200 to-transparent via-red-100shadow-xl"
        >
          <div className="card-body">
            <FaBuilding color=" #FF5733" className="w-12 h-12"></FaBuilding>
            <h2 className="card-title font-bold">
              Wide Selection of Properties
            </h2>
            <p>
              Find your perfect property from our diverse listings. Whether you
              are a first-time buyer, seasoned investor, or seeking your dream
              home, we have options to match every need and budget.
            </p>
          </div>
        </div>
        {/* 2nd card */}
        <div
          data-aos="zoom-out-up"
          data-aos-delay="900"
          data-aos-duration="1000"
          className="card p-2  bg-gradient-to-br from-blue-200 to-transparent via-blue-100  shadow-xl"
        >
          <div className="card-body">
            <FaUserFriends
              color="#2196F3"
              className="w-12 h-12"
            ></FaUserFriends>
            <h2 className="card-title font-bold">
              Expert Guidance and Support
            </h2>
            <p>
              Our experienced team is here to guide you through every step of
              your property journey. From personalized recommendations to
              negotiating the best deals, we provide expert support tailored to
              your needs.
            </p>
          </div>
        </div>
        {/* 3rd card */}
        <div
          data-aos="zoom-out-up"
          data-aos-delay="1000"
          data-aos-duration="1000"
          className="card p-2 bg-gradient-to-br from-yellow-200 to-transparent via-yellow-100 shadow-xl"
        >
          <div className="card-body">
            <FaDesktop color="#D5A000" className="w-12 h-12"></FaDesktop>
            <h2 className="card-title font-bold">Seamless Online Experience</h2>
            <p>
              Explore properties effortlessly with our user-friendly platform.
              With intuitive search filters and detailed listings, finding your
              ideal property is easier than ever, whether you are browsing from
              your desktop or mobile device.
            </p>
          </div>
        </div>
        {/* 4th card */}
        <div
          data-aos="zoom-out-up"
          data-aos-delay="1100"
          data-aos-duration="1000"
          className="card p-2 bg-gradient-to-br from-green-200 to-green-100shadow-xl"
        >
          <div className="card-body">
            <FaThumbsUp color="#388E3C" className="w-12 h-12"></FaThumbsUp>
            <h2 className="card-title font-bold ">
              Trusted Reputation and Client Satisfaction
            </h2>
            <p>
              Trust in our track record of success and client satisfaction. Our
              commitment to integrity, transparency, and professionalism ensures
              exceptional service and results, earning the trust of clients time
              and time again.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
