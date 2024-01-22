import React, { useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";


 

function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task: "", // string
    completed: false, // boolean
    taskAssignedTo: "", // string
  });

  
  function handleChange(event) {
    let value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    // Implement logic to handle form changes
    setFormState({
      ...formState,
      [event.target.name]: value
    })
     
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Implement logic to handle form submission
    setTasks([...tasks, formState]);
    setFormState({
      task: "", // string
      completed: false, // boolean
      taskAssignedTo: "", // string
    })
  }
 
 
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input name="task" type="text" onChange={handleChange} placeholder="Add Task" />
          <label>
            Completed:
            <input name="completed" type="checkbox" onChange={handleChange} />
          </label>
          <select name="taskAssignedTo" onChange={handleChange} >
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <hr />
      {tasks.map((item, index) => (
        <TaskItem key={index} item={item} completed = {item.completed} >  
        <button onClick={() => setTasks(tasks.filter((e, i) => i !== index))} >Delete</button>
        <button onClick={()=> setTasks([...tasks.slice(0, index), {...item, completed: !item.completed}])}  >UpdateTask</button>
        </TaskItem>
      ))}
    </>
  );
}

export default App;
