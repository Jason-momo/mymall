<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
#tab-bar {
  position: fixed;
  height: 49px;
  background-color: #F6F6F6;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>