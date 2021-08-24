<template>
  <div id="recommend">
    <div class="recommend_item" v-for="r in recommends">
      <a :href="r.link">
        <img :src="r.img" alt="" class="cimg">
        <div>{{ r.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendView",
  props: {
    recommends: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
#recommend {
  width: 100%;
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 15px 0 20px;
  border-bottom: #F6F6F6 solid 10px;

}

#recommend .recommend_item {
  flex: 1;
}

#recommend .recommend_item img {
  width: 80px;
  height: 80px;
  margin-bottom: 5px;
}

.cimg {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
}
</style>