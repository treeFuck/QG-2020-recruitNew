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
.homepage {
  position: relative;
  width: 100%;
  height: 100vh;
  color: #000;
  background-color: #fff;
  .QGlogoStart {
    transform: translateY(0px);
  }
  .QGlogoEnd {
    transform: translateY(-100px);
  }
  .QGname {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -56px;
    margin-left: -187.5px;
    width: 375px;
    height: 112px;
    background-image: url("../../assets/QGstudio@2x.png");
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    transition: all 0.5s;
    //transform: translateY(150px);
  }
  .QGnameStart {
    opacity: 0;
    transform: translateY(70px);
  }
  .QGnameEnd {
    opacity: 1;
    transform: translateY(50px);
  }
}
</style>
<template>
  <div class="homepage page">
    <QGlogo :class="{QGlogoStart: !QGlogoShow, QGlogoEnd: QGlogoShow}"></QGlogo>
    <div class="QGname" :class="{QGnameStart: !QGnameShow, QGnameEnd: QGnameShow}"></div>
    <play v-show="playShow" ref="play"></play>
  </div>
</template>

<script>
import QGlogo from "./QGlogo/QGlogo.vue";
import play from "./play/play.vue";
export default {
  data() {
    return {
      QGlogoShow: false,
      QGnameShow: false,
      playShow: false
    };
  },
  methods: {
  },
  mounted() {
    setTimeout(() => {
      this.QGlogoShow = true;
      setTimeout(() => {
        this.QGnameShow = true;
        this.playShow = true;
        this.$refs.play.play();
        this.$emit("showHomepage");
      }, 500);
    }, 4000);
  },
  components: {
    QGlogo,
    play
  }
};
</script>