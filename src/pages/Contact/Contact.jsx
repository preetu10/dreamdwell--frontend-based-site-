import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "DreamDwell-ContactUs";
  }, []);
  return (
    <div>
      <div
        className="hero min-h-screen rounded-2xl  mb-10"
        style={{
          backgroundImage: "url(contact.jpg)",
        }}
      >
        <div className="hero-overlay rounded-2xl bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-4xl text-white font-bold">Contact Us</h1>
            <p className="font-semibold text-xl max-w-4xl">
              Have questions or ready to start your real estate journey? Reach
              out to us today! Our friendly team is here to assist you every
              step of the way.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center">
        <div
          data-aos="zoom-out"
          data-aos-delay="40"
          data-aos-duration="1000"
          className="border-2 h-[420px] border-gray-600 p-4 rounded-lg shadow-xl mb-10 text-center flex flex-col items-center justify-center"
        >
          <img src="phone.png" alt="" className="text-center" />
          <p className="font-medium text-4xl">Telephone</p>
          <p className="text-neutral-600 text-base py-3 mb-2 mx-auto">
            Support is also available by mobile and telephone, but to get
            fastest response please do email.
          </p>
          <p className="text-neutral-600 text-lg py-2 mx-auto">
            <span className="font-bold">Phone: </span>+8801 3182 234505 |{" "}
            <span className="font-bold">Customer care:</span> +88096167833011
          </p>
          <p className="text-neutral-600 text-lg  mx-auto">
            <span className="font-bold">Email:</span> dreamdwell506@gmail.com
          </p>
        </div>
        <div
          data-aos="zoom-out"
          data-aos-delay="40"
          data-aos-duration="1000"
          className="border-2 h-[420px] border-gray-600 p-4 rounded-lg shadow-xl mb-10 
        text-center flex flex-col items-center justify-center"
        >
          <img src="mailBox.png" alt="" className="text-center" />
          <p className="font-medium text-4xl">Address</p>
          <p className="text-neutral-600 text-base py-3 mb-2 mx-auto">
            You can reach us through our website and our social media platforms
            at any time, but if you really want to meet with us, you can visit
            us at the following offices and marketplaces.
          </p>
          <p className="text-neutral-600 text-lg font-bold py-2 mx-auto">
            Head Office:
          </p>
          <p className="text-neutral-600 text-lg  mx-auto">
            4th Floor, Road-3, Zakir Hossain Road,South Khulshi Chattogram,
            7//A/1, Chattogram, Chittagong 4000, BD
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
