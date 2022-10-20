const { evChain, evChain2, evChain3 } = require('./testChains')

export function formatChain(evChain) {
  const { chain } = evChain
  const first = {
    pokemon: chain.species.name,
    pokemonMethod: evChain.baby_trigger_item?.name
  }
  let next = evChain.chain.evolves_to.map((evChain) =>
    formatInnerEvolution(evChain)
  )
  return { first, next }
}

function formatInnerEvolution(chain) {
  // console.log('chain: ', chain)
  let pokemon = chain.species
  // console.log('chain.species: ', chain.species)
  let pokemonMethod = []
  chain.evolution_details.forEach((evDetails) => {
    // console.log(evDetails)
    let arrDesc = []
    for (const props in evDetails) {
      if (evDetails[props]) {
        // console.log('props: ', props)
        // console.log('evDetails[props]: ', evDetails[props])
        const item = `${props}: ${evDetails[props]}`

        if (typeof evDetails[props] === 'object') {
          arrDesc.push(evDetails[props].name)
        } else {
          arrDesc.push(item)
        }
        // arrDesc.push(item)
        // const item = `${key}: ${value}`
      }
    }
    // console.log(arrDesc)
    // console.log('--- Item ended ---')
    pokemonMethod.push(arrDesc)
  })
  // console.log('--- Evolution ended ---')
  let pokemonNext = chain.evolves_to.map((evChain) =>
    formatInnerEvolution(evChain)
  )
  // console.log('Pokemon: ', pokemon)
  // console.log('pokemonMethod: ', pokemonMethod)
  // console.log('pokemonNext: ', pokemonNext)
  return { pokemon, pokemonMethod, pokemonNext }
}

// const { first, next } = formatChain(evChain3)
// console.log('----------------------')
// console.log('----------------------')
// console.log('----------------------')
// console.log('----------------------')
// console.log('----------------------')
// console.log('----------------------')
// console.log('----------------------')
// console.log(first, next)
// console.log(formatInnerEvolution(evChain.chain.evolves_to[0]))
