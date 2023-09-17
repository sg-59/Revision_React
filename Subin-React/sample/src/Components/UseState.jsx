import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Appcontext } from './Context'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { dataInfo } from '../Redux/Datas'
import Demo from '../Redux/Demo'
import { Datavalues } from '../Redux/api'
const UseStates = () => {

    const dispatch=useDispatch()

    // const value=useContext(Appcontext)

    const [state,setState]=useState([])

    useEffect(()=>{
       async function display(){
        try{
            const data= await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(data.data);
            setState(data.data)
            // dispatch(dataInfo(data.data))
        }catch(err){
            console.log('Api problem');
        }finally{
            console.log('ok');
        }
          
        }
        display()
    },[])

const display =(e)=>{
    e.preventDefault();
    Datavalues(dispatch)
}
      
    



return ( 
    <div> 
<Link to={'ref'}><h1>Connect to ref</h1></Link>
{state.map((li)=>(
    <>
    <h1>{li.name}</h1>
    <h1>{li.email}</h1>
    <h1>{li.id}</h1>
    {/* <h1>{value}</h1> */}
    </>
    ))}
  <button onClick={display}>display</button>
  <Demo/>
    </div>
   
  )
}    

export default UseStates