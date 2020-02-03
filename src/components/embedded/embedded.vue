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
    left: 1.6rem;
    width: 7.8rem;
  }
  .introduce {
    top: 2.5rem;
    right: 1rem;
    width: 8rem;
    font-size: 0.4rem;
  }
}
// ipad
@media only screen and (max-width: 1024px) and (min-width: 741px) {
}
// 手机
@media only screen and (max-width: 740px) {

}
.embedded {
  background-color: #F6D861;
}
</style>
<template>
    <div class="embedded page">
      <div class="name">嵌入式</div>
      <img class="bgLogo" src="@/assets/嵌入式@2x.png" />
      <div class="introduce">作为计算机学院历史最悠久、实力最强的嵌入式开发团队。小组内部有着丰富的开发资源及技术传承，主要研究方向为基于ARM+LINUX平台以及其他各类开发板的嵌入式软件开发。小组的学习之旅主要伴随着比赛，近年来获得过许多奖项，第十四届“挑战杯”全国大学生课外学术科技作品竞赛香港专项赛特等奖更是刷新了学校在挑战杯获奖层次的记录。</div>
    </div>
</template>

<script>
export default {
}
</script>