const { useState } = require("react");

const useCounter = function () {

  const [count, setCount] = useState(0);

  const increment = function () {
    setCount(count + 1);
  };

  const decrement = function () {
    setCount(count - 1);
  };

  const clear = function () {
    setCount(0);
  };


  return [ count, increment, decrement, clear ];
};

export default useCounter;