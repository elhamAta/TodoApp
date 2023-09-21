import React,{ useState , useEffect} from "react"
import{
    AddTaskForm,
    TaskList,
    FilterFooter 
  } from'../';
import './TodoApp.css';
import { v4 as uuidv4 } from 'uuid'; // create uniqe id

const TodoApp = () => {
    const [tasks,setTasks] = useState([])

    useEffect(() =>  { //when component loaded run setTask
        setTasks([
            {
                id :uuidv4(),
                title : 'Default task',
                status : true, //boolean
            },
            {
                id :uuidv4(),
                title : 'Default task number2',
                status : false, //boolean
            }
        ])
    },[])
    const addTask = (taskTitle) => {
        setTasks([
            ...tasks,//محتویات task رو قرار میده
            { //و بعد جیسون جدیدی از اطلاعات setTask میسازه
                id :uuidv4(),
                title :taskTitle,
                status : false, //boolean 
            },
        ]);
    }
    const deleteTask = (taskId) => {
        let newTasksList = tasks;
        delete newTasksList[tasks.findIndex((task) => task.id === taskId)];
        newTasksList = newTasksList.filter((item) => item);
        setTasks(newTasksList);
    }

    return(
        <div className="TodoApp">
            <AddTaskForm addTask={addTask} />
            <TaskList tasks={tasks} deleteTask={deleteTask} /> {/* show task */}
            <FilterFooter tasks={tasks} />
        </div>
    )
}
export default TodoApp