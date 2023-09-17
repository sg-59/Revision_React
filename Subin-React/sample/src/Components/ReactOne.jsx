import React, { useCallback, useState } from 'react'
// import ReactTwo from './ReactTwo';
import { Abcdefg } from './ReactTwo'

const ReactOne = () => {
const [state,setState]=useState(0)
const [state1,setState1]=useState(0)

console.log('parent rendered');

function show(){
    setState(state+1)
}

function show1(){
    setState1(state1+1)
}

const Handleclick=()=>{}

const Memoizedclick=useCallback(Handleclick,[])

  return (
    <div>
        <h2>State : {state}</h2>
        <h2>State 1 :{state1}</h2>
      <button onClick={show}>Click 1</button>
      <button onClick={show1}>Click 2</button>
      <Abcdefg value={Memoizedclick}/>
    </div>
  )
}

export default ReactOne
