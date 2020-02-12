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
        font-size: 30px;
    }
    .QGnameBottom {
        font-size: 10px;
    }
}
// 手机
@media only screen and (max-width: 740px) {
    .QGnameTop {
        font-size: 30px;
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
    .letter {
        display: inline-block;
        line-height: 1em;
    }
}
.QGnameBottom {
    position: relative;
    text-align: center;
    font-family: 微软雅黑;
    letter-spacing: 1em;
    .letter {
        display: inline-block;
        line-height: 1em;
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
    <div class="QGnameBottom">
        <span class='letter'>大</span>
        <span class='letter'>学</span>
        <span class='letter'>生</span>
        <span class='letter'>"</span>
        <span class='letter'>小</span>
        <span class='letter'>平</span>
        <span class='letter'>科</span>
        <span class='letter'>技</span>
        <span class='letter'>创</span>
        <span class='letter'>新</span>
        <span class='letter'>团</span>
        <span class='letter'>队</span>
        <span class='letter'>"</span>
    </div>
  </div>
</template>

<script>
import anime from 'animejs'
export default {
  data() {
    return {
    };
  },
  methods: {
    play() {
        this.animeFont1('.QGnameTop');
        this.animeFont1('.QGnameBottom');
    },
    animeFont1(className) {
        var textWrapper = document.querySelector(className);
        anime.timeline({loop: true})
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