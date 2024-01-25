import { useState } from "react";
import "./App.css";
import PostItem from "./components/PostItem";
import { useEffect } from "react";
function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  async function MakeAPICall() {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
    let data = await response.json(); 
    setData(data);
  }
  useEffect(() => {
    MakeAPICall(); // Call The Funtion After Completing Mounting Phase
  }, [page]);
  
  let handleInc = ()=>{
    page <= 9 ? setPage(page+1)  :  setPage(1) 
    console.log(page);
   MakeAPICall();
  }
  let handleDec = ()=>{
    page <=  1 ? setPage(10)  :  setPage(page - 1) 
    console.log(page);
   MakeAPICall();
  }

let stl = {
  color : " "

}



  return (
    <div className="main">
      <div
        style={{
          background: "crimson",
          textAlign: "center",
          width: "100%",
          height: "80px",
          display: "grid",
          placeItems: "center",
          position: "sticky",
          top: "0px",
        }}
      >
        <h1>Automatic Data Fetch on Component Mount:</h1>
      </div>
      <PostItem data={data} />
      <div id="pagination">
        <p onClick={handleDec}  style={stl}    >Prev</p>
        <p>{page}</p>
        <p onClick={handleInc} >Next</p>
      </div>
    </div>
  );
}

export default App;
