import { assert } from 'chai';
import Utils from '@/utils/index.js';

describe('第五次练习TDD fizzbuzz', () => {
  let testArr = [
    {it: '如果数组为1，输出1',  print: 1, val: '1'},
    {it: '可以被3整除的数字, 输出fizz', print: 3, val: 'fizz'},
    {it: '如果数字为5，则输出buzz', print: 5, val: 'buzz'},
    {it: '如果数字为15，则输出fizzbuzz', print: 15, val: 'fizzbuzz'},

    {it: '不包含3和5，并且不能被3和5整除的', print: 2, val: '2'},// 二阶段
    {it: '包含3不包含5的数字，并且不能被3和5整除，输出fizz', print: 13, val: 'fizz'},
    {it: '包含5不包含3的数字，并且不能被3和5整除，输出buzz', print: 52, val: 'buzz'},
    {it: '包含3和5的数字，并且不能被3和5整除，输出fizzbuzz', print: 53, val: 'fizzbuzz'},
    {it: '包含3不包括5的数字，能被3整除不能被5整除，输出fizz', print: 33, val: 'fizz'},
    {it: '包含3不包括5的数字，能被5整除不能被3整除，输出fizzbuzz', print: 35, val: 'fizzbuzz'},
    {it: '包含3不包括5的数字，能被3和5整除，输出fizzbuzz', print: 30, val: 'fizzbuzz'},
    {it: '包含5不包括3的数字，能被3整除不能被5整除，输出fizzbuzz', print: 51, val: 'fizzbuzz'},
    {it: '包含5不包括3的数字，能被5整除不能被3整除，输出buzz', print: 25, val: 'buzz'},
    {it: '包含5不包括3的数字，能被3和5整除，输出fizzbuzz', print: 45, val: 'fizzbuzz'},
    {it: '包含3和5的数字，能被3整除不能被5整除，输出fizzbuzz', print: 153, val: 'fizzbuzz'}, // 100以内没有这样的数字
    {it: '包含3和5的数字，能被5整除不能被3整除，输出fizzbuzz', print: 35, val: 'fizzbuzz'}, 
    {it: '包含3和5的数字，能被3和5整除，输出fizzbuzz', print: 135, val: 'fizzbuzz'}, // 100以内没有这样的数字
  ];
  
  testArr.forEach(item => {
    it (item.it, () => {
      assert.equal(Utils.print(item.print), item.val);
    });
  });
  
   /**
    *  1.如果一个数能被3整除，或者包含数字3，那么这个数就是“fizz”；
    *  2.如果一个数能被5整除，或者包含数字5，那么这个数就是“buzz”。
    * 
    *  此时隐形的出现了几个特殊的情况：
    * （1）被3整除包含5：51
    * （2）被5整除包含3：35
    * （3）不能被任何整除但是包含3和5：53
    * （4）既能被3和5整除，也包含3和5的：375 [已经大于100了]
    * 
    * 大胆猜想：上述3种情况同样输出 fizzbuzz。
    * 合理假设：有关3的条件在前，有关5的条件在后
    * 谨慎求证：同PM确定
    * 
    * 结果：确认是这样执行
    */


});