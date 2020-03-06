<template>
  <div class="server">
    <div class="item">
      <ServerItem name="新加坡一区"/>
    </div>
    <div class="item">
      <ServerItem name="新加坡一区"/>
    </div>
    <div class="item">
      <ServerItem name="新加坡一区"/>
    </div>
    <div class="item">
      <ServerItem name="新加坡一区"/>
    </div>
    <div class="item">
      <ServerItem name="新加坡一区"/>
    </div>
    <div class="item">
      <ServerItem name="新加坡一区"/>
    </div>
    <div class="item">
      <ServerItem name="新加坡一区"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ServerItem from '../components/ServerItem'
export default {
  name: 'Server',
  components: {
    ServerItem
  }
}
</script>

<style scoped>
.server {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
.item {
  /* padding: 0.5rem; */
  display: inline-block;
  width: 100%;
  margin-bottom: 1rem;
}
.item:first-child {
  margin-top: .2rem;
}
</style>
