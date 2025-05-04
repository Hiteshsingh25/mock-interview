import React from 'react'

function DefaultView({children}) {
  return (
    <div className='max-w-[1152px] mx-auto'>
        {children}
    </div>
  )
}

export default DefaultView