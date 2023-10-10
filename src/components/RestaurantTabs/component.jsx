import classNames from "classnames";
import { Tab } from "../Tab/component";
import styles from "./styles.module.css"

export const RestaurantTabs = ({ restaurants, onTabSelect , activeTab }) => {

    return (
        <div className={styles.root}>
            {restaurants.map((restaurant, index) => (
                <Tab
                    className={classNames(styles.tab, {
                        [styles.active]: activeTab === index,
                    })}
                    key={restaurant.id}
                    onClick={() => {
                        onTabSelect(index);
                    }}
                >
                    {restaurant.name}
                </Tab>
            ))}
        </div>
    ) 
}