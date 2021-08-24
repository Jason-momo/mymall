<template>
  <div class="goods">
    <GoodsListItem v-for="(good,index) in goods" :goods-item="good" :key="index"></GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from "@/components/component/goods/GoodsListItem";

export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
}
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}

</style>