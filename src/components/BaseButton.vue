<template>
  <div class="base-button" :class="btnType">
    <slot></slot>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  props: {
    btnType: {
      type: String,
      default: 'btn-primary'
    }
  }
}
</script>

<style scoped>
.base-button {
  display: inline-block;
  padding: 0 .5rem;
  height: 2.2rem;
  font-size: 1rem;
  line-height: 2.2rem;
  border-radius: 3px;
  color: #eeeeee;
}
.base-button:hover {
  cursor: pointer;
}
.btn-primary {
  background: #007bff;
}
.btn-warning {
  background: #CC3333;
}
</style>
