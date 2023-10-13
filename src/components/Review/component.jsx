export const Review = ({ review, className }) => {
  return (
    <div className={className}>
      {review.user}: {review.text}
    </div>
  );
};
