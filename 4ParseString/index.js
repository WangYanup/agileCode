class ParseString {
  constructor(schema, parse) {
    this.schema = schema
    this.parse = parse
  }

  getVal() {
    let result = this.parse.getVal()
    Object.keys(result).forEach(key => {
      result[key] = this.schema.getVal({tag: key, val: result[key]})
    })
    return result
  }
}

module.exports = ParseString