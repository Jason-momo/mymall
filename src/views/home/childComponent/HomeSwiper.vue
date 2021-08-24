<template>
  <div>
    <Swiper>
      <SwiperItem v-for="banner in banners">
        <a :href="banner.link"><img :src="banner.img" alt=""></a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>

import {Swiper, SwiperItem} from "@/components/common/swiper"

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props:{
    banners:{
      type:Array,
      default:[]
    }
  }
}
</script>

<style scoped>

</style>