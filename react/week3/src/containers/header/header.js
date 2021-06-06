import "./header.css";
import { useState } from "react";
import Button from "../../components/button/button";
import Form from "../../components/form/form";

const buttons = [{ name: "ADD TASK", value: "toggle" }];

function Header({ onSubmit }) {
  const onSubmitTask = (task) => {
    debugger;
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

  const buttonsTemplate = buttons.map((button) => (
    <Button key={button.value} onClick={handleClicks} props={button} />
  ));

  return (
    <div className="Header">
      <div>
        <h1>my to-do list</h1>
        {buttonsTemplate}
      </div>
      <Form props={{ hide: isHidden }} submitForm={onSubmitTask} />
    </div>
  );
}

export default Header;
