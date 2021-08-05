import React from "react";
import classes from "./Header.module.css";
import foodimg from "../../assets/foodie.jpg";
import HeaderCart from "./HeaderCart";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>FoodNest</h1>
        <nav className={classes.navbar}>
          <ul>
            <li className={classes.navlist}>
              <a href="#" className={classes.navlinks}>Home</a>
            </li>
            <li className={classes.navlist}>
              <a href="#" className={classes.navlinks}>About Us</a>
            </li>
            <li className={classes.navlist}>
              <a href="#" className={classes.navlinks}>Log In</a>
            </li>
            <li className={classes.navlist}>
              <a href="#" className={classes.navlinks}>Sign up</a>
            </li>
          </ul>
        </nav>
        <HeaderCart onClick={props.onCart}></HeaderCart>
      </header>
      <div className={classes["main-image"]}>
        <img src={foodimg} alt="Header-food"></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
