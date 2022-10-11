import React from 'react'
import { capitalize } from 'utils/capitalize'

const Types = ({ pokemon }) => {
  const typeColors = {
    electric: '#FFEA70',
    dark: '#5b5b5c',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#C8543B',
    default: '#2A1A1F',
    fairy: '#FE8EFB'
  }
  const typesDiv = pokemon?.types.map((type) => {
    return (
      <span
        key={type.type.name}
        style={{ backgroundColor: `${typeColors[type.type.name]}` }}
        className='px-2 py-1 text-center text-[8px] sm:text-[10px] flex justify-center items-center w-full h-full'>
        <p>{capitalize(type.type.name)}</p>
      </span>
    )
  })
  return <div className='flex flex-col gap-1 h-[60px] '>{typesDiv}</div>
}

export default Types
