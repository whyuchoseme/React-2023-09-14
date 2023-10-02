import { useState } from "react"
import { Restaurant } from "../../components/Restaurant/component.jsx"
import { RestaurantTabs } from "../../components/RestaurantTabs/component.jsx"
import { restaurants } from "../../constants/mock"

export const MainPage = () => {
   if (!restaurants?.length) {
      return null;
   }

   const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

   return (
      <div>
        <RestaurantTabs
            restaurants = {restaurants}
            onTabSelect = {setActiveRestaurantIndex} 
         /> 
        <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
      </div>
   )
}