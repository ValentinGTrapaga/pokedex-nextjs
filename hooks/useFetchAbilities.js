import { useEffect, useState } from 'react'
import { capitalize } from 'utils/capitalize'
import { filterEnglishAbility } from 'utils/filterEnglishAbility'

async function fetchAllAbilities(abilitiesUrls) {
  let abilitiesArr = []
  Promise.all(abilitiesUrls.map((url) => fetch(url)))
    .then((responses) => Promise.all(responses.map((res) => res.json())))
    .then((res) =>
      res.forEach((res) => {
        const abilityName = res.name
        const abilityEnglish = filterEnglishAbility(res.effect_entries)
        const abilityDesc = abilityEnglish[0].effect
        const abilityToAdd = `${capitalize(abilityName)}: ${abilityDesc}`
        abilitiesArr.push(abilityToAdd)
      })
    )
    .catch((error) => {
      console.log(error)
    })
  return abilitiesArr
}

export const useFetchAbilities = (abilitiesObj) => {
  const [abilitiesFetched, setAbilitiesFetched] = useState([])
  const abilitiesUrls = abilitiesObj.map((ability) => ability.ability.url)

  useEffect(() => {
    fetchAllAbilities(abilitiesUrls)
      .then((res) => {
        setAbilitiesFetched(res)
      })
      .catch((err) => console.log(err))
  }, [abilitiesObj])

  return abilitiesFetched
}
