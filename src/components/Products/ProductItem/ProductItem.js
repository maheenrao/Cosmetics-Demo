import React from "react";
import classes from "./ProductItem.module.css";
import ProductItemForm from "../ProductItem/ProductItemForm";
import { useContext } from "react";
import CartContext from '../../../Store/CartContext'

const ProductItem = (props) => {
  const cartCtx= useContext(CartContext)
    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
      cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price
      })
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
