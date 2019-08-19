import { assert } from "chai";
import Parser from "@/utils/parser";
import Schema from "@/utils/schema";

describe('testParser', () => {
  let params = '-l -p 8080 -d /usr/logs -g this,is,a,list -f 1,2,-3,4';
  let parser = new Parser(params);

  it('testGetVal', () => {
    assert.deepEqual(parser.splitArr, ['-l', '-p', '8080', '-d', '/usr/logs', '-g', 'this,is,a,list', '-f', '1,2,-3,4']);
  });

  it('testGetLabelAndValObj', () => {
    parser.constLabelObjAndValueObj();
    assert.deepEqual(parser.object, {label: {0: 'l', 1: 'p', 3: 'd', 5: 'g', 7: 'f'}, value: {2: '8080', 4: '/usr/logs', 6: 'this,is,a,list', 8: '1,2,-3,4'}});
  });

  it('testConstSchemaObject', () => {
    parser.constSchemaObject();
    assert.deepEqual(parser.resultArr, [new Schema('l'), new Schema('p', 8080), new Schema('d', '/usr/logs'), new Schema('g', 'this,is,a,list'), new Schema('f', '1,2,-3,4')]);
  });

  it('testResult', () => {
    assert.deepEqual(parser.outResult(), {l: false, p: 8080, d: '/usr/logs', g: ['this', 'is', 'a', 'list'], f: [1, 2, -3, 4]});
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
    assert.equal(schema.val, false);

    let schema1 = new Schema('g', 'this,is,a,list');
    assert.deepEqual(schema1.val, ['this', 'is', 'a', 'list']);
  });
});