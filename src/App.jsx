import React, { useState } from "react";
import "./index.css";
import ToDoList from "./ToDoList"

const App = () => {
// agar khi par likh kar khi dikhana chahte hai toh hooks ka use karna hi padega 
// har input field event call karta hai 

  const[inputList , setInputList] = useState("");
  const[item , setItem] = useState([]); // array bna liye kyuki ab jo bhi user input field me likhega usko array me store kra ke dekhate rhega url par 

  const itemEvent = (event) =>{
    setInputList(event.target.value);  // jab bhi user input field me likhega oo sab add ho jaayega setInputList me aur show hoga
  }

  // Items ko add karte ja rhe hai pichla wala item ke baad store kar rhe hai 
 const listOfItems = () =>{
   setItem((oldItems) =>{
    return [...oldItems , inputList];
   });
  setInputList(" ");  //item ko input field me likhne ke baad aur add hone ke baad input field ko khali kar denge kyuki agar dusra item add karna ho toh .dikkat hoga 
 }


 const deleteItems = (id) =>{
  console.log("delete");
   
  setItem((oldItems) => {
    return oldItems.filter((arrElem , index) => {
      return index!==id;
    })
  })
}

  return(
<>
<div className="main_div">
  <div className="center_div">
   <br />
   <h1 className="heading">ToDo list</h1>
   <br />
   <input type="text" placeholder="Add a Items"  
   value = {inputList}  
   className="input_type"  onChange={itemEvent}/>

     {/* ab hm function ke help se button par method par  lagane ja rha hu ki agar click hoga toh add karte rhe yah  */}
   <button className="add_button" onClick={listOfItems}>+</button>
   <ul>
    
    {/* one by one ab yha par show kra dunga items ko map method ke help se  */}
    {/* <li>{inputList}</li> */}

    {
      item.map((itemVal ,index )=>{
       return (
       
       <ToDoList  key= {index}
         id = {index}
         text = {itemVal} 
         onSelect = {deleteItems}
         />
      
       );
      })
    }
   </ul>
  </div>
</div>
</>
  );
}

export default App;