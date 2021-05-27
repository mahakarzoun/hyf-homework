import TodoList from './userItemExpanded'

function Main(props) {
    return (
        <div>
            <TodoList list={props.todo} />
        </div>

    )
}

export default Main