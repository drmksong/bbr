import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import Aux from "../../hoc/Aux";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = { salad: 0.5, cheese: 0.7, bacon: 0.6, meat: 0.9 };
class BurgerBuilder extends Component {
  state = {
    ingredients: { salad: 0, cheese: 0, meat: 0, bacon: 0 },
    totalPrice: 4,
    purchasable: false,
    ordering: false,
  };

  updatePurchasable = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((key) => ingredients[key])
      .reduce((ac, v) => {
        ac = ac + v;
        return ac;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  };

  incIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updCount = oldCount + 1;
    const updIngredients = { ...this.state.ingredients };
    updIngredients[type] = updCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updIngredients });
    this.updatePurchasable(updIngredients);
  };

  decIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) return;
    const updCount = oldCount - 1;
    const updIngredients = { ...this.state.ingredients };
    updIngredients[type] = updCount;
    const priceDeletion = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeletion;
    this.setState({ totalPrice: newPrice, ingredients: updIngredients });
    this.updatePurchasable(updIngredients);
  };

  orderable = () => {
    this.setState({ ordering: true });
  };

  cancelClicked = () => {
    this.setState({ ordering: false });
    console.log("cancelClicked from Backdrop");
  };

  continueClicked = () => {
    alert("You clicked continue");
  };

  render() {
    let disabledInfo = { ...this.state.ingredients };

    let modal = this.state.ordering ? (
      <Modal show={this.state.ordering} cancelClicked={this.cancelClicked}>
        <OrderSummary
          price={this.state.totalPrice}
          ingredients={this.state.ingredients}
          cancelClicked={this.cancelClicked}
          continueClicked={this.continueClicked}
        ></OrderSummary>
      </Modal>
    ) : null;

    for (let key in this.state.ingredients) {
      if (this.state.ingredients[key] <= 0) {
        disabledInfo[key] = true;
      } else disabledInfo[key] = false;
    }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}></Burger>
        {modal}
        <BuildControls
          incHandler={this.incIngredientHandler}
          decHandler={this.decIngredientHandler}
          disabledInfo={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          orderable={this.orderable}
          continueOrder={this.continueClicked}
        ></BuildControls>
      </Aux>
    );
  }
}

export default BurgerBuilder;
