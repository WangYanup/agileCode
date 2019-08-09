<template>
  <section>
  </section>
</template>
<script>
export default {
  data () {
    return {
      a: 0
    }
  },
  mounted () {
    console.log(this.printGame(1, 100));
  },
  methods: {
    printGame (start, end) {
      let resultArr = [];
      for(let i = start; i <= end; i++) {
        resultArr.push(this.say(i));
      }

      return resultArr;
    },

    // 可以省略掉text参数，但是如果省略的话需要在if语句中增加判断。
    say (val) {
      
      let text = '';

      if (this.divisibleByCalculate(val, 3) || this.includeNum(val, 3)) {
        text += 'fizz';
      }

      if (this.divisibleByCalculate(val, 5) || this.includeNum(val, 5)) {
        text += 'buzz';
      }

      if (text === '') {
        text = val.toString();
      }

      return text;
    },
    /*
    * 
    */
    includeNum (num, val) {
      return num.toString().indexOf(val) > -1;
    },

    divisibleByCalculate (num, divisiable) {
      return num % divisiable === 0;
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

