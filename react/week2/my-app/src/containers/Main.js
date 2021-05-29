import { useState, useRef } from "react";
import tasks from '../database/Tasks';
import Item from '../components/item/Item'


function Main() {

    const [currentTasks, updateTasks] = useState(tasks);
    const Input = useRef(null)

    const deleteTask = (id) => {
        let filteredTasks = currentTasks.filter(task => task.id !== id)
        updateTasks(filteredTasks)

    }

    const addTask = () => {
        let text = Input.current.value;
        let newTasks = []
        text = text.trim()
        if (text.length > 0) {
            for (let index = 1; index <= currentTasks.length; index++) {
                currentTasks[index - 1].id = index;
                newTasks.push(currentTasks[index - 1])
            }

            newTasks.push({
                id: currentTasks.length + 1,
                task: text
            })

            updateTasks(newTasks)
            Input.current.value = "";
        }
    }


    return (
        <div>
            <div className="todo">
                <button onClick={addTask.bind(this)}> add new task </button>
                <input ref={Input} />
            </div>
            <ul>
                {currentTasks.map(task => <Item key={task.id} item={task} onDeleteTask={deleteTask.bind(this)} />)}
            </ul>
        </div>
    )
}

export default Main;