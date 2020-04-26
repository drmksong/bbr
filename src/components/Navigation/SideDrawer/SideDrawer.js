import React from "react";
import classes from "./SideDrawer.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Aux from "../../../hoc/Aux";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = (props) => {
  // ...
  return (
    <Aux>
      <Backdrop
        show={props.show}
        cancelClicked={props.cancelClicked}
      ></Backdrop>
      <div
        className={[
          classes.SideDrawer,
          props.show ? classes.Open : classes.Close,
        ].join(" ")}
      >
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems></NavigationItems>
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
