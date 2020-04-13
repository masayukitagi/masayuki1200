<template>
  <div class="footerSection">
    <a
      href="#header"
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
        document.querySelector('#headerSection'),
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
  background: linear-gradient(0deg, #06c1e6, #80e1f7);
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
