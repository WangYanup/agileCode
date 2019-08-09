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

  // it('测试1 + 2 的值', () => {
  //   let result = vm.addNum(1, 2);
  //   assert.equal(result, 3);
  // });

  it('值为1，报数1', () => {
    test(1, '1');
  });

  it('值为3，报数fizz', () => {
    test(3, 'fizz');
  });

  it('值为5，报数buzz', () => {
    test(5, 'buzz');
  });

  it('值为15，报数fizzbuzz', () => {
    test(15, 'fizzbuzz');
  });

  let test = (num, confirm) => {
    let result = vm.say(num);
    assert.equal(result, confirm);
  } 
});
