<template>
  <div id="body">
    <Header />
    <Main />
    <About />
    <Skill />
    <Vision />
    <Footer />
    <test />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Vision from './components/Vision.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    About,
    Skill,
    Vision,
    Footer
  },
  mounted(){
    this.$store.dispatch('updateChartScore');
  }  //Appが一番親だから読み込みが早い。これは1回サイトに反映したらそれでいいから早く入れておく
}
</script>

<style>
/* font:NoteSnas */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');

#body {
  overflow: hidden;
}
</style>
