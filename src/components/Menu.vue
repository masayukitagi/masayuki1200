
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
          href=".mainSection"
          @click="clickSmoothScroll1()"
        >Home</a>
      </li>
      <li id="drawerMenuItem">
        <a
          class="drawerMenuItemLink"
          href=".aboutSection"
          @click="clickSmoothScroll2()"
        >About Me</a>
      </li>
      <li id="drawerMenuItem">
        <a
          class="drawerMenuItemLink"
          href=".skillSection"
          @click="clickSmoothScroll3()"
        >Skill Set</a>
      </li>
      <li id="drawerMenuItem">
        <a
          class="drawerMenuItemLink"
          href=".visionSection"
          @click="clickSmoothScroll4()"
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
    clickSmoothScroll1 () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('.upToMain'),
        400,
        null,
        null,
        'y'
      )
    },
    clickSmoothScroll2 () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('.upToAbout'),
        400,
        null,
        null,
        'y'
      )
    },
    clickSmoothScroll3 () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('.upToSkill'),
        400,
        null,
        null,
        'y'
      )
    },
    clickSmoothScroll4 () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('.upToVision'),
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
