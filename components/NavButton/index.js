import React from 'react'
import { capitalize } from 'utils/capitalize'

export const NextNavButton = ({ url, text, handleClick }) => {
  const returnButton = url && (
    <button
      onClick={handleClick}
      className='no-underline text-xs md:text-base text-white hover:no-underline hover:text-white border-[3px] border-black py-1 md:py-2 px-2 md:px-3 fixed bottom-2 right-2 bg-rose-600'>
      {capitalize(text)}
    </button>
  )
  return returnButton
}

export const PrevNavButton = ({ url, text, handleClick }) => {
  const returnButton = url && (
    <button
      onClick={handleClick}
      className='no-underline text-xs md:text-base text-white hover:no-underline hover:text-white border-[3px] border-black py-1 md:py-2 px-2 md:px-3 fixed bottom-2 left-2 bg-rose-600'>
      {capitalize(text)}
    </button>
  )
  return returnButton
}
