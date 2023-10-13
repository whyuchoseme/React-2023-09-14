import { useState } from "react";
import { Button } from "../Button/component";

export const Dish = ({ dish, className }) => {
  const [amount, setAmount] = useState(0);

  let minus = () => setAmount(amount - 1);
  let plus = () => setAmount(amount + 1);

  return (
    <div className={className}>
      <span>{dish.name} - </span>
      <Button
        onClick={minus}
        disabled={amount === 0}
        type="countButton"
        viewVariant="minus"
      >
        -
      </Button>
      {amount}
      <Button
        onClick={plus}
        disabled={amount === 5}
        type="countButton"
        viewVariant="plus"
      >
        +
      </Button>
    </div>
  );
};
