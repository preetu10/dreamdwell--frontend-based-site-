import { useEffect, useState } from "react";
import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const [estates,setEstates]=useState([]);
    const data=useLoaderData();
    console.log(data[0]);

    useEffect(() => {
        document.title="DreamDwell"
      },[]);
    return (
        <div className="min-h-screen">
           <Banner></Banner>
        </div>
    );
};

export default Home;