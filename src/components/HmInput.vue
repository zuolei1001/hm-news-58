<template>
  <div class="hm-input">
    <input
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="inputFn"
      :class="{ success: status === 'success', error: status === 'error' }"
    />
    <div class="tips" v-show="status === 'error'">{{ message }}</div>
  </div>
</template>

<script>
export default {
  // props: ['type', 'placeholder']
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: '请输入...'
    },
    value: String,
    rule: RegExp,
    message: String
  },
  data() {
    return {
      status: ''
    };
  },

  methods: {
    inputFn(e) {
      this.$emit('input', e.target.value);
      // console.log(e.target.value);
      this.validate(e.target.value);
    },
    validate(value) {
      // 添加表单校验
      if (this.rule) {
        // 判断value是否符合传入的正则
        if (this.rule.test(value)) {
          this.status = 'success';
          return true;
        } else {
          this.status = 'error';
          return false;
        }
        // console.log(this.status);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.hm-input {
  height: 50px;
  margin: 0 10px;
  input {
    height: 30px;
    line-height: 30px;
    outline: none;
    border: none;
    border-bottom: 1px solid #ccc;
    width: 100%;
    font-size: 16px;

    &.success {
      border-color: green;
    }
    &.error {
      border-color: red;
    }
  }
  .tips {
    color: red;
    font-size: 12px;
    height: 20px;
    line-height: 20px;
  }
}
</style>
