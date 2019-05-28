<template>
  <div class="app-phone-create">
    <div>
      <label>
        <span>用户名</span>
        <input
          type="text"
          v-model="username"
        >
      </label>
      <label>
        <span>用户密码</span>
        <input
          type="text"
          v-model="password"
        >
      </label>
      <label>
        <span>用户手机号码</span>
        <input
          type="text"
          v-model="phone"
        >
      </label>
            <label>
        <span>用户收货地址</span>
        <input
          type="text"
          v-model="address"
        >
      </label>
      <label>
        <span>用户头像</span>
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
      username: '',
      password: '',
      avatar: '',
      phone: '',
      avatarShow: '',
      address: ''
    }
  },
  methods: {
    uploadImg (event) {
      this.avatar = event.target.files[0]
      var windowURL = window.URL || window.webkitURL
      this.avatarShow = windowURL.createObjectURL(event.target.files[0])
    },
    onSubmit () {
      let formData = new FormData()
      let data = JSON.stringify({
        username: this.username,
        password: this.password,
        phone: this.phone,
        address: this.address
      })
      formData.append('avatar', this.avatar)
      formData.append('data', data)
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      this.$axios
        .post('http://localhost:7001/api/clientUser', formData, config)
        .then(res => {
          console.log(res.data)
          this.$router.push({
            path: '/admin/clientUser/list'
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
