import React from "react";
import classes from "./Modal.module.css";
import Aux from "../../../hoc/Aux";
import BackDrop from "../Backdrop/Backdrop";

const modal = (props) => {
  return (
    <Aux>
      <BackDrop
        show={props.show}
        cancelClicked={props.cancelClicked}
      ></BackDrop>
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(-10vh)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

export default modal;
