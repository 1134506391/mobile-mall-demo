<template>
  <div class="app-client-car">
    <header class="car-header">
      <span class="header-left"></span>
      <span class="header-center">购物车</span>
      <span class="header-right">清空</span>

    </header>
    <main v-if="carInfo" class="car-main">
      <div
        v-for="item in carInfo"
        :key="item.id"
        class="main-item"
      >
        <div class="item-left">
          <input
            @change="checkItem(item.checked)"
            type="checkbox"
            v-model="item.checked"
          >
        </div>
        <div class="item-center">
        <img :src="'http://localhost:7001'+item.imgUrl"
          alt="">
        </div>
        <div class="item-right">
          <p>{{item.title}}</p>
          <p>{{item.price*item.number}}</p>
          <p>
            <span>-</span>
            <input
              @click="changeNumber(item,'-')"
              type="number"
              v-model="item.number"
            >
            <span @click="changeNumber(item,'+')">+</span>
          </p>
        </div>
      </div>
    </main>
    <footer class="car-footer">
      <div class="footer-left">
        <input
          @change="checkAll()"
          v-model="checkAllNumber"
          type="checkbox"
        >
        <span>全选</span>
      </div>
      <div class="footer-center">
        合计:{{totalPrice}}
      </div>
      <div @click="pay()" class="footer-right">
        结算
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      checkAllNumber: false
    }
  },
  computed: {
    ...mapState({
      clientUser: state => state.clientUser.clientUser,
      carInfo: state => state.car.carInfo
    }),
    totalPrice: function () {
      let all = 0
      if (this.carInfo) {
        this.carInfo.forEach(item => {
          if (item.checked === true) {
            all += item.price * item.number
          }
        })
      }
      return all
    }
  },
  methods: {
    changeNumber (item, control) {
      if (control === '-') {
        item.number--
        if (item.number <= 1) {
          item.number = 1
        }
      } else {
        item.number++
      }
    },
    checkItem (checked) {
      let dtatLength = this.carInfo.length
      let checkedData = []
      this.carInfo.forEach(item => {
        if (item.checked === true) {
          checkedData.push(item)
        }
      })
      if (dtatLength === checkedData.length) {
        this.checkAllNumber = true
      } else {
        this.checkAllNumber = false
      }
    },
    checkAll () {
      if (this.checkAllNumber === true) {
        this.carInfo.forEach(item => {
          item.checked = true
        })
      } else {
        this.carInfo.forEach(item => {
          item.checked = false
        })
      }
    },
    pay () {
      this.$axios.post('http://localhost:7001/api/order', {
        totalPrice: this.totalPrice,
        clientUserId: this.clientUser.id,
        address: '广东省东莞市',
        produce: this.carInfo
      })
        .then(res => {
          console.log(res)
          this.$router.push({
            path: '/order'
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss">
.app-client-car {
  .car-header {
    height: 40px;
    border-bottom: 1px solid #ccc;
  }
  .car-main {
    .main-item {
      display: flex;
      padding: 10px;
      border-bottom: 1px solid #ccc;
      .item-left {
        flex: 0 0 50px;
        width: 50px;
      }
      .item-center {
        flex: 0 0 100px;
        width: 100px;
      }
      .item-right {
        flex: 1;
      }
    }
  }
  .car-footer {
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
      flex: 0 0 50px;
      width: 50px;
    }
  }
}
</style>
