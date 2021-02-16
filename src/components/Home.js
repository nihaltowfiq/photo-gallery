import React from "react";
import { useState } from "react";
import { flowers } from "../data/flowers";

const flowersData = flowers;

const Home = () => {
  const [flowers, setFlowers] = useState(flowersData);
  console.log(flowers);
  return (
    <div>
      <h1>HOME</h1>
    </div>
  );
};

export default Home;
