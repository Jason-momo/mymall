<template>
  <div id="home">
    <NavBar class="home_nav">
      <template v-slot:nb_center>Home首页</template>
    </NavBar>
    <div class="home_swiper">
      <HomeSwiper :banners="banners">
      </HomeSwiper>
    </div>
    <HomeRecommendView :recommends="recommends">
    </HomeRecommendView>
    <FeatureView></FeatureView>
    <TabControl :titles="['流行','新款','精选']" @tabClick="tabClick"></TabControl>
    <GoodsList :goods="showGoods"></GoodsList>
    <div class="test_view">
      占位显示
    </div>


  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/component/tabControl/TabControl";
import GoodsList from "@/components/component/goods/GoodsList";

import HomeSwiper from "@/views/home/childComponent/HomeSwiper";
import HomeRecommendView from "@/views/home/childComponent/HomeRecommendView";
import FeatureView from "@/views/home/childComponent/FeatureView";

export default {
  name: "Home",
  created() {
    this.getHomeMultidata();
    this.getHomeGoods();
    // this.getHomeGoods('new');
    // this.getHomeGoods('sell');

  },
  components: {
    NavBar,
    TabControl,
    GoodsList,
    HomeSwiper,
    HomeRecommendView,
    FeatureView
  },
  data() {
    return {
      // multiData: {}
      recommends: [],
      banners: [],
      goods: {
        "pop": {page: 0, list: []},
        "news": {page: 0, list: []},
        "sell": {page: 0, list: []},
      },
      currentType: "pop",

    }
  },
  methods: {
    tabClick(index) {
      console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "news";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      console.log(this.currentType);
    },
    getHomeMultidata() {
      this.$store.dispatch('getHomeBanners').then(res => {
        this.banners = res.data.banners;
        // console.log(this.banners);
      })
      this.$store.dispatch('getHomeRecommend').then(res => {
        this.recommends = res.data.recommends;
        // console.log(this.recommends);
      })
    },
    getHomeGoods() {
      this.$store.dispatch('getHomeGoods').then(res => {

        this.goods["pop"].list.push(...res.data.list)
        // console.log(this.goods.pop.list);
        // console.log(res.data.list);
      })
    }
  },
  computed: {
    showGoods() {
      return this.goods['pop'].list
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