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

export {
  fetchReviewsList,
};