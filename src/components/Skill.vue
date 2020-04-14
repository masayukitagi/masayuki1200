<template>
  <div class="skillSection">
    <div class="skillTitle">
      Skill set
    </div>
    <div class="skillExplain">
      自分の"好き"ができ、自信を持て、人に提供し、人を笑顔にできるクリエイターを目指し、好奇心の向くことにチャレンジを惜しまない。そのために現在は、自分が大学時代に興味を持ったIT技術を0から勉強しています。
    </div>
    <a
      class="gitHubLink"
      target="_blank"
      href="https://github.com/masayukitagi"
    >
      <label
        class="gitHubLabel"
        for="name1"
      >GitHub : https://github.com/masayukitagi</label>
    </a>
    <div class="skillCategories">
      <label
        class="Front-end"
        @click="isActive01=!isActive01"
      >Front-end</label>
      <label
        class="Bsck-end"
        @click="isActive02=!isActive02"
      >Bsck-end</label>
      <label
        class="DevOps"
        @click="isActive03=!isActive03"
      >DevOps</label>
    </div>
    <div class="skillList">
      <ul>
        <li
          id="Front-end-list"
          :class="{activeR:isActive01}"
        >
          HTML
        </li>
        <li
          id="Front-end-list"
          :class="{activeR:isActive01}"
        >
          CSS
        </li>
        <li
          id="Front-end-list"
          :class="{activeR:isActive01}"
        >
          javascript
        </li>
        <li
          id="Front-end-list"
          :class="{activeR:isActive01}"
        >
          SCSS
        </li>
        <li
          id="Front-end-list"
          :class="{activeR:isActive01}"
        >
          Vue
        </li>
      </ul>
      <ul>
        <li
          id="Bsck-end-list"
          :class="{activeG:isActive02}"
        >
          java
        </li>
        <li
          id="Bsck-end-list"
          :class="{activeG:isActive02}"
        >
          Ruby
        </li>
        <li
          id="Bsck-end-list"
          :class="{activeG:isActive02}"
        >
          RubyOnRails
        </li>
        <li
          id="Bsck-end-list"
          :class="{activeG:isActive02}"
        >
          MySQL
        </li>
      </ul>
      <ul>
        <li
          id="DevOps-list"
          :class="{activeP:isActive03}"
        >
          Linux
        </li>
        <li
          id="DevOps-list"
          :class="{activeP:isActive03}"
        >
          Node
        </li>
        <li
          id="DevOps-list"
          :class="{activeP:isActive03}"
        >
          Git
        </li>
        <li
          id="DevOps-list"
          :class="{activeP:isActive03}"
        >
          Github
        </li>
        <li
          id="DevOps-list"
          :class="{activeP:isActive03}"
        >
          Firebasa
        </li>
      </ul>
    </div>
    <div class="skillGraph">
      <FrontChart id="Graph" />
    </div>
    <div class="skillGraph">
      <BackChart id="Graph" />
    </div>
    <div class="skillGraph">
      <DevOpsChart id="Graph" />
    </div>
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
  data(){
    return {
      isActive01: false,
      isActive02: false,
      isActive03: false,
    }
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
  padding: 10pt 0 6pt 0;
  text-shadow: 0.5px 0.75px 1px #808080;
}

.skillExplain {
  margin: 10px auto;
  text-align: left;
  color: #707070;
  font-family: 'Noto Sans JP', sans-serif;
  line-height: 1.5em;
  font-size: 12pt;
  font-weight: bold;
  width: 80%;
}

.gitHubLabel {
  margin: 10px auto;
  color: #20879f;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
}

.skillCategories {
  margin: 40px 0 0 0;
  text-align: center;
}

.activeR {
  background-color: salmon;
  border: none;
  box-shadow: none;
}

.activeG {
  background-color: rgb(34, 134, 25);
  border: none;
  box-shadow: none;
}

.activeP {
  background-color: rgb(202, 68, 255);
  border: none;
  box-shadow: none;
}

.Front-end,
.Bsck-end,
.DevOps {
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

#Front-end-list,
#Bsck-end-list,
#DevOps-list {
  display: inline-block;
  padding: 3px 10px;
  margin: 5px 5px;
  border: solid 1px	#f5f5f5;
  box-shadow: 1px 2px 3px #808080e5;
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
  width: 400px;
}

</style>
