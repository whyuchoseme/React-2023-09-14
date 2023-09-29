import { useState } from "react"
import { RestaurantInfo } from "../../components/CurrentRestaurant/component.jsx"
import { Tabs } from "../../components/Tabs/component.jsx"
import { restaurants } from "../../constants/mock"

export const MainPage = () => {
   if (!restaurants?.length) {
      return null;
   }

   const [current, setCurrent] = useState(0);

   return (
      <div>
        {restaurants.map((item) => {
         
            return (
               <font size="3">
                  {<Tabs name={item.name} onClick={() => setCurrent(restaurants.indexOf(item))} />}
               </font>
            )
        })}

        <RestaurantInfo index={current}/>
      </div>
   )
}