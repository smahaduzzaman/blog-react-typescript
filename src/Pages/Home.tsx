import React from "react";
import Button from "../Components/Button/Button";
import Navbar from "../Components/Navbar";
import BlogList from "./../Components/BlogList";

const Home = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <Button onClick={handleClick}>Click me!</Button>
      <BlogList />
    </div>
  );
};

export default Home;
