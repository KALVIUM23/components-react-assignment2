// write button card here
import React from 'react'

function button({text, onClick}) {
    const btnStyle = {
        backgroundColor: 'blue',
        padding: '1rem',
        borderRadius: '10px'
    }
    return (
    <button style={btnStyle} onClick={onClick}>
        {text}
    </button>
  )
}

export default button