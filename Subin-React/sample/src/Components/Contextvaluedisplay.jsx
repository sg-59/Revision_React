import React, { useContext } from 'react'
import { Appcontext } from './Context'

const Contextvaluedisplay = () => {

    const value =useContext(Appcontext)
    const data =useContext(Appcontext)

  return (
    <div>
      <h1>{value}</h1>
      <h1>{data}</h1>
    </div>
  )
}

export default Contextvaluedisplay
