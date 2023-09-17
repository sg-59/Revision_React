import React, { useRef } from 'react'

const Taskref = () => {

    
const name=useRef()
const age=useRef()
const password=useRef()
const something=useRef()


const display=(e)=>{
    e.preventDefault()

    var names=name.current.value
    var ages=age.current.value
    var passwords=password.current.value
    var somethings=something.current.value

 const data={
        names,
        ages,
        passwords,
        somethings
    }
    console.log(data);
    }

  return (
    <div>
          <div>
        <form onSubmit={display}>    
      <input ref={name} type="text" placeholder='name' />
      <input ref={age} type="email" placeholder='E-mail' />
      <input ref={password} type="password" placeholder='Password'/>
      <input ref={something} type="text" placeholder='something'/>
      <input type='submit' value={'Click'}/>
      </form>
  
    </div>
    </div>
  )
}

export default Taskref
