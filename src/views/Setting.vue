<template>
  <div class="setting">
    <div class="v2ray-setting">
      <BaseFile name="v2ray path"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BaseFile from '../components/BaseFile'
export default {
  name: 'Setting',
  components: {
    BaseFile
  }
}
</script>

<style scoped>
.setting {
  width: 95%;
  margin: 0 auto;
}
</style>
