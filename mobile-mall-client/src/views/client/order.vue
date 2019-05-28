<template>
  <div class="app-client-order">
    <header class="order-header">
      <span class="header-left"></span>
      <span class="header-center">确认订单</span>
      <span class="header-right"></span>
    </header>
    <section class="order-userInfo">
      <p>
        <span>{{clientUserOrderData.username}}</span>
        <span>{{clientUserOrderData.phone}}</span>
      </p>
      <p>{{clientUserOrderData.address}}</p>
    </section>
    <section class="order-productInfo">
      <div v-for="item1 in clientUserOrderData.order" :key="item1.id" class="productInfo-item">
        <h3>订单编号:{{item1.orderNumber}}</h3>
        <div v-for="item2 in item1.orderItem" :key="item2.id" class="item-list">
          <div class="list-left">
            <img :src="'http://localhost:7001'+item2.productImg" alt="">
          </div>
          <div class="list-right">
            <p class="right-title">{{item2.productTitle}}</p>
            <p class="right-price">{{item2.productPrice}}</p>
          </div>
        </div>
      </div>
    </section>
    <footer class="order-footer">
      <div class="footer-left">

      </div>
      <div class="footer-center">
        合计:{{totalPrice}}
      </div>
      <div
        @click="orderToPay()"
        class="footer-right"
      >
        提交订单
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      clientUserOrderData: '',
      totalPrice: ''
    }
  },
  computed: {
    ...mapState({
      clientUser: state => state.clientUser.clientUser
    })
  },
  methods: {
    getClientUserOrderData () {
      this.$axios
        .get(`http://localhost:7001/api/clientUser/${this.clientUser.id}`)
        .then(res => {
          console.log(res)
          this.clientUserOrderData = res.data
          this.totalPrice = res.data.order[0].totalPrice
        })
        .catch(err => {
          console.log(err)
        })
    },
    orderToPay () {
      let id = this.clientUserOrderData.order[0].id
      console.log(id)
      this.$axios
        .post(`http://localhost:7001/api/orderToPay`, {
          id: id
        })
        .then(res => {
          console.log(res)
          alert('支付成功')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.getClientUserOrderData()
  }
}
</script>

<style lang="scss">
.app-client-order {
  .order-header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
  }
  .order-userInfo {
    margin: 10px;
    padding: 10px;
    background: #f5f5f5;
    border-radius: 10px;
  }
  .order-productInfo {
    margin: 10px;
    padding: 10px;
    background: #f5f5f5;
    border-radius: 10px;
    .productInfo-item{
      .item-list{
        display: flex;
      }
    }
  }
  .order-footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 50px;
    display: flex;
    height: 50px;
    .footer-left {
      flex: 0 0 50px;
      width: 50px;
    }
    .footer-center {
      flex: 1;
      text-align: right;
    }
    .footer-right {
      flex: 0 0 80px;
      width: 80px;
    }
  }
}
</style>
