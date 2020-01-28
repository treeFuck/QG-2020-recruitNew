<style lang="scss" scoped>
// PC
@media only screen and (min-width: 1024px) {
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
    top: 3.6rem;
    left: 1.9rem;
    width: 8.2rem;
    font-size: 0.4rem;
  }
}
// ipad
@media only screen and (max-width: 1024px) and (min-width: 740px) {
}
// 手机
@media only screen and (max-width: 740px) {

}
.game {
  background-color: #CFC9E5;
}
</style>
<template>
    <div class="game page">
      <div class="name">图形</div>
      <img class="bgLogo" src="@/assets/图形@2x.png" />
      <div class="introduce">图形渲染组（前身手游组）的研究方向为计算机图形学与AR/VR开发。小组以DirectX、Unity3D作为主要学习方向，DirectX用于理解底层图形渲染原理，Unity3D引擎用于开发AR/VR应用程序、仿真平台以及其他交互式媒体应用程序。</div>
    </div>
</template>

<script>
export default {
}
</script>