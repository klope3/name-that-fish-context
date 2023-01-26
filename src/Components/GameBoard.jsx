import "./styles/game-board.css";
import React from "react";
import { useState } from "react";
import { getCurrentFish, useResponses } from "./ResponseProvider";

// ! Do not add props to gameboard
export const GameBoard = () => {
  const [input, setInput] = useState("");
  const { submitResponse } = useResponses();
  const currentFish = getCurrentFish();

  function changeInput(event) {
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    submitResponse(input);
    setInput("");
  }

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={currentFish.url} alt={currentFish.name} />
      </div>
      <form id="fish-guess-form" onSubmit={handleSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={input}
          onChange={changeInput}
        />
        <input type="submit" />
      </form>
    </div>
  );
};
