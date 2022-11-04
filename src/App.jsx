import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

import "./index.css";

function App() {
  const [tasks, setTasks] = useState([
    { task: "Feed Cat", id: 1 },
    { task: "Clean house", id: 2 },
  ]);
  function deleteTask(id) {
    console.log(`I will delete task ${id}`);
    // in short we want to return all the items with a different id than the one passed to the func
    setTasks((oldTasks) => oldTasks.filter((task) => task.id !== id));
  }
  function addTask(task) {
    console.log(`I will add the task: ${task}`);
    const newTask = {
      id: Date.now(),
      task: task,
    };
    setTasks((oldTasks) => oldTasks.concat(newTask));
  }

  return (
    <>
      <main>
        <section className="form">
          <Form addTask={addTask} />
        </section>
        <section className="list">
          <List deleteTask={deleteTask} tasks={tasks} />
        </section>
      </main>
    </>
  );
}

export default App;
