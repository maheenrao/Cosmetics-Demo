import React, { Fragment } from "react";
import classes from "./Header.module.css";
import pic from '../../assests/pic.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.aim}>Aim Cosmetics</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={pic} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
