<style lang="scss">
@font-face {
  font-family: name;
  src: url(./assets/优设标题黑.ttf);
}
@font-face {
  font-family: introduce;
  src: url(./assets/思源黑体R.ttf);
}
// 思源黑体R.ttf
* {
  padding: 0;
  margin: 0;
}
body {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
#app {
  position: relative;
  width: 100%;
  height: 100%;
  color: #fff;
  overflow: hidden;
  .toJoin {
    position: fixed;
    z-index: 300;
    font-family: name;
    cursor: pointer;
    opacity: 0;
    transition: all 0.5s;
    transform: translateX(35px);
  }
  .joinUsShow {
    opacity: 1;
    transform: translateX(0px);
  }
  .scrollDown {
    position: fixed;
    z-index: 100;
    width: 100%;
    font-weight: lighter;
    text-align: center;
    letter-spacing: 0.1em;
    transition: all 1s;
  }
  .group {
    position: absolute;
    z-index: 300;
    color: #000;
    font-family: name;
    cursor: pointer;
    opacity: 0;
    transition: all 0.5s;
    li {
      list-style: none;
      overflow: hidden;
      background-size: auto 80%;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 50%;
    }
    li:nth-child(1) {
      background-image: url("./assets/前端.png");
    }
    li:nth-child(2) {
      background-image: url("./assets/后台.png");
    }
     li:nth-child(3) {
      background-image: url("./assets/数据挖掘.png");
    }
    li:nth-child(4) {
      background-image: url("./assets/移动.png");
    }
    li:nth-child(5) {
      background-image: url("./assets/嵌入式.png");
    }
    li:nth-child(6) {
      background-image: url("./assets/图形.png");
    }
    li:nth-child(7) {
      background-image: url("./assets/设计.png");
    }
    li:hover {
      background: #b2b2b2;
    }
    li:hover span {
      transform: translateX(0em);
    }
  }
  .rocket {
    position: fixed;
    z-index: 300;
    cursor: pointer;
    transition: all 0.5s;
    .click {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 500;
    }
  }
  .sidebar {
    position: fixed;
    z-index: 400;
    span {
      display: block;
      cursor: pointer;
      border-radius: 50%;
      transition: all 0.3s;
    }
  }
  .page {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .name {
      position: absolute;
      font-family: name;
    }
    .bgLogo {
      position: absolute;
    }
    .introduce {
      position: absolute;
      font-family: introduce;
      text-indent: 2em;
      font-weight: lighter;
    }
  }
  .pageChoice {
    // 当前页
    z-index: 100;
  }
  .svgCon1 {
    // svg容器
    height: 100vh;
    transform: translateY(100vh);
  }
  .svgCon2 {
    // svg容器
    height: 100vh;
    transform: rotate(180deg) translateY(100vh);
  }
}

// PC
@media only screen and (min-width: 1025px) {
  #app {
    .toJoin {
      top: 15px;
      right: 35px;
      font-size: 30px;
    }
    .scrollDown {
      bottom: 15px;
      font-size: 13px;
    }
    .group {
      top: 50%;
      right: 20px;
      margin-top: -7em;
      width: 2.7em;
      height: 14em;
      font-size: 30px;
      transform: translateX(30px);
      li {
        list-style: none;
        height: 2em;
        text-align: center;
        span {
          display: inline-block;
          font-size: 0.6em;
          line-height: 3.34em;
          transition: all 0.3s;
          transform: translateX(5em);
        }
      }
    }
    .groupShow {
      opacity: 1;
      transform: translateX(0px);
    }
    .rocket {
      top: 50%;
      right: -1vw;
      margin-top: -75px;
      width: 150px;
      height: 150px;
    }
    .sidebar {
      left: 3%;
      top: 50%;
      transform: translateY(-50%);
      span {
        margin: 25px 0;
        width: 16px;
        height: 16px;
      }
    }
    .page {
      .name {
        font-size: 2rem;
        line-height: 2.6rem;
      }
      .introduce {
        font-size: 0.4rem;
        line-height: 0.7rem;
      }
    }
  }
}
// ipad
@media only screen and (max-width: 1024px) and (min-width: 741px) {
  #app {
    .toJoin {
      top: 15px;
      right: 35px;
      font-size: 30px;
    }
    .scrollDown {
      bottom: 15px;
      font-size: 13px;
    }
    .group {
      bottom: 40px;
      left: 50%;
      margin-left: -7em;
      height: 2.7em;
      width: 14em;
      font-size: 30px;
      transform: translateY(30px);
      li {
        display: inline-block;
        width: 2em;
        height: 2em;
        span {
          display: none;
        }
      }
    }
    .groupShow {
      opacity: 1;
      transform: translateY(0px);
    }
    .rocket {
      bottom: 0;
      right: -1vw;
      width: 150px;
      height: 150px;
    }
    .sidebar {
      left: 4%;
      bottom: 5%;
      span {
        margin: 25px 0;
        width: 15px;
        height: 15px;
      }
    }
    .page {
      .name {
        font-size: 1rem;
        line-height: 1.2rem;
      }
      .introduce {
        font-size: 0.3rem;
        line-height: 0.5rem;
      }
    }
  }
}
// 手机
@media only screen and (max-width: 740px) {
  #app {
    .toJoin {
      top: 5px;
      right: 5px;
      font-size: 18px;
    }
    .scrollDown {
      bottom: 5px;
      font-size: 10px;
    }
    .group {
      display: none;
    }
    .rocket {
      bottom: 2vh;
      right: 0;
      width: 40px;
      height: 80px;
    }
    .sidebar {
      left: 5%;
      bottom: 3%;
      span {
        margin: 20px 0;
        width: 10px;
        height: 10px;
      }
    }
    .page {
      .name {
        font-family: name;
        font-size: 0.6rem;
      }
      .introduce {
        font-size: 0.15rem;
        line-height: 0.25rem;
      }
    }
  }
}
// 下一页动画
@keyframes prePageAnimation {
  0% {
    z-index: 300;
    transform: translateY(0vh);
  }
  // 50% {
  //   z-index: 300;
  //   transform: translateY(-125vh);
  // }
  100% {
    z-index: 300;
    transform: translateY(-200vh);
  }
}
@keyframes svgConAnimation {
  0% {
    z-index: 300;
    transform: translateY(100vh);
  }
  // 50% {
  //   z-index: 300;
  //   transform: translateY(-25vh);
  // }
  100% {
    z-index: 300;
    transform: translateY(-100vh);
  }
}
// 上一页动画
@keyframes prePageAnimation2 {
  0% {
    z-index: 300;
    transform: translateY(0vh);
  }
  // 50% {
  //   z-index: 300;
  //   transform: translateY(125vh);
  // }
  100% {
    z-index: 300;
    transform: translateY(200vh);
  }
}
@keyframes svgConAnimation2 {
  0% {
    z-index: 300;
    transform: rotate(180deg) translateY(100vh);
  }
  // 50% {
  //   z-index: 300;
  //   transform: rotate(180deg) translateY(25vh);
  // }
  100% {
    z-index: 300;
    transform: rotate(180deg) translateY(-100vh);
  }
}
</style>

<template>
  <div id="app">
    <div
      class="toJoin"
      click="joinUs()"
      @click="joinUs()"
      :style="{color: index<4?'#000':'#fff'}"
      :class="{'joinUsShow':homepageShow}"
    >JOIN US</div>
    <ul v-show="index==2" class="group" :class="{'groupShow':homepageShow}">
      <li @click="pageChange(4)" click="pageChange(4)">
        <span>前端</span>
      </li>
      <li @click="pageChange(5)" click="pageChange(5)">
        <span>后台</span>
      </li>
      <li @click="pageChange(6)" click="pageChange(8)">
        <span>数据挖掘</span>
      </li>
      <li @click="pageChange(7)" click="pageChange(6)">
        <span>移动</span>
      </li>
      <li @click="pageChange(8)" click="pageChange(7)">
        <span>嵌入式</span>
      </li>
      <li @click="pageChange(9)" click="pageChange(9)">
        <span>图形</span>
      </li>
      <li @click="pageChange(10)" click="pageChange(10)">
        <span>设计</span>
      </li>
    </ul>
    <div v-show="index!=2" class="rocket" :style="{opacity:rocketOpacity}">
      <lottie
        class="lottie"
        :options="defaultOptions"
        :height="rocketHeight"
        :width="rocketWidth"
        v-on:animCreated="handleAnimation"
      />
      <div class="click" click="pageChange(2)" @click="pageChange(2)"></div>
    </div>
    <div class="sidebar" v-show="index>3">
      <span
        v-for="Index in 7"
        :key="Index"
        :style="{'background-color':Index+3==index?'#5B08C3':'#fff'}"
        @click="pageChange(Index+3)"
        :click="`pageChange(${Index+3})`"
      ></span>
    </div>
    <div class="page svgCon1" ref="svgCon1">
      <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 800" width="100%" height="100%" style="pointer-event:none">
        <path ref="path1" fill="#fff" />
      </svg>
    </div>
    <div class="page svgCon2" ref="svgCon2">
      <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 800" width="100%" height="100%" style="pointer-event:none">
        <path ref="path2" fill="#fff" />
      </svg>
    </div>
    <homepage :class="{pageChoice:index==2}" @showHomepage="showHomepage" ref="homepage"></homepage>
    <studio :class="{pageChoice:index==3}"></studio>
    <front :class="{pageChoice:index==4}"></front>
    <end :class="{pageChoice:index==5}"></end>
    <datas :class="{pageChoice:index==6}"></datas>
    <mobile :class="{pageChoice:index==7}"></mobile>
    <embedded :class="{pageChoice:index==8}"></embedded>
    <game :class="{pageChoice:index==9}"></game>
    <design :class="{pageChoice:index==10}"></design>
    <div
      v-show="index != 3"
      class="scrollDown"
      :style="{color: index==2?'#707070':'#fff',opacity:scrollDownOpacity}"
    >向下滚动了解更多</div>
  </div>
</template>

<script>
import homepage from "@/components/homepage/homepage.vue";
import studio from "@/components/studio/studio.vue";
import front from "@/components/front/front.vue";
import end from "@/components/end/end.vue";
import mobile from "@/components/mobile/mobile.vue";
import embedded from "@/components/embedded/embedded.vue";
import datas from "@/components/datas/datas.vue";
import game from "@/components/game/game.vue";
import design from "@/components/design/design.vue";
import Lottie from "vue-lottie";
import BackToTop from "@/assets/lottieJson/BackToTop.json";
import util from "@/utils/util.js";
import $ from "jquery";

export default {
  components: {
    homepage,
    studio,
    front,
    end,
    mobile,
    embedded,
    datas,
    game,
    design,
    lottie: Lottie
  },
  data() {
    return {
      // 是否在换页
      isMoving: false,
      // 当前页数
      index: 2,
      // path的d值，开始与结束
      startD: "",
      endD: "",
      // JOIN US 和 组别 的显示
      homepageShow: false,
      // 小火箭
      defaultOptions: { animationData: BackToTop },
      rocketOpacity: 0,
      // 向下滚动显示更多
      scrollDownOpacity: 0,
      // 给事件加锁
      eventLock: true,
      // 触摸
      touchStartY: null,
      touchEndY: null
    };
  },
  computed: {
    rocketHeight: function() {
      if ($(window).width() <= 740) {
        return 100;
      } else if ($(window).width() <= 1024) {
        return 150;
      } else {
        return 150;
      }
    },
    rocketWidth: function() {
      if ($(window).width() <= 740) {
        return 40;
      } else if ($(window).width() <= 1024) {
        return 75;
      } else {
        return 75;
      }
    }
  },
  mounted() {
    this.getBrowser();
    this.getEquipment();
    console.log("当前浏览器是:" + this.$store.state.browserName);
    if (this.$store.state.equipment == "PC") {
      this.startD = this.$store.state.startD3;
      this.endD = this.$store.state.endD3;
    } else if (this.$store.state.equipment == "ipad") {
      this.startD = this.$store.state.startD4;
      this.endD = this.$store.state.endD4;
    } else {
      this.startD = this.$store.state.startD4;
      this.endD = this.$store.state.endD4;
    }

    this.$refs.path1.setAttribute("d", this.startD);
    this.$refs.path2.setAttribute("d", this.startD);
    setTimeout(() => {
      this.eventLock = false;
    }, 4600);
    if (this.$store.state.browserName === "firefox") {
      util.addHandler(document, "DOMMouseScroll", this.scrollChangePage);
    } else {
      util.addHandler(document, "mousewheel", this.scrollChangePage);
    }
    let app = document.getElementById("app");
    util.addHandler(app, "touchstart", event => {
      event.preventDefault();
      this.touchStartY = event.changedTouches[0].pageY;
    });
    util.addHandler(app, "touchend", event => {
      event.preventDefault();
      this.touchEndY = event.changedTouches[0].pageY;
      this.touchChangePage();
    });
    util.addHandler(window, "resize", () => {
      this.getEquipment();
    });
  },
  watch: {
    "$store.state.equipment": (newVal, oldVal) => {
      if (oldVal) {
        console.log("当前设备:" + newVal);
        window.location.reload();
      }
    },
    'index': function(newVal, oldVal) {
      if (oldVal) {
        this.$store.state.index = newVal;
        console.log(`当前在第 ${newVal} 页`);
      }
    }
  },
  methods: {
    joinUs() {
      event.stopPropagation();
      if (this.$store.state.equipment == 'PC') {
        window.location.href='http://www.cxkball.club/web/QGManager'
      } else {
        window.location.href='http://www.cxkball.club/wap/QGManager'
      }
      
    },
    handleAnimation: function(anim) {
      this.anim = anim;
    },
    showHomepage() {
      this.homepageShow = true;
      this.scrollDownOpacity = 1;
    },
    scrollChangePage() {
      // 鼠标滚轮事件的监听事件
      if (this.eventLock) {
        return;
      }
      if (this.isMoving) {
        return;
      }
      event.preventDefault();
      let detail = event.wheelDelta || event.detail;
      let scrollTop = $(window).scrollTop;
      if (this.$store.state.browserName === "firefox") {
        detail = -detail;
      }
      let index = this.index;
      if (detail > 0) {
        if (--index == 1) index = 10;
      } else if (detail < 0) {
        if (++index == 11) index = 2;
      }
      this.pageChange(index);
      event.stopPropagation();
    },
    touchChangePage() {
      // 触摸滚动事件
      if (this.eventLock) {
        return;
      }
      if (this.isMoving) {
        return;
      }
      let distance = this.touchEndY - this.touchStartY;
      if (distance < 50 && distance > -50) {
        let clickFun = event.target.getAttribute("click");
        console.log(clickFun);
        if (clickFun) {
          this.clickFun(clickFun);
        }
        event.stopPropagation();
        return;
      }
      let index = this.index;
      // alert(`${this.touchEndY - this.touchStartY}`);
      if (distance > 0) {
        if (--index == 1) index = 10;
      } else {
        if (++index == 11) index = 2;
      }
      this.pageChange(index);
      event.stopPropagation();
    },
    pageChange(nextIndex) {
      if (this.eventLock) {
        return;
      }
      if (this.isMoving) {
        return;
      }
      this.isMoving = true;
      let nowIndex = this.index;
      this.index = nextIndex;
      console.log(nowIndex + " to " + nextIndex);
      let prePage = document.getElementsByClassName("page")[nowIndex];
      let nowPage = document.getElementsByClassName("page")[nextIndex];
      let changeWay = "next";
      if (nextIndex > nowIndex) {
        if (nextIndex == 10 && nowIndex == 2) {
          changeWay = "pre";
        } else {
          changeWay = "next";
        }
      } else {
        if (nextIndex == 2 && nowIndex == 10) {
          changeWay = "next";
        } else {
          changeWay = "pre";
        }
      }
      
      console.log(changeWay + " Page");
      if (changeWay == "next") {
        // 下一页
        prePage.style.animation = "prePageAnimation 1.8s";
        this.$refs.svgCon1.style.animation = "svgConAnimation 1.8s";
        this.$refs.path1.style.transition = "d 1.5s"; 
        //this.$refs.path1.setAttribute("d", this.endD);
      } else {
        // 上一页
        prePage.style.animation = "prePageAnimation2 1.8s";
        this.$refs.svgCon2.style.animation = "svgConAnimation2 1.8s";
        this.$refs.path2.style.transition = "d 1.5s";
        //this.$refs.path2.setAttribute("d", this.endD);
        
      }
      setTimeout(() => {
        if (changeWay == "next") {
          this.$refs.path1.setAttribute("d", this.endD);
        } else {
          this.$refs.path2.setAttribute("d", this.endD);
        }
      }, 100);
      this.rocketOpacity = 0;
      setTimeout(() => {
        prePage.style.animation = "";
        if (changeWay == "next") {
          this.$refs.svgCon1.style.animation = "";
          this.$refs.path1.style.transition = "d 0s";
          this.$refs.path1.setAttribute("d", this.startD);
        } else {
          this.$refs.svgCon2.style.animation = "";
          this.$refs.path2.style.transition = "d 0s";
          this.$refs.path2.setAttribute("d", this.startD);
        }
        this.$refs.path1.setAttribute("fill", this.getTopColor());
        this.$refs.path2.setAttribute("fill", this.getBottomColor());
        this.isMoving = false;
        this.rocketOpacity = 1;
      }, 1820);
      if (event) {
        event.stopPropagation();
      }
    },
    clickFun(clickFun) {
      // 兼容ipad、手机的触摸点击
      if (clickFun == "pageChange(2)") {
        this.pageChange(2);
      } else if (clickFun == "pageChange(3)") {
        this.pageChange(3);
      } else if (clickFun == "pageChange(4)") {
        this.pageChange(4);
      } else if (clickFun == "pageChange(5)") {
        this.pageChange(5);
      } else if (clickFun == "pageChange(6)") {
        this.pageChange(6);
      } else if (clickFun == "pageChange(7)") {
        this.pageChange(7);
      } else if (clickFun == "pageChange(8)") {
        this.pageChange(8);
      } else if (clickFun == "pageChange(9)") {
        this.pageChange(9);
      } else if (clickFun == "pageChange(10)") {
        this.pageChange(10);
      } else if (clickFun == "joinUs()") {
        this.joinUs();
      } else if (clickFun == "playVideo()") {
        this.$refs.homepage.playVideo();
      }
    },
    getTopColor() {
      if (this.index == 2) {
        return '#fff';
      } else if (this.index == 3) {
        return 'rgb(109, 55, 151)';
      } else if (this.index == 4) {
        return "rgb(237, 62, 70)";
      } else if (this.index == 5) {
        return "rgb(43, 139, 225)";
      } else if (this.index == 6) {
        return "rgb(236, 80, 44)";
      } else if (this.index == 7) {
        return "#1D90B7";
      } else if (this.index == 8) {
        return "rgb(55, 172, 71)";
      } else if (this.index == 9) {
        return "#7A69B9";
      } else if (this.index == 10) {
        return "#FC4380";
      } else {
        return '#000'
      }
    },
    getBottomColor() {
      if (this.index == 2) {
        return '#fff';
      } else if (this.index == 3) {
        return 'rgb(159, 122, 190)';
      } else if (this.index == 4) {
        return "rgb(255, 156, 156)";
      } else if (this.index == 5) {
        return "rgb(151, 196, 254)";
      } else if (this.index == 6) {
        return "rgb(245, 194, 149)";
      } else if (this.index == 7) {
        return "#A8CFDE";
      } else if (this.index == 8) {
        return "rgb(154, 210, 156)";
      } else if (this.index == 9) {
        return "#CFC9E5";
      } else if (this.index == 10) {
        return "#F8A0CB";
      } else {
        return "#000";
      } 
    },
    getBrowser() {
      let UserAgent = navigator.userAgent.toLowerCase();
      let browser = null;
      let browserArray = {
        IE: window.ActiveXObject || "ActiveXObject" in window, // IE
        Chrome:
          UserAgent.indexOf("chrome") > -1 && UserAgent.indexOf("safari") > -1, // Chrome浏览器
        Firefox: UserAgent.indexOf("firefox") > -1, // 火狐浏览器
        Opera: UserAgent.indexOf("opera") > -1, // Opera浏览器
        Safari:
          UserAgent.indexOf("safari") > -1 && UserAgent.indexOf("chrome") == -1, // safari浏览器
        UC: /ucbrowser/.test(UserAgent), // uc浏览器
        Edge: UserAgent.indexOf("edge") > -1, // Edge浏览器
        QQBrowser: /qqbrowser/.test(UserAgent), // qq浏览器
        WeixinBrowser: /MicroMessenger/i.test(UserAgent) // 微信浏览器
      };
      for (var i in browserArray) {
        if (browserArray[i]) {
          browser = i;
        }
      }
      if (!browser) {
        browser = "";
      }
      browser = browser.toLowerCase();
      if (browser == "chrome") {
        // 区分低版本chrome和高版本chrome
        let cores = UserAgent.split(" ");
        for (let i = 0; i < cores.length; i++) {
          if (cores[i].indexOf("chrome") > -1) {
            if (parseInt(cores[i].split("/")[1]) < 68) {
              browser = "lowChrome";
            }
          }
        }
      }
      this.$store.state.browserName = browser;
    },
    getEquipment() {
      if ($(window).width() <= 740) {
        this.$store.state.equipment = "phone";
      } else if ($(window).width() <= 1024) {
        this.$store.state.equipment = "ipad";
      } else {
        this.$store.state.equipment = "PC";
      }
    }
  }
};
</script>