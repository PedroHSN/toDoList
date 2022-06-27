import React, {useState} from "react";
import { addItem } from "../actions/listAction"
import { useDispatch } from  "react-redux";

function TodoForm(props){
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  
  function handleChange(event){//pega o valor do input
    let t = event.target.value;
    setText(t);
  }

  function addItemEvent(event){
      event.preventDefault();//Evita o comportamento default do botão
      if(text.trim()){
          dispatch(addItem(text));
          setText("");
          props.onHideModal()
      }   
  }
    return(
            <form>
              <input onChange={handleChange} type="text"  value={text}/>
              <button onClick={addItemEvent}>Add</button>
            </form>
    )        
}

export default TodoForm;