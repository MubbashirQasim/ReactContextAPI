import React, { useContext, useState } from 'react'
import { AppContext } from './contextapi'
function Counter() {
  const {counter,setCounter}= useContext(AppContext)
  console.log(counter)
  return (
    <div className='text-center my-5'>
      <h1 >Counter With Context API </h1>
    <h1>{counter}</h1>
    <button onClick={()=>setCounter(counter +1)}>Increment</button>
    
    <button onClick={()=>setCounter(counter -1) } style={{marginLeft:'20px'}}>Decrement</button>

    </div>
  )
}

export default Counter