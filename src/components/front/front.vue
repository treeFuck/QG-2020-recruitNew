<style lang="scss" scoped>
@media only screen and (min-width: 1024px) {
  .front {
    background: #11a;
  }
}
@media only screen and (max-width: 1024px) and (min-width: 740px) {
  .front {
    background: #16662e;
  }
}
@media only screen and (max-width: 740px) {
  .front {
    background: #ef1311;
  }
}
.front {
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
    <div class="front">
      <h1>前端</h1>
    </div>
</template>

<script>
export default {
}
</script>