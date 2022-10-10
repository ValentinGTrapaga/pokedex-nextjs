import React from 'react'

export const Layout = ({ children }) => {
  return (
    <div className='nes-container max-w-full min-h-screen p-4 bg-rose-600'>
      {children}
    </div>
  )
}
