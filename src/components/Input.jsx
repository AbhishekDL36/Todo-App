import React, { useEffect, useState } from 'react'


export default function Input(props) {

    const [inputValue,setInputValue] = useState('');

    const handleClick =()=>{
        
            if(inputValue.trim()){
                const trimmedValue = inputValue.trim();
                props.addToDo(trimmedValue);
                setInputValue('');
            }
        
        
        

    }

    const handleChange = (e)=>{
        
        setInputValue(e.target.value);

    }

    useEffect(()=>{
        setInputValue(props.editTodos.value)
    },[props.editTodos.value])

  return (
    <div>
        
      <input type = 'text' onChange={handleChange} value={inputValue} ></input>
      <button type = 'submit' onClick={handleClick}>
        {
            props.editTodos.index===''?"Add":"Update"
        }
      </button>

    </div>
  )
}
