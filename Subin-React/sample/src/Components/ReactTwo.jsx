import React from 'react'

const ReactTwo = (props) => {

    console.log('child rendered');
  return (
    <div>
      <h2>State 1 :{props.value}</h2>
    </div>
  )
}

export default ReactTwo
export const Abcdefg=React.memo(ReactTwo)
