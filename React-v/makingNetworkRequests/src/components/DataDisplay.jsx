import React from "react";
import "./style.css";
export default function DataDisplay({ data, isLoading }) {
  console.log(data);
  return (
    <div>
      <div scrolling = "no"  className="main">
        {data.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
