<template>
  <div id="app">
    {{ msg }}
    <button @click="handle">Button</button>
    <hr>
    <input placeholder="email" v-model="email" name="email" v-validate.initial="'required'" />
    <div id="errors">
      {{ errors.first('email') }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  
  data () {
    return {
      msg: '',
      email: ''
    }
  },

  methods: {
    promise () {
      return new Promise(res => {
        res()
      })
    },

    handle () {
      this.promise()
        .then(() => {
          this.msg = 'testing'
        })
    }
  }
}
</script>

<style scoped>
</style>
