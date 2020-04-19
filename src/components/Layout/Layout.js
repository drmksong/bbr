import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const layout = (props) => {
  return (
    <Aux>
      <Toolbar></Toolbar>
      {/* <div className={classes.Content}>Toolbar, SideDrawler, Backdrop</div> */}
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default layout;
