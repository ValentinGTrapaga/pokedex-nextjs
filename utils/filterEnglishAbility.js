export const filterEnglishAbility = (abilitiesArr) => {
  const abilityFiltered = abilitiesArr.filter(
    (effect) => effect.language.name === 'en'
  )
  return abilityFiltered[0].effect
}
