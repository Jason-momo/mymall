<template>
  <div class="goods_item">
    <img :src="goodsItem.img" alt="">
    <div class="goods_info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.fav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },

}
</script>

<style scoped>
.goods_item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}

.goods_item img {
  width: 100%;
  border-radius: 5px;
}

.goods_info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods_info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods_info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods_info .collect {
  position: relative;
}

.goods_info .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  /*background: url("./src/assets/img/common/fav.svg") 0 0/14px 14px;*/
}
</style>