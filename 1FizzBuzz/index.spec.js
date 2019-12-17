const Assert = require('chai').assert
const FizzBuzz = require('./index')

describe('test FizzBuzz', () => {
  it('input 1 out 1', () => {
    let game = new FizzBuzz()
    Assert.equal(game.getVal(1), 1)
  })

  it('input 3 out Fizz', () => {
    let game = new FizzBuzz()
    Assert.equal(game.getVal(3), 'Fizz')
  })

  it('input 5 out Buzz', () => {
    let game = new FizzBuzz()
    Assert.equal(game.getVal(5), 'Buzz')
  })

  it('input 15 out FizzBuzz', () => {
    let game = new FizzBuzz()
    Assert.equal(game.getVal(15), 'FizzBuzz')
  })

  it('input 31 out Fizz', () => {
    let game = new FizzBuzz()
    Assert.equal(game.getVal(31), 'Fizz')
  })

  it('input 65 out Buzz', () => {
    let game = new FizzBuzz()
    Assert.equal(game.getVal(65), 'Buzz')
  })

  it('input 35 out FizzBuzz', () => {
    let game = new FizzBuzz()
    Assert.equal(game.getVal(35), 'FizzBuzz')
  })
})