<style lang="scss" scoped>
// PC
@media only screen and (min-width: 1025px) {
    .QGnameTop {
        font-size: 60px;
    }
    .QGnameBottom {
        font-size: 14px;
    }
}
// ipad
@media only screen and (max-width: 1024px) and (min-width: 741px) {
    .QGnameTop {
        font-size: 60px;
    }
    .QGnameBottom {
        font-size: 14px;
    }
}
// 手机
@media only screen and (max-width: 740px) {
    .QGnameTop {
        font-size: 35px;
    }
    .QGnameBottom {
        font-size: 10px;
    }
}
.QGnameTop {
    text-align: center;
    font-family: 微软雅黑;
    font-weight: 900;
    letter-spacing: 0.1em;
}
.QGnameBottom {
    position: relative;
    text-align: center;
    font-family: 微软雅黑;
    letter-spacing: 0.5em;
    text-indent: 1em;
}
.letter {
  animation: bounce 0.75s cubic-bezier(0.05, 0, 0.2, 1) infinite alternate;
  display: inline-block;
}
.letter:nth-child(1) {
  animation-delay: 0s;
}
.letter:nth-child(2) {
  animation-delay: 0.08s;
}
.letter:nth-child(3) {
  animation-delay: 0.16s;
}
.letter:nth-child(4) {
  animation-delay: 0.25s;
}
.letter:nth-child(5) {
  animation-delay: 0.33s;
}


@keyframes bounce {
  0% {
    transform: translate3d(0, 0, 0);
    text-shadow: rgba(255, 255, 255, 0.4) 0 0 0.05em;
  }
  100% {
    transform: translate3d(0, -0.6em, 0);
    text-shadow: rgba(255, 255, 255, 0.4) 0 1em 0.35em;
  }
}
</style>
<template>
  <div class="QGname">
    <div class="QGnameTop">
        <span class='letter'>Q</span>
        <span class='letter'>G</span>
        <span class='letter'>工</span>
        <span class='letter'>作</span>
        <span class='letter'>室</span>
    </div>
    <div class="QGnameBottom">大学生"小平科技创新团队"</div>
  </div>
</template>

<script>
import anime from 'animejs'
export default {
  data() {
    return {
        a:null,
        b:null
    };
  },
  mounted() {
    // this.a = this.animeFont1('.QGnameTop');
    // this.b = this.animeFont1('.QGnameBottom');
  },
  methods: {
    play() {
        // this.a.play();
        // this.b.play();
    },
    animeFont1(className) {
        var textWrapper = document.querySelector(className);
        return  anime.timeline({loop: true, autoplay: false})
        .add({
            targets: `${className} .letter`,
            scale: [4,1],
            opacity: [0,1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 950,
            delay: (el, i) => 70*i
        }).add({
            targets: className,
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
    },
  },
};
</script>