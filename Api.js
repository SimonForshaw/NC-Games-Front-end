import axios from "axios";

const gamesApi = axios.create({
  baseURL: `https://sf-nc-games.onrender.com/api`,
});

function fetchReviewsList() {
  return gamesApi
    .get(`/Reviews`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

function fetchReviewById(review_id) {
  return gamesApi
    .get(`/Reviews/${review_id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

function fetchCommentsById(review_id) {
  return gamesApi
    .get(`/Reviews/${review_id}/comments`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

function changeVote(review_id, vote) {
  return gamesApi
    .patch(`/Reviews/${review_id}`, { inc_votes: vote })
    .then((res) => {
      return res.data;
    });
}

export { fetchReviewsList, fetchReviewById, fetchCommentsById, changeVote };
