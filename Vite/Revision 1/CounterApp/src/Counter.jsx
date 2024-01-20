import React from 'react';
import {useState} from 'react';
import './App.css';

export default function Counter(){
    let [count,setCount] = useState(1)
    return (
        <div  className = "counter">
        <h3>Count Is :  {count}</h3>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <button onClick={()=>setCount(count-1)}>Decrease</button>
        </div>
    )
}