import React, { useState } from 'react';
import './index.css';
import TodoList from './ToDOList';
import Clock from 'react-digital-clock';

const App=()=>{
  const [inputList,setInputList]=useState("");
  const [Items,setItems]=useState([]);
  const inputEvent=(event)=>{
    setInputList(event.target.value)
  }
  const listOfItem = () =>{
    setItems((oldItems) =>{
      return [...oldItems,inputList];
    })
    setInputList("")

  }

  const deleteItems = (id) =>{
    setItems((oldItems) => {
      return oldItems.filter((arrElem,index) =>{
            return index !==id;
      })
    })

  }
   return(
     <>
      <div className="main_div">
        <div className="center_div">
        <br/>
        <h1>ToDo List</h1>
        <br/>
        <input type="text" placeholder="Add a Items" onChange={inputEvent} value={inputList}/>
        <button onClick={listOfItem}>+</button>

        <ol>
          {Items.map((itemval,index)=>{
             return <TodoList key={index} id={index} item={itemval} onSelect={deleteItems}/>
          })}
        </ol>
        </div>



      </div>
     </>
   )
}



export default App;
