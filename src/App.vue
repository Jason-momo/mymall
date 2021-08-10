<template>
  <div>
    <MainTabBar></MainTabBar>
  </div>
  <router-view/>
</template>
<script>
import MainTabBar from "@/components/component/mainTabBar/MainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar
  }
}
</script>
<style>
</style>
