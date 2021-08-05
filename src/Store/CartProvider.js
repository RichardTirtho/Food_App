import CartContext from "./CartContext";
import React, { useReducer } from "react";

const cartDefaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "Add") {
    const updatedTotalamount =
      state.totalAmount + action.item.price * action.item.amount;
    
      const existingIndexitem = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    
    const exsitingItem = state.items[existingIndexitem];
 
    let updatedItems;
    if(exsitingItem){
       const updatedItem ={
        ...exsitingItem,
        amount: exsitingItem.amount + action.item.amount
      };
      updatedItems = [...state.items];
      updatedItems[existingIndexitem] = updatedItem
    }else{
       updatedItems = state.items.concat(action.item);

    }

    
    return {
      items: updatedItems,
      totalAmount: updatedTotalamount,
    };
  }
  if(action.type === "Remove"){
    const existingIndexitem = state.items.findIndex(
      (item) => item.id === action.id
    );
    
    const exsitingItem = state.items[existingIndexitem];
    const updatedTotalamount = state.totalAmount - exsitingItem.price;

    let updatedItems;
    if(exsitingItem.amount === 1){
      updatedItems =state.items.filter(item => item.id !== action.id);
    }else{
      const updatedItem = {...exsitingItem, amount: exsitingItem.amount -1};
      updatedItems = [...state.items];
      updatedItems[existingIndexitem] = updatedItem;

    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalamount,
    };

  }
  return cartDefaultState;
};

const CartProvider = (props) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, cartDefaultState);

  const addItemtoCart = (item) => {
    cartDispatch({ type: "Add", item: item });
  };

  const delItemtoCart = (id) => {
    cartDispatch({ type: "Remove", id: id });
  };

  const cartContex = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemtoCart,
    removeItem: delItemtoCart,
  };

  return (
    <CartContext.Provider value={cartContex}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
