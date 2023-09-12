import React from "react";
import Card from "../Component/Card";
import Hero from "../Component/Hero";
import useFetch from "../Hooks/useFetch";
const Home = () => {
  const { data, loading, error, reFetch } = useFetch(
    `https://localservice.onrender.com/api/v1/services`
  );
  // console.log(data);

  
  return (
    <div>
      <Hero />
      <div className="container">
        <div className="row">
          {/* <Link to="/packages/:id"> */}
          {data.map((services) => (
            <Card services={services} key={services._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
