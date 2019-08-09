<template>
  <section>
    <button id="add" @click="add">加1</button>  
  </section>
</template>
<script>
export default {
  data () {
    return {
      a: 0
    }
  },
  methods: {
    add () {
      this.a ++;
    },

    addNum (a, b) {
      return a + b;
    },

    say (val) {
      if (this.sumDivisible(val, 3) && this.sumDivisible(val, 5)) {
        val = 'fizzbuzz';
      }

      if (this.sumDivisible(val, 3)) {
        val = 'fizz';
      }

      if (this.sumDivisible(val, 5)) {
        val = 'buzz';
      }

      return val.toString();
    },

    sumDivisible (num, divisiable) {
      return num % divisiable === 0;
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

