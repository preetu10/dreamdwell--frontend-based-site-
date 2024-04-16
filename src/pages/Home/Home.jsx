import { useEffect } from "react";
import Banner from "./Banner";

const Home = () => {

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