<template>
  <div class="tab-bar-item">
    <div v-if="isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icom-active"></slot>
    </div>

    <div>
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  computed: {
    isActive() {
      return true;
      // return this.$route.path.indexOf(this.path);
    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#d4237a'
    }
  }
}
</script>

<style scoped>

</style>