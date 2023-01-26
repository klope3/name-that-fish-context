import React from "react";
import "./App.css";
import { GameBoard } from "./Components/GameBoard";
import { GameHub } from "./Components/GameHub";
import { ResponseProvider } from "./Components/ResponseProvider";
import { ScoreBoard } from "./Components/ScoreBoard";
import "./Components/styles/final-score.css";

function App() {
  return (
    <div className="App">
      <header>
        <ResponseProvider>
          {/* Made Hub component for conditional rendering that depends on context. App component doesn't have access to context. Better way? */}
          <GameHub />
        </ResponseProvider>
      </header>
    </div>
  );
}

export default App;
