<template>
  <div class="base-file">
    <label>{{ name }}</label>
    <div class="file-choose">
      <div class="hint">File Choose</div>
      <input type="file" id="file" @change="check">
    </div>
    <div id="file-path">Not Choosed any files!</div>
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
  },
  methods: {
    check (ev) {
      console.log(ev.currentTarget.files) // files list msg
      const msg = document.querySelector('#file-path')
      const file = ev.currentTarget.files[0]
      msg.innerHTML = `Choosed: ${file.path}`
    }
  }
}
</script>

<style scoped>
.file-choose {
  box-sizing: border-box;
  position: relative;
  width: 8rem;
  height: 2.5rem;
  background-size: 100%;
  border: 1px solid #ededed;
  border-radius: 5px;
  text-align: center;
}
.file-choose:hover {
  box-shadow: 0 0 5px #dedede;
}
.hint {
  line-height: 2.5rem;
}
#file-path {
  height: 1.8rem;
  line-height: 1.8rem;
  color: cornflowerblue;
}
label {
  display: block;
  margin: 1rem 0;
}
input[type="file"] {
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

</style>
