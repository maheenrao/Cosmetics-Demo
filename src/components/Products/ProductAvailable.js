import React from "react";
import classes from "./ProductAvailable.module.css";
import Card from "../UI/Card";
import ProductItem from "./ProductItem/ProductItem";

const DUMMY_PRODUCTS = [
  {
    id: "m1",
    name: "Mascara",
    description: "Don not need any-other",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Lipstick",
    description: "lovely Colours!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Foundations",
    description: "pick yours right",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Highlighter",
    description: "Shine like Star",
    price: 18.99,
  },
];
const ProductAvailable = () => {
  const productsList = DUMMY_PRODUCTS.map((product) => (
    <ProductItem
      id={product.id}
      key={product.id}
      name={product.name}
      description={product.description}
      price={product.price}
    />
  ));
  return (
    <section className={classes.products}>
      <Card>
        <ul>{productsList}</ul>
      </Card>
    </section>
  );
};

export default ProductAvailable;
