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
    .videoCon {
      padding: 20px;
      left: 15vw;
      width: 70vw;
      .closeVideo {
        top: 0px;
        right: -50px;
        width: 40px;
      }
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
    .videoCon {
      left: 0;
      width: 96vw;
      padding: 2vw;
      .closeVideo {
        top: -45px;
        right: 10px;
        width: 35px;
      }
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
    .videoCon {
      left: 0;
      width: 96vw;
      padding: 2vw;
      .closeVideo {
        top: -40px;
        right: 5px;
        width: 30px;
      }
    }
  }
}
  .homepage {
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
    .videoCon {
      position: absolute;
      z-index: 1000;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 10px;
      background-color: #fff;
      box-shadow: 0 0 10px 0 #666;
      .closeVideo {
        position: absolute;
        cursor: pointer;
      }
    }
  }
</style>
<template>
  <div class="homepage page">
    <QGlogo ref="QGlogo" :class="{QGlogoStart: !QGlogoShow, QGlogoEnd: QGlogoShow}"></QGlogo>
    <div class="QGname" :class="{QGnameStart: !QGnameShow, QGnameEnd: QGnameShow}"></div>
    <!-- <QGname ref="QGname" :class="{QGnameStart: !QGnameShow, QGnameEnd: QGnameShow}"></QGname> -->
    <play @playVideo="playVideo" ref="play"></play>
    <div class='videoCon' v-show="videoShow">
      <img class="closeVideo" @click="closeVideo()" click="closeVideo()" src="@/assets/close.png" alt="关闭视频">
      <video ref="video" controls="controls" class="video" width="100%" src="https://qg-oss-static.oss-cn-shenzhen.aliyuncs.com/2019-zhaoxin/img/rec_video.mp4" ></video>
    </div>
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
      videoShow: false,
    };
  },
  methods: {
    // playVideo() {
    //   this.$refs.play.playVideo()
    // },
    playVideo() {
      this.videoShow = true;
      this.$refs.video.play();
      this.$store.state.playVideo = true;
      event.stopPropagation();
    },
    closeVideo() {
      this.videoShow = false;
      this.$refs.video.pause();
      this.$store.state.playVideo = false;
      event.stopPropagation();
    },
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
  },
  watch: {
    "$store.state.index": function(newVal, oldVal) {
      if (oldVal == 2 && newVal != 2) {
        this.closeVideo();
      }
    }
  }
};
</script>