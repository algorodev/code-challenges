import { convertCharToASCII } from './convertCharToASCII'

describe('Convert Chart To ASCII', () => {
  describe('happy paths', () => {
    it('should convert a single letter char', () => {
      expect(convertCharToASCII('A')).toStrictEqual(65)
    })

    it('should convert a number char', () => {
      expect(convertCharToASCII('5')).toStrictEqual(53)
    })

    it('should convert a special char', () => {
      expect(convertCharToASCII('$')).toStrictEqual(36)
    })
  })

  describe('edge cases', () => {
    it('should throw an error because empty string', () => {
      expect(() => convertCharToASCII('')).toThrowError('Input must be a single character string')
    })

    it('should throw an error because multiple char string', () => {
      expect(() => convertCharToASCII('test')).toThrowError('Input must be a single character string')
    })
  })
})
