<template>
  <div id="app">
    <SomeComponent @custom="callMethod" />
  </div>
</template>

<script>
export default {
  name: 'app',

  data () {
    return {
      counter: 0
    }
  },

  methods: {
    callMethod () {
      this.counter += 1
    }
  }
}
</script>

<style scoped>
</style>
