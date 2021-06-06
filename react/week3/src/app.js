import "./app.css";
import Main from "./containers/main/main";
import Header from "./containers/header/header";
import tasks from "./database/Tasks";
import Counter from "./components/counter/counter";

import { useState } from "react";

function App() {
  const [currentTasks, updateTasks] = useState(tasks);

  const deleteTask = (id) => {
    let filteredTasks = currentTasks.filter((task) => task.id !== id);
    updateTasks(filteredTasks);
  };

  const addTask = (task) => {
    debugger;
    let newTasks = [];
    if (task.text.length > 0) {
      for (let index = 1; index <= currentTasks.length; index++) {
        currentTasks[index - 1].id = index;
        newTasks.push(currentTasks[index - 1]);
      }

      newTasks.push({
        id: currentTasks.length + 1,
        task: task.text,
        deadLine: task.deadline,
      });
    }

    updateTasks(newTasks);
  };

  return (
    <div className="container">
      <Header onSubmit={addTask} />
      <Main props={{ currentTasks: currentTasks }} onDeleteTask={deleteTask} />
      <Counter />
    </div>
  );
}

export default App;
