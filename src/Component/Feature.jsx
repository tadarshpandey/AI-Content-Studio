import React from 'react'
import "./Feature.css";


const Feature = ({title, description}) => {
  return (
    <div className='card'>
      <h1>{title}</h1>  
      <p>{description}</p>

      <button>
        open tool
      </button>
    </div>
  )
}

export default Feature