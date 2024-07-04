import TaskInput from './coponents/TaskInput'
import TaskList from './coponents/TaskList'
import './App.css'
import { useState } from 'react';

const initialState = localStorage.getItem('todos') !== null ? JSON.parse(localStorage.getItem('todos')) : [];

const App = () => {
  const [todos, updateTodos] = useState(initialState)

  const onAddTodo = todoItem => {
    updateTodos(prevState => [...prevState, todoItem])
  }

  const onUpdateStatus = id => {
    const newList = todos.map(eachObj => {
      if(eachObj.id === id){
        return {
          ...eachObj,
          status: !eachObj.status
        }
      }
      return eachObj
    })
    updateTodos(newList)
  }

  const onRemoveTodo = id => {
    const newList = todos.filter(eachObj => eachObj.id !== id);
    updateTodos(newList);
  }

  const onEditTodo = (id,newText) => {
    const newList = todos.map(eachObj => {
      if(eachObj.id === id){
        return {
          ...eachObj,
          text: newText
        }
      }
      return eachObj
    })
    updateTodos(newList)
  }

  return (
    <div className="background-container">
        <h1 className="main-heading">Todos Application</h1>
        <TaskInput onAddTodo={onAddTodo}/>
        <TaskList todos={todos} onUpdateStatus={onUpdateStatus} onRemoveTodo={onRemoveTodo} onEditTodo={onEditTodo} />
    </div>
  )
}
export default App
