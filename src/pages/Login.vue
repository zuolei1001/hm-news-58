<template>
  <div class="login">
    <hm-header>登录</hm-header>
    <hm-logo></hm-logo>
    <hm-input
      type="text"
      placeholder="请输入用户名"
      v-model="username"
      :rule="/^1\d{4,10}$/"
      message="用户名格式不对"
      ref="username"
    ></hm-input>
    <hm-input
      type="password"
      placeholder="请输入密码"
      v-model="password"
      :rule="/^\d{3,12}$/"
      message="密码格式错误"
      ref="password"
    ></hm-input>
    <hm-button @click="login">登录</hm-button>

    <!-- 去注册的链接 -->
    <div class="go-register">
      没有账号?去<router-link class="link" to="/register">注册</router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      // let result1 = this.$refs.username.validate(this.username);
      // let result2 = this.$refs.password.validate(this.password);
      // if (!result1 || !result2) {
      //   return;
      // }
      if (this.$refs.username.validate(this.username) === false) {
        return;
      }
      if (this.$refs.password.validate(this.password) === false) {
        return;
      }
      this.$axios({
        method: 'post',
        url: '/login',
        data: {
          username: this.username,
          password: this.password
        }
      }).then(res => {
        // console.log(res.data);
        if (res.data.statusCode === 200) {
          this.$toast.success('登录成功');
          this.$router.push('/user');
        } else {
          this.$toast.fail('用户名或密码错误');
        }
      });
    }
  },
  data() {
    return {
      username: '',
      password: ''
    };
  },
  created() {
    // console.log(this.$route);
    this.username = this.$route.params.username;
    this.password = this.$route.params.password;
  }
};
</script>

<style lang="less" scoped>
.go-register {
  font-size: 18px;
  text-align: right;
  margin: 0 20px;
  .link {
    color: orange;
  }
}
</style>
