<template>
  <div class="tab_control">
    <div v-for="(title,index) in titles" class="tc_title" :class="{active:index===curIndex}" @click="titleClick(index)">
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      curIndex: 0
    }
  },
  methods: {
    titleClick(index) {
      this.curIndex = index
    }
  }
}
</script>

<style scoped>
.tab_control {
  display: flex;
  text-align: center;
  font-size: 16px;
}

.tc_title {
  flex: 1;
  height: 40px;
  line-height: 40px;
}

.tc_title span {
  padding: 5px;
}

.active {
  color: #ff8198;
}

.active span {
  border-bottom: 3px solid #ff8198;
}
</style>