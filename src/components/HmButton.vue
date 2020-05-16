<template>
  <div class="hm-button" @click="clickFn">
    <slot></slot>
  </div>
</template>

<script>
export default {
  methods: {
    clickFn() {
      this.$emit('click');
    }
  }
};
</script>

<style lang="less" scoped>
.hm-button {
  height: 50px;
  line-height: 50px;
  margin: 20px;
  text-align: center;
  background-color: #cc3300;
  color: #fff;
  font-size: 18px;
  border-radius: 25px;
}
</style>
