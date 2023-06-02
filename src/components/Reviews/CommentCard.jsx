import * as api from "../../../Api";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CommentCard = () => {
  const [comments, setComments] = useState([]);
  const { review_id } = useParams();
  useEffect(() => {
    api.fetchCommentsById(review_id).then((data) => {
      setComments(data.comment);
    });
  }, []);
  return (
    <div>
      {comments.map((comment, index) => {
        const date = dayjs(comment.created_at).format("DD-MM-YYYY HH:mm:ss");
        return (
          <ul className="comment-card" key={index}>
            <div className="row">
              <h2>Username: {comment.author}</h2>
              <p>{comment.body}</p>
              <h3>Posted on: {date}</h3>
            </div>
          </ul>
        );
      })}
    </div>
  );
};
export default CommentCard;
