<style lang="scss" scoped>
// PC
@media only screen and (min-width: 1025px) {
  .name {
    top: 0;
    left: 1.4rem;
  }
  .bgLogo {
    bottom: 0.4rem;
    right: 0.5rem;
    width: 8.5rem;
  }
  .introduce {
    top: 50%;
    right: 2.6rem;
    width: 14.2rem;
    font-size: 0.4rem;
    transform: translateY(-50%);
  }
}
// ipad
@media only screen and (max-width: 1024px) and (min-width: 741px) {
  .name {
    top: 0.4rem;
    width: 100%;
    text-align: center;
  }
  .bgLogo {
    right: 50%;
    bottom: 1rem;
    margin-right: -2.9rem;
    width: 5.8rem;
  }
  .introduce {
    top: 2rem;
    right: 5%;
    width: 90%;
  }
}
// 手机
@media only screen and (max-width: 740px) {
  .name {
    top: 0.3rem;
    width: 100%;
    text-align: center;
  }
  .bgLogo {
    right: 50%;
    bottom: 0.5rem;
    margin-right: -1.4rem;
    width: 2.8rem;
  }
  .introduce {
    top: 1.3rem;
    right: 5%;
    width: 90%;
  }
}
.front {
  background: linear-gradient(to top, rgb(237, 62, 70), rgb(255, 156, 156));
  .bg {
    z-index: 0;
  }
}
</style>
<template>
  <div class="front page">
    <bg :index="4" :floatIconUrl="floatIconUrl"></bg>
    <div class="name">前端</div>
    <img class="bgLogo" src="@/assets/font@2x.png" />
    <div
      class="introduce"
    ><p>前端在网络开发中属于呈现给用户的部分，最具有代表性的莫过于传统的网页。我们创造出挑战原生APP地位的webapp小程序，更可以开发桌面级应用。</p>
    <p>同时，框架的使用让越来越复杂的View层变得容易处理，模块的规范化也提高了开发效率......直至今天，前端所能完成的任务可不仅仅于此，我们还可以用Node.js进行高性能后端开发。紧随最前沿的技术脚步，秉承用户体验至上的原则，我们，从未止步。</p></div>
  </div>
</template>

<script>
import bg from "@/components/public/bg.vue";
export default {
  components: {
    bg
  },
  data() {
    return {
      floatIconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAA8CAYAAADfYhweAAAACXBIWXMAAAsSAAALEgHS3X78AAADP0lEQVRo3u2bX07iUBTGP4nvsgPKCmBWYF2BbsBQjfFBXxoTCRpJqkaNUfQKyt+SsBOdFQw7sLODuoGeeSiN0KCFett7285Jbi5poWkOv3M+vtOwQkQQHvf3CoiA42NL9K2sQo4wJrsm+kZWhBPSaKggegURQLSBavVN5O3kJKLD/zqDCXl40ACsTx1Zx+2tls2SeXzMg2gMosKkXLz1F0Rl1Gp21gjRARTmHC9MzmWIEMYUEL37yPCvIk5OrKwQwji9JwWEPD1Ny2zQ2sDp6VvaCWERvTeBCWk2dQClJT5RwtWVns6SabXyILJAtLZguXjrA46joF6300aIAWAtxOfW4vwFGw8hrZYC4H1JMj6X4wBAEfW6lRZCRpJcQ4KEPD+rPr8SNtZxfq6mgZCRpNcSkJCXF+MLvxI2CjCMSBtsdE213Z6VWQA/bKru7snwxYWdNEJYSJldRIZZsghpt8sA/sx8y/wI8fZfuLwcJ4WQODwIS0bJdDpbnGQ2WIbPzrbkLplOJw/AHQv6S4R/ybjjRscp4/ralpUQnbPMBssw53EjP0K6XQVEYwDzZTYaQgDH+QBRGTc3lmyEhHWzPGTYkKtkul0VQAXiooJaTZWJEAPiw5AjIb2eFpPMBstwtaqJbaq9Xh6A61e8punfo2+q/gar4O7OFkWILqiRftdgdTGE9Pvu07evyBBDiLcX0WhYcRPCIG+weEum31cBbEqckE0cHalxEjKC/DGKJyGDQdx+JbzP0fWlG+xyTXUwCJZZOZrqpww7joJm046KEFF+JTafszghg4EC4H1hMuQgxHtdRKtl8SZkhOTGiG/JmGZcY8HofM7h4RZPQhiSH4xPQkzTSIjMBsvwwUFgg/2+qZqmK7PTY8FkNtXZp37drh2WkKievomUYRauZEyzDLFjwaiigv39chhCGNIbbLmEDIdawmU2WIb39rTFEjIc5iHH0DjqMLC7m1+EkKS42Z/L8JxxY85HhwKB/0QQEDp2dpTvCEmam+XuhnNTdKgpldlgGa5U1HmEMGQ32GxCXJktZTghJWxva66XmfYr0+H3OOnwMp/H/Ocm48Yc5Hv6JrLB6qsAVAC//+cDAKD+A1wX1aGUbt7LAAAAAElFTkSuQmCC',
    }
  }
};
</script>