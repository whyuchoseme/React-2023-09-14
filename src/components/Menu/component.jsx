import { Dish } from "../Dish/component"
import styles from "./styles.module.css"

export const Menu = ({ dishes }) => {

    return  (
        <ul className={styles.root}>
            {dishes.map((dish) => (
                <li key={dish.id}>
                    <Dish dish={dish}
                    className={styles.dish}
                />
                </li>
            ))}
        </ul>
    )
}