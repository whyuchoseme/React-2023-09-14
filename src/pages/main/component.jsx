import { useState } from "react"
import { Footer } from "../../components/Footer/component.jsx"
import { Header } from "../../components/Header/component.jsx"
import { Restaurant } from "../../components/Restaurant/component.jsx"
import { RestaurantTabs } from "../../components/RestaurantTabs/component.jsx"
import { ReviewForm } from "../../components/ReviewForm/component.jsx"
import { restaurants } from "../../constants/mock"
import styles from "./styles.module.css"

export const MainPage = () => {
   const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

   return (
      <div className={styles.wrapper}>
         <Header className={styles.header}/>
         <div className={styles.content}>
            <RestaurantTabs
               activeTab = {activeRestaurantIndex}
               restaurants = {restaurants}
               onTabSelect = {setActiveRestaurantIndex} 
            /> 
            <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
            <ReviewForm className={styles.reviewForm} />
         </div>
         <Footer className={styles.footer}/>
      </div>
   )
}