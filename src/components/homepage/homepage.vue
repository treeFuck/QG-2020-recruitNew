<style lang="scss" scoped>
// PC
@media only screen and (min-width: 1024px) {
}
// ipad
@media only screen and (max-width: 1024px) and (min-width: 740px) {
}
// 手机
@media only screen and (max-width: 740px) {
}
.homepage {
  width: 100%;
  height: 100vh;
  color: #000;
  background-color: #fff;
  .QGlogo {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -200px;
    margin-left: -200px;
    width: 400px;
    height: 400px;
    background-color: #f40;
    // QGlogo@2x.png
    // background-image: url('../../assets/QGlogo@2x.png');
    // background-size: 55.5% 55.5%;
    // background-position: center;

  }
}
</style>
<template>
  <div class="homepage page">
    <h1>主页</h1>
    <QGlogo></QGlogo>
  </div>
</template>

<script>
import QGlogo from "./QGlogo/QGlogo.vue";
export default {
  components: {
    QGlogo
  }
};
</script>