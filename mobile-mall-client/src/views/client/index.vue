<template>
  <div class="app-client-index">
    <header class="index-header">
      <input type="text">
      <button>搜索</button>
    </header>
    <section class="index-banner">
      <img src="https://img30.360buyimg.com/da/jfs/t30703/126/1197091991/144216/f26efa65/5ce29511Nf5962e3f.jpg!q90.webp" alt="">
    </section>
    <nav class="index-nav">
      <div
        v-for="(item,index) in phoneBrandData"
        :key="item.id"
        @click="selectPhoneBrand(index)"
        :class="{'active':phoneBrandActive=== index}"
        class="nav-item"
      >
        <img
          :src="'http://localhost:7001'+item.logo"
          alt=""
        >
      </div>
    </nav>
    <main class="index-main">
      <div
        v-for="item in phoneData"
        :key="item.id"
      >
        <router-link :to="{path: '/detail', query: {id: item.id }}" class="main-item">
          <div class="item-left">
            <img
               :src="'http://localhost:7001'+item.imgUrl"
              alt=""
            >
          </div>
          <div class="item-right">
            <p>{{item.title}}</p>
            <p>{{item.price}}</p>
          </div>
        </router-link>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      phoneBrandData: [],
      phoneData: [],
      phoneBrandActive: 0
    }
  },
  methods: {
    getPhoneBrandsData () {
      this.$axios
        .get('http://localhost:7001/api/phoneBrand')
        .then(res => {
          console.log(res.data)
          this.phoneBrandData = res.data
          this.phoneData = this.phoneBrandData[0].phone
        })
        .catch(err => {
          console.log(err)
        })
    },
    selectPhoneBrand (index) {
      this.phoneBrandActive = index
      this.phoneData = this.phoneBrandData[index].phone
    }
  },
  created () {
    this.getPhoneBrandsData()
  }
}
</script>

<style lang="scss">
.app-client-index {
  .index-header {
    height: 40px;
  }
  .index-banner {
    height: 150px;
    background-color: red;
    img{
      display: block;
      width: 100%;
      height: 150px;
    }
  }
  .index-nav {
    display: flex;
    flex-wrap: wrap;
    .nav-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 45px;
      cursor: pointer;
      box-sizing: border-box;
      border-right: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
        &.active {
          border-color: #ff0000;
        }
    }
  }
  .index-main {
    border-top: 1px solid #ccc;
    .main-item {
      display: flex;
      height: 100px;
      padding: 10px;
      border-bottom: 1px solid #ccc;
      .item-left {
        width: 100px;
        flex: 0 0 100px;
      }
      .item-right {
        flex: 1;
      }
    }
  }
}
</style>
