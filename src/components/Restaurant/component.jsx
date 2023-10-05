import { Menu } from "../Menu/component"
import { Reviews } from "../Reviews/component"
import styles from "./styles.module.css"

export const Restaurant = ({ restaurant }) => {

    return (
        <div>
            <h2 className={styles.restaurantName}>{restaurant.name}</h2>
            <Menu
                className={styles.menu}
                dishes = {restaurant.menu}     
            />
            <Reviews 
                className={styles.rewiews}
                reviews = {restaurant.reviews}
            />
        </div>
    )
}