function TaskItem(props) { 
  console.log(props.completed);
  return (
    <>
      <ol>
        <li key={props.index}>{props.item.task} {props.completed === true  ? "👍"  : "📵"}  {props.children}</li>
      
      </ol>
    </>
  );
}

export default TaskItem;
