import { capitalize } from './capitalize'

export const formatWord = (word) => {
  if (!word) return
  const wordToReturn = word.split('-').join(' ').split('_').join(' ')
  return capitalize(wordToReturn)
}

export const formatMethod = (arr) => {
  let string = ''
  arr.map((word) => {
    string += formatWord(word) + ', '
  })
  string = string.slice(0, -2)
  return string
}
