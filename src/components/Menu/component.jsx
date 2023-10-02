import { Dish } from "../Dish/component"

export const Menu = ({ dishes }) => {

    return  (
        <ul>
            {dishes.map((dish) => (
                <li key={dish.id}>
                    <Dish dish={dish} />
                </li>
            ))}
        </ul>
    )
}