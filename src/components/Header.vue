<template>
  <div id="headerSection">
    <button
      class="btn_btn-success"
      @click="toggle"
    >
      <img
        class="headerButton"
        alt="menu"
        src="@/assets/menu_icon.png"
      >
    </button>
    <Drawer
      align="left"
      :closeable="true"
      @close="toggle"
    >
      <div v-if="open">
        content here
      </div>
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
#headerSection {
  background-color: #f3f3f3;
  width: 100%;
  height: auto;
}

.headerButton {
  height: 40pt;
  width: 40pt;
}

.btn_btn-success {
  background-color: #f3f3f3;
}
</style>