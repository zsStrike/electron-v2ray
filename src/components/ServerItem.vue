<template>
  <div class="server-item">
    <div class="name" @click="changeShow">
      {{ name }}
    </div>
    <div class="oprations" v-show="isShow">
      <BaseButton>Connect</BaseButton>
      <BaseButton>Disconnect</BaseButton>
      <BaseButton>Config</BaseButton>
      <BaseButton btn-type="btn-warning">Delete</BaseButton>
    </div>
  </div>
</template>

<script>
import BaseButton from '../components/BaseButton'

export default {
  data () {
    return {
      isShow: false
    }
  },
  components: {
    BaseButton
  },
  props: {
    name: String
  },
  methods: {
    changeShow () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style scoped>
.server-item {
  box-sizing: border-box;
  border-radius: 5px;
  width: 95%;
  margin: 0 auto;
  border: 1px solid #cdcdcd;
}
.server-item:hover {
  box-shadow: 0 0 6px #cdcdcd;
}
.name {
  height: 3rem;
  font-size: 1rem;
  line-height: 3rem;
  padding: 0 1.5rem;
}
.oprations {
  padding: 0 1.5rem 1rem 1.5rem;
}
.oprations div {
  margin-right: 1rem;
}
</style>
