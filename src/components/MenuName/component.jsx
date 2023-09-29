import { restaurants } from "../../constants/mock";
import { CountElement } from "../CountElement/component";

export const MenuName = ({ index }) => {

    return  (
        restaurants[index].menu.map((item) => (
            <li><CountElement title={item.name} /></li>
        ))
    )
}