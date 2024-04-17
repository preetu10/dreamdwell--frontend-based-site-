import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Cart = ({ data }) => {
  console.log(data);
  return (
    <div className="card w-9/12 h-full flex flex-col gap-5 md:card-side lg:card-side md:justify-center md:items-center bg-base-100 shadow-xl my-8">
      <figure className="w-[280px] h-[280px]">
        <img src={data.image} alt="estate" className="rounded-xl w-[280px] h-[280px]" />
      </figure>
      <div className="card-body mt-3">
        <h2 className="card-title">{data.estate_title}</h2>
        <h2 className="font-semibold">{data.segment_name}</h2>
        <p className="font-medium  text-base mb-3">
          Located at {data.location}
        </p>
        <div className="card-actions justify-start">
          <div className="badge badge-outline font-medium p-5">
            {data.status}
          </div>
          <div className="badge badge-outline font-medium p-5">
            {data.price}
          </div>
        </div>
        <div className="card-actions justify-start">
          <button className="btn mt-3 bg-[#CC935C] text-white">
            <Link to={`/property-details/${data.id}`} state={data.estate_title}>
              View Property
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
Cart.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Cart;
