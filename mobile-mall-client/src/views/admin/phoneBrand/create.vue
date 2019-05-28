<template>
  <div>
    <div>
      <label>
        <span>手机品牌名字</span>
        <input
          type="text"
          v-model="title"
        >
      </label>
      <label>
        <span>手机品牌描述</span>
        <input
          type="text"
          v-model="description"
        >
      </label>
      <label>
        <span>手机品牌logo</span>
        <input  v-if="!logoShow"
          type="file"
          @change="uploadLogo($event)"
        />
        <img v-else :src="this.logoShow" alt="">
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
      title: '',
      description: '',
      logo: '',
      logoShow: ''
    }
  },
  methods: {
    uploadLogo (event) {
      this.logo = event.target.files[0]
      var windowURL = window.URL || window.webkitURL
      this.logoShow = windowURL.createObjectURL(event.target.files[0])
    },
    onSubmit () {
      let formData = new FormData()
      var data = JSON.stringify({
        title: this.title,
        description: this.description
      })
      formData.append('logo', this.logo)
      formData.append('data', data)
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      this.$axios
        .post('http://localhost:7001/api/phoneBrand', formData, config)
        .then(res => {
          console.log(res)
          this.$router.push({
            path: '/admin/phoneBrand/list'
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
label {
  display: block;
}
</style>
