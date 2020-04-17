<template>
  <div class="mainSection">
    <div class="upToMain" />
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
    <div class="upToAbout" />
  </div>
</template>

<style scoped>
.mainSection {
  background: linear-gradient(30deg, #989fff, rgb(52, 225, 255));
  width: 100%;
  height: auto;
  text-align: center;
  margin: 50px 0 0 0;
}

.userName {
  margin: 0 auto;
  border-bottom: solid 1px	#fff;
  color: #fff;
  font-family: 'Noto Sans JP', sans-serif;
  width: 130px;
  font-size: 18pt;
  font-weight: bold;
  padding: 20pt 0 6pt 0;
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
  width: 160px;
  height: 160px;
  margin: 5pt 0 0 0;
}

.upToMain {
  position: relative;
  bottom: 40px;
}

.upToAbout {
  padding: 0 0 20pt 0;
}
</style>
