<template>
  <div id="app">
    <div id="navbar">
      <SideBar/>
    </div>
    <div id="content">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar'

export default {
  name: 'App',
  components: {
    SideBar
  }
}
</script>

<style>

html, body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, "Microsoft YaHei",Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
}

#navbar {
  display: inline-block;
  box-sizing: border-box;
  border-right: 1px solid #eeddee;
  width: 20%;
  flex: 0 0 wrap;
}

#content {
  display: inline-block;
  height: 100vh;
  width: 80%;
  flex: 1;
  overflow-y: auto;
}

</style>
