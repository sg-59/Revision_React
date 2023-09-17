import React, { useEffect, useMemo, useState } from 'react'
import Child from './Child'

const Parent = () => {

    const [state,setState]=useState(0)
    const [state1,setState1]=useState(0)

    const display=()=>{
setState(state+1)
    }

   const isEven= useMemo(()=>{
      let i=0
      while(i<2000000000)
      i++
return state%2==0
    },[state])




// function isEven(){
//   let i=0
//         while(i<2000000000)
//         i++
//   return state%2==0
// }


  const display1=()=>{
setState1(state1+1)
    }

  return (
    <div>
        <button onClick={display}>{state}</button>
        <span>{isEven ? 'Even' : 'Odd'}</span>
        <button onClick={display1}>{state1}</button>
    </div>
  )
}

export default Parent
