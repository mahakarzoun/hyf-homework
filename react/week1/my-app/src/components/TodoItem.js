export function TodoItem(props) {
    return (
        <li className="task">
            <h3>
                {props.task}
            </h3>
            <h4>
                {props.deadLine}
            </h4>
        </li>
    )

}

export default TodoItem;