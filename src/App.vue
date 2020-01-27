<style lang="scss">
  *{
    padding: 0;
    margin: 0;
  }
</style>

<template>
  <div id="app">
    <studio></studio>
    <front></front>
  </div>
</template>

<script>
import studio from "@/components/studio/studio.vue";
import front from "@/components/front/front.vue";
export default {
  components: {
    studio,
    front
  }
}
</script>