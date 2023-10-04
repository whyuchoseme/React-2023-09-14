import { Review } from "../Review/component";
import styles from "./styles.module.css"

export const Reviews = ({ reviews }) => {

    return (
        <ul className={styles.root}>
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