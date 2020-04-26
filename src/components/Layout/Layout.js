import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    show: true,
  };

  menuClickHandler = () => {
    this.setState({ show: true });
  };

  cancelClickHandler = () => {
    this.setState((prevState) => {
      return { show: !prevState.show };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar
          show={this.state.show}
          menuClicked={this.menuClickHandler}
        ></Toolbar>
        <SideDrawer
          show={this.state.show}
          cancelClicked={this.cancelClickHandler}
        ></SideDrawer>
        {/* <div className={classes.Content}>Toolbar, SideDrawler, Backdrop</div> */}
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
