import { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../Store/CartContext";
import Cartitem from "./Cartitem";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItem = cartCtx.items.length > 0;

  const cartAdditemHandler = (item) => {
    cartCtx.addItem({...item , amount:1});
  };
  const cartRemoveitemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes.cart}>
      {cartCtx.items.map((item) => (
        <Cartitem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={cartAdditemHandler.bind(null,item)}
          onRemove={cartRemoveitemHandler.bind(null,item.id)}
        ></Cartitem>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.action}>
        <button className={classes.btnClose} onClick={props.onClose}>
          close
        </button>
        {hasItem && <button className={classes.order}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
