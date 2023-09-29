import { useState } from "react"
import { Button } from "../Button/component"

export const CountElement = ({ title }) => {
    const [amount, setAmount] = useState(0)

    let minus = () => setAmount(amount - 1);
    let plus = () => setAmount(amount + 1);

    return (
        <li>
            {title} - <Button title={'-'} onClick={minus} disabled={amount === 0} />
            {amount}
            <Button title={'+'} onClick={plus} disabled={amount === 5} />
        </li>
    )
}