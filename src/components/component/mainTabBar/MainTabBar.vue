<template>
  <div>
    <tab-bar>
      <TabBarItem path="/home">
        <template v-slot:item_img><img src="@/assets/img/home/home.svg" alt=""></template>
        <template v-slot:item_img_active><img src="@/assets/img/home/home_active.svg" alt=""></template>
        <template v-slot:item_text><div>首页</div></template>
      </TabBarItem>
      <TabBarItem path="/category">
        <template v-slot:item_img><img src="@/assets/img/category/category.svg" alt=""></template>
        <template v-slot:item_img_active><img src="@/assets/img/category/category_active.svg" alt=""></template>
        <template v-slot:item_text><div>分类</div></template>
      </TabBarItem>
      <TabBarItem path="/cart">
        <template v-slot:item_img><img src="@/assets/img/cart/cart.svg" alt=""></template>
        <template v-slot:item_img_active><img src="@/assets/img/cart/cart_active.svg" alt=""></template>
        <template v-slot:item_text><div>购物车</div></template>
      </TabBarItem>
      <TabBarItem path="/profile">
        <template v-slot:item_img><img src="@/assets/img/profile/profile.svg" alt=""></template>
        <template v-slot:item_img_active><img src="@/assets/img/profile/profile_active.svg" alt=""></template>
        <template v-slot:item_text><div>我的</div></template>
      </TabBarItem>

    </tab-bar>
  </div>

</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>