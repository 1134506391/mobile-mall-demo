<template>
  <div class="app-phone-create">
    <div>
      <label>
        <span>管理员角色</span>
        <select v-model="roleId">
          <option
            v-for="item in roleData"
            :key="item.id"
            :value="item.id"
          >{{item.title}}</option>
        </select>
      </label>
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
        <span>管理员头像</span>
        <input
          type="text"
          v-model="avatar"
        >
      </label>
      <label>
        <span>管理员手机号码</span>
        <input
          type="text"
          v-model="phone"
        >
      </label>
      <label>
        <span></span>
        <button @click="onSubmit()">提交</button>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      roleData: [],
      roleId: '',
      username: '',
      password: '',
      avatar: '',
      phone: ''
    }
  },
  methods: {
    getRoleData () {
      this.$axios
        .get('http://localhost:7001/api/role')
        .then(res => {
          console.log(res.data)
          this.roleData = res.data
          this.roleId = this.roleData[0].id
        })
        .catch(err => {
          console.log(err)
        })
    },
    onSubmit () {
      this.$axios
        .post('http://localhost:7001/api/user', {
          roleId: this.roleId,
          username: this.username,
          password: this.password,
          avatar: this.avatar,
          phone: this.phone
        })
        .then(res => {
          console.log(res.data)
          this.$router.push({
            path: '/admin/user/list'
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.getRoleData()
  }
}
</script>
