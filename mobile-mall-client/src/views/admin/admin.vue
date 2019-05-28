<template>
  <div class="admin-layout">
    <nav class="layout-nav">
      <ul>
        <li>
          <div>
            首页
          </div>
        </li>
        <li>
          <div>
            角色管理
          </div>
          <ul>
            <li>
              <router-link to="/admin/role/create">创建角色</router-link>
            </li>
            <li>
              <router-link to="/admin/role/list">角色列表</router-link>
            </li>
          </ul>
        </li>
        <li>
          <div>
            管理员管理
          </div>
          <ul>
            <li>
              <router-link to="/admin/adminUser/create">创建管理员</router-link>
            </li>
            <li>
              <router-link to="/admin/adminUser/list">管理员列表</router-link>
            </li>
          </ul>
        </li>
        <li>
          <div>
            用户管理
          </div>
          <ul>
            <li>
              <router-link to="/admin/clientUser/create">创建用户</router-link>
            </li>
            <li>
              <router-link to="/admin/clientUser/list">用户列表</router-link>
            </li>
          </ul>
        </li>
        <li>
          <div>
            手机品牌管理
          </div>
          <ul>
            <li>
              <router-link to="/admin/phoneBrand/create">创建手机品牌</router-link>
            </li>
            <li>
              <router-link to="/admin/phoneBrand/list">手机品牌列表</router-link>
            </li>
          </ul>
        </li>
        <li>
          <div>
            手机管理
          </div>
          <ul>
            <li>
              <router-link to="/admin/phone/create">创建手机</router-link>
            </li>
            <li>
              <router-link to="/admin/phone/list">手机列表</router-link>
            </li>
          </ul>
        </li>
        <li>
          <div>
            订单管理
          </div>
          <ul>
            <li>
              <router-link to="/admin/phone/create">创建订单</router-link>
            </li>
            <li>
              <router-link to="/admin/phone/list">订单列表</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <header class="layout-header">
      <div class="header-left">
        <span>首页/</span>
        <span>用户管理/</span>
        <span>用户列表/</span>
      </div>
      <div class="header-right">
        admin
      </div>
    </header>
    <main class="layout-main">
      <router-view></router-view>
    </main>

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
.admin-layout {
  .layout-nav {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 200px;
    overflow-y: auto;
    overflow-x: hidden;
    background: #304156;
    font-size: 14px;
    &::-webkit-scrollbar {
        display: none;
    }
    ul {
      box-sizing: border-box;
      border-bottom: 1px solid #000;
      > li {
        padding-left: 20px;
        &:hover {
          background: #1f2d3d;
        }
        div {
          display: flex;
          align-items: center;
          height: 50px;
          color: #bfcbd9;
        }
        a {
          display: flex;
          align-items: center;
          height: 50px;
          color: #bfcbd9;
          text-decoration: none;
          &:hover{
            background: #1f2d3d;
            color: #00aaee;
          }
        }
      }
    }
  }
  .layout-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
        margin-left: 200px;
    padding: 0 10px;
    border-bottom: 1px solid #ccc;
  }
  .layout-main {
    margin-left: 200px;
    padding: 20px;
  }
}
</style>
