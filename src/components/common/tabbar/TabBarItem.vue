<template>
<<<<<<< HEAD

=======
  <div class="tb_item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item_img"></slot>
    </div>
    <div v-else>
      <slot name="item_img_active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item_text"></slot>
    </div>

>>>>>>> 5aa90f221b121dda8c01927b39d868e103b8e4ae
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
<<<<<<< HEAD

=======
>>>>>>> 5aa90f221b121dda8c01927b39d868e103b8e4ae
  props: {
    path: String,
    activeColor: {
      type: String,
<<<<<<< HEAD
      default: '#d4237a'
=======
      default: 'blue',
    }
  },
  computed: {
    isActive() {
      return !this.$route.path.indexOf(this.path);
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      if (this.path !== this.$route.path) {
        this.$router.replace(this.path)
      }
>>>>>>> 5aa90f221b121dda8c01927b39d868e103b8e4ae
    }
  }
}
</script>

<style>
.tb_item {
  flex: 1;
  font-size: 12px;
  margin-top: 3px;
}

.tb_item img {
  height: 24px;
  width: 24px;
  vertical-align: middle;
}
</style>