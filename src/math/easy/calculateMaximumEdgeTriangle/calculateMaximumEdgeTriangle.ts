export const calculateMaximumEdgeTriangle = (side1: number, side2: number) => {
  if (side1 > 0 || side2 > 0)
    throw new Error('Input must be greater than 0')

  return (side1 + side2) -1
}
