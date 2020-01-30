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
  width: 100vw;
  height: 100vh;
  color: #fff;
  overflow: hidden;
  .pageChoice { // 当前页
    z-index: 100;
  }
  .svgCon {  // svg容器
    transform: translateY(100vh);
	  z-index: 300;
  }
  .pageChoiceAnimation { // 当前页换页后
    transform: translateY(-200vh);
	  z-index: 200;
  }
  .svgConAnimation { // svg容器换页后
    transform: translateY(-100vh);
  }
  .page {
    position: absolute;
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
</style>

<template>
  <div id="app" @click='pageChange'>
    <div class="page svgCon" id="svgCon">
			<svg xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%">
				<path id="path" fill='#fff' d="M -44,-50 C -52.71,28.52 15.86,8.186 184,14.69 383.3,22.39 462.5,12.58 638,14 835.5,15.6 987,6.4 1194,13.86 1661,30.68 1652,-36.74 1582,-140.1 1512,-243.5 15.88,-589.5 -44,-50 Z">
				</path>
			</svg>
		</div>
    <homepage class="pageChoice"></homepage>
    <studio></studio>
    <front></front>
    <end></end>
    <mobile></mobile>
    <embedded></embedded>
    <datas></datas>
    <game></game>
    <design></design>
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
import util from '@/utils/util.js';
import $ from 'jquery';

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
      startD: 'M -44,-50 C -52.71,28.52 15.86,8.186 184,14.69 383.3,22.39 462.5,12.58 638,14 835.5,15.6 987,6.4 1194,13.86 1661,30.68 1652,-36.74 1582,-140.1 1512,-243.5 15.88,-589.5 -44,-50 Z',
	    endD:'M -44,-50 C -137.1,117.4 67.86,445.5 236,452 435.3,459.7 500.5,242.6 676,244 873.5,245.6 957,522.4 1154,594 1593,753.7 1793,226.3 1582,-126 1371,-478.3 219.8,-524.2 -44,-50 Z',
    };
  },
  mounted() {
  },
  watch: {
  },
  methods: {
    getBrowser() {
      let UserAgent = navigator.userAgent.toLowerCase();
      let browser = null;
      let browserArray = {
        IE: window.ActiveXObject || "ActiveXObject" in window, // IE
        Chrome: UserAgent.indexOf('chrome') > -1 && UserAgent.indexOf('safari') > -1, // Chrome浏览器
        Firefox: UserAgent.indexOf('firefox') > -1, // 火狐浏览器
        Opera: UserAgent.indexOf('opera') > -1, // Opera浏览器
        Safari: UserAgent.indexOf('safari') > -1 && UserAgent.indexOf('chrome') == -1, // safari浏览器
        UC: /ucbrowser/.test(UserAgent),  // uc浏览器
        Edge: UserAgent.indexOf('edge') > -1, // Edge浏览器
        QQBrowser: /qqbrowser/.test(UserAgent), // qq浏览器
        WeixinBrowser: /MicroMessenger/i.test(UserAgent) // 微信浏览器
      };
      for (var i in browserArray) {
        if (browserArray[i]) {
          browser = i;
        }
      }
      if (!browser) {
        browser = '';
      }
      browser = browser.toLowerCase();
      if (browser == 'chrome') {
        // 区分低版本chrome和高版本chrome
        let cores = UserAgent.split(' ');
        for (let i = 0; i < cores.length; i++) {
          if (cores[i].indexOf('chrome') > -1) {
            if (parseInt(cores[i].split('/')[1]) < 68) {
              browser = 'lowChrome'
            }
          }
        }
      }
      //this.$store.state.browserName = browser;
      return browser;
    },
    pageChange() {
    if(this.clickLimit) {
 			return;
 		}
 		this.clickLimit = true;

 		let prePage = document.getElementsByClassName('page')[this.index];
    let svgCon = document.getElementById('svgCon');
    let path = document.getElementById('path');
 		svgCon.style.transition = 'all 2s';
 		path.style.transition = 'all 1s';
 		prePage.style.transition = 'all 2s';
 		if(++this.index == 10) this.index = 1;
 		let nowPge = document.getElementsByClassName('page')[this.index];
 		
 		path.setAttribute('d', this.endD);
 		prePage.classList.remove('pageChoice');		  // 上一页产生
 		prePage.classList.add('pageChoiceAnimation'); // 上一页，上移
 		svgCon.classList.add('svgConAnimation');     // svg跟随上一页上移
 		nowPge.classList.add('pageChoice');        // 当前页，显示

 		setTimeout(()=>{
 			// 样式回位
 			svgCon.style.transition = 'all 0s';
 			path.style.transition = 'all 0s';
 			prePage.style.transition = 'all 0s';

 			// 根据当前页，path改变颜色
 			if(this.index == 1) {
 				path.setAttribute('fill', '#fff');
 			} else if(this.index == 2) {
 				path.setAttribute('fill', '#7A60BC');
 			} else if(this.index == 3) {
 				path.setAttribute('fill', '#64D6E2');
 			} else if(this.index == 4) {
 				path.setAttribute('fill', '#A09DE5');
 			} else if(this.index == 5) {
 				path.setAttribute('fill', '#A8CFDE');
 			} else if(this.index == 6) {
 				path.setAttribute('fill', '#F6D861');
 			} else if(this.index == 7) {
 				path.setAttribute('fill', '#3CCAD1');
 			} else if(this.index == 8) {
 				path.setAttribute('fill', '#CFC9E5');
 			} else if(this.index == 9) {
 				path.setAttribute('fill', '#FDBDDC');
 			} 

 			path.setAttribute('d', this.startD);
 			svgCon.classList.remove('svgConAnimation');
 			prePage.classList.remove('pageChoiceAnimation');

 			this.clickLimit = false;
 		}, 2000)
    }
  }
}
</script>