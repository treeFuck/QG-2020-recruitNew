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
  background: linear-gradient(to top, #fc4380, #f8a0cb);
  .bg {
    z-index: 0;
  }
}
</style>
<template>
  <div class="design page">
    <bg :index="10" :floatIconUrl="floatIconUrl"></bg>
    <div class="name">设计</div>
    <img class="bgLogo" src="@/assets/desgin@2x.png" />
    <div class="introduce">
      <p>设计组的主要研究方向是安卓App、小程序和网页的界面设计及交互与平面设计。我们旨在培养成员的视觉设计和交互设计能力。</p>
      <p>除此之外，设计组也着手于3D模型设计的研究，并且在各项赛事中协助取得许多好成绩。产出的智能打印机、智能头盔等产品已经斩获多个奖项。</p>
    </div>
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
      floatIconUrl: designBg
    };
  }
};
</script>