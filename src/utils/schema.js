import Err from "./err";

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
        if (this.val === 'false') {
          this.val = false;
        } else 
        if (this.val === 'true') {
          this.val = true;
        } else {
          Err.say(this.label + ' 标签的值不合法');
        }
        break;
      case 'number':
        if (!isNaN(this.val * 1)) {
          this.val = this.val * 1;
        } else {
          Err.say(this.label + ' 标签的值不合法');
        }
        break;
      case 'string':
        this.val = this.val.toString();
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
      }
    ];
  }
}

export default Schema;