import React from "react";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";
//import classes from "./Burger.module.css";
import classes from "./Burger.module.css";

const burger = (props) => {
  //  console.log("Burger is called");
  let tsIngredients = Object.keys(props.ingredients)
    .map((key) => {
      return [...Array(props.ingredients[key])].map((_, i) => {
        return <BurgerIngredient key={key + i} type={key}></BurgerIngredient>;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (tsIngredients.length === 0) {
    tsIngredients = <p>Select the ingredients you want</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {tsIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
