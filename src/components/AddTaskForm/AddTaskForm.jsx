import React,{ useState } from "react"; 
import './AddTaskForm.css';

const AddTaskForm = ({ addTask }) => {
 const [value, setValue] = useState('');// for store data in input

  const handleChange = (event) => {
    if (event) event.preventDefault();
    setValue(event.target.value);
  }
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    if (!value || value === ''){
      return
    }
    addTask(value);
  }; 
  return(
    <div className="AddTaskForm">
        <form onSubmit={handleSubmit} >
          <input onChange={handleChange} type="text" placeholder="what need to be done ?" />
          <button className="button" type="submit">Add</button>
        </form>
    </div>
  )
}

export default AddTaskForm