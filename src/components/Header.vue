<template>
  <div id="headerSection">
    <button @click="toggle" class="btn_btn-success">
      <img class="headerButton" alt="menu" src="@/assets/menu_icon.png">
    </button>
    <Drawer @close="toggle" align="left" :closeable="true">
      <div v-if="open">content here</div>
    </Drawer>
  </div>
</template>

<!---->
  
<script>
import Drawer from "vue-simple-drawer";
  
export default {
  name: "App",
  components: {
    Drawer
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
};
</script>

<!---->

<style lang="scss">
@import "~bootstrap/scss/bootstrap-reboot",
"~bootstrap/scss/buttons";
</style>

<style>
#headerSection{
  background-color: #F3F3F3;
  width: 100%;
  height: auto;
}
.headerButton{
  height: 40pt;
  width: 40pt;
}

.btn_btn-success{
  background-color: #F3F3F3;
  
}
</style>