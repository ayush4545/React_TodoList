import React from 'react';



const ToDOList=(props) =>
{  
  
  return (
  <>
  <div className="todo_style">
  <button className="fa-times" onClick={()=>{
      props.onSelect(props.id)
  }}>X</button>
  <li>{props.item}</li>
  </div>
  </>)
}


export default ToDOList