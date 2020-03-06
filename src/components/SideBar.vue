<template>
  <div id="side-bar">
    <router-link to="/">
      Server
    </router-link>
    <router-link to="/about">
      Add
    </router-link>
    <router-link to="/setting">
      Setting
    </router-link>
    <router-link to="/preference">
      Preference
    </router-link>
  </div>
</template>

<script>

export default {
  data () {
    return {}
  }
}
</script>

<style scoped>
#side-bar {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  font-size: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
a {
  display: inline-block;
  font-size: 1.1rem;
  color: #232323;
  text-decoration: none;
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
}
a:hover {
  background: #ededed;
}
a.router-link-exact-active {
  color: cadetblue;
  background: #ededed;
}
</style>
