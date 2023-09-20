import React from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";
import Contact from "../components/Contact";

const Home = () => {
  // const products = [
  //   {
  //     name: 'Product 1',
  //     description: 'Description of Product 1',
  //     price: 19.99,
  //     image: 'product1.jpg',
  //   },
  //   {
  //     name: 'Product 2',
  //     description: 'Description of Product 1',
  //     price: 19.99,
  //     image: 'product1.jpg',
  //   },
  //   {
  //     name: 'Product 3',
  //     description: 'Description of Product 1',
  //     price: 19.99,
  //     image: 'product1.jpg',
  //   },
  //   {
  //     name: 'Product 4',
  //     description: 'Description of Product 1',
  //     price: 19.99,
  //     image: 'product1.jpg',
  //   }
  //   // Add more product objects here
  // ];
  return (
    <div className="home">
      <div id="banner">
        <Banner />
      </div>
      <div className="seemore">
        <button>
          see more{" "}
          <i
            className="fa-solid fa-arrow-right"
            style={{ transform: "rotate(-45deg)" }}
          ></i>
        </button>
      </div>
      <div id="new-product">
        <Products />
      </div>
      <div id="contact-us">
       <Contact/>
      </div>
      <div className="footer">
        <p>Copyright 2022 All Right Reserved By SG</p>
      </div>
    </div>
  );
};

export default Home;
