<template>
  <div class="app-phone-create">
    <div>
      <label>
        <span>手机名字</span>
        <select v-model="brandsId">
          <option v-for="item in phoneBrandsData" :key="item.id" :value="item.id">{{item.title}}</option>
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
      phoneBrandsData: [],
      brandsId: '',
      title: '',
      description: '',
      price: '',
      number: ''
    }
  },
  methods: {
    getPhoneBrandsData () {
      this.$axios.get('http://localhost:7001/api/phoneBrands')
        .then(res => {
          this.phoneBrandsData = res.data.rows
        })
        .catch(err => {
          console.log(err)
        })
    },
    getPhonData () {
      this.$axios.get(`http://localhost:7001/api/phone?id=${this.id}`)
        .then(res => {
          console.log(res.data)
          this.brandsId = res.data[0].phoneBrandsId
          this.title = res.data[0].title
          this.description = res.data[0].description
          this.price = res.data[0].price
          this.number = res.data[0].number
        })
        .catch(err => {
          console.log(err)
        })
    },
    onSubmit () {
      this.$axios.put('http://localhost:7001/api/phone', {
        id: this.id,
        phoneBrandsId: this.brandsId,
        title: this.title,
        description: this.description,
        price: this.price,
        number: this.number
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
    this.getPhoneBrandsData()
    this.getPhonData()
  },
  mounted () {
    this.id = this.$route.query.id
  }
}
</script>
