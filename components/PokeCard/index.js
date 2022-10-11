import React from 'react'

import Abilities from 'components/Abilities/index.js'
import Types from 'components/TypesDiv/index.js'
import Stats from 'components/Stats/index'

import { capitalize } from 'utils/capitalize'

export const Pokecard = ({ pokemon }) => {
  return (
    <div className='flex flex-col min-w-[270px] gap-2 bg-white border-4 border-black items-stretch mx-auto'>
      <img
        src={pokemon.sprites.front_default}
        alt=''
        className='p-2'
      />
      <h3 className='text-base md:text-lg text-center '>
        #{pokemon.id} {capitalize(pokemon.name)}
      </h3>
      <Abilities abilities={pokemon.abilities} />
      <Types pokemon={pokemon} />
      <Stats stats={pokemon.stats} />
    </div>
  )
}
