import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Estate from "./Estate";

const Estates = ({data}) => {
    const [estates,setEstates]=useState([]);
    useEffect(()=>{
        setEstates(data)
    },[data]);
    return (
        <div>
           <h1 className="text-center font-extrabold text-3xl text-black mt-4 mb-5">Featured Properties</h1> 
           <p className="text-center font-medium text-base text-neutral-500 mb-12">Explore our curated selection of exquisite properties tailored to meet your lifestyle and preferences.</p>
           <div className="grid grid-cols-1 sm:items-center sm:justify-center md:grid-cols-2 lg:grid-cols-3 gap-6 my-5 mx-auto">
           {
            estates.map(estate=><Estate key={estate.id} info={estate}></Estate>)
           }
           </div>
        </div>
    );
};



Estates.propTypes={
    data: PropTypes.object.isRequired
}
export default Estates;