<template>
  <div id="app">
    <TabContainer/>
  </div>
</template>

<script>
import TabContainer from './components/TabContainer'

export default {
  name: 'App',
  components: {
    TabContainer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background: lightgrey;
  font-size: 16px;
}

html *
{
  font-size: 1em;
}

div {
  display: block;
}
input {
  margin: 1em;
  width: 30%;
}

button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

label {
}

</style>
