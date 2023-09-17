import React from 'react'
import { Link } from 'react-router-dom'

const Hey = () => {
  return (
    <div>
    <Link to={'/demo'}><div style={{"backgroundColor":'red', "width":"50px"}}>Click</div></Link>  
    </div>
  )
}

export default Hey
