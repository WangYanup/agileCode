import Schema from "./schema";

class Parser {
  constructor (text) {
    this.splitArr = text.split(' ');
    this.object = { label: {}, value: {} };
    this.resultArr = [];
  }

  constLabelObjAndValueObj () {
    this.splitArr.forEach((item, index) => {
      if (item.indexOf('-') === 0) {
        this.object.label[index] = item.substring(1);
      } else {
        this.object.value[index] = item;
      }
    });
  }

  constSchemaObject () {
    for (let i in this.object.label) {
      this.resultArr.push(new Schema(this.object.label[i], this.object.value[i * 1 + 1]));
    }
  }

  outResult () {
    let resultObj = {};
    this.resultArr.forEach(item => {
      resultObj[item.label] = item.val;
    });

    return resultObj;
  }
}

export default Parser;