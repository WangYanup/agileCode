class Schema {
  constructor(flags) {
    this.flagObj = {}
    flags.split(' ').map(item => {
      let flag = item.split(':')
      this.flagObj[flag[0]] = flag[1]
    })
  }

  isBoolean(val) {
    if (val === 'true') {
      return true
    }
    return false
  }

  isNumber(val) {
    return val * 1 
  }

  isString(val) {
    return val + ''
  }

  isArrayNumber(val) {
    return val.split(',').map(item => item * 1)
  }

  isArrayString(val) {
    return val.split(',').map(item => item + '')
  }

  getVal({tag, val}) {
    console.log(this.flagObj[tag])
    return this['is'+ this.flagObj[tag]](val)
  }
}

module.exports = Schema