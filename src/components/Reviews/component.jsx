import { restaurants } from "../../constants/mock"

export const ReviewsNameText = ({ index }) => {
    
    return (
            restaurants[index].reviews.map((item) => (
                <li>{item.user}: {item.text}</li>
            ))
    )
}