import { Menu } from "../Menu/component"
import { Reviews } from "../Reviews/component"
import styles from "./styles.module.css"

export const Restaurant = ({ restaurant }) => {

    return (
        <div>
            <h2 className={styles.h2}>{restaurant.name}</h2>
            <Menu dishes = {restaurant.menu} />
            <Reviews reviews = {restaurant.reviews} />
        </div>
    )
}