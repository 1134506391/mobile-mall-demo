<template>
  <div class="client">
    <router-view></router-view>
    <nav class="client-nav">
      <li class="nav-item">
        <router-link to="/index">index</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/car">car</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/my">my</router-link>
      </li>

    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: []
    }
  }
}
</script>

<style lang="scss">
.client-nav {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50px;
  box-sizing: border-box;
  border-top: 1px solid #ccc;
  display: flex;
  .nav-item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      font-weight: bold;
      color: #2c3e50;
      text-decoration: none;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
