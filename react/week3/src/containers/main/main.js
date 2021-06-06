import Item from "../../components/item/Item";
import "./main.css";

function Main({ props, onDeleteTask }) {
  const EMPTY_MSG = "THERE IS NO TASK";

  const deleteTask = (id) => {
    debugger;
    onDeleteTask(id);
  };

  let items = props.currentTasks.map((task) => {
    return <Item key={task.id} item={task} onDeleteTask={deleteTask} />;
  });

  return (
    <div className="Main">
      {items.length === 0 ? <p>{EMPTY_MSG}</p> : <ul>{items}</ul>}
    </div>
  );
}

export default Main;
