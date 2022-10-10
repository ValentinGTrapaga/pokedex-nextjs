export const capitalize = (word) => {
  const wordCapitalized = `${word[0].toUpperCase()}${word.slice(1)}`
  return wordCapitalized
}
