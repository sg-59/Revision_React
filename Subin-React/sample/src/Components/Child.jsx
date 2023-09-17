import React, { useState } from 'react'
// import Childchild from './Childchild'
import { MemoizedChild } from './Childchild'
const Child = () => {

  const [state,setState]=useState(0)
  const [state1,setState1]=useState(0)

  console.log('parent rendered');

  const Show=()=>{
    setState(state+1)
  }
  const Show1=()=>{
    setState1(state1+1)
  }

  return (
    <div>
      <h1>{state}</h1>
      <h1>{state1}</h1>
      <button onClick={Show}>Click</button>
      <button onClick={Show1}>Click1</button>
<MemoizedChild value={state}/>
    </div>
  )
}

export default Child
