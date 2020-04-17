<template>
  <div class="footerSection">
    <a
      href="#main"
      @click="clickSmoothScroll()"
    >
      <img
        class="footerScroll"
        alt="footer"
        src="@/assets/go_top.png"
      >
    </a>
    <div class="footerCopyright">
      @ Seattleconsulting
    </div>
  </div>
</template>

<!-- スクロール -->
<script>
export default {
  methods: {
    clickSmoothScroll () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('.upToMain'),
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
.footerSection {
  background: linear-gradient(30deg, #989fff, rgb(52, 225, 255));
  width: 100%;
  height: auto;
  text-align: center;
  margin: 0 0 0 0;
}

.footerScroll {
  position: relative;
  bottom: 6px;
  height: 20px;
}

.footerCopyright {
  padding-bottom: 20px;
}
</style>>
