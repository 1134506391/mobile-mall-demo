<template>
  <div class="my">
    <header class="my-header app-client-header">
      我的
    </header>
    {{orderInfo.uid}}
    <main>
      <button @click="getOrderInfo()">getOrderInfo</button>
       <button @click="orderToPay()">orderToPay</button>
       <button @click="openWindow()">openWindow</button>
       {{number}}
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { setTimeout } from 'timers'
export default {
  data () {
    return {
      data: [],
      orderInfo: {},
      number: 1
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo,
      carInfo: state => state.car.carInfo
    })
  },
  methods: {
    getOrderInfo () {
      this.$axios
        .get('http://localhost:7001/api/getOrderInfo')
        .then(res => {
          console.log(res)
          this.orderInfo = res.data
          window.open('http://localhost:7001/api/getOrderInfo')
        })
        .catch(err => {
          console.log(err)
        })
    },
    // orderToPay () {
    //   this.$axios
    //     // .post('https://pay.paysapi.com/', {
    //     .post('https://pay.sxhhjc.cn/', {
    //       params: {
    //         format: {
    //           uid: this.orderInfo.uid,
    //           price: this.orderInfo.price,
    //           istype: this.orderInfo.istype,
    //           notify_url: this.orderInfo.notify_url,
    //           return_url: this.orderInfo.return_url,
    //           orderid: this.orderInfo.orderid,
    //           orderuid: this.orderInfo.orderuid,
    //           goodsname: this.orderInfo.goodsname,
    //           key: this.orderInfo.key
    //         }
    //       }
    //     })
    //     .then(res => {
    //       console.log(res)
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    // },
    orderToPay () {
      this.$axios({
        method: 'post',
        url: 'https://pay.sxhhjc.cn/',
        data: {
          format: {
            uid: this.orderInfo.uid,
            price: this.orderInfo.price,
            istype: this.orderInfo.istype,
            notify_url: this.orderInfo.notify_url,
            return_url: this.orderInfo.return_url,
            orderid: this.orderInfo.orderid,
            orderuid: this.orderInfo.orderuid,
            goodsname: this.orderInfo.goodsname,
            key: this.orderInfo.key
          }
        }
      })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
    // openWindow () {
    //   window.open('http://www.runoob.com')
    //   setTimeout(() => {
    //     this.number--
    //     if (this.number === 0) {
    //       this.number = 5
    //     }
    //   }, 2000)
    // }
  }
}
</script>
