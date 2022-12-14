import Head from 'node_modules/next/head'
import { NavBar } from 'components/NavBar/index'
import PokeCardSmall from 'components/PokeCardSmall/index'
import { useUpdateHomePage } from 'hooks/useUpdateHomePage'
import { NextNavButton, PrevNavButton } from 'components/NavButton/index'
import { useRouter } from 'node_modules/next/router'
import { motion, AnimatePresence } from 'framer-motion'

const Home = () => {
  const router = useRouter()
  const { offset } = router.query
  const fetchURL = `https://pokeapi.co/api/v2/pokemon?limit=117&offset=${offset}`
  const OFFSET_UPDATE = 117

  if (Number(offset) > 1154 || Number(offset) < 0) {
    router.push('/p/0')
  }

  const { pokemonsUrls } = useUpdateHomePage(fetchURL)

  const pokemonsCardsMini = pokemonsUrls?.map((pokemonUrl) => (
    <PokeCardSmall
      key={pokemonUrl}
      pokemonUrl={pokemonUrl}
    />
  ))
  const offSetNum = Number(offset)

  const next =
    offSetNum + OFFSET_UPDATE < 1200
      ? (offSetNum + OFFSET_UPDATE).toString()
      : null
  let prev = '0'

  if (offSetNum - OFFSET_UPDATE < 0) {
    prev = '0'
  } else if (offSetNum - OFFSET_UPDATE > 0) {
    prev = (offSetNum - OFFSET_UPDATE).toString()
  }

  function handleClickPage(newOffset) {
    router.push(`/p/${newOffset}`)
  }

  return (
    <>
      <Head>
        <title>Pokedex App</title>
        <meta
          name='description'
          content='Generated by create next app'
        />
      </Head>
      <NavBar back={null} />

      <div className='my-6 mx-auto container grid gap-3 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 place-content-center'>
        {pokemonsCardsMini}
      </div>

      <PrevNavButton
        handleClick={() => handleClickPage(prev)}
        url={prev}
        text='prev page'
      />
      <NextNavButton
        handleClick={() => handleClickPage(next)}
        url={next}
        text='next page'
      />
    </>
  )
}

export default Home
