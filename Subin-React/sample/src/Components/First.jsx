import React, { useCallback, useState } from 'react'
import { Memoizedchild } from './Second';

const First = () => {

    const [state,setstate]=useState(0)

console.log('parent rendered ');

    function display(){
setstate(state+1)
    }
var a=10
const handleclick=()=>{}

const MemoizedClick=useCallback(handleclick,[])

  return (
    <div>
    <p>{a}</p>
        <h1>{state}</h1>
         <button onClick={display}>State</button>
    
      <Memoizedchild values={MemoizedClick}/>
    </div>
  )
}

export default First
