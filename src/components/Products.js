import React, {useEffect, useRef, useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from './ProductCard';

const Products = () => {
 const [products,setproducts]=useState([]);
 const getproducts = async() => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setproducts(data);
  }  
  useEffect(()=>{
    getproducts();
    // eslint-disable-next-line
  },[])
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }
    ]
  };
  return (
    <>
      <div className="productsContainer">
          <div className="headingBox">
            <h1 >New products</h1>
            <div className='top' id="left-right-shift-arrows-1">
              <span onClick={previous}>
                <i style={{ cursor: "pointer" }} onClick={previous} className="fa-solid fa-arrow-left"></i>
              </span>
              <span onClick={next}>
                <i style={{ cursor: "pointer" }} onClick={next} className="fa-solid fa-arrow-right"></i>
              </span>
            </div>
          </div>
          <div className="productBox">
            <div id="product-links">
              <ul>
                <li className="product-link">Apparel</li>
                <li className="product-link">Accessories</li>
                <li className="product-link">Best sellers</li>
                <li className="product-link">50% off</li>
              </ul>
            </div>
            <div id="product-cards">
              <Slider ref={sliderRef} {...settings}>
                {products && products.map((product,index)=>{
                    return <ProductCard key={index} product={product} />
                })}
              </Slider>
            </div>
          </div>
          <div  id="left-right-shift-arrows-2">
              <span onClick={previous}>
                <i style={{ cursor: "pointer" }} onClick={previous} className="fa-solid fa-arrow-left"></i>
              </span>
              <span onClick={next}>
                <i style={{ cursor: "pointer" }} onClick={next} className="fa-solid fa-arrow-right"></i>
              </span>
            </div>
        </div>
    </>
  )
}

export default Products
