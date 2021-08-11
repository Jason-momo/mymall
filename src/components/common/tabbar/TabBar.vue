<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "TabBar",
}
</script>

<style >
#tab-bar {
  /*固定定位*/
  position: fixed;
  /*弹性布局*/
  display: flex;
  /*居中*/
  text-align: center;
  height: 49px;
  background-color: #F6F6F6;
  left: 0;
  right: 0;
  bottom: 0;
  /*tabbar 阴影*/
  box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);


}
</style>