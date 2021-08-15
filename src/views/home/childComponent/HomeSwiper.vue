<template>
  <div>
    <Swiper>
      <SwiperItem v-for="b in 5">
        <a href="#"><img src="https://dummyimage.com/500X200" alt=""></a>
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
  }
}
</script>

<style scoped>

</style>