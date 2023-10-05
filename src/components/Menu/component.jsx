import classNames from "classnames"
import { Dish } from "../Dish/component"
import styles from "./styles.module.css"

export const Menu = ({ dishes, className }) => {

    return  (
        <ul className={classNames(styles.root, className)}>
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