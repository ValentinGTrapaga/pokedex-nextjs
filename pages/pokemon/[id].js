import React from 'react'
import { Pokecard } from './../../components/PokeCard/index'
import { useRouter } from 'node_modules/next/router'
import { useFetchPokemon } from 'components/hooks/useFetchPokemon'
import { NavBar } from 'components/NavBar/index'

const Pokemon = () => {
  const router = useRouter()
  const { id } = router.query

  const { pokemon, loading } = useFetchPokemon(id)

  return (
    <div className='text-black'>
      <NavBar back />
      {!loading ? <Pokecard pokemon={pokemon} /> : <p>Loading...</p>}
    </div>
  )
}

export default Pokemon
