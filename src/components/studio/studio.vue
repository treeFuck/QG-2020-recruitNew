<style lang="scss" scoped>
// PC
@media only screen and (min-width: 1025px) {
  .studio {
    overflow: hidden;
    .name2 {
      top: 2vh;
      height: 13vh;
      font-size: 80px;
      line-height: 13vh;
    }
    .introduce2 {
      top: 15vh;
      height: 50vh;
      .classify {
        margin: 4vh 15vw 0 15vw;
        width: 70vw;
        height: 6vh;
        font-size: 35px;
        span {
          line-height: 6vh;
        }
      }
      .ShowCon {
        margin-top: 10vh;
        height: 30vh;
        p {
          font-size: 24px;
          line-height: 1.8em;
        }
      }
    }
    .images {
      left: 20vw;
      bottom: 10vh;
      width: 60vw;
      height: 20vh;
    }
    .imgShow {
      top: 10vh;
      left: 10vw;
      height: 80vh;
      width: 80vw;
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
      top: 3vh;
      height: 10vh;
      font-size: 80px;
      line-height: 10vh;
    }
    .introduce2 {
      top: 15vh;
      height: 65vh;
      .classify {
        margin: 5vh 15vw 0 15vw;
        width: 70vw;
        height: 5vh;
        font-size: 30px;
        span {
          line-height: 5vh;
        }
      }
      .ShowCon {
        margin-top: 10vh;
        height: 45vh;
        p {
          font-size: 25px;
          line-height: 1.8em;
        }
      }
    }
    .images {
      left: 10%;
      bottom: 8vh;
      width: 80%;
      height: 12vh;
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
    overflow-y: hidden;
    .name2 {
      top: 5vh;
      height: 10vh;
      font-size: 40px;
      line-height: 10vh;
    }
    .introduce2 {
      top: 15vh;
      height: 65vh;
      .classify {
        margin: 2vh 5vw 0 5vw;
        width: 90vw;
        height: 5vh;
        font-size: 16px;
        span {
          line-height: 5vh;
        }
      }
      .ShowCon {
        margin-top: 8vh;
        height: 50vh;
        p {
          font-size: 14px;
          line-height: 1.8em;
        }
      }
    }
    .images {
      left: 5vw;
      bottom: 10vh;
      width: 90vw;
      height: 10vh;
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
  .name2 {
    position: absolute;
    width: 100%;
    font-family: name;
    text-align: center;
  }
  .introduce2 {
    position: absolute;
    overflow-y: hidden;
    width: 100vw;
    .classify {
      display: flex;
      justify-content: space-around;
      font-family: name;
      span {
        display: inline-block;
        cursor: pointer;
      }
      .select {
        color: #000;
        border-bottom: 2px solid #000;
      }
    }
    .ShowCon {
      overflow: hidden;
      .dataCon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 400vw;
        height: 100%;
        transition: transform 0.8s;
        p {
          padding: 0 15vw;
          width: 100vw;
          height: 100%;
          color: #fff;
          text-indent: 2em;
          text-align: left;
          font-family: introduce;
          span {
            color: #000;
          }
        }
      }
      .Show0 {
        transform: translate3d(0vw, 0, 0);
      }
      .Show1 {
        transform: translate3d(-100vw, 0, 0);
      }
      .Show2 {
        transform: translate3d(-200vw, 0, 0);
      }
      .Show3 {
        transform: translate3d(-300vw, 0, 0);
      }
    }
  }
  .images {
    display: flex;
    justify-content: space-around;
    // align-items: center;
    position: absolute;
    img {
      margin: 0 1%;
      height: 100%;
    }
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
    <div class="name2">QG工作室</div>
    <div class="introduce2">
      <!-- <div ref="top"></div>
      <p>
        <span>大学生“小平科技创新团队”“QG工作室” </span>
        于2005年11月成立，由团队负责人<span>计算机学院副院长谢光强教授</span>创建，现有在校学生40多人，宗旨为负责发掘和培养创新型人才，大力提高学生科研创新、团队协作的能力。
      </p>
      <br/>
      <p>QG 科技创新团队承担大学生创新创业训练计划（国家级）、广东省大学生科技创新培育专项资金（重点）、广州市创新创业教育项目等各类学生科技项目50多项，申请专利和软件著作权等成果30余项，获得国家、省、校级各类科技竞赛奖项210余项，其中省级以上奖项130多项。团队成员代表广东省获得第十四届“挑战杯”全国大学生课外学术科技作品竞赛“智慧城市”专项赛决赛“特等奖”（全国共三项）、第十二届“挑战杯”全国大学生课外学术科技作品竞赛终审决赛“一等奖”！团队所获成果收到了广东卫视、广州日报、新快报等主流媒体的广泛关注和报道，接受了广东卫视专访并介绍了项目的主要内容和成果，采访内容在《广东新闻联播》中头条播出，作品还获得了广东省教育厅推荐，代表广东省参加第十届全国大学生创新创业年会。</p>
      <br/>
      <p>QG 科技创新团队在学校的大力支持下，心系中国梦的奋进，经过十几年的建设，形成了自己独特的文化和传承，把团队精神的培养上升到与学术与科研能力并重，团队具有很强的凝聚力和战斗力，培养了大批品学兼优、专业知识扎实、能独当一面的创新型人才，获得了丰硕的成果，团队成为广东工业大学“标志性获奖团队”，团队的毕业生曾获得“广东工业大学十佳优秀毕业生”，“广东工业大学十佳创新支星”称号，大部分毕业生进入了华为、阿里巴巴、百度、腾讯等知名IT公司及企事业单位工作，成为了核心技术骨干，获得用人单位的肯定和好评，曾获得百度“最佳个人”（该奖项颁发为一年一度，颁发给百度优秀杰出员工，名额仅五个），腾讯“优秀员工”、“腾讯微信事业群绩效突出者”、另有部分毕业生或“推免”留校深造或到海内外高校继续攻读硕（博）士，或在毕业后进行了创业，获得了初步的成功！</p>
      <div ref="bottom"></div>-->
      <div class="classify">
        <span @click="changeFontShow(0)" :class="{select:fontShowIndex==0}" click="changeFontShow(0)">简介</span>
        <span @click="changeFontShow(1)" :class="{select:fontShowIndex==1}" click="changeFontShow(1)">科技成果</span>
        <span @click="changeFontShow(2)" :class="{select:fontShowIndex==2}" click="changeFontShow(2)">人才培养</span>
        <span @click="changeFontShow(3)" :class="{select:fontShowIndex==3}" click="changeFontShow(3)">社会影响</span>
      </div>
      <div class="ShowCon">
        <div class="dataCon" :class="{Show0:fontShowIndex==0,Show1:fontShowIndex==1,Show2:fontShowIndex==2,Show3:fontShowIndex==3}">
          <p>
            大学生
            <span>“小平科技创新团队”</span>“QG工作室” 于2005年11月成立，由团队负责人计算机学院副院长谢光强教授创建，现有在校学生40多人，宗旨为负责发掘和培养创新型人才，大力提高学生科研创新、团队协作的能力。
          </p>
          <p>
            QG工作室的科技创新成果斐然。QG工作室承担各类学生
            <span>科技项目50多项</span>，申请
            <span>专利和软件著作权等成果30余项</span>，获得国家、省、校级各类科技竞赛
            <span>奖项210余项</span>，其中省级以上奖项130多项。
          </p>
          <p>
            QG工作室重视高水平人才培养。在老师与成员们的努力下，团队荣获全国
            <span>“小平科技创新团队”</span>、广东工业大学“标志性获奖团队”等奖项。且大部分毕业生进入了
            <span>华为、阿里巴巴、百度、腾讯</span>等知名IT公司及企事业单位工作，并成为了核心技术骨干，获得了用人单位的好评。
          </p>
          <p>
            QG工作室深受社会好评。许多成果受到了
            <span>广东卫视、广州日报、新快报</span>等主流媒体的广泛关注和报道。
          </p>
        </div>
      </div>
    </div>
    <div class="images">
      <img src="@/assets/studio2.png" @click="showImg(0)" click="showImg(0)" />
      <img src="@/assets/studio3.png" @click="showImg(1)" click="showImg(1)" />
      <img src="@/assets/studio1.png" @click="showImg(2)" click="showImg(2)" />
    </div>
    <div class="imgShow" v-show="imgShow">
      <img class="close" src="@/assets/close.png" @click="closeImg" click="closeImg()" />
      <img class="img" src="@/assets/studio2.png" v-show="imgShowIndex==0" />
      <img class="img" src="@/assets/studio3.png" v-show="imgShowIndex==1" />
      <img class="img" src="@/assets/studio1.png" v-show="imgShowIndex==2" />
    </div>
  </div>
</template>

<script>
// import util from "@/utils/util.js";
// import $ from "jquery";
export default {
  data() {
    return {
      scrollLimit: false,
      touchStartY: null,
      touchEndY: null,
      imgShow: false,
      imgShowIndex: 0,
      fontShowIndex: 0, 
      clickLimit: false,
    };
  },
  computed: {
  },
  mounted() {
    // let introduce = document.getElementsByClassName("introduce2")[0];
    // setTimeout(() => {
    //   if (this.$store.state.browserName === "firefox") {
    //     util.addHandler(introduce, "DOMMouseScroll", this.scrollChangePage);
    //   } else {
    //     util.addHandler(introduce, "mousewheel", this.scrollChangePage);
    //   }
    //   util.addHandler(introduce, "touchstart", event => {
    //     event.preventDefault();
    //     this.touchStartY = event.changedTouches[0].pageY;
    //   });
    //   util.addHandler(introduce, "touchend", event => {
    //     event.preventDefault();
    //     this.touchEndY = event.changedTouches[0].pageY;
    //     this.touchChangePage();
    //   });
    // }, 100);
  },
  methods: {
    showImg(index) {
      if(this.clickLimit) {
        return;
      }
      this.clickLimit = true;
      setTimeout(()=>{
        this.clickLimit = false;
      }, 500)
      this.imgShow = true;
      this.imgShowIndex = index;
    },
    closeImg() {
      this.imgShow = false;
    },
    changeFontShow(index) {
      if(this.clickLimit) {
        return;
      }
      this.clickLimit = true;
      setTimeout(()=>{
        this.clickLimit = false;
      }, 500)
      if(this.imgShow) {
        this.$Message.warning("请先关闭图片");
        return;
      }
      if(this.fontShowIndex == index) {
        return;
      }
      this.fontShowIndex = index;
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
      if ($(".introduce2").scrollTop() == 0) {
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
      if (this.$store.state.equipment != "phone") {
        return;
      }
      let distance = this.touchEndY - this.touchStartY;
      if (distance < 50 && distance > -50) {
        event.stopPropagation();
        return;
      }
      if ($(".introduce2").scrollTop() == 0) {
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