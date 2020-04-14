
<template>
  <div class="drawerSection">
    <img
      class="drawerButton"
      alt="メニューを閉じる"
      src="@/assets/close.png"
    >
    <ul class="drawerMenuSection">
      <li id="drawerMenuItem">
        <a
          class="drawerMenuItemLink"
          href=".mainSection"
          @click="clickSmoothScroll1()"
        >・Home</a>
      </li>
      <li id="drawerMenuItem">
        <a
          class="drawerMenuItemLink"
          href=".aboutSection"
          @click="clickSmoothScroll2()"
        >・About Me</a>
      </li>
      <li id="drawerMenuItem">
        <a
          class="drawerMenuItemLink"
          href=".skillSection"
          @click="clickSmoothScroll3()"
        >・Skill Sets</a>
      </li>
      <li id="drawerMenuItem">
        <a
          class="drawerMenuItemLink"
          href=".visionSection"
          @click="clickSmoothScroll4()"
        >・Vision</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    clickSmoothScroll1 () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('.mainSection'),
        400,
        null,
        null,
        'y'
      )
    },

    clickSmoothScroll2 () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('.aboutSection'),
        400,
        null,
        null,
        'y'
      )
    },
    clickSmoothScroll3 () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('.skillSection'),
        400,
        null,
        null,
        'y'
      )
    },
    clickSmoothScroll4 () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('.visionSection'),
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
  width: 30px;
  height: 30px;
}

.drawerMenuSection {
  width: 100%;
  height: auto;
}

#drawerMenuItem {
  background-color: #fff;
  padding: 15px 0;
  width: 100%;
  height: auto;
  border: solid 1px	#f5f5f5;
}

.drawerMenuItemLink {
  text-decoration: none;
  color: #707070;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 25px;
}

.closeC {
  display: none;
}

</style>
