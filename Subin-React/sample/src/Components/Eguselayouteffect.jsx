import React, { useEffect, useLayoutEffect } from 'react'

const Eguselayouteffect = () => {

useEffect(()=>{
console.log('I am useEffect');
},[])

useLayoutEffect(()=>{
console.log('I am useLayouteffect');
},[])


  return (
    <div>
      
    </div>
  )
}

export default Eguselayouteffect
