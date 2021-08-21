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
    <TabControl :titles="['流行','新款','精选']"></TabControl>
    <div class="test_view">
      占位显示
    </div>


  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/component/tabControl/TabControl";

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
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');

  },
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    HomeRecommendView,
    FeatureView
  },
  data() {
    return {
      // multiData: {}
      banners: null,
      goods: {
        'pop': {page: 0, list: []},
        'news': {page: 0, list: []},
        'sell': {page: 0, list: []},
      }
    }
  },
  methods: {
    getHomeGoods(gtype) {
      this.$store.dispatch('getHomeGoods', gtype).then(res => {

      })
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

.home_swiper {
  padding-top: 44px;
}

.test_view {
  height: 300px;
}
</style>