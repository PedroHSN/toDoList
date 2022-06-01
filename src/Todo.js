import React, { useState } from 'react';
import './Todo.css';
import List from './List';

function Todo(){

  const [text, setText] = useState("");
  const[items, setItems] = useState([]);

  function handleChange(event){//pega o valor do input
    let t = event.target.value;
    setText(t)

  }

  function addItem(event){
      event.preventDefault();//Evita o comportamento default do botão
      if(text.trim()){
        setItems([...items, text])
        setText("");
      }
      
  }

  return(<div className="container">
            <h1>Todo</h1>
            <form>
              <input onChange={handleChange} type="text"  value={text}/>
              <button onClick={addItem}>Add</button>
            </form>
            <List items={items}></List>
         </div>)
}

export default Todo