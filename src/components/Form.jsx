import React from "react";

function Form(props) {
  function submit(evt) {
    evt.preventDefault();
    props.addTask(evt.target.elements.task.value);
  }
  return (
    <form onSubmit={submit}>
      <label>Add task</label>
      <input type="text" name="task" />
      <button>Add</button>
    </form>
  );
}

export default Form;
