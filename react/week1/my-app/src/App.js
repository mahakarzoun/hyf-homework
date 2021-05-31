import "./App.css";
import TodoList from './components/TodoList'


const tasks = [
  {
    id: 1,
    task: 'Get out of bed',
    deadLine: new Date(2017,9,13).toDateString()

  },
  {
    id: 2,
    task: ' Brush teeth',
    deadLine: Date(2017,9,14).toDateString()

  },
  {
    id: 3,
    task: 'Eat breakfast',
    deadLine: Date(2017,9,15).toDateString()

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