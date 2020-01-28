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
    left: 2.2rem;
    width: 5.6rem;
  }
  .introduce {
    top: 2.9rem;
    right: 1.6rem;
    width: 8.5rem;
    font-size: 0.4rem;
  }
}
// ipad
@media only screen and (max-width: 1024px) and (min-width: 740px) {
}
// 手机
@media only screen and (max-width: 740px) {

}
.design {
  background-color: #FDBDDC;
}
</style>
<template>
    <div class="design page">
      <div class="name">设计</div>
      <img class="bgLogo" src="@/assets/设计@2x.png" />
      <div class="introduce">设计组的主要研究方向是手机游戏和网页的界面设计及交互，游戏原画设计以及平面设计。我们旨在锻炼成员的创新能力、创意思想，培养成员的视觉设计和交互设计能力。除此之外，设计组也在着手3D模型的设计以及3D打印机的使用，产出的智能打印机和智能头盔已经斩获多个奖项，更是在挑战杯校赛中协助取得特等奖、一等奖的好成绩。</div>
    </div>
</template>

<script>
export default {
}
</script>