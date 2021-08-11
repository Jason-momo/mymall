<template>
  <div id="home">
    <NavBar class="home_nav">
      <template v-slot:nb_center>Home</template>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "Home",
  components: {
    NavBar
  }
}
</script>

<style scoped>
.home_nav {
  background-color: var(--color-tint);
  color:#F6F6F6;
}
</style>