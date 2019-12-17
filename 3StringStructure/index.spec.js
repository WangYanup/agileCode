const assert = require('chai').assert
const StringStructure = require('./index')

describe('test StringStructure', () => {
  it('egg, add is equal', () => {
    let run = new StringStructure('egg', 'add')
    assert.isTrue(run.val())
  })

  it('egg, var is not equal', () => {
    let run = new StringStructure('egg', 'var')
    assert.isFalse(run.val())
  })
})