const ReviewCard = ({
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
    <li className="review-card">
      <img src={reviewImg} alt={`display picture for ${title}`} className="review-card-img" />
      <div className="row">
        <h2>{title}</h2>
        <p>Designer: {designer}</p>
        <p>owner: {owner}</p>
        <p>Category: {category}</p>
        <p>Created at: {createdAt}</p>
        <p>Votes: {votes}</p>
        <p>Comment count {commentCount}</p>
      </div>
    </li>
  );
};
export default ReviewCard;
