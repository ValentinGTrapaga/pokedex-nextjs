import { useEffect, useState } from 'react'

export const useFetchPokemon = (id) => {
  const [pokemon, setPokemon] = useState({})
  const [abilities, setAbilities] = useState({})
  const [species, setSpecies] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch('https://pokeapi.co/api/v2/pokemon/' + id)
      .then((res) => res.json())
      .then((data) => {
        const { abilities, species } = data
        setPokemon(data)
        setAbilities(abilities)
        setSpecies(species)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }, [id])

  return { pokemon, loading, abilities, species }
}
