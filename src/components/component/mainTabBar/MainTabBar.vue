<template>
  <div>
  <TabBar>
    <tab-bar-item path="/home">
      <img src="@/assets/img/home/home.svg" >
    </tab-bar-item>
  </TabBar>
  </div>

</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>