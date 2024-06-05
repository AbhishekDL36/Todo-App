import React from 'react'

export default function List(props) {
    console.log(props.todos);
  return (
    <div>
        <ul>
        {
           props.todos.length>0? props.todos.map((value,index)=>
           <li key = {index} >{value} 
           <button onClick={()=>{props.deleteTodo(index);}}>Delete</button>
           <button onClick={()=>{props.editTodo(index,value);}}>Edit</button>
           
           </li>):<li>No todo</li>
        }
        </ul>
      
    </div>
  )
}
