<template>
  <div id="body">
    <Header />
    <Main />
    <div>{{ this.skills }}</div>
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
  data() {
    return {
      skills: []
    }
  },
  mounted () {
    this.getSkills();
  },
  methods: {
    getSkills() {
      // dataのスキルを初期化する
      this.skills = [];
      // this.skillsを一時変数のitemsに参照コピーする
      let items = this.skills;
      // axios.getを用いてデプロイ済のfunctionにアクセスする
      this.axios.get('https://us-central1-masayukitagi-8e898.cloudfunctions.net/skills')
        .then((response) => {
          response.data.forEach(function(skill) {
            // 取得したデータを１件ずつ配列に設定する
            items.push(skill);
          })
        })
        .catch((e) => {
          alert(e);
        });
      console.log(items)
    }
  }
}

/*
test
ボタン切り替え
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
↑test
*/
</script>

<style>
/* font:NoteSnas */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');

#body {
  overflow: hidden;
}
</style>
