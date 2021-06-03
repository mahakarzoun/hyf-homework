import { useState } from "react";

import './item.css';

function Item(props) {

    const toggle = (newState) => {
        // do what ever you want .
        checkedState(newState);
    }

    const deleteMe = () => {
        // dispatch event  .
        props.onDeleteTask(props.item.id);
    }

    const [checked, checkedState] = useState(false);

    return (
        <li className="taskLine">
            <span  className={checked ? 'checked' : ''}> {props.item.task},{props.item.deadLine}</span>
            <span> <input type="checkbox" onClick={toggle.bind( !checked)} /> </span>
            <button onClick={deleteMe.bind()} >Delete</button>

        </li>
    )
}






export default Item;