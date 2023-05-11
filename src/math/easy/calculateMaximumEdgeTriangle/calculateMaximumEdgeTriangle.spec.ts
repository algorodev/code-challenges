import { calculateMaximumEdgeTriangle } from './calculateMaximumEdgeTriangle'

describe('Calculate Maximum Edge of Triangle', () => {
  describe('happy path', () => {
    it('should calculate third edge as expected', () => {
      expect(calculateMaximumEdgeTriangle(4, 8)).toStrictEqual(11)
    })
  })

  describe('edge cases', () => {
    it('should throw an error because negative input', () => {
      expect(() => calculateMaximumEdgeTriangle(-3, 19)).toThrowError('Input must be greater than 0')
    })

    it('should throw an error because 0 as input', () => {
      expect(() => calculateMaximumEdgeTriangle(0, 10)).toThrowError('Input must be greater than 0')
    })
  })
})
