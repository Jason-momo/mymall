<template>
  <div id="home">

      <NavBar class="home_nav">
        <template v-slot:nb_center>Home首页</template>
      </NavBar>


    <h2>Button</h2>
    <h2>
      <button @click="testPrint">TestPring</button>
      <button @click="getUserList">GetUserList</button>
    </h2>

  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "Home",
  components: {
    NavBar
  },
  methods: {
    testPrint() {
      this.$store.dispatch('printTest')
      this.$store.dispatch('getUser').then(res =>{
        console.log(res.data)
      })
    },
    getUserList(){
      this.$store.dispatch('getUserList').then(res=>{
        console.log(res)
      })
    }
  }
}
</script>

<style >
.home_nav {
  background-color: var(--color-tint);
  color: #F6F6F6;
}
</style>