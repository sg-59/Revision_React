import React, { useEffect } from 'react'
import { useRef } from 'react'
import './ref.css'
const Refeg1 = () => {

    const divsample=useRef()
    const Inputref=useRef()
    const Inputref1=useRef()


    useEffect(()=>{
Inputref1.current.focus()
    },[])

    const display =(e)=>{
e.preventDefault();
divsample.current.style.backgroundColor='red'
divsample.current.style.width="500px"
divsample.current.innerHTML='<form><input /></form>'
 divsample.current.innerText='Welcome'
 const a=Inputref.current.value
 console.log(a);
    }
  return (
    <div ref={divsample}>
      bxhvsbxsn
      nxns jsb
      <button onClick={display}>click me</button>
      <input ref={Inputref} type='text' placeholder='name'/>
      <input  type='text' placeholder='name'/>
      <input type='text' placeholder='name'/>
      <input type='text' placeholder='name'/>
      <input ref={Inputref1} type='text' placeholder='name'/>
      <input  type='text' placeholder='name'/>
    </div>
  )
}

export default Refeg1
