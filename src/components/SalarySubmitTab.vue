<template>
  <div>
    <form v-if="!submitted" v-on:submit.prevent>
      <MoneyInput :label="label"
                  :placeholder="placeholder"
                  v-model="quantity"/>
      <button @click="submit">Submit</button>
    </form>
    <p v-if="submitted">Good luck!</p>
  </div>
</template>

<script>
import MoneyInput from './MoneyInput'
export default {
  components: {
    MoneyInput
  },
  props: ['label', 'placeholder', 'onSubmit'],
  data () {
    return {
      submitted: false,
      quantity: null
    }
  },
  methods: {
    submit () {
      if (!this.quantity) return
      this.submitted = true
      this.onSubmit(this.quantity)
    }
  }
}
</script>

<style>
</style>
