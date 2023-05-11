export const calculateAreaOfTriangle = (base: number, height: number) => {
  if (base <= 0 || height <= 0) throw new Error('Input must be greater than 0')

  return (base * height) / 2
}
