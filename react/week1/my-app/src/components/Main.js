import TodoList from './TodoList'
function Main(props) {
    return (
        <div>
            <TodoList list={props.todo} />
        </div>

    )
}

export default Main