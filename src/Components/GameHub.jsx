import { initialFishes } from "../constants";
import { FinalScore } from "./FinalScore";
import { GameBoard } from "./GameBoard";
import { useResponses } from "./ResponseProvider";
import { ScoreBoard } from "./ScoreBoard";

export function GameHub() {
  const { responses } = useResponses();
  const isQuizFinished = responses.length === initialFishes.length;
  return (
    <>
      {!isQuizFinished && (
        <>
          <ScoreBoard />
          <GameBoard />
        </>
      )}
      {isQuizFinished && <FinalScore />}
    </>
  );
}
