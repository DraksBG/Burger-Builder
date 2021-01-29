import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
const buildControls = (props) => {
  const controls = [
    { lable: "Salad", type: "salad" },
    { lable: "Bacon", type: "bacon" },
    { lable: "Cheese", type: "cheese" },
    { lable: "Meat", type: "meat" },
  ];
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.lable}
          lable={ctrl.lable}
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientDecrement(ctrl.type)}
          disabled={props.disable[ctrl.type]}
        />
      ))}
      <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.order}>
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
