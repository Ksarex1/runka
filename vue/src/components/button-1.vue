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
  width: 190px;
  height: 48px;
  border-radius: 12px;
  cursor: pointer;
  font-weight: bold;
  transition: .3s;
}

button:hover{
  border: 1px solid #5F687A;
  background-color: white;
  color: #5F687A;
  transition: .3s;
}
</style>