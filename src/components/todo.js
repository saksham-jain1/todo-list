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
        <table>
        <tr>
        <td>
            <input type="checkbox" name="complete" style={{height:'25px', width:'25px' }} onChange={props.changestatus} id={props.data.id} checked={props.data.complete} /> 
        </td>
        <td style={{width:'100%'}}>
            <li className='list-group-item p-2 m-1' id={props.data.id} style={{fontSize:'18px', textDecorationLine: props.data.complete ?'line-through' : 'none'}}>
            {props.data.task}
            </li>
        </td>
        <td>
        <button className='btn p-2 ' id={props.data.id} onClick={props.deleteTask} style={{borderRadius:'50px',float:'right'}}><FaTrash size={26} /></button>
        </td>
        </tr>
        </table>
    )
}

export default Todo;
