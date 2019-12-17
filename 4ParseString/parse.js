class Parse {
  constructor(string) {
    this.targetObj = {}
    string.split(' ').map((item, index, arr) => {
      let tag = ''
      let val = ''
      if (this.isTag(item)) {
        tag = item.substr(1)
        val = arr[index + 1]
        if (!this.isTag(arr[index + 1])) {
          this.targetObj[tag] = val
        } else {
          this.targetObj[tag] = null
        }
      }
    })
  }

  isTag(item) {
    return item.indexOf('-') === 0
  }

  getVal() {
    return this.targetObj
  }
}

module.exports = Parse