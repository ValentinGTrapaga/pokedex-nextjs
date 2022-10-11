import React from 'react'
import { Pokecard } from '../../components/PokeCard/index'
import { useRouter } from 'node_modules/next/router'
import { useFetchPokemon } from 'hooks/useFetchPokemon'
import { NavBar } from 'components/NavBar/index'
import { AbilitiesCard } from 'components/AbilitiesCard/index'

const Pokemon = () => {
  const router = useRouter()
  const { id } = router.query

  const { pokemon, loading, abilities } = useFetchPokemon(id)

  return (
    <>
      <NavBar back />
      <div className='text-black container flex flex-col items-stretch justify-center md:flex md:flex-row gap-4 mx-auto'>
        {!loading ? <Pokecard pokemon={pokemon} /> : <p>Loading...</p>}
        <div>
          {!loading ? (
            <AbilitiesCard abilities={abilities} />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  )
}

export default Pokemon
