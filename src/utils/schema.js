import Err from "./err";
import HandleSchemaValue from './index';

class Schema {
  constructor (label, val) {
    this.label = label;
    this.val = val;
    this.labelObj = null;

    this.getLabelObj();
    this.isAllowUseLabel();
    this.setSchemaDefaultValue();
    this.verifyLabelValType();
  }

  getLabelObj () {
    let filterArr = Schema.constLabel().filter(item => {
      return item.label === this.label;
    });
    this.labelObj = filterArr[0];
  }
  
  isAllowUseLabel () {
    if (!this.labelObj) {
      return Err.say(this.label + ' 标签不被支持');
    } else {
      return true;
    }
  }

  setSchemaDefaultValue () {
    if (this.val) {
      return;
    }
    if ('default' in this.labelObj) {
      this.val = this.labelObj.default;
    } else {
      Err.say(this.label + ' 标签需要给定参数值');
    }
  }

  verifyLabelValType () {
    if (typeof this.val == this.labelObj.type) {
      return;
    }

    switch (this.labelObj.type) {
      case 'boolean':
        this.val = HandleSchemaValue.isBoolean(this.label, this.val);
        break;
      case 'number':
        this.val = HandleSchemaValue.isNumber(this.label, this.val);
        break;
      case 'string':
        this.val = HandleSchemaValue.isString(this.val);
        break;
      case 'stringArray':
        this.val = HandleSchemaValue.isStringArray(this.val);
        break;
      case 'numberArray':
        this.val = HandleSchemaValue.isNumberArray(this.label, this.val);
        break;
      default:
        Err.say(this.label + ' 标签的值不合法');
    }
  }

  static constLabel () {
    return [
      {
        label: 'l',
        type: 'boolean',
        default: false
      },
      {
        label: 'p',
        type: 'number',
        default: 0
      },
      {
        label: 'd',
        type: 'string',
        default: ''
      },
      {
        label: 'g',
        type: 'stringArray',
        default: ['']
      },
      {
        label: 'f',
        type: 'numberArray',
        default: [0]
      },
    ];
  }
}

export default Schema;