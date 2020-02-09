<style lang="scss" scoped>
// PC
@media only screen and (min-width: 1025px) {
  .studio {
    overflow: hidden;
    .name2 {
      position: absolute;
      top: 0;
      left: 3.9rem;
      font-family: name;
      font-size: 1.5rem;
      line-height: 1.95rem;
    }
    .introduce2 {
      position: absolute;
      top: 2.1rem;
      left: 1.25rem;
      width: 11.7rem;
      text-indent: 2em;
      font-size: 0.22rem;
      line-height: 0.3rem;
      font-weight: lighter;
      font-family: introduce;
      span {
        color: #000;
        font-weight: bold;
      }
    }
    .images {
      position: absolute;
      top: 50%;
      right: 2rem;
      margin-top: -3.5rem;
      width: 3rem;
      height: 7rem;
      img {
        margin: 0.1rem;
        width: 3rem;
        cursor: pointer;
      }
    }
    .bottom {
      position: absolute;
      bottom: 5px;
      font-size: 13px;
    }
    .imgShow {
      top: 10%;
      left: 10%;
      height: 80%;
      width: 80%;
      .close {
        width: 35px;
        cursor: pointer;
      }
      .img {
        top: 10%;
        left: 50%;
        height: 80%;
        transform: translateX(-50%);
      }
    }
  }
}
// ipad
@media only screen and (max-width: 1024px) and (min-width: 741px) {
  .studio {
    overflow: hidden;
    .name2 {
      position: absolute;
      top: 0.3em;
      width: 100%;
      font-family: name;
      font-size: 0.9rem;
      text-align: center;
      line-height: 1rem;
    }
    .introduce2 {
      position: absolute;
      top: 1.3rem;
      padding: 0 5%;
      width: 90%;
      text-indent: 2em;
      font-size: 0.18rem;
      line-height: 0.22rem;
      font-weight: lighter;
      font-family: introduce;
      span {
        color: #000;
        font-weight: bold;
      }
    }
    .images {
      position: absolute;
      left: 50%;
      bottom: 5%;
      margin-left: -2.7rem;
      height: 1.2rem;
      width: 5.4rem;
      img {
        margin: 0 0.1rem;
        width: 1.6rem;
      }
    }
    .bottom {
      position: absolute;
      bottom: 5px;
      font-size: 13px;
    }
    .imgShow {
      left: 5%;
      top: 25%;
      height: 50%;
      width: 90%;
      .close {
        width: 40px;
      }
      .img {
        top: 50%;
        left: 10%;
        width: 80%;
        transform: translateY(-50%);
      }
    }
  }
}
// 手机
@media only screen and (max-width: 740px) {
  .studio {
    overflow-y: scroll;
    scroll-behavior: smooth;
    .name2 {
      margin: 0.3rem 0 0.1rem 0;
      width: 100%;
      font-family: name;
      font-size: 0.5rem;
      text-align: center;
    }
    .introduce2 {
      padding: 0 5%;
      width: 90%;
      text-indent: 2em;
      font-size: 0.12rem;
      line-height: 0.16rem;
      // font-weight: lighter;
      font-family: introduce;
      span {
        color: #000;
        font-weight: bold;
      }
    }
    .images {
      margin-top: 0.2rem;
      text-align: center;
      img {
        display: inline-block;
        margin: 0.05rem;
        width: 0.95rem;
      }
    }
    .bottom {
      margin-bottom: 5px;
      font-size: 10px;
    }
    .imgShow {
      left: 5%;
      top: 25%;
      height: 50%;
      width: 90%;
      .close {
        width: 20px;
      }
      .img {
        top: 50%;
        left: 5%;
        width: 90%;
        transform: translateY(-50%);
      }
    }
  }
}

.studio {
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to top, rgb(109, 55, 151), rgb(159, 122, 190));
  .bottom {
    width: 100%;
    color: #fff;
    text-align: center;
    font-weight: lighter;
  }
  .imgShow {
    position: fixed;
    z-index: 205;
    background-color: #fff;
    box-shadow: 0 0 20px #666;
    .close {
      position: absolute;
      right: 10px;
      top: 10px;
    }
    .img {
      position: absolute;
      box-shadow: 0 0 10px #999;
    }
  }
}
</style>
<template>
  <div class="studio page">
    <div ref="top"></div>
    <div class="name2">QG工作室</div>
    <div class="introduce2">
      <p>
        QG 科技创新团队由团队负责人
        <span>计算机学院副院长谢光强副教授</span>于2005年创建并担任指导老师，宗旨为负责发掘和培养创新型人才，大力提高学生科研创新、团队协作的能力，团队成员均为在校大学生，来自包括计算机学院、自动化学院、信息工程学院、物理学院等多个理工科学院，形成了以高年级学生为主，低年级学生为辅的完整的人才梯队，同时来自多个专业、学科的学生共同协同进行大学生科技创新活动。主要依托嵌入式智能系统方面的研究成果，结合互联网+不同应用方向，团队在多个方向上展开项目研究和多领域的融合应用，取得了丰硕的成果。团队被授予以邓小平同志命名的大学生
        <span>“小平科技创新团队”</span>称号，并于2018年在北京人民大会堂接受颁奖，该项称号是由共青团中央、全国青联、全国学联、全国少工委、中国青少年科技创新奖励基金颁发
        <span>（全国共50支，广东省仅2支）</span>。旨在面向全国大学生遴选50个在学术研究、科技竞赛、成果转化等方面取得突出成绩或显示较大潜力的大学生科技创新团队给予表彰支持。
      </p>
      <p>QG 科技创新团队承担大学生创新创业训练计划（国家级）、广东省大学生科技创新培育专项资金（重点）、广州市创新创业教育项目等各类学生科技项目50多项，申请专利和软件著作权等成果30余项，获得国家、省、校级各类科技竞赛奖项210余项，其中省级以上奖项130多项。团队成员代表广东省获得第十四届“挑战杯”全国大学生课外学术科技作品竞赛“智慧城市”专项赛决赛“特等奖”（全国共三项）、第十二届“挑战杯”全国大学生课外学术科技作品竞赛终审决赛“一等奖”！团队所获成果收到了广东卫视、广州日报、新快报等主流媒体的广泛关注和报道，接受了广东卫视专访并介绍了项目的主要内容和成果，采访内容在《广东新闻联播》中头条播出，作品还获得了广东省教育厅推荐，代表广东省参加第十届全国大学生创新创业年会。</p>
      <p>QG 科技创新团队在学校的大力支持下，心系中国梦的奋进，经过十几年的建设，形成了自己独特的文化和传承，把团队精神的培养上升到与学术与科研能力并重，团队具有很强的凝聚力和战斗力，培养了大批品学兼优、专业知识扎实、能独当一面的创新型人才，获得了丰硕的成果，团队成为广东工业大学“标志性获奖团队”，团队的毕业生曾获得“广东工业大学十佳优秀毕业生”，“广东工业大学十佳创新支星”称号，大部分毕业生进入了华为、阿里巴巴、百度、腾讯等知名IT公司及企事业单位工作，成为了核心技术骨干，获得用人单位的肯定和好评，曾获得百度“最佳个人”（该奖项颁发为一年一度，颁发给百度优秀杰出员工，名额仅五个），腾讯“优秀员工”、“腾讯微信事业群绩效突出者”、另有部分毕业生或“推免”留校深造或到海内外高校继续攻读硕（博）士，或在毕业后进行了创业，获得了初步的成功！</p>
    </div>
    <div class="images">
      <img src="@/assets/studio2.png" @click="showImg(0)" click="0" />
      <img src="@/assets/studio3.png" @click="showImg(1)" click="1" />
      <img src="@/assets/studio1.png" @click="showImg(2)" click="2" />
    </div>
    <div class="imgShow" v-show="imgShow">
      <img class="close" src="@/assets/close.png" @click="closeImg" click="closeImg" />
      <img class="img" src="@/assets/studio2.png" v-show="imgShowIndex==0"/>
      <img class="img" src="@/assets/studio3.png" v-show="imgShowIndex==1"/>
      <img class="img" src="@/assets/studio1.png" v-show="imgShowIndex==2"/>
    </div>
    <div class="bottom">向下滚动了解更多</div>
    <div ref="bottom"></div>
  </div>
</template>

<script>
import util from "@/utils/util.js";
import $ from "jquery";
export default {
  data() {
    return {
      scrollLimit: false,
      touchStartY: null,
      touchEndY: null,
      imgShow: false,
      imgShowIndex: 0
    };
  },
  mounted() {
    let studio = document.getElementsByClassName("studio")[0];
    setTimeout(() => {
      if (this.$store.state.browserName === "firefox") {
        util.addHandler(studio, "DOMMouseScroll", this.scrollChangePage);
      } else {
        util.addHandler(studio, "mousewheel", this.scrollChangePage);
      }
      util.addHandler(studio, "touchstart", event => {
        event.preventDefault();
        this.touchStartY = event.changedTouches[0].pageY;
      });
      // util.addHandler(studio,'touchmove', (event) => {
      //   event.preventDefault();
      // });
      util.addHandler(studio, "touchend", event => {
        event.preventDefault();
        this.touchEndY = event.changedTouches[0].pageY;
        this.touchChangePage();
      });
    }, 100);
  },
  methods: {
    showImg(index) {
      this.imgShow = true;
      this.imgShowIndex = index;
    },
    closeImg() {
      this.imgShow = false;
    },
    scrollChangePage() {
      if (this.$store.state.equipment != "phone") {
        return;
      }
      event.preventDefault();
      let detail = event.wheelDelta || event.detail;
      if (this.$store.state.browserName === "firefox") {
        detail = -detail;
      }
      if ($(".studio").scrollTop() == 0) {
        if (detail > 0) {
          //上滚
          if (this.scrollLimit) {
            event.stopPropagation();
          }
        } else if (detail < 0) {
          //下滚
          this.scrollLimit = true;
          setTimeout(() => {
            this.scrollLimit = false;
          }, 500);
          this.$refs.bottom.scrollIntoView(false);
          event.stopPropagation();
        }
      } else {
        if (detail > 0) {
          //上滚
          this.scrollLimit = true;
          setTimeout(() => {
            this.scrollLimit = false;
          }, 500);
          this.$refs.top.scrollIntoView(true);
          event.stopPropagation();
        } else if (detail < 0) {
          //下滚
          if (this.scrollLimit) {
            event.stopPropagation();
          }
        }
      }
    },
    touchChangePage() {
      if (this.$store.state.equipment == "PC") {
        return;
      }
      let distance = this.touchEndY - this.touchStartY;
      if (distance < 50 && distance > -50) {
        let clickFun = event.target.getAttribute("click");
        if (clickFun) {
          if (clickFun == "closeImg") {
            this.closeImg();
          } else {
            this.showImg(clickFun);
          }
        }
        event.stopPropagation();
        return;
      }
      if (this.$store.state.equipment == "ipad") {
        return;
      }
      if ($(".studio").scrollTop() == 0) {
        if (distance > 0) {
          if (this.scrollLimit) {
            event.stopPropagation();
          }
        } else {
          this.scrollLimit = true;
          setTimeout(() => {
            this.scrollLimit = false;
          }, 500);
          this.$refs.bottom.scrollIntoView(false);
          event.stopPropagation();
        }
      } else {
        if (distance < 0) {
          // 下滚
          if (this.scrollLimit) {
            event.stopPropagation();
          }
        } else {
          // 上滚
          this.scrollLimit = true;
          setTimeout(() => {
            this.scrollLimit = false;
          }, 500);
          this.$refs.top.scrollIntoView(true);
          event.stopPropagation();
        }
      }
    }
  }
};
</script>