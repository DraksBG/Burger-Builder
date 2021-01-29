import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
const burger = (props) => {
  // transformIngredients is using Object.key on the object we need to take the values
  // using map on keys we are creating an array on of the keys, then mapping over them
  // is gonna give us an array of the values and on the last return we are combining the
  // key and the value thus we extracted the key and its value form the object
  // using reduce we are combining all of the values and pairs into one array
  let transformIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      console.log("[igKey]:", igKey);
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return (
          console.log("[igKey]", igKey, "[i]:", i),
          (<BurgerIngredient key={igKey + i} type={igKey} />)
        );
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  console.log("[Array after reduce method]", transformIngredients);
    if (transformIngredients.length === 0) {
        transformIngredients = <p>Please start adding ingredients!</p>
    }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
