import { SearchBox } from 'components/SearchBox/index'
import { useRouter } from 'node_modules/next/router'
import React from 'react'

export const NavBar = ({ back }) => {
  const router = useRouter()
  const goHome = () => {
    router.push('/p/0')
  }
  const goBack = () => {
    router.back()
  }
  return (
    <>
      <nav className='flex flex-row items-baseline w-full justify-center px-3 pb-3 gap-60 bg-rose-600 relative'>
        {back && (
          <button
            onClick={goBack}
            className='text-lg md:text-2xl no-underline text-white hover:no-underline hover:text-white justify-self-start absolute top-0 left-0'>
            Go back
          </button>
        )}
        <button
          onClick={goHome}
          className='text-lg md:text-2xl no-underline text-white hover:no-underline hover:text-white'>
          Home
        </button>
      </nav>
      <SearchBox />
    </>
  )
}
