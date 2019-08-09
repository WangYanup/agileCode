import { assert } from 'chai';
import { shallowMount } from '@vue/test-utils'
import Game from '@/components/game.vue';

describe('测试game', () => {
  const wrapper = shallowMount(Game);
  const vm = wrapper.vm;

  // it('测试+1', () => {
  //   assert.equal(vm.a, 0, '初始化参数正确');
  //   assert.equal(wrapper.contains('button'), true);
  //   const button = wrapper.find('button');
  //   button.trigger('click');
  //   assert.equal(vm.a, 1);
  // });

  it('测试1-100中被3和5整除的数', () => {
    let testArr = [
      {num: 1, val: '1'},
      {num: 3, val: 'fizz'},
      {num: 5, val: 'buzz'},
      {num: 15, val: 'fizzbuzz'}
    ];

    test(testArr);    
  });

  it('测试1-100中包含3和5的数字', () => {
    let testArr = [
      {num: 13, val: 'fizz'},
      {num: 56, val: 'buzz'},
      {num: 53, val: 'fizzbuzz'}
    ];
    test(testArr);    
  });

  const test = (testArr) => {
    testArr.forEach((item) => {
      let result = vm.say(item.num);
      assert.equal(result, item.val);
    });
  } 
});
