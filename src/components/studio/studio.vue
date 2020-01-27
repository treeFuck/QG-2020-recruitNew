<style lang="scss" scoped>
@media only screen and (min-width: 1024px) {
  .studio {
    background: #f40;
  }
}
@media only screen and (max-width: 1024px) and (min-width: 740px) {
  .studio {
    background: #8ea;
  }
}
@media only screen and (max-width: 740px) {
  .studio {
    background: #f3e;
  }
}
.studio {
  width: 100vw;
  height: 100vh;
  transition: all 0.3s;
  h1 {
     line-height: 100vh;
     text-align: center;
   }
}
</style>
<template>
    <div class="studio">
      <h1>首页</h1>
    </div>
</template>

<script>
export default {
}
</script>