<template>
  <div class="header">
    <img v-on:click="menu" class="menu_icon" alt="menu" src="@/assets/menu_icon.png">
  </div>
</template>

<script>
  export default {
    methods: {
      menu: function(){
        window.alert('ここにメニューが開きます')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header{
  background-color: #f5f5f5;
  height: 80px;
}

.menu_icon{
  width: 60px;
  height: 60px;
  margin: 10px 0px 10px 20px;
}
</style>
