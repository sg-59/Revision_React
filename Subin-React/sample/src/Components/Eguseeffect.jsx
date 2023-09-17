import React, { useEffect, useState } from 'react'

const Eguseeffect = () => {

    const [state,setstate]=useState(0)

    useEffect(()=>{
console.log('hai welcome');
    },[state])

  return (
    <div>
        <h1>{state}</h1>
      <button onClick={()=>setstate(state+1)}>Click me</button>
    </div>
  )
}

export default Eguseeffect
