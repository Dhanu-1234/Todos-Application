import { FaRegEdit } from "react-icons/fa"
import { RiDeleteBin6Line } from "react-icons/ri"
import { IoMdClose } from "react-icons/io"
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './index.css'
import { useState } from "react"

const TaskItem = props => {
    const {todo, onUpdateStatus, onEditTodo, onRemoveTodo} = props
    const {id, text, status} = todo
    const [newText, setNewText] = useState('');

    const onChangeStatus = () => {
        onUpdateStatus(id)
    }

    const onNewtextChange = event => {
        setNewText(event.target.value)
    }

    const onUpdateText = () => {
        if(newText !== ''){
            onEditTodo(id, newText)
            setNewText('')
        }
    }

    const onDelete = () => {
        onRemoveTodo(id)
    }

    const ReactPopup = () => (
        <div className="popup-container">
            <Popup
                modal
                trigger={
                <button type="button" className="btn-icon trigger-button">
                    <FaRegEdit/>
                </button>
                }
            >
                {close => (
                <>
                    <div className="popup-content-container">
                        <button type="button" className="popup-close-btn trigger-button" onClick={() => close()}>
                            <IoMdClose/>
                        </button>
                        <h2 className="popup-heading">Update Todo</h2>
                        <input placeholder="What needs to be done?" className="popup-input-styles" value={newText} onChange={onNewtextChange} />
                        <button type="button" className="update-btn" onClick={() =>{
                            onUpdateText()
                            close()
                        }}>Update</button>
                    </div>
                </>
                )}
            </Popup>
        </div>
    )

    return (
        <li className='task-item'>
            <input type='checkbox' className='task-status-input' onChange={onChangeStatus} checked={status} />
            <div className="layer-1">
                <div className='task-content-container layer-2'>
                    <p className={`${status === true ? 'task-completed':'task-text'}`}>{text}</p>
                    <div className='task-controls-container'>
                        {ReactPopup()}
                        <button type="button" className='btn-icon' onClick={onDelete}><RiDeleteBin6Line/></button>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default TaskItem

//<button className='btn-icon'><FaRegEdit/></button>
