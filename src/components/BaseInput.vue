<template>
  <div class="base-input">
    <label>{{ label }}</label>
    <input type="text" :placeholder="placeholder">
  </div>
</template>

<script>

export default {
  name: 'BaseInput',
  data () {
    return {
    }
  },
  props: {
    label: String,
    placeholder: String
  }
}
</script>

<style scoped>
.base-input {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}
label {
  margin-right: 1rem;
}
input {
  flex: auto;
  border: none;
  background: none;
  outline: none;
  border: 1px solid #ededed;
  border-radius: 5px;
  padding-left: .5rem;
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 1rem;
}
input:focus {
  box-shadow: 0 0 8px #dedede;
}

</style>
