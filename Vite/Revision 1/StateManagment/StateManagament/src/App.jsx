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
       
      <App1/>
    </div>
  );
}

export default App;
