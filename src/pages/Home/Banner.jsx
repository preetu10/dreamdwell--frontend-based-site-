import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Navigation } from "swiper/modules";
const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        loop={true}
        autoplay={{ delay: 3500 }}
        modules={[EffectFade, Navigation, Autoplay]}
        className="mySwiper rounded-xl mt-3 mb-10"
      >
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(/public/house.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl">
                <h1 className="mb-5 text-5xl font-extrabold">Discover Your Dream Home</h1>
                <p className="mb-5 font-semibold">
                Explore a diverse collection of stunning residential properties tailored to your lifestyle. From cozy apartments in bustling neighborhoods to spacious family homes nestled in serene suburbs, find the perfect sanctuary to call home.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(/public/luxury.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-xl">
                <h1 className="mb-5 text-5xl font-extrabold">Embrace Luxury Living</h1>
                <p className="mb-5 font-semibold">
                Indulge in the epitome of luxury with our exquisite selection of high-end residences. From breathtaking penthouses with panoramic views to opulent villas adorned with lavish amenities, elevate your lifestyle to new heights of sophistication and comfort.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(/public/cozy.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-xl">
                <h1 className="mb-5 text-5xl font-extrabold">Invest in Your Future</h1>
                <p className="mb-5 font-semibold">
                Unlock the potential of real estate investment with our range of residential properties. Whether you are a first-time buyer or seasoned investor, discover lucrative opportunities that promise long-term value and growth. Start building your wealth and securing your future today.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
