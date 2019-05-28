<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,body{
  height: 100%;
}
ul,
li {
  list-style: none;
}
a{
  text-decoration: none;
  color: #333;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
label {
  display: block;
}
table.app-tables {
  table-layout: fixed;
  width: 100%;
  margin: 0 auto;
  border-collapse: collapse;
}
table.app-tables tr {
  display: table-row;
  height: 50px;
  box-sizing: border-box;
}
table.app-tables tr:hover {
  background-color: #fff5f5;
}
table.app-tables th {
  display: table-cell;
  text-align: left;
  vertical-align: middle;
  padding: 0 10px;
  background: #fff;
  box-sizing: border-box;
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
table.app-tables td {
  display: table-cell;
  vertical-align: middle;
  padding: 0 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #e2e2e2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

table.center th,
table.center td {
  text-align: center;
}

table.border th,
table.border td {
  border: 1px solid #e2e2e2;
}
table.border td img {
  width: 50%;
  height: auto;
}
.app-client-header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-bottom: 1px solid #ccc;
}

.app-btn-blue{
  height: 30px;
  line-height: 30px;
  margin: 0 10px;
  padding: 0 10px;
  background: #00aaee;
  color: #fff;
  border: 1px solid #00aaee;
  box-sizing: border-box;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
}

.app-btn-red{
  height: 30px;
  line-height: 30px;
  margin: 0 10px;
  padding: 0 10px;
  background: #ff0000;
  color: #fff;
  border: 1px solid #ff0000;
  box-sizing: border-box;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
}
</style>
