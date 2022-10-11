import React, { useState } from 'react'
import { useRouter } from 'next/router'

export const SearchBox = () => {
  const router = useRouter()

  const [pokemonSearch, setPokemonSearch] = useState('')

  const handleChange = (e) => {
    const { value } = e.target
    setPokemonSearch(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    return router.push(`/pokemon/${pokemonSearch}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className=' max-w-md flex flex-col items-stretch justify-around mx-auto gap-2 sm:flex-row mb-4'>
      <input
        onChange={(e) => handleChange(e)}
        type='text'
        placeholder='Pokemon or ID'
        required
        value={pokemonSearch}
        className='w-100 border-black border-2 px-4 py-2 sm:w-3/4'></input>
      <button className='text-base border-black border-2 bg-slate-50 px-4 py-2'>
        Search
      </button>
    </form>
  )
}
