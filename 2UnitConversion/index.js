class UnitConversion {
  constructor () {
    this.scaleTable = {
      'y': 36,
      'f': 12,
      'i': 1
    }
    this.inScale = 0
    this.outScale = 0
  }

  transform (inUnit, outUnit) {
    this.inScale = this.scaleTable[inUnit]
    this.outScale = this.scaleTable[outUnit]
    return this
  }

  val (i) {
    return i * this.inScale / this.outScale
  }
}

module.exports = UnitConversion