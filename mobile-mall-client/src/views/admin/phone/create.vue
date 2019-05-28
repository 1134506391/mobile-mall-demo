<template>
  <div class="app-phone-create">
    <div>
      <label>
        <span>手机名字</span>
        <select v-model="phoneBrandId">
          <option
            v-for="item in phoneBrandData"
            :key="item.id"
            :value="item.id"
          >{{item.title}}</option>
        </select>
      </label>
      <label>
        <span>手机名字</span>
        <input
          type="text"
          v-model="title"
        >
      </label>
      <label>
        <span>手机描述</span>
        <input
          type="text"
          v-model="description"
        >
      </label>
      <label>
        <span>手机价格</span>
        <input
          type="text"
          v-model="price"
        >
      </label>
      <label>
        <span>手机库存</span>
        <input
          type="number"
          v-model="number"
        >
      </label>
      <label>
        <span>手机图片</span>
        <input v-if="!imgUrlShow"
          type="file"
          @change="uploadImg($event)"
        >
          <img v-else :src="this.imgUrlShow" alt="">
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
      phoneBrandData: [],
      phoneBrandId: '',
      title: '',
      description: '',
      price: '',
      number: '',
      imgUrl: '',
      imgUrlShow: ''
    }
  },
  methods: {
    uploadImg (event) {
      this.imgUrl = event.target.files[0]
      var windowURL = window.URL || window.webkitURL
      this.imgUrlShow = windowURL.createObjectURL(event.target.files[0])
    },
    getPhoneBrandData () {
      this.$axios
        .get('http://localhost:7001/api/phoneBrand')
        .then(res => {
          this.phoneBrandData = res.data
          this.phoneBrandId = this.phoneBrandData[0].id
        })
        .catch(err => {
          console.log(err)
        })
    },
    onSubmit () {
      let formData = new FormData()
      let data = JSON.stringify({
        phoneBrandId: this.phoneBrandId,
        title: this.title,
        description: this.description,
        price: this.price,
        number: this.number
      })
      formData.append('imgUrl', this.imgUrl)
      formData.append('data', data)

      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      this.$axios
        .post('http://localhost:7001/api/phone', formData, config)
        .then(res => {
          console.log(res.data)
          this.$router.push({
            path: '/admin/phone/list'
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.getPhoneBrandData()
  }
}
</script>
