<style lang="scss" scoped>
// PC
@media only screen and (min-width: 1025px) {
  .QGlogo {
    margin-top: -100px;
    margin-left: -100px;
    width: 200px;
    height: 200px;
  }
}
// ipad
@media only screen and (max-width: 1024px) and (min-width: 741px) {
  .QGlogo {
    margin-top: -100px;
    margin-left: -100px;
    width: 200px;
    height: 200px;
  }
}
// 手机
@media only screen and (max-width: 740px) {
  .QGlogo {
    margin-top: -60px;
    margin-left: -60px;
    width: 120px;
    height: 120px;
  }
}
.QGlogo {
  position: absolute;
  top: 50%;
  left: 50%;
  transition: all 0.5s;
  .show {
    position: absolute;
    top: 0;
    left: 0%;
    width: 100%;
    height: 100%;
    background-image: url("../../../assets/QGlogo.png");
    background-size: 0%;
    background-position: center;
    background-repeat: no-repeat;
    transition: all 1s;
  }
}

</style>
<template>
  <div class="QGlogo">
    <div ref="show" class="show" :style="{'background-size': bgSize}"></div>
    <lottie
      class="lottie"
      :options="defaultOptions"
      :height="logoSize"
      :width="logoSize"
      v-on:animCreated="handleAnimation"
    />
  </div>
</template>

<script>
import Lottie from "vue-lottie";
import QGlogo from "@/assets/lottieJson/QGlogo.json";
import $ from "jquery";

export default {
  data() {
    return {
      bgSize: "0%",
      defaultOptions: { animationData: QGlogo, autoplay: false, loop: false },
    };
  },
  computed: {
    logoSize: function() {
      if($(window).width() <= 740) {
        return 120;
      } else if($(window).width() <= 1024) {
        return 200;
      } else {
        return 200;
      }
    },
  },
  methods: {
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
    setTimeout(() => {
      this.play();
      setTimeout(() => {
        this.bgSize = "100%";
      }, 3000);
    }, 100);
  },
  components: {
    lottie: Lottie
  }
};
</script>