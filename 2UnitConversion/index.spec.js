const assert = require('chai').assert
const UnitConversion = require('./index')

describe('test Unit Conversion', () => {
  it('1foot = 12inch', () => {
    let conversion = new UnitConversion()
    assert.equal(conversion.transform('f', 'i').val(1), 12)
  })

  it('1yard = 3foot', () => {
    let conversion = new UnitConversion()
    assert.equal(conversion.transform('y', 'f').val(1), 3)
  })

  it('12inch = 1foot', () => {
    let conversion = new UnitConversion()
    assert.equal(conversion.transform('i', 'f').val(12), 1)
  })

  it('36inch = 1yard', () => {
    let conversion = new UnitConversion()
    assert.equal(conversion.transform('i', 'y').val(36), 1)
  })
})