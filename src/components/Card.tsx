import React from 'react'

function Card({title}: {title: string}) {
  return (
    <div className='font-sans w-full p-2 bg-white text-black rounded-lg'>
        <p>{title}</p>
      
    </div>
  )
}

export default Card
