import * as api from "../../../Api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";

const SingleReview = () => {
  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  let { review_id } = useParams();
  useEffect(() => {
    api.fetchReviewById(review_id).then((data) => {
      setReview(data.review);
      setIsLoading(false);
      console.log(data.review);
    });
  }, []);

  const date = dayjs(review.created_at).format("DD-MM-YYYY");

  if (isLoading) {
    return <p>Loading...</p>;
  } else
    return (
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
        <p>
          <p>{review.review_body}</p>
        </p>

        <section>{review.body}</section>
      </ul>
    );
};

export default SingleReview;
