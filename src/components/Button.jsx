import React from 'react'

const Button = ({width,bg}) => {
  return (
    <button className={` mt-5 ${width}  border  p-2 rounded-lg ${bg} transition-all ease-out duration-500`}>
    Learn More
  </button>
  )
}

export default Button