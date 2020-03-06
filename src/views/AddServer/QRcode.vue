<template>
  <div class="qrcode">
    <BaseFile name="QRcode File"/>
    <BaseButton class="import-btn">Import</BaseButton>
  </div>
</template>
<script>
import BaseFile from '../../components/BaseFile'
import BaseButton from '../../components/BaseButton'
export default {
  data () {
    return {}
  },
  components: {
    BaseFile,
    BaseButton
  }
}
</script>

<style scoped>
.import-btn {
  margin: 0.5rem auto;
}
</style>
