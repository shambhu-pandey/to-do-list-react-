import React from "react";

const ToDoList = (props) =>{


  return(
  <>
 <li> {props.text}  <span className="delete_Button" onClick={() =>{
  props.onSelect(props.id)
 }}> X </span></li>
  </>
  );
};

export default ToDoList;