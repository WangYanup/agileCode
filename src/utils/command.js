class Command {
  constructor (commandText) {
    this.command = {};
    let commandArr = commandText.split(' ');
    commandArr.forEach((item, index) => {
      let flag = null;
      let value = null;
      if (this.isFlag(item)) {
        flag = item.substring(1);
        
        let next = commandArr[index + 1];
        if (!this.isFlag(next)) {
          value = next;
        }

        this.command[flag] = value;
      }
    });
  }

  isFlag (item) {
    return item.indexOf('-') === 0 && isNaN(item * 1);
  }

  getValue ({flagName}) {
    return this.command[flagName];
  }
}

export default Command;