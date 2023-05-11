export const convertCharToASCII = (char: string) => {
  if (char === '' || char.split('').length > 1)
    throw new Error('Input must be a single character string')

  return char.charCodeAt(0)
}
