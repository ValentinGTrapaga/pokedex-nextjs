import React from 'react'
import { Pokecard } from './../../components/PokeCard/index'
import { useRouter } from 'node_modules/next/router'
import { useFetchPokemon } from 'hooks/useFetchPokemon'
import { NavBar } from 'components/NavBar/index'
import { AbilitiesCard } from 'components/AbilitiesCard/index'

const Pokemon = () => {
  const router = useRouter()
  const { id } = router.query

  const { pokemon, loading, abilities } = useFetchPokemon(id)

  return (
    <div className='text-black container'>
      <NavBar back />
      {!loading ? <Pokecard pokemon={pokemon} /> : <p>Loading...</p>}
      {!loading ? <AbilitiesCard abilities={abilities} /> : <p>Loading...</p>}
    </div>
  )
}

export default Pokemon
