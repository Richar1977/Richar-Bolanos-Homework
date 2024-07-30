import React from 'react'

export const Details = (props) => {
    console.log(props,'details');
  return (
    <div>
        <h2>{props.details}</h2>
    </div>
    
  )
}