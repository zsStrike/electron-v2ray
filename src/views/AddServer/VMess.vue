<template>
  <div class="vmess">
    <BaseTextarea name="Share Link"/>
    <BaseButton class="import-btn">Import</BaseButton>
  </div>
</template>

<script>
import BaseTextarea from '../../components/BaseTextarea'
import BaseButton from '../../components/BaseButton'
export default {
  data () {
    return {}
  },
  components: {
    BaseTextarea,
    BaseButton
  }
}
</script>

<style scoped>
.import-btn {
  margin: 1rem 0;
}

</style>
