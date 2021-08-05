import React, {useContext} from 'react';
import MealitemForm  from './MealitemForm';
import classes from './Mealitem.module.css';
import CartContext from '../../Store/CartContext';

const Mealitem = (props) =>{
    const price = `$${props.price.toFixed(2)}`;
    const cartCtx = useContext(CartContext);

    const cartHandler = amount =>{
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price:props.price
        });

    };
    return(
        <li className={classes.Mealitem}>
        <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        </div>
        <div> <MealitemForm onAddCart={cartHandler}></MealitemForm></div>
        </li>

    );
};


export default Mealitem;