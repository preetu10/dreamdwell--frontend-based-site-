import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const EstateDetail = () => {
  const data = useLoaderData();
  const id = useParams();
  const info = data.find((p) => p.id === parseInt(id.id));
  useEffect(() => {
    document.title = `${info.estate_title}`;
  }, [info]);
  return (
    <div className="hero mb-5 mt-5 bg-base-100">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <img
          src={info.image}
          className="max-w-xl h-[550px] rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-3xl font-bold">{info.estate_title}</h1>
          <h1 className="text-xl font-semibold mt-3 text-[#131318EE]">{info.segment_name}</h1>
          <p className="py-3 text-base">
           {info.description}
          </p>
          <p className="text-lg mt-3 mb-2"><span className=" font-semibold mr-3 ">Area:</span> <span className="font-medium">
          {info.area}</span></p>
          <p className="text-lg  mt-3 mb-2"><span className="font-semibold mr-3">Price:</span> <span className="font-medium">
          {info.price}</span></p>
          <p className="text-lg  mt-3 mb-2"><span className="font-semibold mr-3">Location:</span> <span className="font-medium">
          {info.location}</span></p>
          <p className="text-lg  mt-3 mb-2"><span className="font-semibold mr-3">Status:</span> <span className="font-medium">
          {info.status}</span></p>
          <div className="flex flex-row gap-5 items-center">
            <span className="font-semibold mr-3 text-lg">Facilities:</span>
           {
            info.facilities.map((facility,index) => 
                 <div key={index} className="badge badge-accent badge-outline font-bold text-black p-5">{facility}</div>
            )
           }
          </div>
           <button className="btn mt-2 bg-[#CC935C] text-white">Add to cart</button> 
        </div>
      </div>
    </div>
  );
};

export default EstateDetail;
