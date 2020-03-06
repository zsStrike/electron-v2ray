<template>
  <div class="manually-input">
    <div class="input">
      <BaseInput label="Tag" placeholder="Tag of the Setting"/>
    </div>
    <div class="input">
      <BaseInput label="Host" placeholder="Hostname"/>
    </div>
    <div class="input">
      <BaseInput label="Port" placeholder="1080"/>
    </div>
    <div class="input">
      <BaseInput label="Type" placeholder="VMess"/>
    </div>
    <div class="input">
      <BaseInput label="UUID" placeholder="xxxxxx-xxxxx-xxx-xxxxxx"/>
    </div>
    <div class="input">
      <BaseInput label="Alter ID" placeholder="64"/>
    </div>
    <div class="input">
      <BaseInput label="Security" placeholder="auto"/>
    </div>
    <div class="input">
      <BaseInput label="Transport Protocol" placeholder="tcp"/>
    </div>
    <div class="button">
      <BaseButton>Import</BaseButton>
    </div>
  </div>
</template>

<script>
import BaseInput from '../../components/BaseInput'
import BaseButton from '../../components/BaseButton'
export default {
  data () {
    return {
    }
  },
  components: {
    BaseInput,
    BaseButton
  }
}
</script>

<style scoped>
.input {
  margin: .5rem auto;
}
</style>
