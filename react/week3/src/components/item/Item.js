import { useRef, useState } from "react";

import "./item.css";

function Item({ onDeleteTask, onUpdateTask, item }) {
  const edit = useRef();

  const toggle = (event) => {
    checkedState(!checked);
  };

  const deleteMe = () => {
    onDeleteTask(item.id);
  };
  const update = () => {
    changeMode("edit");
  };
  const save = () => {
    changeMode("read");
    onUpdateTask(item.id, edit.current.value);
  };

  const [checked, checkedState] = useState(false);
  const [mode, changeMode] = useState("read");

  return (
    <li className="taskLine">
      {mode === "read" ? (
        <div>
          <span className={checked ? "checked" : ""}>
            {item.description},{item.deadline}
          </span>
          <span>
            {" "}
            <input type="checkbox" onClick={toggle} />{" "}
          </span>
        </div>
      ) : (
        <input ref={edit} type="text" placeholder={item.description} />
      )}
      <div>
        <button
          className="fa fa-pencil-square-o"
          aria-hidden="true"
          onClick={deleteMe}
        >
          delete
        </button>
        {mode === "read" ? (
          <button className="material-icons" onClick={update}>
            edit
          </button>
        ) : (
          <button className="material-icons" onClick={save}>
            save
          </button>
        )}
      </div>
    </li>
  );
}

export default Item;
