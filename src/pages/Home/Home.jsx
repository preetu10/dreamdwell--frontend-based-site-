import { useEffect } from "react";
import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";
import Estates from "./Estates";
import WhyChooseUs from "./WhyChooseUs";
import OurAchievements from "./OurAchievements";

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
          <section>
            <OurAchievements></OurAchievements>
          </section>
        </div>
    );
};

export default Home;