import React, { useEffect } from "react";
// Your task is to explain why the console.log shows the older value of count
import App1 from './App1';
function App() {
  const [count, setCount] = React.useState(0);
 
  const handleClick = () => {
    setCount(count + 1);
    console.log(count); // You will see the older value of count in console
  };

  return (
    <div>
      <h4>Code 1: Delayed State Update</h4>
      <p>Button is clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
      <p>
     <u>Explaination :- </u> 
     When we call the setCount function, The React schedules an update to the components but not apply immediatly <br /> 
     that's why in console we are seeing the previous value 
      </p>
      <p>
        <u>Resolution :- </u>
        we can use useEffect hook because this hook console the current value in the conosle. <br />
        And this useEffect hook rerender after the components are rendred.
      </p>
      <hr />
      <h4>Code 2: Multiple State Updates</h4>
      <App1/>
    </div>
  );
}

export default App;
