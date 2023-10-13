import classNames from "classnames";
import { Tab } from "../Tab/component";
import styles from "./styles.module.css";

export const RestaurantTabs = ({ restaurants, onTabSelect, activeTab }) => {
  return (
    <div className={styles.root}>
      {restaurants.map((restaurant, index) => (
        <Tab
          key={restaurant.id}
          className={classNames(styles.tab)}
          onClick={() => {
            onTabSelect(index);
          }}
          isActive={activeTab === index}
        >
          {restaurant.name}
        </Tab>
      ))}
    </div>
  );
};
