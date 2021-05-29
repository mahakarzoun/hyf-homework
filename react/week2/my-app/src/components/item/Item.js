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
        <li >
            <span className={checked ? 'checked' : ''}> {props.item.task}</span>
            <span> <input type="checkbox" onClick={toggle.bind(this, !checked)} /> </span>
            <button onClick={deleteMe.bind(this)} >Delete</button>

        </li>
    )
}






export default Item;