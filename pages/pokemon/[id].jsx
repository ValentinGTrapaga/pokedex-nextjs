import React from 'react'
import { Pokecard } from '../../components/PokeCard/index'
import { useRouter } from 'node_modules/next/router'
import { useFetchPokemon } from 'hooks/useFetchPokemon'
import { NavBar } from 'components/NavBar/index'
import { AbilitiesCard } from 'components/AbilitiesCard/index'
import { EvolutionCard } from 'components/EvolutionCard/index'
import FadeLoader from 'node_modules/react-spinners/FadeLoader'
import { motion } from 'framer-motion'

const Pokemon = () => {
  const router = useRouter()
  const { id } = router.query

  const container = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    },
    hidden: { opacity: 0 }
  }

  const { pokemon, loading, abilities, species } = useFetchPokemon(id)
  return (
    <>
      <NavBar back />
      <motion.div
        variants={container}
        initial='hidden'
        animate='visible'
        className='text-black container flex flex-col items-start justify-center md:flex md:flex-row gap-2 mx-auto'>
        {!loading ? (
          <Pokecard pokemon={pokemon} />
        ) : (
          <div className='flex flex-col items-center h-full opacity-50'>
            <FadeLoader />
          </div>
        )}
        <div>
          {!loading ? (
            <AbilitiesCard abilities={abilities} />
          ) : (
            <div className='flex flex-col items-center h-full opacity-50'>
              <FadeLoader />
            </div>
          )}
          {!loading ? (
            <EvolutionCard species={species} />
          ) : (
            <div className='flex flex-col items-center h-full opacity-50'>
              <FadeLoader />
            </div>
          )}
        </div>
      </motion.div>
    </>
  )
}

export default Pokemon
