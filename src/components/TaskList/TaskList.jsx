import React from "react";
import './TaskList.css'
import {
  TaskItem
}from '../';

const TaskList = ({tasks,deleteTask}) =>(
    <div className="TaskList">
        <ul>
          {tasks.map((task) => (
            <TaskItem task={task} deleteTask={deleteTask} /> 
          ))}
        </ul>
    </div>
)

export default TaskList