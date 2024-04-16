import { useEffect } from "react";
import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";
import Estates from "./Estates";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  
    const data=useLoaderData();

    useEffect(() => {
        document.title="DreamDwell"
      },[]);
    return (
        <div className="min-h-screen">
          <section>
          <Banner></Banner>
          </section>
          <section>
            <Estates data={data}></Estates>
          </section>
          <section>
            <WhyChooseUs></WhyChooseUs>
          </section>
        </div>
    );
};

export default Home;