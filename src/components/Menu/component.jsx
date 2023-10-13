import classNames from "classnames";
import { Dish } from "../Dish/component";
import styles from "./styles.module.css";

export const Menu = ({ dishes, className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3 className={styles.restaurantMenu}>Menu:</h3>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id}>
            <Dish dish={dish} className={styles.dish} />
          </li>
        ))}
      </ul>
    </div>
  );
};
