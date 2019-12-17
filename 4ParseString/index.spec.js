const Assert = require('chai').assert
const ParseString= require('./index')
const Schema = require('./schema')
const Parse = require('./parse')

describe('test Parse String', () => {
  it('parse string', () => {
    let schema = new Schema('l:Boolean p:Number d:String r:ArrayNumber f:ArrayString')
    let parse = new Parse('-l -p 8080 -d /usr/log -r 1,2,-3 -f a,b,c')
    let parseString = new ParseString(schema, parse)
    Assert.deepEqual(parseString.getVal(), {l: false, p: 8080, d: '/usr/log', r: [1, 2, -3], f: ['a', 'b', 'c']})
  })
})

describe('test Schema', () => {
  it('generate schema', () => {
    let flags = 'l:Boolean p:Number d:String'
    let schema = new Schema(flags)
    Assert.equal(schema.getVal({tag: 'l', val: 'true'}), true)
  })
})

describe('test Parse', () => {
  it('generate parse', () => {
    let string = '-l true -p 8080 -d /usr/log'
    let parse = new Parse(string)
    Assert.deepEqual(parse.getVal(), {l: 'true', p: '8080', d: '/usr/log'})
  })
})

