import React from "react";
import "./style.css";
export default function PostItem({ data }) {
    let style = {
        width : "100%",height : "30px", 
        display :"flex",
        justifyContent : "center",
        alignItems : "center",
        background : "lightblue",
        borderRadius : "5px"
    }
  return (
    <div className="postItem">
      {data.map((item) => {
        return (
          <div key={item.id} className="singlePost">
            <h3 style={style} > Id  : {item.id}</h3><br />
            <h3> <u>Title</u> : {item.title}</h3>  <br />
            <p>  Body :-  {item.body}</p>
             
          </div>
        );
      })}
    </div>
  );
}
