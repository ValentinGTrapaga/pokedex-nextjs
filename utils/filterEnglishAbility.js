export const filterEnglishAbility = (abilitiesArr) => {
  return abilitiesArr.filter((effect) => effect.language.name === 'en')
}
