<template>
  <div id="home">

    <NavBar class="home_nav">
      <template v-slot:nb_center>Home首页</template>
    </NavBar>
    <HomeSwiper>
    </HomeSwiper>

    <HomeRecommendView>
    </HomeRecommendView>


  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/childComponent/HomeSwiper";
import HomeRecommendView from "@/views/home/childComponent/HomeRecommendView";

export default {
  name: "Home",
  created() {
    //
    // this.multiData = getHomeMultiData()
    // this.banners = getBannerList();
    // console.log(this.banners.banner.img)
    // this.$store.dispatch('getHomeMultiData').then(res => {
    //   console.log(res.data);
    // })

  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView
  },
  data() {
    return {
      // multiData: {}
      banners: null
    }
  }


}
</script>

<style>
.home_nav {
  background-color: var(--color-tint);
  color: #F6F6F6;
}
</style>