<template>
  <div class="register">
    <hm-header>注册</hm-header>
    <hm-logo></hm-logo>
    <hm-input
      placeholder="请输入用户名"
      v-model="username"
      :rule="/^1\d{4,10}$/"
      message="用户名格式不对"
      ref="username"
    ></hm-input>
    <hm-input
      placeholder="昵称"
      v-model="nickname"
      :rule="/^[\u4e00-\u9fa5]{3,7}$/"
      message="昵称必须是三到七位的中文"
      ref="nickname"
    ></hm-input>
    <hm-input
      placeholder="密码"
      v-model="password"
      :rule="/^\d{3,12}$/"
      message="密码格式错误"
      ref="password"
    ></hm-input>
    <hm-button @click="register">注册</hm-button>

    <!-- 去登录的链接 -->
    <div class="go-login">
      没有账号?去<router-link class="link" to="/login">登录</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      nickname: '',
      password: ''
    };
  },
  methods: {
    register() {
      // 注册前需进行表单校验
      let status1 = this.$refs.username.validate(this.username);
      let status2 = this.$refs.nickname.validate(this.nickname);
      let status3 = this.$refs.password.validate(this.password);
      // 只有三个都通过了，才发送ajax请求
      if (!status1 || !status2 || !status3) {
        return;
      }

      this.$axios({
        method: 'post',
        url: '/register',
        data: {
          username: this.username,
          password: this.password,
          nickname: this.nickname
        }
      }).then(res => {
        // console.log(res.data);
        if (res.data.statusCode === 200) {
          this.$toast.success(res.data.message);
          this.$router.push({
            name: 'login',
            params: { username: this.username, password: this.password }
          });
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.go-login {
  font-size: 18px;
  text-align: right;
  margin: 0 20px;
  .link {
    color: orange;
  }
}
</style>
