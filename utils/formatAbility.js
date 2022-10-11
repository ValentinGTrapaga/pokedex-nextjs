import { capitalize } from './capitalize'
import { filterEnglishAbility } from './filterEnglishAbility'

export function formatAbility(ability) {
  const { name: abilityName, effect_entries: abilityEntries } = ability
  const abilityEnglish = filterEnglishAbility(abilityEntries)
  const abilityToAdd = `${capitalize(abilityName)}: ${abilityEnglish}`
  return abilityToAdd
}
