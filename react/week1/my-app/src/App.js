import "./App.css";
import TodoList from './components/TodoList'


const tasks = [
  {
    id: 1,
    task: 'Get out of bed',
    deadLine: 'Wed Sep 13 2017'

  },
  {
    id: 2,
    task: ' Brush teeth',
    deadLine: ' Thu Sep 14 2017'

  },
  {
    id: 3,
    task: 'Eat breakfast',
    deadLine: 'Fri Sep 15 2017'

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