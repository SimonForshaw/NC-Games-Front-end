import { Link } from "react-router-dom";

const ReviewCard = ({
  id,
  title,
  designer,
  owner,
  reviewImg,
  category,
  createdAt,
  votes,
  commentCount,
}) => {
  return (
    <Link className="review-card" to={`/reviews/${id}`}>
      <img
        src={reviewImg}
        alt={`display picture for ${title}`}
        className="review-card-img"
      />
      <div className="row">
        <h2>{title}</h2>
        <p>Designer: {designer}</p>
        <p>owner: {owner}</p>
        <p>Category: {category}</p>
        <p>Created at: {createdAt}</p>
        <p>Votes: {votes}</p>
        <p>Comment count {commentCount}</p>
      </div>
    </Link>
  );
};
export default ReviewCard;
