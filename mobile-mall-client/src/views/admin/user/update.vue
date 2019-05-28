<template>
  <div class="app-phone-create">
    <div>
      <label>
        <span>手机名字</span>
        <select v-model="roleId">
          <option v-for="item in roleData" :key="item.id" :value="item.id">{{item.title}}</option>
        </select>
      </label>
      <label>
        <span>用户名</span>
        <input
          type="text"
          v-model="username"
        >
      </label>
      <label>
        <span>用户头像</span>
        <input
          type="text"
          v-model="avatar"
        >
      </label>
      <label>
        <span>手机号码</span>
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
      id: '',
      roleData: [],
      roleId: '',
      username: '',
      avatar: '',
      phone: ''
    }
  },
  methods: {
    getRoleData () {
      this.$axios.get('http://localhost:7001/api/role')
        .then(res => {
          this.roleData = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    getUserData () {
      this.$axios.get(`http://localhost:7001/api/user?id=${this.id}`)
        .then(res => {
          console.log(res.data)
          this.roleId = res.data[0].roleId
          this.username = res.data[0].username
          this.avatar = res.data[0].avatar
          this.phone = res.data[0].phone
        })
        .catch(err => {
          console.log(err)
        })
    },
    onSubmit () {
      this.$axios.put('http://localhost:7001/api/user', {
        id: this.id,
        roleId: this.roleId,
        username: this.username,
        avatar: this.avatar,
        phone: this.phone
      })
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.getRoleData()
    this.getUserData()
  },
  mounted () {
    this.id = this.$route.query.id
  }
}
</script>
