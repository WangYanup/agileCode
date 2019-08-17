import { assert } from "chai";
import Parser from "@/utils/parser";
import Schema from "../../src/utils/schema";

describe('test parser', () => {

  it('testSplitString', () => {
    let params = '-l -p 8080 -d /usr/logs';
    let parser = new Parser(params);
    parser.splitString();
    assert.deepEqual(parser.arr, ['-l', '-p', '8080', '-d', '/usr/logs']);
  });

  it('testStringToObject', () => {
    let params = '-l -p 8080 -d /usr/logs';
    let parser = new Parser(params);
    parser.splitString();
    assert.deepEqual(parser.formatStringToObj(), {label:{0: 'l', 1: 'p', 3: 'd'}, val: {2: '8080', 4: '/usr/logs'}});
  });

  it('testVerifyLabelLegality', () => {
    let params = '-l -p 8080 -d /usr/logs';
    let parser = new Parser(params);
    parser.splitString();
    assert.isTrue(parser.verifyLabelLegality(parser.formatStringToObj()));
  });


  it('testOutObjectFromString', () => {
    let params = '-l -p 8080 -d /usr/logs';
    let parser = new Parser(params);
    parser.splitString();
    parser.formatParamToObj(parser.formatStringToObj());
    assert.deepEqual(parser.resultObj, {'l': false, 'p': '8080', 'd': '/usr/logs'});
  });

  it('testRefreshLabelValForBooleanAndNumber', () => {
    let params = '-l -p 8080 -d /usr/logs';
    let parser = new Parser(params);
    parser.splitString();
    let stringObj = parser.formatStringToObj();
    parser.formatParamToObj(stringObj);
    parser.verifyLabelLegality(stringObj);
    parser.refreshLabelVal();
    assert.deepEqual(parser.resultObj, {'l': false, 'p': 8080, 'd': '/usr/logs'});

    let params2 = '-l true -p 8080 -d /usr/logs';
    let parser2 = new Parser(params2);
    parser2.splitString();
    let stringObj2 = parser2.formatStringToObj();
    parser2.formatParamToObj(stringObj2);
    parser.verifyLabelLegality(stringObj2);
    parser2.refreshLabelVal();
    assert.deepEqual(parser2.resultObj, {'l': true, 'p': 8080, 'd': '/usr/logs'});

    let params3 = '-l -p -d ';
    let parser3 = new Parser(params3);
    parser3.splitString();
    let stringObj3 = parser3.formatStringToObj();
    parser3.formatParamToObj(stringObj3);
    parser.verifyLabelLegality(stringObj3);
    parser3.refreshLabelVal();
    assert.deepEqual(parser3.resultObj, {'l': false, 'p': 0, 'd': ''});
  });

});

describe('test schema', () => {

  it('testSchemaHaveLabel', () => {
    assert.isTrue(Schema.isHaveLabel('l'));
    assert.isNotTrue(Schema.isHaveLabel('f'));
  });

  it('testSchemaLabelValType', () => {
    assert.isTrue(Schema.isLableType('l', false));
    assert.isNotTrue(Schema.isLableType('p', false));
  });

  it('testOutLabelDefaultVal', () => {
    assert.equal(Schema.outDefaultVal('l'), false);
    assert.equal(Schema.outDefaultVal('p'), 0);
    assert.equal(Schema.outDefaultVal('d'), '');
  });

  it('testTransformLabelValType', () => {
    let schema = new Schema('p', '8080');
    schema.transformLabelVal();
    assert.deepEqual(schema.val, 8080);
  });
});
