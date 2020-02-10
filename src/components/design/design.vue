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
    left: 2.2rem;
    width: 5.6rem;
  }
  .introduce {
    top: 50%;
    right: 1.6rem;
    width: 8.5rem;
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
    top: 1.8rem;
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
    margin-right: -0.9rem;
    width: 1.8rem;
  }
  .introduce {
    top: 1.2rem;
    right: 5%;
    width: 90%;
  }
}
.design {
  //background-color: #FDBDDC;
  background: linear-gradient(to top, #FC4380, #F8A0CB);
  .bg {
    z-index: 0;
  }
}
</style>
<template>
    <div class="design page">
      <bg :index="10" :floatIconUrl="floatIconUrl"></bg>
      <div class="name">设计</div>
      <img class="bgLogo" src="@/assets/设计@2x.png" />
      <div class="introduce">设计组的主要研究方向是手机游戏和网页的界面设计及交互，游戏原画设计以及平面设计。<p>我们旨在锻炼成员的创新能力、创意思想，培养成员的视觉设计和交互设计能力。除此之外，设计组也在着手3D模型的设计以及3D打印机的使用，产出的智能打印机和智能头盔已经斩获多个奖项，更是在挑战杯校赛中协助取得特等奖、一等奖的好成绩。</p></div>
    </div>
</template>

<script>
import bg from "@/components/public/bg.vue";
import designBg from "@/assets/design_bg.png";
export default {
  components: {
    bg
  },
  data() {
    return {
      floatIconUrl: designBg,
    }
  }
};
</script>