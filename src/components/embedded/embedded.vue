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
  .name {
    top: 0.4rem;
    width: 100%;
    text-align: center;
  }
  .bgLogo {
    right: 50%;
    bottom: 0.8rem;
    margin-right: -2.7rem;
    width: 5.4rem;
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
    margin-right: -1.2rem;
    width: 2.4rem;
  }
  .introduce {
    top: 1.3rem;
    right: 5%;
    width: 90%;
  }
}
.embedded {
  // background-color: #F6D861;
  background: linear-gradient(to top, rgb(55, 172, 71), rgb(154, 210, 156));
  .bg {
    z-index: 0;
  }
}
</style>
<template>
    <div class="embedded page">
       <bg :floatIconUrl="floatIconUrl"></bg>
      <div class="name">嵌入式</div>
      <img class="bgLogo" src="@/assets/嵌入式@2x.png" />
      <div class="introduce">作为计算机学院历史最悠久、实力最强的嵌入式开发团队。小组内部有着丰富的开发资源及技术传承，主要研究方向为基于ARM+LINUX平台以及其他各类开发板的嵌入式软件开发。小组的学习之旅主要伴随着比赛，近年来获得过许多奖项，第十四届“挑战杯”全国大学生课外学术科技作品竞赛香港专项赛特等奖更是刷新了学校在挑战杯获奖层次的记录。</div>
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
      floatIconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAAnUlEQVR42u3QwRECIQwF0MT+K3Csyn428cAqyHagL5mB/MDp5f356Niql3PN/cl9ufudc86z9zy69pzXt4pa5nOTc1/Lr1r+V1YcX7vRx/k25opb/HkBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBfqBfGvWYA4708UQAAAABJRU5ErkJggg==',
    }
  }
};
</script>