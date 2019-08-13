class Utils {
  print (num) {
    let text = '';

    if (this.isDivisibleCalculate(num, 3) || this.isIncludeNumber(num, 3)) {
      text += 'fizz';
    }

    if (this.isDivisibleCalculate(num, 5) || this.isIncludeNumber(num, 5)) {
      text += 'buzz';
    }

    if (text === '') {
      text = num.toString();
    }

    return text;
  }

  isDivisibleCalculate (num, val) {
    return num % val === 0;
  }

  isIncludeNumber (num, val) {
    return num.toString().indexOf(val) > -1;
  }
}

export default new Utils();