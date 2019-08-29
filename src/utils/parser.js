class Parser {
  constructor (schema, command) {
    this.schema = schema;
    this.command = command;
  }

  getValue ({flagName}) {
    return this.schema.getValue({flagName, value:this.command.getValue({flagName})});
  }
}

export default Parser;