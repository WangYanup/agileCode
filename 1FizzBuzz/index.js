class FizzBuzz {
  getVal (num) {
    let result = ''
    if (this.integral(num, 3) || this.include(num, 3)) {
      result += 'Fizz'
    }

    if (this.integral(num, 5) || this.include(num, 5)) {
      result += 'Buzz'
    }

    if (!result) {
      result = num
    }

    return result
  }

  integral(num, index) {
    return num % index === 0;
  }

  include(num, index) {
    return String(num).indexOf(index) > -1
  }
}

module.exports = FizzBuzz