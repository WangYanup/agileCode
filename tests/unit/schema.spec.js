import { assert } from "chai";
import Schema from "../../src/utils/schema";

describe('test schema', () => {
  it('测试查询构造器的值', () => {
    let schema = new Schema('l:boolean p:integer d:string g:stringArray');

    assert.equal(schema.getValue({flagName: 'l', value: false}), false);
    assert.equal(schema.getValue({flagName: 'l', value: null}), false);
    assert.isTrue(schema.getValue({flagName: 'p', value: '8080'}) === 8080);
    assert.equal(schema.getValue({flagName: 'd', value: '/usr/logs'}), '/usr/logs');
    assert.deepEqual(schema.getValue({flagName: 'g', value: ['this', 'is', 'a', 'list']}), ['this', 'is', 'a', 'list']);
    assert.deepEqual(schema.getValue({flagName: 'g', value: ['this', 'is', 'a', 'list']}), ['this', 'is', 'a', 'list']);
  });

  it('测试查询构造器的值，值为数字数组', () => {
    let schema = new Schema('l:boolean p:integer d:integerArray g:stringArray');

    assert.deepEqual(schema.getValue({flagName: 'd', value: ['1', '2', '-3', '4', '5']}), [1, 2, -3, 4, 5]);
  });
});