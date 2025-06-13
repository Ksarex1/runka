<script>
export default {
  name: "button-1"
}
</script>

<template>
<button><slot></slot></button>
</template>

<style scoped>
button{
  background-color: #005DFF;
  color: white;
  padding: 10px;
  border-radius: 12px;
  cursor: pointer;
  font-weight: bold;
  transition: .3s;
}

button:hover{
  background-color: #003693;
  transition: .3s;
}
</style>