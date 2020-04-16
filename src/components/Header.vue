<template>
  <div id="headerSection">
    <input
      id="nav-input"
      type="checkbox"
      class="nav-unshown"
    >
    <label
      id="nav-open"
      for="nav-input"
    >
      <img
        class="headerButton"
        alt="menu"
        src="@/assets/menu_icon.png"
      >
    </label>
    <label
      id="nav-close"
      class="nav-unshown"
      for="nav-input"
    />
    <div id="nav-content">
      <Menu />
    </div>
  </div>
</template>

<script>
import Menu from './Menu.vue'
export default {
  name: 'App',
  _components: {
    Menu
  },
  get components() {
    return this._components
  }
}
</script>

<style>
.headerButton {
  margin: 5px 5px;
  height: 30pt;
  width: 30pt;
}

#headerSection {
  position: fixed;
  top: 0%;
  background-color: #f3f3f3;
  width: 100%;
  height: 50px;
}

.btn_btn-success {
  margin: 20px 0 0 20px;
  background-color: #f3f3f3;
  border: 0 none;
}

/* チェックボックス等は非表示に */
.nav-unshown {
  display: none;
}

/* アイコンのスペース */
#nav-open {
  display: inline-block;
  height: auto;
  vertical-align: middle;
}

/* 閉じる用の薄黒カバー */
#nav-close {
  display: none;/* はじめは隠しておく */
  position: fixed;
  z-index: 99;
  top: 0;/* 全体に広がるように */
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0;
  transition: 0.3s ease-in-out;
}

/* 中身 */
#nav-content {
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;/* 最前面に */
  width: 90%;/* 右側に隙間を作る（閉じるカバーを表示） */
  max-width: 200px;/* 最大幅（調整してください） */
  height: 100%;
  background-color: #f5f5f5;/* 背景色 */
  transition: 0.2s ease-in-out;/* 滑らかに表示 */
  -webkit-transform: translateX(-105%);
  transform: translateX(-105%);/* 左に隠しておく */
}

/* チェックが入ったらもろもろ表示 */
#nav-input:checked ~ #nav-close {
  display: block;/* カバーを表示 */
  opacity: 0.5;
}

#nav-input:checked ~ #nav-content {
  -webkit-transform: translateX(0%);
  transform: translateX(0%);/* 中身を表示（右へスライド） */
  box-shadow: 6px 0 25px rgba(0, 0, 0, 0.15);
}
</style>
