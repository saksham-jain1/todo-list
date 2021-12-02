import React , { useState , useRef } from 'react'
import { FaPlus } from "react-icons/fa";
import Todo from './todo';

const TodoList = () => {
    const [task,setTask] = useState('');
    const [index,setIndex] = useState(1);
    const [data, setData] = useState([]);
    const deleteData = (e) =>
    {
        setData(data.filter((curr) => {
            if(curr.id==e.currentTarget.id)
            {
                return '';
            }
            else
            {
                return curr;
            }
    }));
    }
    const addTask = () =>{
        if(task)
        {
            setData([...data,{id:index,task:task}]);
            setTask('');
            setIndex(index+1);
        }
        else
        {
            alert('Enter the task');
        }
    }
    return (
        <div className='card col-md-6 container-fluid align-center bg-light shadow-lg my-5 p-0' style={{borderRadius:'25px'}}>
        <h2 className='text-center bg-info m-0 p-3' style={{borderRadius:'25px 25px 0px 0px'}}>To-Do List</h2>
        <div className="input-group justify-content-center my-5">
        <input type="text" className='field-input col-7' onChange={(e)=>setTask(e.target.value)} value={task} style={{borderStyle: 'hidden',borderRadius:'25px'}} placeholder='Add Task' /> 
        <button className='btn btn1 p-2 mx-3' onClick={addTask} style={{borderRadius:'50px'}}><FaPlus size={50} /></button>
        </div>
            <ul className='list-group list-group-flush m-5' style={{listStyleType:'none'}}>
                {
                    data.map((curr,i) =>{ return (<Todo key={curr.id} data={curr} deleteTask={deleteData} />) })
                } 
            </ul>
        </div>
    )
}

export default TodoList;
