class StringStructure {
  constructor (stringOne, stringTwo) {
    this.resultOne = this.structureRule(stringOne)
    this.resultTwo = this.structureRule(stringTwo)
  }

  structureRule (string) {
    let result = []
    let sum = 1
    string.split('').map((item, index, arr) => {
      let next = arr[index + 1]
      if (!this.isEqual(item, next)) {
        result.push(sum)
        return
      }

      if (this.isEqual(item, next)) {
        sum ++
      }
    })
    return result.join('')
  }

  isEqual(item, next) {
    return item === next;
  }

  val () {
    return this.resultOne === this.resultTwo
  }
}

module.exports = StringStructure