import "./app.css";
import Main from "./containers/main/main";
import Header from "./containers/header/header";
import Counter from "./components/counter/counter";

import { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
    )
      .then((res) => res.json())
      .then((data) => {
        updateTasks(data);
        setLoading(false);
      });
  }, []);

  const [currentTasks, updateTasks] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const deleteTask = (id) => {
    let filteredTasks = currentTasks.filter((task) => task.id !== id);
    updateTasks(filteredTasks);
  };

  const updateTask = (id, description) => {
    let updatedTasks = currentTasks.find((task) => task.id === id);
    updatedTasks.description = description;
    updateTasks(currentTasks);
  };

  const addTask = (task) => {
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
      {isLoading ? (
        // <div class="spinner-border text-muted"></div>
        <p>is loading ...</p>
      ) : (
        <div>
          <Header onSubmit={addTask} />
          <Main
            props={{ currentTasks: currentTasks }}
            onDeleteTask={deleteTask}
            onUpdateTask={updateTask}
          />
          <Counter />
        </div>
      )}
    </div>
  );
}

export default App;
