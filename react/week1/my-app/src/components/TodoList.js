import { TodoItem } from './TodoItem'
export function TodoList(props) {
    return (
        <ul>
            {props.tasks.map(item => {
                return <TodoItem key={item.id} task={item.task} deadLine={item.deadLine} />
            })
            }
        </ul>
    )
}



export default TodoList;