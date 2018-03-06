<template>
  <div>
    <label for="moneyInput">{{label}}</label>
    <input id="moneyInput" type="number"
           :value="quantity"
           @input="update($event)"
           :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  props: ['label', 'placeholder', 'quantity'],
  methods: {
    update (event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>
