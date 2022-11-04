import React from "react";

function ListItem(props) {
  //props.deleteTask()
  return (
    <li className="list-item">
      <h4>{`To Do: ${props.task}`}</h4>
      <button onClick={() => props.deleteTask(props.id)}>Complete</button>
    </li>
  );
}

export default ListItem;
