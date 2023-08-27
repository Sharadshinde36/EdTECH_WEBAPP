import React from 'react'

function HighlightText(props) {
  return (
    <span className='text-blue-500 font-bold text-lg'>
    {"     "} {props.text}</span>
  )
}

export default HighlightText;