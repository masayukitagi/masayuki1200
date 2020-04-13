<template>
  <div>
    <Header />
    <Main />
    <About />
    <Skill />
    <Vision />
    <Footer />
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
  _components: {
    Header,
    Main,
    About,
    Skill,
    Vision,
    Footer,
  },
  get components() {
    return this._components
  },
  set components(value) {
    this._components=value
  },
}
</script>

<style>
/* font:NoteSnas */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');
</style>

