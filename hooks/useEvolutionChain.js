import { useEffect, useState } from 'react'

import { formatChain } from 'utils/formatChain'

export const useEvolutionChain = (species) => {
  const [evChain, setEvChain] = useState({ prev: [], next: [] })
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEvChain = async () => {
      setLoading(true)
      try {
        console.log('species: ', species)
        const speciesRes = await fetch(species.url)
        const speciesData = await speciesRes.json()
        const { evolution_chain } = speciesData
        console.log('ev_chain: ', evolution_chain)
        const evChainRes = await fetch(evolution_chain.url)
        const evChainData = await evChainRes.json()
        console.log(evChainData)
        const { first, next } = formatChain(evChainData)
        console.log('firstPokemon: ', first.pokemon, first.pokemonMethod)
        console.log('next: ', next)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(error)
      }
    }

    fetchEvChain()
    setLoading(false)
  }, [species])
  return { evChain, error, loading }
}
