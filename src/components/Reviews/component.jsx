import classNames from "classnames";
import { Review } from "../Review/component";
import styles from "./styles.module.css";

export const Reviews = ({ reviews, className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3 className={styles.restaurantReviews}>Reviews:</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <Review review={review} className={styles.review} />
          </li>
        ))}
      </ul>
    </div>
  );
};
