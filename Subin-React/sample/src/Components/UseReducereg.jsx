import React, {useReducer} from 'react'

const UseReducereg = () => {

    const InitialState=0

const reducer=(state,action)=>{
  console.log('action',action,'state',state);
  console.log(action);
    switch (action.type) { 
        case 'increase':
            return state=state+1
        case 'decrease':
            return state=state>0 ? state-1 : 0 
        case 'Increment2':
            return state=state+2
        case 'decrement2':
            return state=state-2
            default:
           return state
    } 
} 
const [state,dispatch]=useReducer(reducer,InitialState)



  return (
    <div>
        <h1>{state}</h1>
      <button onClick={()=>dispatch({type:'increase'})}>Increment</button>
      <button onClick={()=>dispatch({type:'decrease'})}>Decrement</button> 
      <button onClick={()=>dispatch({type:'Increment2'})}>Increment 2</button>
      <button onClick={()=>dispatch({type:'decrement2'})}>Decrement 2</button>
      
    </div>
  )
}

export default UseReducereg
