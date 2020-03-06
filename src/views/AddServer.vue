<template>
  <div class="add-server">
    <div class="input">
      <BaseInput label="Group Name" placeholder="Name the group here"/>
    </div>
    <div class="nav">
      <router-link to="vmess">VMess</router-link> /
      <router-link to="qrcode">QRcode</router-link> /
      <router-link to="manually-input">Manually Input</router-link>
    </div>
    <div class="view">
      <router-view/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BaseInput from '../components/BaseInput'

export default {
  name: 'AddServer',
  data () {
    return {}
  },
  components: {
    BaseInput
  }
}
</script>

<style scoped>
.add-server {
  width: 95%;
  margin: .3rem auto;
}
.input {
  margin-bottom: 1rem;
}
.nav {
  height: 2rem;
  line-height: 2rem;
}
a {
  display: inline-block;
  font-size: 1.1rem;
  color: #232323;
  text-decoration: none;
}
a.router-link-exact-active {
  color: cadetblue;
}
</style>
