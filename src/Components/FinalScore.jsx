import React from "react";
import { initialFishes } from "../constants";
import { getScore } from "./ResponseProvider";

// ! Do Not Add Props Here
export const FinalScore = () => {
  const { correctCount } = getScore();
  return (
    <div id="final-score">
      <h1>Your Final Score Was</h1>
      <div id="score">
        <p>{correctCount}</p>
        <hr />
        <p>{initialFishes.length}</p>
      </div>
    </div>
  );
};
