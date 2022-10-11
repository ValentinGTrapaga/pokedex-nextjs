import React from 'react'
import { capitalize } from 'utils/capitalize'

const Abilities = ({ abilities }) => {
  const abilitiesDiv = abilities.map((ability, index) => {
    return ability.is_hidden ? (
      <p
        className='text-center text-[11px]'
        key={index}>
        {capitalize(ability.ability.name)} (h)
      </p>
    ) : (
      <p
        className='text-center text-[11px]'
        key={index}>
        {capitalize(ability.ability.name)}
      </p>
    )
  })
  return (
    <div className=''>
      <p className='text-center text-sm opacity-30'>Abilities</p>
      {abilitiesDiv}
    </div>
  )
}

export default Abilities
