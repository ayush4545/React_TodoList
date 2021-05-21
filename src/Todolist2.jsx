import React,{useState}from 'react';
import './todolist2.css';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListCom from './ListCom';
const Todolist2 = () => {
    const [inputList,setInputList]=useState("");
    const [Items,setItems]=useState([])
    const inputEvent=(event)=>{
        setInputList(event.target.value)
      }

     const listOfItem = () =>{
        setItems((oldItems) =>{
          return [...oldItems,inputList];
        })
        setInputList("")
    
      } 
    return (
        <>

            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" placeholder="Add a Items"  onChange={inputEvent} value={inputList}/>
                    <Button className="newBtn" style={{marginLeft:'10px'}} onClick={listOfItem}> <AddIcon /> </Button>

                    <ol>
                        {Items.map((val, index) => {
                            return <ListCom key={index} id={index} text={val} />
                        })
                        } 
                    </ol>
                </div>

             </div>
        </>
    )
}

export default Todolist2