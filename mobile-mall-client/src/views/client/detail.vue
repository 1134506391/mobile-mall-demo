<template>
  <div class="app-client-detail">
    <header class="detail-header">
      {{phoneData.title}}
    </header>
    <main class="detail-main">
      <div class="main-top">
        <img :src="'http://localhost:7001'+phoneData.imgUrl"
          alt="">
      </div>
      <div class="main-bottom">
        <p class="bottom-description">
          {{phoneData.description}}
        </p>
        <p class="bottom-price">
          {{phoneData.price}}
        </p>
      </div>
    </main>
    <footer class="detail-footer">
      <button @click="addCar()">加入购物车</button>
    </footer>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      id: '',
      phoneData: []
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo,
      carInfo: state => state.car.carInfo
    })
  },
  methods: {
    ...mapMutations('car', ['SET_CARINFO']),
    getPhoneData () {
      this.$axios.get(`http://localhost:7001/api/phone/${this.id}`)
        .then(res => {
          // console.log(res.data)
          this.phoneData = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    addCar () {
      const carInfo = JSON.parse(sessionStorage.getItem('carInfo'))
      if (!carInfo) {
        console.log('没有')
        let carInfoArr = []
        carInfoArr.push(this.phoneData)
        this.SET_CARINFO(carInfoArr)
      } else {
        console.log('有')
        let result = carInfo.some(item => {
          return item.id === this.phoneData.id
        })
        if (!result) {
          carInfo.push(this.phoneData)
          this.SET_CARINFO(carInfo)
        }
      }
    }
  },
  created () {
    this.id = this.$route.query.id
    this.getPhoneData()
  },
  mounted () {
    console.log(this.id)
  }
}
</script>

<style lang="scss">
.app-client-detail{
  .detail-footer{
    position: fixed;
    left: 0;
    right:0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    bottom:50px;
    height: 50px;
    border-top: 1px solid #000;
  }
}
</style>
