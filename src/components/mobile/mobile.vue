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
    right: 1.9rem;
    width: 5.5rem;
  }
  .introduce {
    top: 3rem;
    left: 2.25rem;
    width: 8.5rem;
    font-size: 0.4rem;
  }
}
// ipad
@media only screen and (max-width: 1024px) and (min-width: 741px) {
}
// 手机
@media only screen and (max-width: 740px) {

}
.mobile {
  background-color: #A8CFDE;
}
</style>
<template>
    <div class="mobile page">
      <div class="name">移动</div>
      <img class="bgLogo" src="@/assets/移动@2x.png" />
      <div class="introduce">智能手机应用开发小组，简称移动组。小组在结构上前前后后经历了三次变革，主攻方向从Android应用/游戏开发变为Android应用/后台开发再到现在的纯Android应用开发。我们与各大中小型企业、创业公司保持着紧密的合作，国内最早一批手机卡牌类游戏就出自我们之手，并被ChinaJoy邀请参会。</div>
    </div>
</template>

<script>
export default {
}
</script>