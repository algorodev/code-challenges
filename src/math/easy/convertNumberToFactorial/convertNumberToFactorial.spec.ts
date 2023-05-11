import { convertNumberToFactorial } from './convertNumberToFactorial'

describe('Convert Number To Factorial', () => {
  describe('happy paths', () => {
    it('should return the expected value', () => {
      expect(convertNumberToFactorial(3)).toStrictEqual(6)
    })

    it('should return 1 because the input is 0', () => {
      expect(convertNumberToFactorial(0)).toStrictEqual(1)
    })

    it('should return 1 because the input is 1', () => {
      expect(convertNumberToFactorial(1)).toStrictEqual(1)
    })
  })

  describe('edge cases',  () => {
    it('should throw an error because receive 0', () => {
      expect(() => convertNumberToFactorial(-1)).toThrowError('Input must be equal or greater than 0')
    })

    it('should throw an error because receive a decimal', () => {
      expect(() => convertNumberToFactorial(3.5)).toThrowError('Input must be equal or greater than 0')
    })
  })
})
