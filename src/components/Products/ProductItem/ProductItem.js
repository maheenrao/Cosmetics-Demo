import React from "react";
import classes from "./ProductItem.module.css";
import ProductItemForm from "../ProductItem/ProductItemForm";



const ProductItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
      
    }
  return (
    <li className= {classes.productt}>
      <div>
        <h3> {props.name}</h3>
      </div>
      <div className={classes.description}>{props.description} </div>
      <div className= {classes.price}> {price}</div>
      <div>
          <ProductItemForm  onAddCart={addToCartHandler} amountInputRef/>
      </div>
    </li>
  );
};

export default ProductItem;
