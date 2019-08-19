import Err from "./err";

class HandleSchemaValue {
  static isBoolean (label, val) {
    if (val === 'false') {
      val = false;
    } else 
    if (val === 'true') {
      val = true;
    } else {
      Err.say(label + ' 标签的值不合法, 值为false / true');
    }

    return val;
  }

  static isNumber (label, val) {
    if (!isNaN(val * 1)) {
      val = val * 1;
    } else {
      Err.say(label + ' 标签的值不合法');
    }
    return val;
  }

  static isString (val) {
      return val.toString();
  }

  static isStringArray (val) {
    return val.split(',');

  }

  static isNumberArray (label, val) {
    val = val.split(',');
    val.map((item, index) => {
      if (isNaN(parseInt(item))) {
        Err.say(label + ' 标签的值不合法, 值应为数字列表');
      } else {
        val[index] = parseInt(item);
      }
    });
    return val;
  }
}

export default HandleSchemaValue;