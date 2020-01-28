<style lang="scss" scoped>
// PC
@media only screen and (min-width: 1024px) {
    .name {
    top: 0;
    left: 1.4rem;
    font-size: 2rem;
    line-height: 2.6rem;
  }
  .bgLogo {
    left: 1.1rem;
    bottom: 0.4rem;
    width: 7.2rem;
  }
  .introduce {
    top: 2.5rem;
    right: 2rem;
    width: 7.4rem;
    font-size: 0.4rem;
  }
}
// ipad
@media only screen and (max-width: 1024px) and (min-width: 740px) {
}
// 手机
@media only screen and (max-width: 740px) {

}
.end {
  background-color: #A09DE5;
}
</style>
<template>
    <div class="end page">
      <div class="name">后台</div>
      <img class="bgLogo" src="@/assets/后台@2x.png" />
      <div class="introduce">后台是一个与数据和信息打交道的方向，负责着各类数据的处理与传输。无论是网页端、移动端还是嵌入式端，都需要后台技术的支持。QG后台组基于Java语言，自成立以来致力于后台服务器的开发，成功为工作室多数项目提供了坚实的后台技术支持，慢慢成长为一支团结可靠的队伍。</div>
    </div>
</template>

<script>
export default {
}
</script>