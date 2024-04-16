import { useEffect } from "react";

const Home = () => {

    useEffect(() => {
        document.title="DreamDwell"
      },[]);
    return (
        <div className="min-h-screen">
            <p>Home</p>
        </div>
    );
};

export default Home;