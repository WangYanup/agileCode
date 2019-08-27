import Err from "./err";

class HandleSchemaValue {
  constructor (label, val) {
    this.label = label;
    this.val = val;
  }
  isBoolean () {
    if (this.val === 'false') {
      this.val = false;
    } else 
    if (this.val === 'true') {
      this.val = true;
    } else {
      Err.say(this.label + ' 标签的值不合法, 值为false / true');
    }

    return this.val;
  }

  isNumber () {
    if (!isNaN(this.val * 1)) {
      this.val = this.val * 1;
    } else {
      Err.say(this.label + ' 标签的值不合法');
    }
    return this.val;
  }

  isString () {
      return this.val.toString();
  }

  isStringArray () {
    return this.val.split(',');
  }

  isNumberArray () {
    this.val = this.val.split(',');
    this.val.map((item, index) => {
      if (isNaN(parseInt(item))) {
        Err.say(this.label + ' 标签的值不合法, 值应为数字列表');
      } else {
        this.val[index] = parseInt(item);
      }
    });
    return this.val;
  }
}

export default HandleSchemaValue;