import { assert } from "chai";
import Command from "../../src/utils/command";

describe('test command', () => {
  it('测试输入查许输入命令的值', () => {
    let command = new Command('-l -p 8080 -d /usr/logs');

    assert.equal(command.getValue({flagName: 'l'}), null);
    assert.equal(command.getValue({flagName: 'p'}), '8080');
    assert.equal(command.getValue({flagName: 'd'}), '/usr/logs');
  });

  it('测试输入查许输入命令的值, 值为负数', () => {
    let command = new Command('-l -p -9 -d /usr/logs');

    assert.equal(command.getValue({flagName: 'p'}), '-9');
  });

  it('测试输入查许输入命令的值, 值为数组', () => {
    let command = new Command('-l -p -9 -g this,is,a,list -d 1,2,-3,4,5');

    assert.deepEqual(command.getValue({flagName: 'g'}), ['this', 'is', 'a', 'list']);
    assert.deepEqual(command.getValue({flagName: 'd'}), ['1', '2', '-3', '4', '5']);
  });
});