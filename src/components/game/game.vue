<style lang="scss" scoped>
// PC
@media only screen and (min-width: 1025px) {
    .name {
    top: 0;
    left: 1.4rem;
    font-size: 2rem;
    line-height: 2.6rem;
  }
  .bgLogo {
    bottom: 1rem;
    right: 2.4rem;
    width: 5.6rem;
  }
  .introduce {
    top: 50%;
    left: 1.9rem;
    width: 8.2rem;
    font-size: 0.4rem;
    transform: translateY(-50%);
  }
}
// ipad
@media only screen and (max-width: 1024px) and (min-width: 741px) {
  .name {
    top: 0.4rem;
    width: 100%;
    text-align: center;
  }
  .bgLogo {
    right: 50%;
    bottom: 0.6rem;
    margin-right: -2rem;
    width: 4rem;
  }
  .introduce {
    top: 2rem;
    right: 5%;
    width: 90%;
  }
}
// 手机
@media only screen and (max-width: 740px) {
  .name {
    top: 0.3rem;
    width: 100%;
    text-align: center;
  }
  .bgLogo {
    right: 50%;
    bottom: 0.5rem;
    margin-right: -1rem;
    width: 2rem;
  }
  .introduce {
    top: 1.3rem;
    right: 5%;
    width: 90%;
  }
}
.game {
  //background-color: #CFC9E5;
  background: linear-gradient(to top, #7A69B9, #CFC9E5);
  .bg {
    z-index: 0;
  }
}
</style>
<template>
    <div class="game page">
      <bg :index="9" :floatIconUrl="floatIconUrl"></bg>
      <div class="name">图形</div>
      <img class="bgLogo" src="@/assets/图形@2x.png" />
      <div class="introduce">图形渲染组（前身手游组）的研究方向为计算机图形学与AR/VR开发。<p>小组以DirectX、Unity3D作为主要学习方向，DirectX用于理解底层图形渲染原理，Unity3D引擎用于开发AR/VR应用程序、仿真平台以及其他交互式媒体应用程序。</p></div>
    </div>
</template>

<script>
import bg from "@/components/public/bg.vue";
import gameBg from "@/assets/game_bg.png";
export default {
  components: {
    bg
  },
  data() {
    return {
      floatIconUrl: gameBg,
    }
  }
};
</script>