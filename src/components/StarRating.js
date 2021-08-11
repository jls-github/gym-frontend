import React, { useState } from "react";

export default function StarRating() {
  const [starRating, setStarRating] = useState(0);

  function handleClickStar(num) {
    setStarRating(num);
  }
  return (
    <div>
      <span onClick={() => handleClickStar(1)}>
        {starRating >= 1 ? "★" : "☆"}
      </span>
      <span onClick={() => handleClickStar(2)}>
        {starRating >= 2 ? "★" : "☆"}
      </span>
      <span onClick={() => handleClickStar(3)}>
        {starRating >= 3 ? "★" : "☆"}
      </span>
      <span onClick={() => handleClickStar(4)}>
        {starRating >= 4 ? "★" : "☆"}
      </span>
      <span onClick={() => handleClickStar(5)}>
        {starRating >= 5 ? "★" : "☆"}
      </span>
    </div>
  );
}
