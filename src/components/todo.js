import React from 'react'
import { FaTrash } from "react-icons/fa";

const Todo = (props) => {
    /*const [editable, setEditable] = useState(false)
    const edit = () => {
        setEditable(true)
        <!--contentEditable={editable}-->
         onClick={edit}
    }*/
    return (
        <li className='list-group-item p-2 m-1' id={props.data.id} style={{fontSize:'24px'}}>&ensp;{props.data.task}
        <button className='btn p-2 ' id={props.data.id} onClick={props.deleteTask} style={{borderRadius:'50px',float:'right'}}><FaTrash size={26} /></button></li>
    )
}

export default Todo;
