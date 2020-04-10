<template>
  <div class="mainSection">
    <div class="userName">
      M.Tagi
    </div>
    <div class="companyName">
      Sattleconsulting
    </div>
    <img
      class="profilePicture"
      alt="Masayuki_Tagi"
      src="@/assets/my_icon.jpg"
    >
  </div>
</template>


<!-- script -->

<script>
</script>


<!-- CSS -->


<style scoped>
.mainSection {
  background: linear-gradient(0deg, #06c1e6, #80e1f7);
  width: 100%;
  height: auto;
  text-align: center;
  margin: 0 0 0 0;
}

.userName {
  margin: 0 auto;
  border-bottom: solid 1px	#fff;
  color: #fff;
  font-family: 'Noto Sans JP', sans-serif;
  width: 130px;
  font-size: 18pt;
  font-weight: bold;
  padding: 10pt 0 6pt 0;
  text-shadow: 0.5px 0.75px 1px #808080;
}

.companyName {
  color: #fff;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 18pt;
  font-weight: bold;
  margin: 6pt 0 10pt 0;
  text-shadow: 0.5px 0.75px 1px #808080;
}

.profilePicture {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin: 5pt 0 10pt 0;
}
</style>
