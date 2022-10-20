import { EvolutionPokemon } from 'components/EvolutionPokemon/index'

import { useEvolutionChain } from 'hooks/useEvolutionChain'

export const EvolutionCard = ({ species }) => {
  const { evChain, error, loading } = useEvolutionChain(species)
  const { first, next } = evChain
  const pokemonMethod = first.pokemonMethod
    ? [...first.pokemonMethod]
    : undefined

  return (
    <div className='container md:col-span-1 border-4 border-black bg-slate-50 text-sm md:text-base my-2 p-2 flex flex-col h-fit'>
      {!loading && (
        <>
          <h3 className='text-base md:text-lg text-center text-gray-400 py-3'>
            Evolution Chain
          </h3>
          <EvolutionPokemon
            pokemonId={first.pokemon}
            method={pokemonMethod}
            nextPokemonArr={next}
          />
        </>
      )}
    </div>
  )
}
