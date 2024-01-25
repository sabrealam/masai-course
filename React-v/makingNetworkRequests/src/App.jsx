import { useEffect, useState } from "react";
import DataDisplay from "./components/DataDisplay";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  let handleAPI = async () => {
    setIsLoading(true);

    try {
      let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      let data = await response.json();
      setData(data);
      data !== undefined ? setIsLoading(false) : "";
    } catch (error) {
      setError(error); 
      console.log(error);
    }
  };
 
  return (
    <div>
      <button onClick={handleAPI}>Click To Make An API Requests</button>
      <h1>Data Display </h1>
      {isLoading ? <h2>Loading...</h2> : " "}
      <DataDisplay data={data} isLoading={isLoading} />
    </div>
  );
}

export default App;
