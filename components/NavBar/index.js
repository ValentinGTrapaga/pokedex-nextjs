import { NextNavButton, PrevNavButton } from 'components/NavButton'
import { SearchBox } from 'components/SearchBox'
import React from 'react'

export const NavBar = ({ prev, next }) => {
  return (
    <>
      <nav className='flex flex-row items-baseline justify-center px-3 pb-3 bg-rose-600'>
        <PrevNavButton
          url={prev}
          text='prev page'
        />
        <button className='no-underline text-white hover:no-underline hover:text-white'>
          Home
        </button>
        <NextNavButton
          url={next}
          text='next page'
        />
      </nav>
      <SearchBox />
    </>
  )
}
