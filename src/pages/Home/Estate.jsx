import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Estate = ({info}) => {
   
    return (
        <div  className="card bg-base-100 shadow-xl">
        <figure className="h-[270px]"><img src={info.image} alt="property"  className="rounded-xl" /></figure>
        <div className="card-body">
          <h2 className="card-title font-bold">
            {info.estate_title}
            <div className="badge badge-accent justify-end text-base py-4 px-5">{info.status}</div>
          </h2>
          <p className="font-semibold ">{info.segment_name}</p>
         {info.description.length>200? 
         <p className="font-medium mb-3 text-base">{info.description.slice(0,100)}...</p>: 
         <p className="font-medium mb-3 text-base">{info.description}</p>
          }
          <p className="font-medium mb-3 text-base">Located at {info.location}</p>
          <div className="card-actions justify-start">
            <div className="badge badge-outline font-medium p-5">{info.area}</div> 
            <div className="badge badge-outline font-medium p-5">{info.price}</div>
          </div>
          <div>
            <button className="btn mt-3 bg-[#CC935C] text-white">
                <Link to={`/property-details/${info.id}`} state={info.estate_title}>
                View Property
                </Link>
                </button>
          </div>
        </div>
      </div>
    );
};


Estate.propTypes={
    info: PropTypes.object.isRequired
}
export default Estate;