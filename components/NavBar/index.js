import { SearchBox } from 'components/SearchBox'
import React from 'react'

export const NavBar = ({
  prev,
  next,
  handlePrevClick,
  handleHomeClick,
  handleNextClick
}) => {
  return (
    <>
      <nav className='flex flex-row items-baseline justify-between px-3 pb-3 bg-rose-600'>
        {prev ? (
          <button
            onClick={() => handlePrevClick(prev)}
            className='no-underline text-white hover:no-underline hover:text-white'>
            Previous page
          </button>
        ) : (
          <p>No prev</p>
        )}
        <button
          onClick={handleHomeClick(
            'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
          )}
          className='no-underline text-white hover:no-underline hover:text-white'>
          Home
        </button>
        {next ? (
          <button
            onClick={() => handleNextClick(next)}
            className='no-underline text-white hover:no-underline hover:text-white'>
            Next page
          </button>
        ) : (
          <p>No next</p>
        )}
      </nav>
      <SearchBox />
    </>
  )
}
