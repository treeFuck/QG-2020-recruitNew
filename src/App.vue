<style lang="scss">
@font-face {
  font-family: name;
  src: url(./assets/优设标题黑.ttf);
}
* {
  padding: 0;
  margin: 0;
}
#app {
  width: 100%;
  color: #fff;
  .page {
    position: relative;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100vh;
    .name {
      position: absolute;
      font-family: name;
      font-size: 2rem;
      line-height: 2.6rem;
    }
    .bgLogo {
      position: absolute;
    }
    .introduce {
      position: absolute;
      text-indent: 2em;
      font-size: 0.4rem;
      line-height: 0.7rem;
      font-weight: lighter;
    }
  }
}
// PC
@media only screen and (min-width: 1024px) {
}
// ipad
@media only screen and (max-width: 1024px) and (min-width: 740px) {
}
// 手机
@media only screen and (max-width: 740px) {
}
</style>

<template>
  <div id="app">
    <homepage></homepage>
    <studio></studio>
    <front></front>
    <end></end>
    <mobile></mobile>
    <embedded></embedded>
    <datas></datas>
    <game></game>
    <design></design>
  </div>
</template>

<script>
import homepage from "@/components/homepage/homepage.vue";
import studio from "@/components/studio/studio.vue";
import front from "@/components/front/front.vue";
import end from "@/components/end/end.vue";
import mobile from "@/components/mobile/mobile.vue";
import embedded from "@/components/embedded/embedded.vue";
import datas from "@/components/datas/datas.vue";
import game from "@/components/game/game.vue";
import design from "@/components/design/design.vue";

export default {
  components: {
    homepage,
    studio,
    front,
    end,
    mobile,
    embedded,
    datas,
    game,
    design
  }
};
</script>