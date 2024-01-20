import React, { useEffect } from "react";

// Your task is to explain why count value is not updated to 3 as expected
function App() {
  const [count, setCount] = React.useState(0);
  useEffect(() => {
    console.log(count);
  });
  const handleClick = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    console.log(count);
  };

  return (
    <div>
      <p>Button is clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
      <p>
        <u>Explaination :-</u>
        in React useState hook The setCount function is asynchronous. <br />
        when we call the setCount function 3 times the react does not apply
        update instead of this <br />
        it schedules the update for the next rendering. when you log count
        immediately after the three setCount calls, you're logging the current
        value of count before any of the updates have been applied
      </p>
      <h5>
        <u>Solution - 1 :-</u>
      </h5>
      <p>
        {" "}
        We can use a callback function inside the setCount function to update
        the value of count this callback function update the value of count
        immediately{" "}
      </p>
      <h5>
        <u>Solution - 2 :-</u>
      </h5>
      <p>
        We can use useEffect hook by which it update the value after the
        rerender is completed{" "}
      </p>
    </div>
  );
}

export default App;
