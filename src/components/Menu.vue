
<template>
  <div class="drawerSection">
    <label for="nav-input">
      <img
        class="drawerButton"
        alt="メニューを閉じる"
        src="@/assets/close.png"
      >
    </label>
    <ul
      class="drawerMenuSection"
      @click="closeMenu"
    >
      <li id="drawerMenuItem">
        <a
          class="drawerMenuItemLink"
          @click="clickSmoothScroll('.upToMain')"
        >Home</a>
      </li>
      <li id="drawerMenuItem">
        <a
          class="drawerMenuItemLink"
          @click="clickSmoothScroll('.upToAbout')"
        >About Me</a>
      </li>
      <li id="drawerMenuItem">
        <a
          class="drawerMenuItemLink"
          @click="clickSmoothScroll('.upToSkill')"
        >Skill Set</a>
      </li>
      <li id="drawerMenuItem">
        <a
          class="drawerMenuItemLink"
          @click="clickSmoothScroll('.upToVision')"
        >Vision</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    closeMenu(){
      this.$emit('close')
    },
    clickSmoothScroll (Scroll) {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector(Scroll),
        400,
        null,
        null,
        'y'
      )
    }
  }
}
</script>

<style scoped>
.drawerSectio {
  width: 100%;
  height: auto;
}

.drawerButton {
  cursor: pointer;
  padding: 25px 0 10px 0;
  width: 20px;
  height: 20px;
  opacity: 0.5;
}

.drawerMenuSection {
  width: 100%;
  height: auto;
}

#drawerMenuItem {
  cursor: pointer;
  padding: 15px 0;
  width: 100%;
  height: auto;
}

.drawerMenuItemLink {
  text-decoration: none;
  color: #707070;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 20px;
  padding: 5px 0 5px 0;
}

.closeC {
  display: none;
}

</style>
