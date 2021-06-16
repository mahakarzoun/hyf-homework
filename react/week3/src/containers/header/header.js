import "./header.css";
import { useState } from "react";
import Button from "../../components/button/button";
import Form from "../../components/form/form";

function Header({ onSubmit }) {
  const onSubmitTask = (task) => {
    onSubmit(task);
    toggleForm(true);
  };

  const handleClicks = (event) => {
    switch (event) {
      case "toggle":
        toggleForm(!isHidden);
        break;
      default:
        toggleForm(!isHidden);
    }
  };

  const [isHidden, toggleForm] = useState(true);

  return (
    <div className="Header">
      <h1>my to-do list</h1>
      <Button
        key={"toggle"}
        onClick={handleClicks}
        props={{ name: "add", value: "toggle" }}
      />
      <Form props={{ hide: isHidden }} submitForm={onSubmitTask} />
    </div>
  );
}

export default Header;
