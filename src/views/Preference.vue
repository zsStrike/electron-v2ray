<template>
  <div class="preference">
    <div class="font-size">
      <BaseInput label="Font Size" :value="fontSize" @value-changed="changeFontSize"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BaseInput from '../components/BaseInput'
export default {
  name: 'Preference',
  data () {
    return {
      fontSize: '16'
    }
  },
  components: {
    BaseInput
  },
  methods: {
    changeFontSize (value) {
      console.log(value)
      document.querySelector('#app').style.fontSize = value + 'px'
    }
  }
}
</script>

<style scoped>
.preference {
  width: 95%;
  margin: 0 auto;
}
</style>
