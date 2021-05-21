import React, { useState } from 'react';

const Axios_pokemon=() =>{
    const [num,setNum]=useState()
    return(
        <>
            <select cale={num} onChange={(event)=>{
                setNum(event.target.value)
                console.log(num)
                console.log(event.target.value)
            }}
            >
                <option value='1'>1</option>
                <option value='25'>25</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
        </>
    )
}

export default Axios_pokemon