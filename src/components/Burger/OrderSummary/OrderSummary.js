import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";
import classes from "./OrderSummary.module.css";

const orderSummary = (props) => {
  const igSummary = Object.keys(props.ingredients).map((key) => {
    return (
      <li key={key}>
        <span style={{ textTransform: "capitalize" }}>{key}</span> :{" "}
        {props.ingredients[key]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>{igSummary}</ul>
      <p>
        <strong>Price Total : {props.price.toFixed(2)}</strong>
      </p>
      <p>continue to check out?</p>
      <div className={classes.OrderSummary}>
        <Button btnType={"Success"} clicked={props.continueClicked}>
          Continue
        </Button>
        <Button btnType={"Danger"} clicked={props.cancelClicked}>
          Cancel
        </Button>
      </div>
    </Aux>
  );
};

export default orderSummary;
