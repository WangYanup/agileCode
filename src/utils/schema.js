import LabelParams from "./label";
class Schema {
  constructor (label, val) {
    this.label = label;
    this.val = val;
  }

  transformLabelVal () {
    let type = Schema.getLabelType(this.label);
    switch (type) {
      case 'boolean':
          if (this.val === 'false') {
            this.val = false;
          } else
          if (this.val === 'true') {
            this.val = true;
          } else {
            Schema.outErrVal(this.label);
          }
        break;
      case 'number':
          if (!isNaN(parseInt(this.val))) {
            this.val = parseInt(this.val);
          } else {
            Schema.outErrVal(this.label);
          }
        break;
      case 'string':
          this.val = this.val.toString();
        break;
      default:
          Schema.outErrVal(this.label);
    }
  }

  static outErrVal (label) {
    throw new Error('标签' + label + '值不是规定的类型');
  }

  static isHaveLabel (label) {
    return LabelParams.some(item => {
      if (item.label === label) {
        return true;
      }
    });
  }

  static isLableType (label, val) {
    return LabelParams.some(item => {
      if (item.label === label && typeof val === item.type) {
        return true;
      }
    });
  }

  static getLabelType (label) {
    let labelArr = LabelParams.filter(item => {
      if (item.label === label) {
        return item;
      }
    });

    return labelArr[0].type;
  }

  static outDefaultVal (label) {
    let defaultVal = null;
    LabelParams.forEach(item => {
      if (item.label === label) {
        defaultVal = item.default;
      }
    });
    return defaultVal;
  }
}

export default Schema;