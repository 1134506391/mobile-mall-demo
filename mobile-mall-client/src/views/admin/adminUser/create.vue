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
        <span>管理员手机号码</span>
        <input
          type="text"
          v-model="phone"
        >
      </label>
      <label>
        <span>管理员头像</span>
        <input
          v-if="!avatarShow"
          type="file"
          @change="uploadImg($event)"
        >
        <img
          v-else
          :src="this.avatarShow"
          alt=""
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
      phone: '',
      avatarShow: ''
    }
  },
  methods: {
    uploadImg (event) {
      this.avatar = event.target.files[0]
      var windowURL = window.URL || window.webkitURL
      this.avatarShow = windowURL.createObjectURL(event.target.files[0])
    },
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
      let formData = new FormData()
      let data = JSON.stringify({
        roleId: this.roleId,
        username: this.username,
        password: this.password,
        phone: this.phone
      })
      formData.append('avatar', this.avatar)
      formData.append('data', data)

      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      this.$axios
        .post('http://localhost:7001/api/adminUser', formData, config)
        .then(res => {
          console.log(res.data)
          this.$router.push({
            path: '/admin/adminUser/list'
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
