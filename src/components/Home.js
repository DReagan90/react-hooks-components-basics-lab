 // Home.js
import React from "react";

function Home({ name, city, color }) {
  return (
    <div id="home" style={{ background: color }}>
      <h1>{name} is a Web Developer from {city}</h1>
    </div>
  );
}

export default Home;
