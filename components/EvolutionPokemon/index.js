import React from 'react'
import { useFetchPokemon } from 'hooks/useFetchPokemon'
import { useRouter } from 'node_modules/next/router'
import { capitalize } from 'utils/capitalize'
import { formatMethod } from 'utils/formatWord'
import { formatMethods } from 'utils/formatMethods'
import FadeLoader from 'node_modules/react-spinners/FadeLoader'

export const EvolutionPokemon = ({ pokemonId, method, nextPokemonArr }) => {
  const { pokemon, loading } = useFetchPokemon(pokemonId)
  const router = useRouter()
  const pushPage = () => {
    router.push(`/pokemon/${pokemonId}`)
  }
  console.log('pokemon', pokemonId)
  console.log('method ', method)

  let nextPokemons
  if (nextPokemonArr.length !== 0) {
    nextPokemons = nextPokemonArr.map((pokemon) => {
      return (
        <EvolutionPokemon
          pokemonId={pokemon.pokemon.name}
          method={pokemon.pokemonMethod}
          nextPokemonArr={pokemon.pokemonNext}
        />
      )
    })
  }
  const methods = method
    ? formatMethods(method).map((method) => <p>{formatMethod(method)}</p>)
    : ''

  return (
    <div className='flex flex-row items-center mx-auto justify-between'>
      {!loading ? (
        <>
          <article className='w-[8rem] lg:w-[13rem] bg-slate-50 h-full  m-3'>
            <img
              onClick={pushPage}
              src={pokemon.sprites.front_default}
              className='mx-auto cursor-pointer'
            />
            <p className='text-center text-[12px]'>
              {capitalize(pokemon.name)}
            </p>
            {method && (
              <p className='text-center text-[8px] text-gray-500'>Method</p>
            )}
            <p className='text-center text-[9px]'>{methods}</p>
          </article>
          <section className='flex flex-col flex-wrap'>{nextPokemons}</section>
        </>
      ) : (
        <div className='flex flex-col items-center h-full opacity-50'>
          <FadeLoader />
        </div>
      )}
    </div>
  )
}
