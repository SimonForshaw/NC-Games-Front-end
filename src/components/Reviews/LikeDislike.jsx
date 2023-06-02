import * as api from "../../../Api";
import { useState } from "react";
import { Button } from "@mui/material";

const UpdownVote = ({ votes, review_id }) => {
  const [updateVote, setUpdateVote] = useState(0);
  const [error, setError] = useState("");

  const upVote = (votes) => {
    setError("");
    api
      .changeVote(review_id, votes)
      .then((res) => {
        res ? setUpdateVote((currChange) => currChange + votes) : "";
      })
      .catch((err) => {
        setError(err);
      });
  };

  const downVote = (votes) => {
    setError("");
    api
      .changeVote(review_id, -votes)
      .then((res) => {
        res ? setUpdateVote((currChange) => currChange - votes) : "";
      })
      .catch((err) => {
        setError(err);
      });
  };
  return (
    <section>
      <h2>{votes + updateVote}votes</h2>
      <Button
        variant="contained"
        disabled={updateVote === 1}
        onClick={() => upVote(1)}
      >
        Upvote!
      </Button>
      <Button
        variant="contained"
        disabled={updateVote === -1}
        onClick={() => downVote(1)}
      >
        Downvote!
      </Button>
      {error && <p className="error">{error.message}</p>}
    </section>
  );
};
export default UpdownVote;
