import React from "react";
import './TaskItem.css';
import { FaTrashAlt } from "react-icons/fa";

const TaskItem = ({task,deleteTask,handleChangeStatus}) =>(
    <li className="TaskItem">
        <input
            onChange={() => handleChangeStatus(task.id)} 
            checked={task.status}
            id="Task" type="checkbox"
        />
        <h2>{task.title}</h2>
        <button onClick={() =>{deleteTask(task.id)}}>
             <FaTrashAlt /> 
        </button>
    </li>
)

export default TaskItem