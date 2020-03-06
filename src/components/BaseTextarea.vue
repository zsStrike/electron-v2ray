<template>
  <div class="base-textarea">
    <label>{{ name }}</label>
    <textarea placeholder="Please paste the share link here."></textarea>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  props: {
    name: String
  }
}
</script>

<style scoped>
.base-textarea {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;
  font-size: 1rem;
  border-radius: 3px;
}
label {
  display: block;
  margin-bottom: 1rem;
}

textarea {
  box-sizing: border-box;
  display: block;
  border-radius: 5px;
  padding: .5rem;
  outline: none;
  width: 100%;
  height: 10rem;
  border: 1px solid #ededed;
}
textarea:focus {
  box-shadow: 0 0 8px #dedede;
}

</style>
