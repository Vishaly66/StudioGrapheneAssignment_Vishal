import React, { useState, useEffect } from "react";

const Header = () => {
  const navbar = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    {
      name: "Our Products",
      id: "product",
      child: [
        { name: "Product 1", id: "p1" },
        { name: "Product 2", id: "p2" },
        { name: "Product 3", id: "p3" },
        { name: "Product 4", id: "p4" },
      ],
    },
    { name: "Contact Us", id: "contact" },
  ];
  function getwidth(){
    return window.outerWidth;
}
const [ScreenWidth, setScreenWidth] = useState(getwidth());
const [linksDisplay,setlinksDisplay]=useState("none") 
  useEffect(() => {
    if(ScreenWidth > 750){
           setlinksDisplay("block")
    }
    else{
      setlinksDisplay("none")
    }
    const updateDimension = () => {
      setScreenWidth(getwidth())
    }
    window.addEventListener('resize', updateDimension);
    
    return(() => {
        window.removeEventListener('resize', updateDimension);
    })
  }, [ScreenWidth]) 
const openNavbar =()=>{
  setlinksDisplay("block")
}
const closeNavbar =()=>{
  setlinksDisplay("none")
}
  return (
    <div className="header">
      <div className="headertop">
        <div className="headertop-left">
          <span>
            <i className="fa-solid fa-truck"></i>
          </span>{" "}
          Free Delivery | Return Policy
        </div>
        <div className="headertop-right">
          <div>Login</div>
          <div>Follow Us</div>
          <span>
            <i className="fa-brands fa-facebook-f"></i>
          </span>
          <span>
            <i className="fa-brands fa-linkedin-in"></i>
          </span>
          <span>
            <i className="fa-brands fa-twitter"></i>
          </span>
          <span>
            <i className="fa-brands fa-instagram"></i>
          </span>
        </div>
      </div>
      <div className="headerbottom">
        <div className="nav" >
          <div className="nav-head">
            <p id="title">ShopKart</p>
            <div id="cart">
              <span>
                <b>WISHLIST(0)</b>
              </span>
              <span>
                <b>BAG(0)</b>
              </span>
            </div>
            <div id="open-icon">
            <i onClick={openNavbar} className="fa-solid fa-bars"></i>
            </div>
          </div>
          <div className="nav-links" style={{display:`${linksDisplay}`}}>
            <div id="close-icon">
            <i style={{border:"1px solid white"}} onClick={closeNavbar} className="fa-solid fa-xmark"></i>
            </div>
            <ul className="nav-lists">
              {navbar.map((element, index) => {
                if (element.id !== "product") {
                  return (
                    <li className="nav-list">
                      <a className="nav-link" aria-current="page" key={element.id} href="/">
                        {element.name}
                      </a>
                    </li>
                  );
                } else {
                  return (
                    <li className="nav-list">
                      <select name="our-products" id="our-products">
                        <option className="product-option" value="p-1">
                          {element.name}
                        </option>
                        {element.child.map((prod, index) => {
                          return (
                            <option className="product-option" value="p-1">
                              {prod.name}
                            </option>
                          );
                        })}
                      </select>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
