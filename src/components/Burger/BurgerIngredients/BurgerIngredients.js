import React, { Component } from "react";
import propTypes from "prop-types";
import classes from "./BurgerIngredients.module.css";

class BurgerIngredients extends Component {
  render() {
    let ingredient = null;
    console.log("burgerIngredient entered");

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className={classes.BreadBottom}>Bt</div>;
        console.log("  in bread-bottom switch ");
        break;
      case "bread-top":
        ingredient = (
          <div className={classes.BreadTop}>
            {" "}
            Tp<div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;
      case "meat":
        ingredient = <div className={classes.Meat}>M</div>;
        break;
      case "cheese":
        ingredient = <div className={classes.Cheese}>C</div>;
        break;
      case "bacon":
        ingredient = <div className={classes.Bacon}>B</div>;
        break;
      case "salad":
        ingredient = <div className={classes.Salad}>S</div>;
        break;

      default:
        ingredient = null;
        break;
    }
    console.log(this.props.type);
    console.log(ingredient);
    console.log("burgerIngredient leaving");
    return <div>{ingredient}</div>;
  }
}

BurgerIngredients.propTypes = {
  type: propTypes.string.isRequired,
};

export default BurgerIngredients;
