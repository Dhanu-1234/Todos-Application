import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css';

const TaskInput = props => {
    const {onAddTodo} = props
    const [value, setValue] = useState('');
    const [displayError, updateErrorStatus] = useState(false)

    const onInputChange = event => {
        setValue(event.target.value);
    }

    const onCreateTodo = event => {
        event.preventDefault();
        if(value === ''){
            updateErrorStatus(true)
        }else {
            updateErrorStatus(false)
            const todoItem = {
                'id': uuidv4(),
                'text': value,
                'status': false
            };
            onAddTodo(todoItem);
            setValue('');
        }
    }

    return (
        <form className='input-form' onSubmit={onCreateTodo}>
            <h1 className='form-heading'>Create <span className='span-text'>Task</span></h1>
            <input placeholder='What needs to be done?' className='input-styles' value={value} onChange={onInputChange} />
            {displayError && <p className='error-msg'>*Required</p>}
            <button type='submit' className='add-btn'>Add</button>
        </form>
    )
}

export default TaskInput
