<template>
<div class="nav_bar">
  <div class="left"><slot name="nb_left"></slot></div>
  <div class="center"><slot name="nb_center"></slot></div>
  <div class="right"><slot name="nb_right"></slot></div>
</div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.nav_bar{
  /*position: fixed;*/
  display: flex;
  height: 44px;
  width: 100%;
  line-height: 44px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, .1);

}
.nav_bar .center{
  flex: 1;
  text-align: center;
}
.nav_bar .left,.nav_bar .right {
  width: 60px;
}

</style>