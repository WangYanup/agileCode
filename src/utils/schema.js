class Schema {
  constructor (shcemaText) {
    this.schema = {};
    shcemaText.split(' ')
      .map(item => item.split(':'))
      .forEach(item => {
        this.schema[item[0]] = item[1];
      });
  }

  getValue ({flagName, value}) {
    let type = this.schema[flagName];
    switch (type) {
      case 'boolean':
        if (value) {
          return value;
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
      default:
        return value;
    }
    
  }
}

export default Schema;