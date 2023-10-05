import { useState } from "react"
import { Button } from "../Button/component"

export const Dish = ({ dish, className }) => {
    const [amount, setAmount] = useState(0);

    let minus = () => setAmount(amount - 1);
    let plus = () => setAmount(amount + 1);

    return (
        <div className={className}>
            {dish.name} - <Button
                children={'-'}
                onClick={minus} 
                disabled={amount === 0} 
            />
                {amount}
            <Button
                children={'+'}
                onClick={plus} 
                disabled={amount === 5}
            />
        </div>
    )
}