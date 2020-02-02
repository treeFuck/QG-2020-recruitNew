<style lang="scss" scoped>
// PC
@media only screen and (min-width: 1024px) {
}
// ipad
@media only screen and (max-width: 1024px) and (min-width: 740px) {
}
// 手机
@media only screen and (max-width: 740px) {
}
.play {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 400;
  margin-top: -35px;
  margin-left: -35px;
  width: 70px;
  height: 70px;
  cursor: pointer;
  transform: translateY(200px);
}
</style>
<template>
  <div class="play" @click="playVideo()">
    <lottie
      class="lottie"
      :options="defaultOptions"
      :height="70"
      :width="50"
      v-on:animCreated="handleAnimation"
    />
  </div>
</template>

<script>
import Lottie from "vue-lottie";
import play from "@/assets/lottieJson/play.json";

export default {
  data() {
    return {
      defaultOptions: { animationData: play, autoplay: false, loop: false }
    };
  },
  methods: {
    playVideo() {
      console.log("点击播放");
      event.stopPropagation();
    },
    handleAnimation: function(anim) {
      this.anim = anim;
    },
    stop: function() {
      this.anim.stop();
    },
    play: function() {
      this.anim.play();
    },
    pause: function() {
      this.anim.pause();
    },
    onSpeedChange: function(num) {
      this.anim.setSpeed(num);
    }
  },
  mounted() {
  },
  components: {
    lottie: Lottie
  }
};
</script>