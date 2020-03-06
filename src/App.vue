<template>
  <div id="app">
    <div id="navbar">
      <SideBar/>
    </div>
    <div id="content">
      <router-view/>
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
  height: 100%;
  width: 100%;
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
}

#navbar {
  display: inline-block;
  width: 20%;
  height: 100%;
}

#content {
  display: inline-block;
  height: 100%;
  width: 80%;
}

</style>
