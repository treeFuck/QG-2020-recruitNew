<style lang="scss">
@font-face {
  font-family: name;
  src: url(./assets/优设标题黑.ttf);
}
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
  width: 100vw;
  height: 100vh;
  color: #fff;
  overflow: hidden;
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
      font-size: 2rem;
      line-height: 2.6rem;
    }
    .bgLogo {
      position: absolute;
    }
    .introduce {
      position: absolute;
      text-indent: 2em;
      font-size: 0.4rem;
      line-height: 0.7rem;
      font-weight: lighter;
    }
  }
  .pageChoice {
    // 当前页
    z-index: 100;
  }
  .svgCon {
    // svg容器
    height: 150vh;
    transform: translateY(100vh);
  }
}
// PC
@media only screen and (min-width: 1024px) {
}
// ipad
@media only screen and (max-width: 1024px) and (min-width: 740px) {
}
// 手机
@media only screen and (max-width: 740px) {
}
@keyframes prePageAnimation
{
  0% {z-index: 300;transform: translateY(0vh);}
  50% {z-index: 300;transform: translateY(-125vh);}
  100% {z-index: 300;transform: translateY(-250vh);}
}
@keyframes svgConAnimation
{
  0% {z-index: 300;transform: translateY(100vh);}
  50% {z-index: 300;transform: translateY(-25vh);}
  100% {z-index: 300;transform: translateY(-150vh);}
}
</style>

<template>
  <div id="app" @click="pageChange">
    <div class="page svgCon" ref="svgCon">
      <svg xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%">
        <path
          ref="path"
          fill="#fff"
        />
      </svg>
    </div>
    <homepage :class="{pageChoice:index==1}"></homepage>
    <studio :class="{pageChoice:index==2}"></studio>
    <front :class="{pageChoice:index==3}"></front>
    <end :class="{pageChoice:index==4}"></end>
    <mobile :class="{pageChoice:index==5}"></mobile>
    <embedded :class="{pageChoice:index==6}"></embedded>
    <datas :class="{pageChoice:index==7}"></datas>
    <game :class="{pageChoice:index==8}"></game>
    <design :class="{pageChoice:index==9}"></design>
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
    design
  },
  data() {
    return {
      // 点击假锁
      clickLimit: false,
      // 当前页数
      index: 1,
      // path的d值，开始与结束
      startD: "",
      endD: ""
    };
  },
  mounted() {
    this.startD = this.$store.state.startD3;
    this.endD = this.$store.state.endD3;
    this.$refs.path.setAttribute('d', this.startD);
    setInterval(()=>{
      this.pageChange();
    }, 2000)
  },
  watch: {},
  methods: {
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
      //this.$store.state.browserName = browser;
      return browser;
    },
    pageChange() {
      if (this.clickLimit) {
        return;
      }
      this.clickLimit = true;
      let prePage = document.getElementsByClassName('page')[this.index];
      if(++this.index == 10) this.index = 1;
      let nowPage = document.getElementsByClassName('page')[this.index];

      prePage.style.animation = "prePageAnimation 2s";
      this.$refs.svgCon.style.animation = "svgConAnimation 2s";
      this.$refs.path.style.transition = "all 1.2s";
      setTimeout(()=>{
        this.$refs.path.setAttribute('d', this.endD);
      }, 100)

      setTimeout(() => {
        // 根据当前页，path改变颜色
        if (this.index == 1) {
          this.$refs.path.setAttribute("fill", "#fff");
        } else if (this.index == 2) {
          this.$refs.path.setAttribute("fill", "#7A60BC");
        } else if (this.index == 3) {
          this.$refs.path.setAttribute("fill", "#64D6E2");
        } else if (this.index == 4) {
          this.$refs.path.setAttribute("fill", "#A09DE5");
        } else if (this.index == 5) {
          this.$refs.path.setAttribute("fill", "#A8CFDE");
        } else if (this.index == 6) {
          this.$refs.path.setAttribute("fill", "#F6D861");
        } else if (this.index == 7) {
          this.$refs.path.setAttribute("fill", "#3CCAD1");
        } else if (this.index == 8) {
          this.$refs.path.setAttribute("fill", "#CFC9E5");
        } else if (this.index == 9) {
          this.$refs.path.setAttribute("fill", "#FDBDDC");
        }
        prePage.style.animation = "";
        this.$refs.svgCon.style.animation = "";
        this.$refs.path.style.transition = "all 0s";
        this.$refs.path.setAttribute('d', this.startD);
        this.clickLimit = false;
      }, 2000);
    }
  }
};
</script>