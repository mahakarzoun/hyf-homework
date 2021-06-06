import { useState } from "react";

import './item.css';

function Item(props) {

    const toggle = (event) => {
         checkedState(!checked);
    }

    const deleteMe = () => {
        // dispatch event  .
        props.onDeleteTask(props.item.id);
    }

    const [checked, checkedState] = useState(false);

    return (
        <li className="taskLine">
            <span  className={checked ? 'checked' : ''}> {props.item.task},{props.item.deadLine}</span>
            <span> <input type="checkbox" onClick={toggle} /> </span>
            <button onClick={deleteMe.bind()} >Delete</button>

        </li>
    )
}






export default Item;