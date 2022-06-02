import React from "react";

function DoneImg(props){
  if(props.done){
    return (<img src="./assets/on.png" alt="done"/>)
  }else{
    return (<img src="./assets/off.png" alt="undone"/>)
  }
}

function List(props){
  return(   <ul>
                {props.items.map(item => <li className={item.done ? "done" : ""} key={item.id}>
                  {item.text}
                  <button onClick={()=> {props.onDone(item)}}><DoneImg done={item.done}></DoneImg></button>
                  <button onClick={()=> {props.onItemDeleted(item)}}><img src="./assets/bin.png" alt="" /></button>
                </li>)}
            </ul>)
}

export default List;