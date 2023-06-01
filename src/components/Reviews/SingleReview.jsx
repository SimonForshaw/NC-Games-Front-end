import * as api from "../../../Api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import CommentCard from "./CommentCard";
import UpdownVote from "./LikeDislike";

const SingleReview = () => {
  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { review_id } = useParams();
  useEffect(() => {
    api.fetchReviewById(review_id).then((data) => {
      setReview(data.review);
      setIsLoading(false);
    });
  }, []);

  const date = dayjs(review.created_at).format("DD-MM-YYYY");

  if (isLoading) {
    return <p>Loading...</p>;
  } else
    return (
      <section>
        <ul>
          <h1>{review.title}</h1>
          <h2>Category: {review.category}</h2>
          <img
            className="review-card-img"
            src={review.review_img_url}
            alt={`display picture for ${review.title}`}
          ></img>
          <h2>Date: {date}</h2>
          <h2>Designer: {review.designer}</h2>
          <h2>Owner: {review.owner}</h2>
          <h3>
            <u>Review</u>
          </h3>
          <p>{review.review_body}</p>
          <UpdownVote votes={review.votes} review_id={review_id} />
        </ul>
        <CommentCard />
      </section>
    );
};

export default SingleReview;
