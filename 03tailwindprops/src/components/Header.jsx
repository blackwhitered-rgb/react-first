import React from 'react'

const Header = ({name}) => {
  return (
    <div>
        <h1 className='p-3 text-3xl bg-red-500 rounded'>{name} React Page</h1>
    </div>
  )
}

export default Header