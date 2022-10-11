import { useEffect, useState } from 'react'

export const useFetchPokemon = (id) => {
  const [pokemon, setPokemon] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    id &&
      fetch('https://pokeapi.co/api/v2/pokemon/' + id)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setPokemon(data)
          setLoading(false)
        })
        .catch((error) => console.log(error))
  }, [id])

  return { pokemon, loading }
}
