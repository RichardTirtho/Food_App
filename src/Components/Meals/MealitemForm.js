import React, { useRef, useState } from "react";
import Input from "../UI/Input";
import classes from "./MealitemForm.module.css";

const MealitemForm = (props) => {
  const fromInput = useRef();
  const [fromValid, formsetValid] = useState(true);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredInput = fromInput.current.value;
    const enteredValidInput = +enteredInput;

    if (
      enteredInput.trim().length === 0 ||
      enteredValidInput < 0 ||
      enteredValidInput > 5
    ) {
      formsetValid(false);
      return;
    }
    props.onAddCart(enteredValidInput);
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <Input
        ref={fromInput}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      ></Input>
      <button>+ Add</button>
      {!fromValid && <p>Please enter a valid amount (1-5). </p>}
    </form>
  );
};

export default MealitemForm;
