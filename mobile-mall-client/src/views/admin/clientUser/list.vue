<template>
  <div class="phoneBrands-list">
        <table class="app-tables border center">
        <thead>
            <tr>
                <th>序号</th>
                <th>头像</th>
                <th>用户名</th>
                <th>密码</th>
                <th>电话</th>
                <th>收货地址</th>
                <th>创建时间</th>
                <th>最后修改时间</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item,index) in data" :key="item.id">
                <td>{{index+1}}</td>
                <td>
                  <img :src="'http://localhost:7001'+item.avatar" alt="">
                </td>
                <td>{{item.username}}</td>
                <td>{{item.password}}</td>
                <td>{{item.phone}}</td>
                <td>{{item.address}}</td>
                <td>{{item.createdAt}}</td>
                <td>{{item.updatedAt}}</td>
                <td>
                  <button class="app-btn-blue">编辑</button>
                  <button @click="delItem(item.id)" class="app-btn-red">删除</button>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>

export default {
  data () {
    return {
      data: []
    }
  },
  methods: {
    getData () {
      this.$axios.get('http://localhost:7001/api/clientUser')
        .then(res => {
          console.log(res.data)
          this.data = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    delItem (id) {
      this.$axios.delete('http://localhost:7001/api/clientUser/' + id)
        .then(res => {
          console.log(res)
          this.getData()
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style>
</style>
