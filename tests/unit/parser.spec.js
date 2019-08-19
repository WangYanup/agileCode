import { assert } from "chai";
import Parser from "@/utils/parser";
import Schema from "../../src/utils/schema";

describe('testParser', () => {
  let params = '-l -p 8080 -d /usr/logs';
  let parser = new Parser(params);

  it('testGetVal', () => {
    assert.deepEqual(parser.splitArr, ['-l', '-p', '8080', '-d', '/usr/logs']);
  });

  it('testGetLabelAndValObj', () => {
    parser.constLabelObjAndValueObj();
    assert.deepEqual(parser.object, {label: {0: 'l', 1: 'p', 3: 'd'}, value: {2: '8080', 4: '/usr/logs'}});
  });

  it('testConstSchemaObject', () => {
    parser.constSchemaObject();
    assert.deepEqual(parser.resultArr, [new Schema('l'), new Schema('p', 8080), new Schema('d', '/usr/logs')]);
  });

  it('testResult', () => {
    assert.deepEqual(parser.outResult(), {l: false, p: 8080, d: '/usr/logs'});
  });
});

describe('testSchema', () => {
  it ('testGetLabelObj', () => {
    let schema = new Schema('l');
    assert.deepEqual(schema.labelObj, {label: 'l', type: 'boolean', default: false});
  });

  it('testIsAllowUseLabel', () => {
    let schema = new Schema('l');
    assert.isTrue(schema.isAllowUseLabel());
  });

  it('testsetSchemaDefaultValue', () => {
    let schema = new Schema('l');
    schema.setSchemaDefaultValue();
    assert.equal(schema.val, false);
  });

  it('testLabelValType', () => {
    let schema = new Schema('l', 'false');
    schema.verifyLabelValType();
    assert.equal(schema.val, false);

    let schema1 = new Schema('p', '8080');
    schema1.verifyLabelValType();
    assert.equal(schema1.val, 8080);
  });
});