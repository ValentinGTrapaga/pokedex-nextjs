import { useEffect, useMemo, useState } from 'react'
import { formatAbility } from 'utils/formatAbility'

async function fetchAllAbilities(abilitiesUrls) {
  return Promise.all(abilitiesUrls.map((url) => fetch(url)))
    .then((responses) => Promise.all(responses.map((res) => res.json())))
    .catch((error) => {
      return error
    })
}

//THANKS TO u/PM_ME_SOME_ANY_THING

export const useFetchAbilities = (abilitiesObj) => {
  const [abilitiesFetched, setAbilitiesFetched] = useState([])
  const abilitiesUrls = useMemo(
    () => abilitiesObj.map((ability) => ability.ability.url),
    [abilitiesObj]
  )
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchAllAbilities(abilitiesUrls)
      .then((res) => {
        setAbilitiesFetched(
          res.map((ability) => {
            return formatAbility(ability)
          })
        )
      })
      .catch((err) => setError(err))
  }, [abilitiesUrls])

  return { abilitiesFetched, error }
}
