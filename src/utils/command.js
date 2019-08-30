class Command {
  constructor (commandText) {
    this.command = {};
    commandText.split(' ').forEach((item, index, arr) => {
      let flag = null;
      let value = null;
      if (this.isFlag(item)) {
        flag = item.substring(1);
        let next = arr[index + 1];

        if (!this.isFlag(next)) {
          value = this.FlagValue(next);
        }
        this.command[flag] = value;
      }
    });
  }

  isFlag (item) {
    return item.indexOf('-') === 0 && isNaN(item * 1);
  }

  FlagValue (item) {
    if (item.indexOf(',') > -1) {
      return item.split(',');
    }

    return item;
  }

  getValue ({flagName}) {
    return this.command[flagName];
  }
}

export default Command;