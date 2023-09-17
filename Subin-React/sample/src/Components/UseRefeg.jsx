import React, { useEffect, useRef } from 'react'

const UseRefeg = () => {

    const Sampleref=useRef()
    const Sampleref1=useRef()
    const Input1=useRef()
    // const Sampleref1=useRef()
    // const Samples1=useRef()

//     useEffect(()=>{
// Sampleref.current.style.backgroundColor='red'
// Sampleref.current.style.fontSize='5em'
// Samples1.current.focus()

// },[])

// const display = ()=>{
//     Sampleref1.current.innerText='Hello' 
//     Sampleref1.current.innerHTML='<h6>Hai</h6>'
// }

useEffect(()=>{
Input1.current.focus()
},[])

const show=()=>{
  Sampleref.current.style.backgroundColor='green'
  Sampleref1.current.style.color='White'
  // Sampleref1.current.innerText='Welcome'
  Sampleref.current.innerHTML='<h1>India</h1>'

}

 return (
    <div ref={Sampleref}>
      <h1 ref={Sampleref1}>Hello</h1>



      <button onClick={show}>Click</button>
      <input  type="text" placeholder='Name' />
      <input  type="text" placeholder='age' />
      <input ref={Input1} type="text" placeholder='domain' />
      <input type="text" placeholder='address' />
      <input type="text" placeholder='state' />
{/*   
      <ul ref={Sampleref1}>   
        <li>list one</li>
        <li>list two</li> 
        <li>list three</li>
      </ul>
      <button onClick={display}>Click</button>
<input type='text' placeholder='name'/>
<input type='text' placeholder='age'/>
<input  type='text' placeholder='address'/>
<input ref={Samples1} type='text' placeholder='job'/>
<input type='text' placeholder='something'/> */}

    </div>
  )
}

export default UseRefeg
