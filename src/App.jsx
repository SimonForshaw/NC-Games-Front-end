import "./App.css";
import Nav from "./components/Nav";
import WelcomePage from "./components/WelcomePage";
import ReviewList from "./components/Reviews/ReviewList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [reviews, setReviews] = useState([]);

  return (
    <BrowserRouter>
      <>
        <Nav games={reviews} />
        <Routes>
          <Route path="/" element={<WelcomePage games={reviews} />} />
          <Route
            path="/reviews"
            element={<ReviewList setReviews={setReviews} reviews={reviews} />}
          />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
