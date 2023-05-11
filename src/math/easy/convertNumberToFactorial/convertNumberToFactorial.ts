export const convertNumberToFactorial = (num: number): number => {
  if (num < 0) throw new Error('Input must be equal or greater than 0')
  if (num === 0 || num === 1) return 1

  return num * convertNumberToFactorial(num - 1)
}
