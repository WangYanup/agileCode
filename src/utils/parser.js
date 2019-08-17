import Schema from "./schema";

class Parser {
  constructor (param) {
    this.param = param;
    this.resultObj = {};
    this.arr = null;
  }

  splitString () {
    this.arr = this.param.split(' ');
    return this.arr;
  }

  formatStringToObj () {
    let obj = {
      label: {},
      val: {}
    };

    this.arr.forEach((item, index) => {
      if (this.isLabel(item)) {
        obj.label[index] = this.formatLabel(item);
      } else {
        obj.val[index] = item;
      }
    });
    
    return obj;
  }

  verifyLabelLegality (obj) {
    for (let i in obj.label) {
      if (!Schema.isHaveLabel(obj.label[i])) {
        throw new Error(obj.label[i] + '标签不在支持范围');
      }
    }

    return true;
  }

  formatParamToObj (param) {    
    for (let i in param.label) {
      let val = param.val[parseInt(i) + 1];
      if (val) {
        this.resultObj[param.label[i]] = val;
      } else {
        this.resultObj[param.label[i]] = Schema.outDefaultVal(param.label[i]);
      }
    }
  }

  refreshLabelVal () {
    for (let i in this.resultObj) {
      if (!Schema.isLableType(i, this.resultObj[i])) {
        let itemSchema = new Schema(i, this.resultObj[i]);  
        itemSchema.transformLabelVal();
        this.resultObj[i] = itemSchema.val;
      }
    }
  }

  isLabel (text) {
    return text.indexOf('-') > -1;
  }

  formatLabel (text) {
    return text.substring(1);
  }
}

export default Parser;