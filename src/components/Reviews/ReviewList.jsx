import ReviewCard from "./ReviewCard";
import * as api from "../../../Api";
import { useEffect } from "react";

const ReviewsList = ({ reviews, setReviews }) => {
  useEffect(() => {
    api.fetchReviewsList().then((data) => {
      setReviews(data.reviews);
    });
  }, []);

  return (
    <ul className="reviews-list">
      {reviews.map((review) => {
        const {
          title,
          designer,
          owner,
          review_img_url,
          category,
          created_at,
          votes,
          comment_count,
        } = review;

        return (
          <ReviewCard
            key={review.review_id}
            title={title}
            designer={designer}
            owner={owner}
            reviewImg={review_img_url}
            category={category}
            createdAt={created_at}
            votes={votes}
            commentCount={comment_count}
          />
        );
      })}
    </ul>
  );
};

export default ReviewsList;
