import { assert } from "chai";
import Parser from "../../src/utils/parser";
import Schema from "../../src/utils/schema";
import Command from "../../src/utils/command";

describe('test parser', () => {

  it('测试解析器输入 -l -p 8080 -d /usr/logs', () => {
    let schema = new Schema('l:boolean p:integer d:string');
    let command = new Command('-l -p 8080 -d /usr/logs');
    let parser = new Parser(schema, command);

    assert.equal(parser.getValue({flagName: 'l'}), false);
    assert.equal(parser.getValue({flagName: 'p'}), 8080);
    assert.equal(parser.getValue({flagName: 'd'}), '/usr/logs');
  });

  it('测试解析器输入 -l -p -9 -d /usr/logs', () => {
    let schema = new Schema('l:boolean p:integer d:string');
    let command = new Command('-l -p -9 -d /usr/logs');
    let parser = new Parser(schema, command);

    assert.equal(parser.getValue({flagName: 'p'}), -9);
  });
});