import React from 'react'
import { capitalize } from 'utils/capitalize'

export const NextNavButton = ({ url, text }) => {
  const returnButton = url ? (
    <button className='no-underline text-xs md:text-base text-white hover:no-underline hover:text-white border-2 border-black py-1 md:py-2 px-2 md:px-3 fixed bottom-2 right-2 bg-rose-600'>
      {capitalize(text)}
    </button>
  ) : (
    <p className='border-2 text-xs md:text-base border-black py-1 md:py-2 px-2 md:px-3 fixed bottom-2 right-2 bg-rose-600'>
      No {text}
    </p>
  )

  return returnButton
}

export const PrevNavButton = ({ url, text }) => {
  const returnButton = url ? (
    <button className='no-underline text-xs md:text-base text-white hover:no-underline hover:text-white border-2 border-black py-1 md:py-2 px-2 md:px-3 fixed bottom-2 left-2 bg-rose-600'>
      {capitalize(text)}
    </button>
  ) : (
    <p className='border-2 text-xs md:text-base border-black py-1 md:py-2 px-2 md:px-3 fixed bottom-2 left-2 bg-rose-600'>
      No {text}
    </p>
  )

  return returnButton
}
