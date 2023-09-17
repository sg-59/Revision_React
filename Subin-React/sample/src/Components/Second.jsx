import React from 'react'

const Second = ({values}) => {
console.log('child rendered');
 

  return (
    <div>
   
    </div>
  )
}

export default Second
export const Memoizedchild=React.memo(Second)
