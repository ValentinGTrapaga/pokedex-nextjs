import { capitalize } from './capitalize'

export const formatWord = (word) => {
  const wordToReturn = word.split('-').join(' ')
  return capitalize(wordToReturn)
}
