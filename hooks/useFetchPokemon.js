import { useEffect, useState } from 'react'

export const useFetchPokemon = (id) => {
  const [pokemon, setPokemon] = useState({})
  const [abilities, setAbilities] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch('https://pokeapi.co/api/v2/pokemon/' + id)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data)
        setAbilities(data.abilities)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }, [id])

  return { pokemon, loading, abilities }
}
