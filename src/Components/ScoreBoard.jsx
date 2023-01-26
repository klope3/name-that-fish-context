import "./styles/score-board.css";
import React from "react";
import { getScore, useResponses } from "./ResponseProvider";
import { initialFishes } from "../constants";
//  Where the score is presented

// ! do not add props to scoreboard
export const ScoreBoard = () => {
  const { responses } = useResponses();
  const { correctCount, incorrectCount } = getScore();
  const fishesLeft = initialFishes.slice(responses.length);
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {fishesLeft.map((fish) => (
          <div key={fish.name} className="choice">
            {fish.name}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
};
