import React from "react";
import StarRating from "./StarRating";

export default function GymMember({ gymMember }) {
  return (
    <div className="card">
      <StarRating />
      <p>Name: {gymMember.name}</p>
      <p>Focus: {gymMember.focus}</p>
    </div>
  );
}
