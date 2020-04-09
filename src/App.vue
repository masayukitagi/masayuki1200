<template>
  <div id="app">
    <Header />
    <Main />
    <About />
    <Skill />
    <Vision />
    <Footer />
    <Menu />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Vision from './components/Vision.vue'
import Footer from './components/Footer.vue'
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  _components: {
    Header,
    Main,
    About,
    Skill,
    Vision,
    Footer,
    Menu
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
#app {
}
</style>
