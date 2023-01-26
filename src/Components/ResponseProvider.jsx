import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { initialFishes } from "../constants";

const ResponseContext = createContext();

function sumScore(responses, shouldAddCallback) {
  return responses.reduce(
    (accum, response) => (shouldAddCallback(response) ? accum + 1 : accum),
    0
  );
}

export function useResponses() {
  const { responses, submitResponse } = useContext(ResponseContext);
  return {
    responses: responses,
    submitResponse: submitResponse,
  };
}

export function getCurrentFish() {
  const { responses } = useContext(ResponseContext);
  return initialFishes[responses.length];
}

export function getScore() {
  const { responses } = useContext(ResponseContext);
  return {
    correctCount: sumScore(responses, (response) => response.isCorrect),
    incorrectCount: sumScore(responses, (response) => !response.isCorrect),
  };
}

export function ResponseProvider({ children }) {
  const [responses, setResponses] = useState([]);
  const currentFishName =
    responses.length < initialFishes.length &&
    initialFishes[responses.length].name;

  function submitResponse(inputString) {
    setResponses((prevState) => [
      ...prevState,
      {
        input: inputString,
        isCorrect: inputString === currentFishName,
      },
    ]);
  }

  return (
    <ResponseContext.Provider value={{ responses, submitResponse }}>
      {children}
    </ResponseContext.Provider>
  );
}
