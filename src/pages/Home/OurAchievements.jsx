import { FaCheckCircle, FaStar, FaUsers } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const OurAchievements = () => {
  return (
    <div className="mb-12 mt-8">
      <h1 className="text-center font-extrabold text-3xl text-black mt-4 mb-4">
        Our Achievements
      </h1>
      <p className="text-center font-medium text-base text-neutral-500 mb-12 max-w-4xl mx-auto">
        Discover our impressive track record of accomplishments, featuring key
        metrics such as the number of projects completed, clients served, and
        our overall rating points.
      </p>

      <div className="flex items-center justify-center">
        <div
          data-aos="flip-up"
          data-aos-delay="800"
          data-aos-duration="1000"
          className="flex flex-col gap-3 md:flex-row md:gap-5 lg:flex-row lg:gap-16 lg:max-w-5xl"
        >
          {/* 1st stat */}
          <div className="stat shadow-2xl bg-lime-50 border-emerald-400 border-2 rounded-xl space-y-2 p-8 ">
            <div className="mb-3">
              <FaCheckCircle color="#4CAF50" className="w-11 h-11" />
            </div>
            <div className="text-black text-lg font-medium">
              Project Accomplished
            </div>
            <div className="stat-value text-primary">1.5K</div>
          </div>

          {/* 2nd stat */}
          <div className="stat shadow-2xl bg-sky-50 border-2 border-blue-400 rounded-xl space-y-2 p-8">
            <div className="mb-3">
              <FaUsers color="#2196F3" className="w-11 h-11"></FaUsers>
            </div>
            <div className="text-black text-lg font-medium">Total Clients</div>
            <div className="stat-value text-secondary">2.6K</div>
          </div>

          {/* 3rd stat */}
          <div className="stat shadow-2xl bg-yellow-50 border-yellow-400 border-2 rounded-xl space-y-2 p-8">
            <div className="mb-3">
              <FaStar color="#FFD700" className="w-11 h-11"></FaStar>
            </div>
            <div className="text-black text-lg font-medium">Rating</div>
            <div className="stat-value text-orange-700">5.00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAchievements;
