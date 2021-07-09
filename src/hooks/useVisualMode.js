import { useState } from "react";

const useVisualMode = function (initial) {
  const [history, setHistory] = useState([initial]);
  // const [mode, setMode] = useState(initial);

  const transition = function (newMode) {
    setHistory([...history, newMode]);
  };

  const back = function () {

    setHistory(prev => {

      // I think pop still looks better!
      const newHistory = [...prev];
      newHistory.pop();

      // This is like a pop
      return [...prev.slice(0, prev.length - 1)];
    });

  };

  // const mode = history[history.length - 1];
  const mode = history.slice(-1)[0];
  return { mode, transition, back };
};

export default useVisualMode;

Initial;
Mode1;
Mode2;