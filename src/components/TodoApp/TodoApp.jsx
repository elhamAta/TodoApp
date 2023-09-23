import React,{ useState , useEffect} from "react"
import{
    AddTaskForm,
    TaskList,
    FilterFooter 
  } from'../';
import './TodoApp.css';
import { v4 as uuidv4 } from 'uuid'; // create uniqe id

const TodoApp = () => {
    const [tasks,setTasks] = useState([]);
    const [filteredTasks,setFilteredTasks] = useState([]);
    const [filter,setFilter] = useState('all');
    const[refresh,setRefresh] = useState(0);

    useEffect(() =>  { //when component loaded run setTask
        let storedTask = localStorage.getItem('tasks')
        if(storedTask){
            storedTask = JSON.parse(storedTask)
        }
        setTasks(storedTask)
    },[])

    useEffect(()=>{
        if (filter === 'all') {
            setFilteredTasks(tasks)
        }
        if (filter === 'completed') {
            const newCompletedFilterTasks = tasks.filter(task => task.status) 
            setFilteredTasks(newCompletedFilterTasks)
        }
        if (filter === 'active') {
            const newActiveFilterTasks = tasks.filter(task => !task.status) 
            setFilteredTasks(newActiveFilterTasks)
        }
    },[filter,tasks,refresh]);

    const addTask = (taskTitle) => {
        const newTasks = [
            ...tasks,//محتویات task رو قرار میده
            { //و بعد جیسون جدیدی از اطلاعات setTask میسازه
                id :uuidv4(),
                title :taskTitle,
                status : false, //boolean 
            },
        ];
        setTasks(newTasks)
        localStorage.setItem("tasks",JSON.stringify(newTasks));
    }
    const deleteTask = (taskId) => {
        let newTasksList = tasks;
        delete newTasksList[tasks.findIndex((task) => task.id === taskId)];
        newTasksList = newTasksList.filter((item) => item);
        setTasks(newTasksList);
        localStorage.setItem("tasks",JSON.stringify(newTasksList));

    }

    const handleChangeStatus = (taskId) => {
        let newTasksList = tasks;
        const taskIndex = tasks.findIndex((task) => task.id === taskId);
        newTasksList[taskIndex].status = !newTasksList[taskIndex].status;
        setTasks(newTasksList);
        localStorage.setItem("tasks",JSON.stringify(newTasksList));

        setRefresh(refresh+1)
    }
    return(
        <div className="TodoApp">
            <AddTaskForm addTask={addTask} />
            <TaskList
                tasks={filteredTasks} 
                deleteTask={deleteTask} 
                handleChangeStatus={handleChangeStatus}
             /> {/* show task */}
            <FilterFooter updateFilter={setFilter} tasks={filteredTasks} />
        </div>
    )
}
export default TodoApp