class Schema {
  constructor (schemaText) {
    this.schema = {};
    schemaText.split(' ')
    .map(item => {
      let flagToVal = item.split(':');
      this.schema[flagToVal[0]] = flagToVal[1];
    });
  }

  getValue ({flagName, value}) {
    let type = this.schema[flagName];
    switch (type) {
      case 'boolean':
        if (value === 'true') {
          return true;
        }
        return false;
      case 'integer':
        if (value) {
          return value * 1;
        }
        return 0;
      case 'string':
        if (value) {
          return value;
        }
        return '';
      case 'stringArray':
        if (value) {
          return value;
        } 
        return [''];
      case 'integerArray':
        if (value.length > 0) {
          return value.map(item => item*1);
        }
        return [0];
      default:
        return value;
    }
  }
}

export default Schema;