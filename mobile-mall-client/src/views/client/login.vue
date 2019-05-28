<template>
  <div class="app-login">
    <h3>前台登录</h3>
    <label>
      <span>管理员名字</span>
      <input
        type="text"
        v-model="username"
      >
    </label>
    <label>
      <span>管理员密码</span>
      <input
        type="text"
        v-model="password"
      >
    </label>
    <label>
      <span></span>
      <button @click="loginAction()">loginAction</button>
    </label>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('clientUser', ['login']),
    loginAction () {
      this.login({
        username: this.username,
        password: this.password
      })
        .then(res => {
          console.log(res)
          if (res.ok) {
            this.$router.push({
              path: '/'
            })
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss">
.app-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  width: 100%;
  background-color: #2d3a4b;
  overflow: hidden;
  color: #fff;
  label {
    display: flex;
    align-items: center;
    height: 50px;
  }
  button {
    background: #1890ff;
  }
}
</style>
