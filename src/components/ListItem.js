import React from "react";

import Card from "./Card";

function DoneImg(props){
  if(props.done){
    return (<img src="./assets/on.png" alt="done"/>)
  }else{
    return (<img src="./assets/off.png" alt="undone"/>)
  }
}

function ListItem(props){
  return(       <li  >
                  <Card className={props.item.done ? "done item" : "item"}>
                  {props.item.text}
                  <div>
                    <button onClick={()=> {props.onDone(props.item)}}><DoneImg done={props.item.done}></DoneImg></button>
                    <button onClick={()=> {props.onItemDeleted(props.item)}}><img src="./assets/bin.png" alt="" /></button>
                  </div>
                  </Card>
                </li>)

}

export default ListItem;