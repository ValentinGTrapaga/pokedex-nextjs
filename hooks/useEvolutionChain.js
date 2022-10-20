import { useEffect, useState } from 'react'

import { formatChain } from 'utils/formatChain'

export const useEvolutionChain = (species) => {
  const [evChain, setEvChain] = useState({ first: {}, next: [] })
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEvChain = async () => {
      setLoading(true)
      try {
        const speciesRes = await fetch(species.url)
        const speciesData = await speciesRes.json()
        const { evolution_chain } = speciesData
        const evChainRes = await fetch(evolution_chain.url)
        const evChainData = await evChainRes.json()
        const evChain = formatChain(evChainData)
        console.log(formatChain(evChainData))
        setEvChain(evChain)
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
