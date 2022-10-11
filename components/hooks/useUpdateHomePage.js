import { useEffect, useState } from 'react'

export function useUpdateHomePage(fetchURL) {
  const [pokemonsUrls, setPokemonUrls] = useState(null)
  const [next, setNext] = useState('')
  const [prev, setPrev] = useState('')

  useEffect(() => {
    fetch(fetchURL)
      .then((res) => res.json())
      .then((response) => {
        const { previous, next, results } = response
        const pokemonsArr = results.map((pokemon) => pokemon.url)
        setPokemonUrls(pokemonsArr)
        setPrev(previous)
        setNext(next)
      })
  }, [fetchURL])

  return { pokemonsUrls, next, prev }
}
