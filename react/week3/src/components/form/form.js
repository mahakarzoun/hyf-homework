import "./form.css";
import { useRef } from "react";



function Form({ props , submitForm }) {

    const task = useRef(null);
    const date = useRef(null);


    const submit = (form) => {
        form.preventDefault()
        debugger
        const newTask = {
            text: task.current.value,
            deadline: date.current.value
        }
        submitForm(newTask);
        task.current.value="";
        date.current.value="";
    }

    return (
        <form className={props.hide ? 'hide' : 'show'} onSubmit={submit}>
            <div className="form-group" >
                <label>Task description</label>
                <input ref={task} type="text"></input>
            </div>
            <div className="form-group" >
                <label>Deadline</label>
                <input ref={date} type="date"></input>
            </div>


            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;