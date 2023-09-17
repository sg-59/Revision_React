import React, { useEffect, useLayoutEffect, useState } from 'react'

const Users = () => {

    const [name,setName]=useState()
    const [age,setAge]=useState()
    const [domain,setDomain]=useState()
    const [address,setAddress]=useState()


    const display=(e)=>{
      e.preventDefault()
        console.log(name,age,domain,address); 
    }

 return (
    <div>
      <form onSubmit={display}>
      <input type='text' placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/>
      <input type='number' placeholder='Age' value={age} onChange={(e)=>setAge(e.target.value)}/>
      <input type='text' placeholder='Domain' value={domain} onChange={(e)=>setDomain(e.target.value)}/>
      <input type='text' placeholder='Address' value={address} onChange={(e)=>setAddress(e.target.value)}/>
      <input type='submit' value='Click'/>
      </form>
    </div>
  )
}

export default Users
