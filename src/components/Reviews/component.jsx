import classNames from "classnames";
import { Review } from "../Review/component";
import styles from "./styles.module.css"

export const Reviews = ({ reviews, className }) => {

    return (
        <ul className={classNames(styles.root, className)}>
            {reviews.map((review) => (
                <li key={review.id}>
                    <Review review={review}
                    className={styles.review}
                />
                </li>
            ))}
        </ul>
    )
}