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
       
    </div>
  );
}

export default App;
