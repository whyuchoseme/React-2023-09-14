import classNames from "classnames";
import { Tab } from "../Tab/component";
import styles from "./styles.module.css"

export const RestaurantTabs = ({ restaurants, onTabSelect}) => {

    return (
        <div className={styles.root}>
            {restaurants.map((restaurant, index) => (
                <Tab
                    className={classNames(styles.tab)}
                    key={restaurant.id}
                    title={restaurant.name}
                    onClick={() => {
                        onTabSelect(index);
                    }}
                />
            ))}
        </div>
    ) 
}