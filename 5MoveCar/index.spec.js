const Assert = require('chai').assert
const { Car } = require('./index')

describe('test MoverCar', () => {
  it('rusult', () => {
    let map = { X: 10, Y: 10 }
    let location = { x: 5, y: 5, position: 'S' }
    let format = { move: "F", position: { L: -1, R: 1 } }
    let car = new Car()
    car.mapInit(map)
    car.LocationInit(location)
    car.run('F5 L1 F5', format)
    Assert.deepEqual(car.getLocation(), {
      x: 0,
      y: 10,
      position: 'E'
    })

    car.run('R2 F3', format)
    Assert.deepEqual(car.getLocation(), {
      x: 3,
      y: 10,
      position: 'W'
    })

    car.run('F5 R1 F2', format)
    Assert.deepEqual(car.getLocation(), {
      x: 8,
      y: 8,
      position: 'N'
    })
  })
})

function run () {
  let map = { X: 100, Y: 100 }
  let location = { x: 20, y: 20, position: 'S' }
  let format = { move: "F", position: { 'L': -1, 'R': 1 } }
  const CAR = new Car()
  CAR.mapInit(map)
  CAR.LocationInit(location)
  CAR.run('F35 L1 F5 R2 F12', format)
  console.log(CAR.getLocation())
}

run()