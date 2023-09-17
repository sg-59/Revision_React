import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Sub from './Sub'

const Amegbatch = () => {

const [state,setState]=useState([])

    useEffect(()=>{
      async  function display(){
        try{
          const res=await axios.get('https://jsonplaceholder.typicode.com/posts')
          console.log(res.data);
  setState(res.data)
        }catch(err){
          console.log(err);
          console.log('api error');
        }finally{
console.log('finaly worked');
        }

        }
        display()
},[])




  return (
    <div>
        {state.map((li)=>(
            <>
            <h1>{li.title}</h1>
            <h1>{li.body}</h1>
            </>
        ))}
      <Sub value={state}/>
    </div>
  )
}

export default Amegbatch
