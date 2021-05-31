import "./App.css";
import TodoList from './components/TodoList'

//'Wed Sep 13 2017' 

const tasks = [
  {
    id: 1,
    task: 'Get out of bed',
    deadLine: newDate(2017,9,13)
  },
  {
    id: 2,
    task: ' Brush teeth',
    deadLine:newDate(2017,9,14)

  },
  {
    id: 3,
    task: 'Eat breakfast',
    deadLine: newDate(2017,9,15)

  }
]
function App() {
  return (
    <div className="container">
      <h1 className="header">My to-do  </h1>
      <TodoList tasks={tasks} />
    </div>
  )
}

export default App;