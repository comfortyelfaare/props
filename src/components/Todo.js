import React from 'react'

function todo({title, datetime}) {
  return (
    <div className='todo'>
    <h3>{title}</h3>
    <p>{datetime}</p>
    
    
    </div>
  )
}

export default todo