import Item from "../../components/item/Item";
import "./main.css";

function Main({ props, onDeleteTask, onUpdateTask }) {
  const emptyMsg = "THERE IS NO TASK";

  const deleteTask = (id) => {
    onDeleteTask(id);
  };

  const updateTask = (id, description) => {
    onUpdateTask(id, description);
  };

  let items = props.currentTasks.map((task) => {
    return (
      <Item
        key={task.id}
        item={task}
        onDeleteTask={deleteTask}
        onUpdateTask={updateTask}
      />
    );
  });

  return (
    <div className="Main">
      {items.length === 0 ? <p>{emptyMsg}</p> : <ul>{items}</ul>}
    </div>
  );
}

export default Main;
