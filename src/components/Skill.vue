<template>
  <div class="skillSection">
    <div class="skillTitle">
      Skill set
    </div>
    <div class="skillExplain">
      入社後の研修で、FrontEnd側の書き方がわかってきましたが、BackEndやDevOpsはあまり理解が及んでいないため、これから自発的に学習しつつ、経験を積んでいきます。またポートフォリオ作成を通して、自分の書いたプログラムが実際に見える点からフロントエンド側の実装に興味を持ちました。現段階では、仕様書を参考に基礎を学んでいるので、見手への見え方や導線計画などを踏まえたデザインに時間を割くことができていないのが現状ですが、そういったデザイン面も考えながらより大きな価値を人に提供し笑顔にできるよう、学習したことをしっかり定着させ作業速度を向上させます。
    </div>
    <a
      class="gitHubLink"
      target="_blank"
      href="https://github.com/masayukitagi"
    >
      <label
        class="gitHubLabel"
        for="name1"
      ><span id="GitHub">GitHub</span> : https://github.com/masayukitagi</label>
    </a>



    <div class="skillCategories">
      <label
        class="Front-end"
        :class="{'frontEnd2':changeF}"
        @click="clickCategory('front')"
      >Front-end</label>

      <label
        class="Bsck-end"
        :class="{'backEnd2':changeB}"
        @click="clickCategory('back')"
      >Back-end</label>

      <label
        class="DevOps"
        :class="{'devOps2':changeD}"
        @click="clickCategory('dev')"
      >DevOps</label>
    </div>



    <div class="skillList">
      <ul
        id="Front-end-list"
        :class="{'active1':changeF}"
      >
        <li>
          HTML
        </li>
        <li>
          CSS
        </li>
        <li>
          JavaScript
        </li>
        <li>
          SCSS
        </li>
        <li>
          Vue
        </li>
      </ul>

      <ul
        id="Bsck-end-list"
        :class="{'active2':changeB}"
      >
        <li>
          java
        </li>
        <li>
          Ruby
        </li>
        <li>
          RubyOnRails
        </li>
        <li>
          MySQL
        </li>
      </ul>

      <ul
        id="DevOps-list"
        :class="{'active3':changeD}"
      >
        <li>
          Linux
        </li>
        <li>
          Node
        </li>
        <li>
          Git
        </li>
        <li>
          Github
        </li>
        <li>
          Firebasa
        </li>
      </ul>
    </div>
    <FrontChart
      v-if="changeF && afterLoaded"
      id="Graph"
    />
    <BackChart
      v-if="changeB"
      id="Graph"
    />
    <DevOpsChart
      v-if="changeD"
      id="Graph"
    />
    <div class="upToVision" />
  </div>
</template>

<script>
import FrontChart from './FrontChart.vue'
import BackChart from './BackChart.vue'
import DevOpsChart from './DevOpsChart.vue'

export default {
  components: {
  FrontChart,
  BackChart,
  DevOpsChart
  },
  data(){  //表示,適用するもの
    return {  //下の状態を返す。
      openedSkill:'front' //openedSkill は front という状態。
    }
  },
  computed:{
    afterLoaded(){ //afterLoaded（フロントエンドのグラフ） に。
      return this.$store.state.loaded  //常に store.js/state/ 内の loaded の算出結果を返している。
    },
    changeF(){  //changeF（アイテムとグラフ） に、
      return this.openedSkill == 'front' //常に openedSkill = front の算出結果を返している。(算出結果は openedSkill = front)
    }, //openedSkill が back のとき changeF は false
    changeB(){  //changeB（アイテムとグラフ） に、
      return this.openedSkill == 'back' //常に openedSkill = back の算出結果を返している。(算出結果は openedSkill = back)
    },
    changeD(){  //changeD（アイテムとグラフ） に、
      return this.openedSkill == 'dev' //常に openedSkill = dev の算出結果を返している。(算出結果は openedSkill = dev)
    }
  },
  methods:{
    clickCategory (x){ //引数 x をクリックすると
      return this.openedSkill = x //openedSkill が x になる。
    } //引数 = x = openSkill になった。
  }
}
</script>

<style scoped>
.skillSection {
  text-align: center;
  margin: 20px auto;
  background-color: #fff;
  width: 100%;
  height: auto;
  border-bottom: dashed 1px	#d3d3d3;
}

.skillTitle {
  color: #20879f;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 18pt;
  font-weight: bold;
  padding: 20pt 0 10pt 0;
  text-shadow: 0.5px 0.75px 1px #808080;
}

.skillExplain {
  margin: 10px auto  20px auto;
  text-align: left;
  color: #707070;
  font-family: 'Noto Sans JP', sans-serif;
  line-height: 1.5em;
  font-size: 12pt;
  font-weight: bold;
  width: 80%;
}

#GitHub {
  font-weight: bold;
}

.gitHubLink {
  text-decoration: none;
}

.gitHubLabel {
  cursor: pointer;
  margin: 10px auto;
  color: #20879f;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
}

.frontEnd2 {
  border-bottom: solid 2px	rgb(255, 68, 68);
  padding-bottom: 3px;
}

.backEnd2 {
  border-bottom: solid 2px	rgb(34, 134, 25);
  padding-bottom: 3px;
}

.devOps2 {
  border-bottom: solid 2px	rgb(202, 68, 255);
  padding-bottom: 3px;
}

.skillCategories {
  margin: 70px 0 0 0;
  text-align: center;
}

.active1 li {
  background-color: rgb(255, 88, 70, 0.3);
  box-shadow: 1px 2px 3px #808080e5;
}

.active2 li {
  background-color: rgb(34, 134, 25, 0.3);
  box-shadow: 1px 2px 3px #808080e5;
}

.active3 li {
  background-color: rgb(202, 68, 255, 0.3);
  box-shadow: 1px 2px 3px #808080e5;
}

.Front-end,
.Bsck-end,
.DevOps {
  cursor: pointer;
  display: inline-block;
  margin: 0 10px;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 14pt;
  font-weight: bold;
  text-shadow: 0.5px 0.75px 1px #808080;
}

.Front-end {
  color: rgb(255, 68, 68);
}

.Bsck-end {
  color: rgb(34, 134, 25);
}

.DevOps {
  color: rgb(202, 68, 255);
}

.skillList {
  margin: 20px 0 10px 0;
}

.skillList li {
  list-style: none;
  display: inline-block;
  padding: 3px 10px;
  margin: 5px 5px;
  font-size: 12pt;
  font-family: 'Noto Sans JP', sans-serif;
}

#Front-end-list {
  color: rgb(255, 68, 68);
}

#Bsck-end-list {
  color: rgb(34, 134, 25);
}

#DevOps-list {
  color: rgb(202, 68, 255);
}

#Graph {
  margin: 40px auto;
  width: 350px;
}

</style>

<!--以下でも可能

<template>
  <div>

    <div class="skillCategories">
      <label @click="function1()"> Front-end </label>
      <label @click="function2()"> Back-end </label>
      <label @click="function3()"> DevOps </label>
    </div>

    <div>
      <ul :class="{'active1':changes1}">
      </ul>
      <ul :class="{'active2':changes2}">
      </ul>
      <ul :class="{'active3':changes3}">
      </ul>
    </div>

    <FrontChart
      v-if="changes1 && loaded" />
    <BackChart
      v-if="changes2 && loaded" />
    <DevOpsChart
      v-if="changes3 && loaded" />

  </div>
</template>

<script>
  data(){
    return {
      changes1: true,
      changes2: false,
      changes3: false,
    }
  },
  methods:{
    function1(){
      this.changes1=!this.changes1,
      this.changes2= false,
      this.changes3= false
    },
    function2(){
      this.changes1= false,
      this.changes2=!this.changes2,
      this.changes3= false
    },
    function3(){
      this.changes1= false,
      this.changes2= false,
      this.changes3=!this.changes3
    }
  }
}
</script>

-->
