import React from "react";

const ProductCard = ({product}) => {
  return (
    <div className="card" style={{ width: window.outerWidth >300 ?300:270 }}>
      <img
        className="card-img"
        alt="product"
        src={product.image}
      />
      <div className="card-body">
        <span className="view-item">
          <i
            className="fa-solid fa-arrow-right"
            style={{ transform: "rotate(-45deg)" }}
          ></i>
        </span>
        <h4>{product.title}</h4>
        <p>
          {product.description}
        </p>
        <h3>${product.price}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
