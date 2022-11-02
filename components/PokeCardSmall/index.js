import React, { useEffect, useState } from 'react'
import { capitalize } from 'utils/capitalize'
import { useRouter } from 'node_modules/next/router'
import Types from '../TypesDiv/index'
import FadeLoader from 'node_modules/react-spinners/FadeLoader'
import { motion, AnimatePresence } from 'framer-motion'

const PokeCardSmall = ({ pokemonUrl, evDesc }) => {
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    setLoading(true)
    fetch(pokemonUrl)
      .then((res) => res.json())
      .then((data) => {
        const { id, name, sprites, types } = data
        setPokemon({ id, name, sprites, types })
        setLoading(false)
      })
  }, [])

  const pushPage = () => {
    router.push(`/pokemon/${pokemon.id}`)
  }

  return (
    <div>
      {loading ? (
        <div className='flex flex-col items-center h-full opacity-50'>
          <FadeLoader />
        </div>
      ) : (
        <>
          <AnimatePresence>
            <motion.article
              key={pokemon.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={pushPage}
              className='max-w-[8rem] border-black border-2 bg-slate-50 flex flex-col h-full justify-between mx-auto cursor-pointer'>
              <motion.img
                key={pokemon.sprites.front_default}
                src={pokemon.sprites.front_default}
                className='w-[8rem] p-2'
                alt={pokemon.name}
              />
              <p className='text-[8px] sm:text-[10px] text-center px-1'>
                #{pokemon.id} {capitalize(pokemon.name)}
              </p>
              <Types pokemon={pokemon} />
            </motion.article>
          </AnimatePresence>
          {evDesc && (
            <p className='text-[8px] sm:text-[10px] text-center px-1'>
              {evDesc}
            </p>
          )}
        </>
      )}
    </div>
  )
}

export default PokeCardSmall
