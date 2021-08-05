import React, {useContext,useEffect,useState} from "react";
import CartContext from "../../Store/CartContext";
import classes from "./HeaderCart.module.css";
import CartIcon from "./CartIcon";
const HeaderCart = (props) => {
  const[btnHighlight,setbtnHighlight] = useState(false)
  const Cartctx = useContext(CartContext);

  const Numberofitems = Cartctx.items.reduce((cartItem, item) => {
    return cartItem + item.amount;
  },0)
  const {items} = Cartctx;
  const btnClasses = `${classes.button} ${btnHighlight ? classes.bump : ''}`;
  useEffect(() => {
    if(items.length === 0){
      return;
    }
    setbtnHighlight(true);
    const timer = setTimeout(() => {
      setbtnHighlight(false);


    },300)
    return () =>{
      clearTimeout(timer);
    }

  }, [items])
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{Numberofitems}</span>
    </button>
  );
};

export default HeaderCart;
