import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="column" style={{ padding: "10px" }} key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title}></img>
              </div>
               <div className="content">
                <div className="header">{title}</div>
              </div>
              <div className="extra content">
                <span className="right floated">{price}</span>
                <span>
                  <i className="user icon"></i>
                  {category}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <div
      className="ui four cards"
      style={{ padding: "40px", paddingLeft: "112px" }}
    >
      {renderList}
    </div>
  );
}

export default ProductComponent;
