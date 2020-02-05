<style lang="scss" scoped>
// PC
@media only screen and (min-width: 1025px) {
  .play {
    transform: translateY(200px);
  }
}
// ipad
@media only screen and (max-width: 1024px) and (min-width: 741px) {
  .play {
    transform: translateY(180px);
  }
}
// 手机
@media only screen and (max-width: 740px) {
  .play {
    transform: translateY(150px);
  }
}
.play {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 400;
  margin-top: -50px;
  margin-left: -50px;
  width: 100px;
  height: 100px;
  cursor: pointer;
  .click{
    position: absolute;
    top: 0%;
    left: 0%;
    height: 100%;
    width: 100%;
    z-index: 500;
  }
}
</style>
<template>
  <div class="play">
    <lottie
      class="lottie"
      :options="defaultOptions"
      :height="playHeight"
      :width="playWidth"
      style="overflow:none"
      v-on:animCreated="handleAnimation"
    />
    <div class='click' click='playVideo()' @click="playVideo()"></div>
  </div>
</template>

<script>
import Lottie from "vue-lottie";
import play from "@/assets/lottieJson/play.json";
import $ from "jquery";

export default {
  data() {
    return {
      defaultOptions: { animationData: play, autoplay: false, loop: false }
    };
  },
  computed: {
    playHeight: function() {
      if($(window).width() <= 740) {
        return 70;
      } else if($(window).width() <= 1024) {
        return 100;
      } else {
        return 100;
      }
    },
    playWidth: function() {
      if($(window).width() <= 740) {
        return 35;
      } else if($(window).width() <= 1024) {
        return 50;
      } else {
        return 50;
      }
    },
  },
  methods: {
    playVideo() {
      alert("点击播放");
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