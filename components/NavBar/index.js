import { NextNavButton, PrevNavButton } from 'components/NavButton/index'
import { SearchBox } from 'components/SearchBox/index'
import { useRouter } from 'node_modules/next/router'
import React from 'react'

export const NavBar = ({ back }) => {
  const router = useRouter()
  const goHome = () => {
    router.push('/')
  }
  const goBack = () => {
    router.back()
  }
  return (
    <>
      <nav className='flex flex-row items-baseline w-full px-3 pb-3 bg-rose-600'>
        {back && (
          <button
            onClick={goBack}
            className='text-lg md:text-2xl no-underline text-white hover:no-underline hover:text-white justify-self-start'>
            Go back
          </button>
        )}
        <button
          onClick={goHome}
          className='text-lg md:text-2xl no-underline text-white hover:no-underline hover:text-white mx-auto'>
          Home
        </button>
      </nav>
      <SearchBox />
    </>
  )
}
