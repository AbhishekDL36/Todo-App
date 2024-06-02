import React, { useState } from 'react';
import Input from './components/Input';
import List from './components/List';

function App() {
  const [todos,settodos] = useState([]);

  const addToDo = (newtodo)=>{
    settodos([...todos,newtodo]);
  };

  const deleteTodo=(indexToDelete)=>{
    settodos(todos.filter((_, index) => index !== indexToDelete));

  }
 
 
  
  return (
    <div className="App">
      <Input addToDo = {addToDo}/>
      <List todos = {todos} deleteTodo = {deleteTodo}/>
      
    </div>
  );
}

export default App;
