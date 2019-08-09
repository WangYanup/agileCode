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

    say (val) {
      let text = '';

      if (this.sumDivisible(val, 3) || this.includeNum(val, 3)) {
        text += 'fizz';
      }

      if (this.sumDivisible(val, 5) || this.includeNum(val, 5)) {
        text += 'buzz';
      }

      text === '' ? text = val.toString():'';

      return text;
    },

    includeNum (num, val) {
      return num.toString().indexOf(val) > -1;
    },

    sumDivisible (num, divisiable) {
      return num % divisiable === 0;
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

