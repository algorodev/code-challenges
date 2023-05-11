import { calculateAreaOfTriangle } from './calculateAreaOfTriangle'

describe('Calculate Area of Triangle', () => {
  describe('happy paths', () => {
    it('should calculate the area as expected', () => {
      expect(calculateAreaOfTriangle(5, 10)).toStrictEqual(25)
    })
  })

  describe('edge cases', () => {
    it('should throw an error because base input is 0', () => {
      expect(() => calculateAreaOfTriangle(0, 10)).toThrowError('Input must be greater than 0')
    })

    it('should throw an error because height input is 0', () => {
      expect(() => calculateAreaOfTriangle(10, 0)).toThrowError('Input must be greater than 0')
    })

    it('should throw an error because base input is negative', () => {
      expect(() => calculateAreaOfTriangle(-2, 10)).toThrowError('Input must be greater than 0')
    })

    it('should throw an error because height input is negative', () => {
      expect(() => calculateAreaOfTriangle(10, -2)).toThrowError('Input must be greater than 0')
    })
  })
})
