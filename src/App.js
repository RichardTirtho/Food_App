import React,{useState} from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from './Store/CartProvider';
function App() {
  const [cartShow, setcartShow] = useState(false);

  const Showcart = () =>{
    setcartShow(true)
  };

  const Hidecart = () =>{
    setcartShow(false)
  };
  return (
    <CartProvider>
    {cartShow && <Cart onClose={Hidecart}></Cart>}   
      <Header onCart={Showcart}></Header>
     
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
