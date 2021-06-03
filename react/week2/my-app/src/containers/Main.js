import { useState, useRef } from "react";
import tasks from "../database/Tasks";
import Item from "../components/item/Item";
import "./Main.css";

function Main() {
  const [currentTasks, updateTasks] = useState(tasks);
  const Input = useRef(null);

  const deleteTask = (id) => {
    let filteredTasks = currentTasks.filter((task) => task.id !== id);
    updateTasks(filteredTasks);
  };

  const addTask = () => {
    let text = Input.current.value;
    let newTasks = [];
    text = text.trim();
    if (text.length > 0) {
      for (let index = 1; index <= currentTasks.length; index++) {
        currentTasks[index - 1].id = index;
        newTasks.push(currentTasks[index - 1]);
      }

      newTasks.push({
        id: currentTasks.length + 1,
        task: text,
        deadLine: new Date().toDateString(),
      });

      updateTasks(newTasks);
      Input.current.value = "";
    }
  };
  if (currentTasks == 0) {
    return (
      <div>
        <p className="noTask">no tasks left </p>
        <button onClick={addTask.bind()}> add new task </button>
        <input ref={Input} />
      </div>
    );
  }

  return (
    <div>
      <div className="todo">
        <button onClick={addTask.bind()}> add new task </button>
        <input ref={Input} />
      </div>
      <ul>
        {currentTasks.map((task) => (
          <Item key={task.id} item={task} onDeleteTask={deleteTask.bind()} />
        ))}
      </ul>
    </div>
  );
}

export default Main;
