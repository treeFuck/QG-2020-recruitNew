<style lang="scss" scoped>
// PC
@media only screen and (min-width: 1025px) {
  .name {
    top: 0;
    left: 1.4rem;
  }
  .bgLogo {
    left: 5.6rem;
    top: 2.8rem;
    width: 8rem;
  }
  .introduce {
    top: 4rem;
    right: 2.6rem;
    width: 14rem;
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
    margin-right: -2.9rem;
    width: 5.8rem;
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
    margin-right: -1.4rem;
    width: 2.8rem;
  }
  .introduce {
    top: 1.3rem;
    right: 5%;
    width: 90%;
  }
}
.datas {
  background: #3ccad1;
}
</style>
<template>
  <div class="datas page">
    <div class="name">数据挖掘</div>
    <img class="bgLogo" src="@/assets/数据挖掘@2x.png" />
    <div
      class="introduce"
    >数据挖掘组，研究方向为大数据的存储、获取与运算以及机器学习的算法，是与当下流行的人工智能最相关的组。小组以机器学习的基本理论，使用数据分析库进行数据科学的研究和实践，利用Linux下的Hadoop、Spark等框架进行大数据的存储和运算。</div>
  </div>
</template>

<script>
export default {};
</script>

