<template>
  <div id="drawer">
    <div
      v-if="drawerflg && !del"
      class="drawer-menu-wrapper"
    >
      <div>
        <button @click="push1">
          ・Home
        </button>
      </div>
      <Main :main="main" />
      <div>
        <button @click="push2">
          ・About Me
        </button>
      </div>
      <About :about="about" />
      <div>
        <button @click="push3">
          ・Skill Sets
        </button>
      </div>
      <Skill :skill="skill" />
      <div>
        <button @click="push4">
          ・Vision
        </button>
      </div>
      <Vision :vision="vision" />
      <!-- <div>
        <button @click="push5">
          ・Customize Item1
        </button>
      </div>
      <div>
        <button @click="push6">
          ・Customize Item2
        </button>
      </div> -->
    </div>
  </div>
</template>
<script>
import Main from "./Main.vue"
import About from "./About.vue"
import Skill from "./Skill.vue"
import Vision from "./Vision.vue"
export default {
  name: "Drawer",
  components: {
    Main,
    About,
    Skill,
    Vision,
  },
  props: {
    drawerflg:{
      type: Boolean,
      default: false,
    },
    del:{
      type: Boolean,
      default: true,
    }
  },
  data() {
    return {
      main: false,
      about: false,
      skill: false,
      vision: false,
    };
  },
  methods: {
    push1(){
      console.log(this.main)
      this.main = true
      console.log(this.main)
      console.log("main ok")
      this.del = true
    },
    push2(){
      this.about = true
      console.log("about ok")
      this.del = true
    },
    push3(){
      this.skill = true
      console.log("skill ok")
      this.del = true
    },
    push4(){
      this.vision = true
      console.log("vision ok")
      this.del = true
    }
  }
};
</script>
