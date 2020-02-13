<style lang="scss" scoped>
// PC
@media only screen and (min-width: 1025px) {
  .homepage {
    .QGlogoEnd {
      transform: translateY(-100px);
    }
    .QGname {
      margin-top: -56px;
      height: 112px;
    }
    .QGnameEnd {
      opacity: 1;
      transform: translateY(50px);
    }
  }
}
// ipad
@media only screen and (max-width: 1024px) and (min-width: 741px) {
  .homepage {
    .QGlogoEnd {
      transform: translateY(-100px);
    }
    .QGname {
      margin-top: -56px;
      height: 112px;
    }
    .QGnameEnd {
      opacity: 1;
      transform: translateY(50px);
    }
  }
}
// 手机
@media only screen and (max-width: 740px) {
  .homepage {
    .QGlogoEnd {
      transform: translateY(-70px);
    }
    .QGname {
      margin-top: -33px;
      height: 66px;
    }
    .QGnameEnd {
      opacity: 1;
      transform: translateY(25px);
    }
  }
}
  .homepage {
    position: relative;
    width: 100%;
    height: 100vh;
    color: #000;
    background: #fff;
    .QGlogoStart {
      transform: translateY(0px);
    }
    .QGname {
      position: absolute;
      top: 50%;
      width: 100%;
      transition: all 0.5s;
      background-image: url(../../assets/QGstudio@2x.png);
      background-size: auto 100%;
      background-position: center;
      background-repeat: no-repeat;
    }
    .QGnameStart {
      opacity: 0;
      transform: translateY(70px);
    }
  }
</style>
<template>
  <div class="homepage page">
    <QGlogo ref="QGlogo" :class="{QGlogoStart: !QGlogoShow, QGlogoEnd: QGlogoShow}"></QGlogo>
    <div class="QGname" :class="{QGnameStart: !QGnameShow, QGnameEnd: QGnameShow}"></div>
    <!-- <QGname ref="QGname" :class="{QGnameStart: !QGnameShow, QGnameEnd: QGnameShow}"></QGname> -->
    <play ref="play"></play>
  </div>
</template>

<script>
import QGlogo from "./QGlogo/QGlogo.vue";
// import QGname from "./QGname/QGname.vue"
import play from "./play/play.vue";
export default {
  data() {
    return {
      QGlogoShow: false,
      QGnameShow: false,
    };
  },
  methods: {
    playVideo() {
      this.$refs.play.playVideo()
    }
  },
  mounted() {
    setTimeout(()=>{
      this.$refs.QGlogo.play();
      setTimeout(() => {
        this.QGlogoShow = true;
        setTimeout(()=>{
          this.QGnameShow = true;
          window.requestAnimationFrame(()=>{
            this.$emit("showHomepage");
            this.$refs.play.play();
            // this.$refs.QGname.play();
          })
        }, 500)
      }, 4000);
    }, 100)
    //window.requestAnimationFrame(()=>{})
  },
  components: {
    QGlogo,
    // QGname,
    play
  }
};
</script>