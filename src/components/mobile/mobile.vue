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
    top: 50%;
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
      <img class="bgLogo" src="@/assets/移动@2x.png" />
      <div class="introduce">智能手机应用开发小组，简称移动组。小组在结构上前前后后经历了三次变革，主攻方向从Android应用/游戏开发变为Android应用/后台开发再到现在的纯Android应用开发。我们与各大中小型企业、创业公司保持着紧密的合作，国内最早一批手机卡牌类游戏就出自我们之手，并被ChinaJoy邀请参会。</div>
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
      floatIconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAkCAYAAAAq23xmAAAACXBIWXMAAAsSAAALEgHS3X78AAAAhklEQVRo3u3QWw6CMBQE0NH978QNmhg7flAIArqCMz/tfZSQc3s9H81leq67drvb6WF+nDVpd++Wetn8VY+v+zZrk8zZ2p9nMrb7uTfmP4z57etzv9++kzT3yN8AAgQIECBAgAABEkCAAAECBAgQIAEECBAgQIAAARJAgAABAgQIECBAcp0PObFhbyi4/qQAAAAASUVORK5CYII=',
    }
  }
};
</script>