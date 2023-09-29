import { restaurants } from "../../constants/mock"
import { MenuName } from "../MenuName/component"
import { ReviewsNameText } from "../Reviews/component"

export const RestaurantInfo = ({ index }) => {
    return (
        <div>
            <h2>{restaurants[index].name}</h2>
            <ul>{<MenuName index={index} />}</ul>
            <ul>{<ReviewsNameText index={index} />}</ul>
        </div>
    )
}