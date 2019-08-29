import { assert } from "chai";
import Command from "../../src/utils/command";

describe('test_command', () => {
  it('test_get_value', () => {
    let command = new Command('-l false -p 8080 -d /usr/logs');
    assert.equal(command.getValue({flagName: 'l'}), 'false');
    assert.equal(command.getValue({flagName: 'p'}), '8080');
    assert.equal(command.getValue({flagName: 'd'}), '/usr/logs');
  });

  it('test_flag_value_null', () => {
    let command = new Command('-l -p 8080 -d /usr/logs');
    assert.equal(command.getValue({flagName: 'l'}), null);
  });
});