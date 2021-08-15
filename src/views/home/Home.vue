<template>
  <div id="home">

    <NavBar class="home_nav">
      <template v-slot:nb_center>Home首页</template>
    </NavBar>
    <div class="home_swiper">
      <HomeSwiper>
      </HomeSwiper>
    </div>


    <HomeRecommendView>
    </HomeRecommendView>
    <FeatureView></FeatureView>
    <div class="test_view">
      占位显示
    </div>


  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/childComponent/HomeSwiper";
import HomeRecommendView from "@/views/home/childComponent/HomeRecommendView";
import FeatureView from "@/views/home/childComponent/FeatureView";

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
    HomeRecommendView,
    FeatureView
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
  position: fixed;
  z-index: 10;
  background-color: var(--color-tint);
  color: #F6F6F6;
}
.home_swiper{
  padding-top: 44px;
}
.test_view {
  height: 500px;
}
</style>