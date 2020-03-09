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
    top: 52%;
    right: 2rem;
    font-size: 0.38rem;
    width: 15.2rem;
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
  // background: #3ccad1;
   background: linear-gradient(to top, rgb(236, 80, 44), rgb(245, 194, 149));
   .bg {
    z-index: 0;
  }
}
</style>
<template>
  <div class="datas page">
    <bg :index='6' :floatIconUrl="floatIconUrl"></bg>
    <div class="name">数据挖掘</div>
    <img class="bgLogo" src="@/assets/datas@2x.png" />
    <div
      class="introduce"
    >
    <p>数据挖掘组，研究方向为大数据的处理与挖掘以及机器学习的算法，是与当下流行的人工智能最相关的组。小组以机器学习的基本理论，使用Python数据分析库等进行数据科学的研究和实践，利用Linux下的Hadoop、Spark等框架进行大数据的处理和挖掘。</p>
    <p>在华为大数据平台支持下，在团队老师辛勤指导下，与国内数据挖掘领域的顶尖教授合作中，小组遇到成立以来的最大机遇，小组成员积极参赛获取大奖并研究各种学术难题努力发表高水平论文。</p></div>
  </div>
</template>

<script>
import bg from "@/components/public/bg.vue";
export default {
  components: {
    bg
  },
  data() {
    return {
      floatIconUrl: 'data:image/png;base64,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',
    }
  }
};
</script>

