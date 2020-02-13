<style lang="scss" scoped>
// PC
@media only screen and (min-width: 1025px) {
    .font1 {
        top: 20%;
        font-size: 50px;
    }
    .sign {
        top: 37%;
        font-size: 20px;
    }
    .img {
        bottom: 15%;
        height: 35%;
    }
}
// ipad
@media only screen and (max-width: 1024px) and (min-width: 741px) {
    .font1 {
        top: 20%;
        font-size: 50px;
    }
    .sign {
        top: 35%;
        font-size: 30px;
    }
    .img {
        bottom: 25%;
        width: 40%;
    }
}
// 手机
@media only screen and (max-width: 740px) {
    .font1 {
        top: 25%;
        font-size: 20px;
    }
    .sign {
        top: 35%;
        font-size: 16px;
    }
    .img {
        bottom: 20%;
        width: 60%;
    }
}
.endPage {
    background:linear-gradient(to top, #3C3C48, #161616);
    .font1 {
        position: absolute;
        left: 50%;
        width: 100%;
        text-align: center;
        transform: translateX(-50%);
        font-family: Raleway, Verdana, Arial;
        color: transparent;
    }
    .sign {
        position: absolute;
        left: 50%;
        padding: 0.2em 1em;
        transform: translateX(-50%);
        border-bottom: 1.5px solid #fff;
        transition: all 0.5s;
        cursor: pointer;
    }
    .sign:hover {
        color: #f40;
        border-color: #f40;
    }
    .img {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
}
.font1::before{
    content: attr(data-word);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    color: red;
    z-index: 2;
    filter: contrast(200%);
    text-shadow: 2px 1px 0 red;
    animation: move 0.95s infinite;
}

.font1::after{
    content: attr(data-word);
    position: absolute;
    top: 0;
    left: -1px;
    width: 100%;
    color: rgba(255, 255, 255, 0.8);
    z-index: 3;
    color: cyan;
    filter: contrast(200%);
    text-shadow: -2px -2px 0 cyan;
    mix-blend-mode: lighten;
    animation: move 1.1s infinite 0.2s;
}

@keyframes whiteMove {
    9% {
        top: 38px;
    }
    14% {
        top: 8px;
    }
    18% {
        top: 42px;
    }
    22% {
        top: 1px;
    }
    32% {
        top: 32px;
    }
    34% {
        top: 12px;
    }
    40% {
        top: 26px;
    }
    43% {
        top: 7px;
    }
    99% {
        top: 30px;
    }
}

@keyframes move {
    10% {
        top: -0.4px;
        left: -1.1px;
    }
    20% {
        top: 0.4px;
        left: -0.2px;
    }
    30% {
        left: .5px;
    }
    40% {
        top: -0.3px;
        left: -0.7px;
    }
    50% {
        left: 0.2px;
    }
    60% {
        top: 1.8px;
        left: -1.2px;
    }
    70% {
        top: -1px;
        left: 0.1px;
    }
    80% {
        top: -0.4px;
        left: -0.9px;
    }
    90% {
        left: 1.2px;
    }
    100% {
        left: -1.2px;
    }
}
</style>
<template>
    <div class="endPage page">
        <div class="font1" data-word="QG工作室欢迎你的加入!"></div>
        <div class="sign" click="joinUs()" @click="joinUs()">我要报名</div>
        <img class="img" src="@/assets/endPageBg.png"/>
    </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
      joinUs() {
        event.stopPropagation();
        if (this.$store.state.equipment == "PC") {
            window.location.href = "http://www.cxkball.club/web/QGManager";
        } else {
            window.location.href = "http://www.cxkball.club/wap/QGManager";
        }
    },
  }
};
</script>