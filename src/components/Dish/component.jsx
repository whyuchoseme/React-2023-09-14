import classNames from "classnames";
import { useState } from "react"
import { Button } from "../Button/component"

import styles from "./styles.module.css"

export const Dish = ({ dish, className }) => {
    const [amount, setAmount] = useState(0);

    let minus = () => setAmount(amount - 1);
    let plus = () => setAmount(amount + 1);

    return (
        <div className={className}>
            {dish.name} - <Button
                className={classNames({
                    [styles.disabledMinus]: amount === 0,
                })}
                title={'-'} 
                onClick={minus} 
                disabled={amount === 0} 
            />
                {amount}
            <Button
                className={classNames({
                    [styles.disabledPlus]: amount === 5,
                })}
                title={'+'}
                onClick={plus} 
                disabled={amount === 5}
            />
        </div>
    )
}