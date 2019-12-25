class Car {
  constructor() {
    this.map = {}
    this.location = {}
    this.result = {}
  }

  mapInit(map) {
    this.map = map
  }

  LocationInit(location) {
    this.location = location
  }

  run(directive, format) {
    this.result = new DirectiveParse(directive, format).run({
      map: this.map,
      location: this.location
    })
    return this
  }

  getLocation() {
    return this.result
  }
}

class DirectiveParse {
  constructor(string, format) {
    this.directiveArr = []
    this.createDirectiveArr(string, format)
  }

  createDirectiveArr(string, format) {
    this.directiveArr = string.split(' ').map(item => {
      return { key: item.substr(0, 1), val: Number(item.substr(1))}
    }).map(item => {
      if (item.key === format.move) {
        item['type'] = 'move'
        return item
      }

      Object.keys(format.position).forEach(key => {
        if (item.key === key) {
          item['type'] = 'position'
          item['p'] = format.position[key]
        }
      })
      return item
    })

    return this
  }

  run({map, location}) {
    this.directiveArr.forEach(dct => {
      if (dct.type === 'move') {
        this.location = new Move({map, location}).run(dct)
        return
      }

      if (dct.type === 'position') {
        this.location = new Position({map, location}).run(dct)
      }
    })

    return this.location
  }
}

class Move {
  constructor({map, location}) {
    this.map = map
    this.location = location
  }

  run(dct) {
    //{ key: 'F', val: 5, type: 'move' },
    if (this.location.position === 'S') {
      this.location.y  += dct.val
      return this.location
    }
    if (this.location.position === 'N') {
      this.location.y  -= dct.val
      return this.location
    }
    if (this.location.position === 'E') {
      this.location.x  -= dct.val
      return this.location
    }
    if (this.location.position === 'W') {
      this.location.x  += dct.val
      return this.location
    }
  }
}

class Position {
  constructor({map, location}) {
    this.map = map
    this.location = location
  }

  run(dct) {
    //{ key: 'L', val: 1, p: -1, type: 'position' },
    let order = ['S', 'W', 'N', 'E']
    let pIndex = order.indexOf(this.location.position)
    let dctIndex = ((dct.val * dct.p) % 4 + pIndex) % 4
    if (dctIndex > 0) {
      this.location.position = order[dctIndex]
    } else {
      this.location.position = order[dctIndex + 4]
    }

    return this.location
  }
}

module.exports = {
  Car
}