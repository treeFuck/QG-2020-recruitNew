<style lang="scss" scoped>
// PC
@media only screen and (min-width: 1025px) {
  .play {
    //transform: translateY(200px);
   // transform: translateY(200px) translateX(-50%);
  }
  .play:hover .path2{
	  stroke-dashoffset: 0;
  }
}
// ipad
@media only screen and (max-width: 1024px) and (min-width: 741px) {
  .play {
    //transform: translateY(180px);
   //transform: translateY(180px) translateX(-50%);
  }
}
// 手机
@media only screen and (max-width: 740px) {
  .play {
    //transform: translateY(150px);
    // transform: translateY(140px) translateX(-50%);
  }
}
.play {
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // z-index: 400;
  //transform: translateY(-50%) translateX(-50%);
  cursor: pointer;
  .svg {
    position: absolute;
    top: 0%;
    left: 0%;
  }
  .path1, .path2 {
			stroke-linecap:round;
			stroke-linejoin:round; 
			fill-opacity:0; 
			stroke-opacity:1; 
			stroke-dasharray: 220;
			stroke-dashoffset: 221;
			transition: all 1s;
		}
		.path1 {
			stroke: #999; 
			stroke-width:10;
		}
		.path2 {
			stroke: #000; 
			stroke-width:10;
		}
    .pathShow {
      stroke-dashoffset: 0;
    }
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
  <div class="play" :style="{width: playSize+'px', height: playSize+'px'}">
    <!-- <Poptip v-model="playTip"  placement="bottom" content="点击播放视频"></Poptip> -->
    <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <g transform="matrix(1,0,0,1,50.999000549316406,50)">
        <path class="path1" :class="{pathShow:path1Show}" d=" M-9.366999626159668,-33.04199981689453 C12.512999534606934,-19.679000854492188 37.007999420166016,-4.557000160217285 37.007999420166016,-4.557000160217285 C37.007999420166016,-4.557000160217285 -36.86800003051758,39.012001037597656 -36.86800003051758,39.012001037597656 C-36.86800003051758,39.012001037597656 -37.007999420166016,-39.012001037597656 -37.007999420166016,-39.012001037597656"></path>
				<path class="path2" :class="{pathShow:path2Show}" d=" M-9.366999626159668,-33.04199981689453 C12.512999534606934,-19.679000854492188 37.007999420166016,-4.557000160217285 37.007999420166016,-4.557000160217285 C37.007999420166016,-4.557000160217285 -36.86800003051758,39.012001037597656 -36.86800003051758,39.012001037597656 C-36.86800003051758,39.012001037597656 -37.007999420166016,-39.012001037597656 -37.007999420166016,-39.012001037597656"></path>
      </g>
    </svg>
    <div class='click' click='playVideo()' @click="playVideo()"></div>
  </div>
</template>

<script>
 import $ from "jquery";

export default {
  data() {
    return {
      path1Show: false,
      path2Show: false,
      // playTip: true
    };
  },
  computed: {
    playSize: function() {
      if($(window).width() <= 740) {
        return 30;
      } else if($(window).width() <= 1024) {
        return 50;
      } else {
        return 50;
      }
    },
  },
  methods: {
    playVideo() {
      // this.videoIndex = 9999;
      // event.stopPropagation();
      this.$emit('playVideo');
    },
    play() {
      this.path1Show = true;
      if($(window).width() <= 1024) {
        this.path2Show = true;
      }
    },
  },
  mounted() {
  },
  components: {
    // lottie: Lottie
  }
};
</script>