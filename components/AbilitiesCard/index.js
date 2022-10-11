import { useFetchAbilities } from 'hooks/useFetchAbilities'
import React from 'react'

export const AbilitiesCard = ({ abilities }) => {
  const abilitiesFetched = useFetchAbilities(abilities)

  return (
    <>
      Abilities:{' '}
      {abilitiesFetched &&
        abilitiesFetched.map((ability) => {
          return <span key={ability}>{ability}</span>
        })}
    </>
  )
}
