import * as api from "../../../Api";
import { useState } from "react";
import { Button } from "@mui/material";

const UpdownVote = ({ votes, review_id }) => {
  const [updateVote, setUpdateVote] = useState(0);

  const upVote = (votes) => {
    setUpdateVote((currChange) => currChange + votes);

    api.changeVote(review_id, votes);
  };

  const downVote = (votes) => {
    setUpdateVote((currChange) => currChange - votes);

    api.changeVote(review_id, -votes);
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
    </section>
  );
};
export default UpdownVote;
