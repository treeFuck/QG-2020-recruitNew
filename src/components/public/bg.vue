<style lang="scss" scoped>
.bg{
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .float-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 11;
    .float-icons {
      position: absolute;
      transform: translate(0, 0) rotateZ(0);
    }
    .active0 {
      transform: translate(00vw, 00vh) rotateZ(360deg);
    }
    .active1 {
      transform: translate(00vw, 20vh) rotateZ(0deg);
    }
    
    .active2 {
      transform: translate(00vw, 40vh) rotateZ(39deg);
    }
    .active3 {
      transform: translate(00vw, 60vh) rotateZ(80deg);
    }
    .active4 {
      transform: translate(00vw, 70vh) rotateZ(90deg);
    }
    .active5 {
      transform: translate(20vw, 20vh) rotateZ(60deg);
    }
    .active6 {
      transform: translate(20vw, 40vh) rotateZ(440deg);
    }
    .active7 {
      transform: translate(20vw, 50vh) rotateZ(330deg);
    }
    .active10 {
      transform: translate(20vw, 70vh) rotateZ(270deg);
    }
    .active8 {
      transform: translate(40vw, 10vh) rotateZ(180deg);
    }
    .active9 {
      transform: translate(40vw, 30vh) rotateZ(40deg);
    }
    .active11 {
      transform: translate(40vw, 50vh) rotateZ(120deg);
    }
    .active12 {
      transform: translate(40vw, 70vh) rotateZ(270deg);
    }
    .active13 {
      transform: translate(50vw, 20vh) rotateZ(180deg);
    }
    .active14 {
      transform: translate(50vw, 40vh) rotateZ(40deg);
    }
    .active15 {
      transform: translate(50vw, 60vh) rotateZ(120deg);
    }
    .active16 {
      transform: translate(50vw, 70vh) rotateZ(270deg);
    }
    .active17 {
      transform: translate(70vw, 20vh) rotateZ(180deg);
    }
    .active18 {
      transform: translate(70vw, 40vh) rotateZ(40deg);
    }
    .active19 {
      transform: translate(70vw, 60vh) rotateZ(120deg);
    }
    .active20 {
      transform: translate(80vw, 70vh) rotateZ(270deg);
    }
    .active22 {
      transform: translate(90vw, 20vh) rotateZ(180deg);
    }
    .active23 {
      transform: translate(80vw, 40vh) rotateZ(40deg);
    }
    .active21 {
      transform: translate(90vw, 60vh) rotateZ(120deg);
    }
    .icon1 {
      width: 10vh;
      transition: 5s all linear;
      img {
        width: 100%;
      }
    }
    .icon2 {
      width: 12vh;
      transition: 6s all linear;
      img {
        width: 100%;
      }
    }
    .icon3 {
      width: 14vh;
      transition: 7s all linear;
      img {
        width: 100%;
      }
    }
    .icon4 {
      width: 16vh;
      transition: 8s all linear;
      img {
        width: 100%;
      }
    }.icon5 {
      width: 18vh;
      transition: 9s all linear;
      img {
        width: 100%;
      }
    }
    .icon6 {
      width: 20vh;
      transition: 10s all linear;
      img {
        width: 100%;
      }
    }
  }
}
</style>

<template>
  <div class="bg">
    <div class="float-layer">
      <div
        class="float-icons icon1"
        :class="'active' + num1"
      >
        <img :src="floatIconUrl" alt="">
      </div>
      <div
        class="float-icons icon2"
        :class="'active' + num2"
      >
        <img :src="floatIconUrl" alt="">
      </div>
      <div
        class="float-icons icon3"
        :class="'active' + num3"
      >
        <img :src="floatIconUrl" alt="">
      </div>
      <div
        class="float-icons icon4"
        :class="'active' + num4"
      >
        <img :src="floatIconUrl" alt="">
      </div>
      <div
        class="float-icons icon5"
        :class="'active' + num5"
      >
        <img :src="floatIconUrl" alt="">
      </div>
      <div
        class="float-icons icon6"
        :class="'active' + num6"
      >
        <img :src="floatIconUrl" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default  {
    props: {
        floatIconUrl: String,
        index: Number
    },
    data() {
        return {
            num1: 3,
            num2: 6,
            num3: 9,
            num4: 12,
            num5: 15,
            num6: 18,
            timeoutID1: null,
            timeoutID2: null,
            timeoutID3: null,
            timeoutID4: null,
            timeoutID5: null,
            timeoutID6: null,
            activeCount: 23,
        }
    },
  // mounted() {
  //   setTimeout(() => {
  //     this.set();
  //   }, 10);
  // },
  methods: {
    getRandomNumberByRange() {
        return Math.floor(Math.random() * (100))
    },
    set() {
      let random1 = this.getRandomNumberByRange() % this.activeCount,
          random2 = this.getRandomNumberByRange() % this.activeCount,
          random3 = this.getRandomNumberByRange() % this.activeCount,
          random4 = this.getRandomNumberByRange() % this.activeCount,
          random5 = this.getRandomNumberByRange() % this.activeCount,
          random6 = this.getRandomNumberByRange() % this.activeCount;
      this.num1 = random1 == this.num1 ? (random1 + 1) % this.activeCount : random1;
      this.num2 = random2 == this.num2 ? (random2 + 1) % this.activeCount : random2;
      this.num3 = random3 == this.num3 ? (random3 + 1) % this.activeCount : random3;
      this.num4 = random4 == this.num4 ? (random4 + 1) % this.activeCount : random4;
      this.num5 = random5 == this.num5 ? (random5 + 1) % this.activeCount : random5;
      this.num6 = random6 == this.num6 ? (random6 + 1) % this.activeCount : random6;
      this.timeoutID1 = window.setInterval(() => {
        console.log("秀儿秀儿");
        let random = this.getRandomNumberByRange() % this.activeCount;
        this.num1 = random == this.num1 ? (random + 1) % this.activeCount : random;
      }, 5000)
      this.timeoutID2 = window.setInterval(() => {
        let random = this.getRandomNumberByRange() % this.activeCount;
        this.num2 = random == this.num2 ? (random + 1) % this.activeCount : random;
      }, 6000)
      this.timeoutID3 = window.setInterval(() => {
        let random = this.getRandomNumberByRange() % this.activeCount;
        this.num3 = random == this.num3 ? (random + 1) % this.activeCount : random;
      }, 7000)
      this.timeoutID4 = window.setInterval(() => {
        let random = this.getRandomNumberByRange() % this.activeCount;
        this.num4 = random == this.num4 ? (random + 1) % this.activeCount : random;
      }, 8000)
      this.timeoutID5 = window.setInterval(() => {
        let random = this.getRandomNumberByRange() % this.activeCount;
        this.num5 = random == this.num5 ? (random + 1) % this.activeCount : random;
      }, 9000)
      this.timeoutID6 = window.setInterval(() => {
        let random = this.getRandomNumberByRange() % this.activeCount;
        this.num6 = random == this.num6 ? (random + 1) % this.activeCount : random;
      }, 10000);
    },
    destroy() {
      window.clearInterval(this.timeoutID1);
      window.clearInterval(this.timeoutID2);
      window.clearInterval(this.timeoutID3);
      window.clearInterval(this.timeoutID4);
      window.clearInterval(this.timeoutID5);
      window.clearInterval(this.timeoutID6);
    }
  },
  watch: {
    "$store.state.index": function(newVal, oldVal) {
      if (oldVal) {
        if(newVal == this.index) {
          this.set();
        } else {
          this.destroy();
        }
      }
    }
  },
}
</script>