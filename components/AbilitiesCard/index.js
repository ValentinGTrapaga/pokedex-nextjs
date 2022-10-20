import { useAbilities } from 'hooks/useAbilities'
import React from 'react'

export const AbilitiesCard = ({ abilities }) => {
  const { abilitiesFetched, error } = useAbilities(abilities)

  return (
    <div className='container md:col-span-1 border-4 border-black bg-slate-50 text-sm md:text-base'>
      <h1 className='text-base md:text-lg text-center text-gray-400 py-3 border-b-2 border-black'>
        Abilities
      </h1>
      <div className='h-full '>
        {!error &&
          abilitiesFetched.map((ability, index) => {
            return (
              <>
                <p
                  className='p-3 py-2 text-[11px] leading-5 text-justify border-b-2 border-black last:border-hidden'
                  key={index}>
                  {ability}
                </p>
              </>
            )
          })}
      </div>
    </div>
  )
}
