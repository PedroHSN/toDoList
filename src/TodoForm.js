import React, {useState} from "react";

function TodoForm(props){
  const [text, setText] = useState("");
  
  function handleChange(event){//pega o valor do input
    let t = event.target.value;
    setText(t);

  }

  function addItem(event){
      event.preventDefault();//Evita o comportamento default do botão
      if(text.trim()){
          props.onAddItem(text);
          setText("");
      }
      
  }
    return(
            <form>
              <input onChange={handleChange} type="text"  value={text}/>
              <button onClick={addItem}>Add</button>
            </form>
    )        
}

export default TodoForm;