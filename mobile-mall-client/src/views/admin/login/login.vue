<template>
  <div class="app-login">
        <h3>后台登录</h3>
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
      <button @click="login()">登录</button>
    </label>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapMutations('adminUser', ['SET_ADMINUSER']),
    login () {
      this.$axios
        .post('http://localhost:7001/api/adminLogin', {
          username: this.username,
          password: this.password
        })
        .then(res => {
          this.SET_ADMINUSER({
            id: res.data[0].id,
            username: res.data[0].username
          })
          this.$router.push({
            path: '/admin'
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
