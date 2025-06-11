<script>
export default {
  name: "button-2"
}
</script>

<template>
<button><slot></slot></button>
</template>

<style scoped>
button{
  padding: 10px;
  border: 1px solid #5F687A;
  background-color: white;
  color: #5F687A;
  border-radius: 12px;
  cursor: pointer;
  font-weight: bold;
  transition: .3s;
}

button:hover{
  background-color: #e5e7eb;
  transition: .3s;
}
</style>