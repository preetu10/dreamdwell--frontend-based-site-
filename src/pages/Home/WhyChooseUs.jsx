const WhyChooseUs = () => {
  return (
    <div className="mb-12 mt-8">
      <h1 className="text-center font-extrabold text-3xl text-black mt-4 mb-4">
        Why Choose Us?
      </h1>
      <p className="text-center font-medium text-base text-black mb-12">
        Explore our curated selection of exquisite properties tailored to meet
        your lifestyle and preferences.
      </p>
      <div className="grid grid-cols-1 sm:items-center sm:justify-center lg:grid-cols-2 md:grid-cols-2  gap-6 mt-2 mb-5 mx-auto">
        {/* 1st card */}
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Wide Selection of Properties</h2>
            <p>Find your perfect property from our diverse listings. Whether you're a first-time buyer, seasoned investor, or seeking your dream home, we have options to match every need and budget.</p>
          </div>
        </div>
        {/* 2nd card */}
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Expert Guidance and Support</h2>
            <p>Our experienced team is here to guide you through every step of your property journey. From personalized recommendations to negotiating the best deals, we provide expert support tailored to your needs.</p>
          </div>
        </div>
        {/* 3rd card */}
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Seamless Online Experience</h2>
            <p>Explore properties effortlessly with our user-friendly platform. With intuitive search filters and detailed listings, finding your ideal property is easier than ever, whether you're browsing from your desktop or mobile device.</p>
           
          </div>
        </div>
        {/* 4th card */}
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Trusted Reputation and Client Satisfaction</h2>
            <p>Trust in our track record of success and client satisfaction. Our commitment to integrity, transparency, and professionalism ensures exceptional service and results, earning the trust of clients time and time again.</p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
