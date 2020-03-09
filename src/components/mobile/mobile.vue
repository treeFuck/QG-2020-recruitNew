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
    top: 55%;
    left: 2.25rem;
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
    bottom: 1rem;
    margin-right: -1.5rem;
    width: 3rem;
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
    margin-right: -0.8rem;
    width: 1.6rem;
  }
  .introduce {
    top: 1.2rem;
    right: 5%;
    width: 90%;
  }
}
.mobile {
  //background-color: #A8CFDE;
  background: linear-gradient(to top, #1D90B7, #A8CFDE);
  .bg {
    z-index: 0;
  }
}
</style>
<template>
    <div class="mobile page">
      <bg :index="7" :floatIconUrl="floatIconUrl"></bg>
      <div class="name">移动</div>
      <img class="bgLogo" src="@/assets/mobile@2x.png" />
      <div class="introduce">
        <p>移动组，主攻方向为基于Android系统的应用开发，是与用户联系最密切的部分。</p>
        <p>我们一直致力于开发出极具特色并满足用户多种多样需求的APP，并紧随潮流，能够灵活使用当前主流框架。学习研究如何以多种多样的形式和更优的UI界面为用户呈现数据，同时为用户带来更好的使用体验。</p></div>
    </div>
</template>

<script>
import bg from "@/components/public/bg.vue";
import mobileBg from "@/assets/mobile_bg.png";
export default {
  components: {
    bg
  },
  data() {
    return {
      floatIconUrl: mobileBg,
    }
  }
};
</script>