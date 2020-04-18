import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const buildControl = (props) => {
  const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" },
  ];

  return (
    <div className={classes.BuildControls}>
      <p> Total Price : {props.price.toFixed(2)} </p>
      {controls.map((ctrl) => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            inc={() => props.incHandler(ctrl.type)}
            dec={() => props.decHandler(ctrl.type)}
            dis={props.disabledInfo[ctrl.type]}
          ></BuildControl>
        );
      })}
      <button
        onClick={props.orderable}
        className={classes.OrderButton}
        disabled={!props.purchasable}
      >
        Order Now
      </button>
    </div>
  );
};

export default buildControl;
