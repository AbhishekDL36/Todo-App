import React, { useEffect, useState } from 'react';
import Input from './components/Input';
import List from './components/List';

function App() {
  const [todos,settodos] = useState([]);

  const addToDo = (newtodo)=>{
    if(edittodo.index!==''){

      const updatedvalue = todos.map((todo,index)=>
      index===edittodo.index? newtodo:todo
    )
   
    settodos(updatedvalue);
    seteditTodo({
      index:'',
      value:''
    })

    }else {
      settodos([...todos,newtodo]);
    }
    
  };

  const deleteTodo=(indexToDelete)=>{
    settodos(todos.filter((_, index) => index !== indexToDelete));

  }
 
  const[edittodo,seteditTodo]=useState({
    index:'',
    value:''
  })

   function editTodo(index,value){
    console.log(index,value);
    seteditTodo({
      index,
      value
    })
  }

  
 
  
  return (
    <div className="App">

      <Input addToDo = {addToDo} editTodos = {edittodo}/>
      <List todos = {todos} deleteTodo = {deleteTodo} editTodo = {editTodo}/>
      
    </div>
  );
}

export default App;
