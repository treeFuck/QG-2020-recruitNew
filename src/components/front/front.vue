<style lang="scss" scoped>
// PC
@media only screen and (min-width: 1025px) {
  .name {
    top: 0;
    left: 1.4rem;
  }
  .bgLogo {
    bottom: 0.4rem;
    right: 0.5rem;
    width: 8.5rem;
  }
  .introduce {
    top: 2.9rem;
    right: 2.95rem;
    width: 13.3rem;
  }
}
// ipad
@media only screen and (max-width: 1024px) and (min-width: 741px) {
  .name {
    top: 0;
    left: 1.4rem;
  }
  .bgLogo {
    bottom: 0.4rem;
    right: 0.5rem;
    width: 8.5rem;
  }
  .introduce {
    top: 2.9rem;
    right: 2.95rem;
    width: 13.3rem;
  }
}
// 手机
@media only screen and (max-width: 740px) {
  .name {
    top: 0;
    left: 1.4rem;
  }
  .bgLogo {
    bottom: 0.4rem;
    right: 0.5rem;
    width: 8.5rem;
  }
  .introduce {
    top: 2.9rem;
    right: 2.95rem;
    width: 13.3rem;
  }
}
.front {
  background-color: #64d6e2;
}
</style>
<template>
  <div class="front page">
    <div class="name">前端</div>
    <img class="bgLogo" src="@/assets/前端@2x.png" />
    <div
      class="introduce"
    >前端在网络开发中属于呈现给用户的部分，最具有代表性的莫过于传统的网页。前端组一直紧随最前沿的技术脚步，秉承着用户体验至上的原则，完成用户的需求。前端发展至今天，所能完成的任务可不仅仅于此，前端开发者探索的脚步从未停止，我们可以用Node.js进行高性能后端开发。我们创造出挑战原生APP地位的webapp小程序，更可以开发桌面级应用。</div>
  </div>
</template>

<script>
export default {};
</script>