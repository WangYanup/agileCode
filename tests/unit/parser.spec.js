import { assert } from "chai";
import Parser from "../../src/utils/parser";
import Schema from "../../src/utils/schema";
import Command from "../../src/utils/command";

describe('test parser', () => {
  it('测试通过标签获取到的值', () => {
    let schema = new Schema('l:boolean p:integer d:string');
    let command = new Command('-l -p 8080 -d /usr/logs');
    let parser = new Parser(schema, command);

    assert.equal(parser.getValue({flagName: 'l'}), false);
    assert.equal(parser.getValue({flagName: 'p'}), 8080);
    assert.equal(parser.getValue({flagName: 'd'}), '/usr/logs');
  });

  it('测试通过标签获取到的值,值含有负数', () => {
    let schema = new Schema('l:boolean p:integer d:string');
    let command = new Command('-l -p -9 -d /usr.logs');
    let parser = new Parser(schema, command);

    assert.equal(parser.getValue({flagName: 'p'}), -9);
  });


  it('测试通过标签获取到的值,值含有字符串数组', () => {
    let schema = new Schema('l:boolean p:integer g:stringArray');
    let command = new Command('-l -p -9 -g this,is,a,list');
    let parser = new Parser(schema, command);

    assert.deepEqual(parser.getValue({flagName: 'g'}), ['this', 'is', 'a', 'list']);
  });

  it('测试通过标签获取到的值,值含有数字数组', () => {
    let schema = new Schema('l:boolean p:integer d:integerArray');
    let command = new Command('-l -p -9 -d 1,2,-3,4,5');
    let parser = new Parser(schema, command);

    assert.deepEqual(parser.getValue({flagName: 'd'}), [1, 2, -3, 4, 5]);
  });

});