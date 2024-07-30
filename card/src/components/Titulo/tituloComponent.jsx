import React from 'react'

export const Titulo = (props) => {
    console.log(props,'props titulo');
  return (
    <div>
        <h1>
            {props.title}
        </h1>
    </div>
    
  )
}