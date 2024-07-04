import TaskItem from '../TaskItem'
import './index.css'

const TaskList = props => {
    const {todos, onUpdateStatus, onRemoveTodo, onEditTodo} = props

    const onSaveTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }
    
    return (
        <div className='task-list-container'>
            <h1 className='task-list-heading'>My <span className='span-text'>Tasks</span></h1>
            <ul className='task-list'>
                {todos.map(eachObj => <TaskItem key={eachObj.id} todo={eachObj} onUpdateStatus={onUpdateStatus}  onRemoveTodo={onRemoveTodo} onEditTodo={onEditTodo} />)}
            </ul>
            <button className='task-list-save-btn' onClick={onSaveTodos}>Save</button>
        </div>
    )
}

export default TaskList
