import { assert } from "chai";
import Schema from "../../src/utils/schema";

describe('test schema', () => {
  let schema = new Schema('l:boolean p:integer d:string');
  it('test_boolean', () => {
    assert.equal(schema.getValue({flagName: 'l', value: true}), true);
    assert.equal(schema.getValue({flagName: 'l', value: null}), false);
  });

  it('test_integer', () => {
    assert.isTrue(schema.getValue({flagName: 'p', value: '8080'}) === 8080);
    assert.isTrue(schema.getValue({flagName: 'p', value: '-9'}) === -9);
  });

  it('test_string', () => {
    assert.equal(schema.getValue({flagName: 'd', value: '/usr/logs'}), '/usr/logs');
  });

});