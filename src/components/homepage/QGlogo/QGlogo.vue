<style lang="scss" scoped>
// PC
@media only screen and (min-width: 1025px) {
  .QGlogo {
    margin-top: -50px;
    margin-left: -50px;
    width: 100px;
    height: 100px;
  }
}
// ipad
@media only screen and (max-width: 1024px) and (min-width: 741px) {
  .QGlogo {
    margin-top: -50px;
    margin-left: -50px;
    width: 100px;
    height: 100px;
  }
}
// 手机
@media only screen and (max-width: 740px) {
  .QGlogo {
    margin-top: -35px;
    margin-left: -35px;
    width: 70px;
    height: 70px;
  }
}
.QGlogo {
  position: absolute;
  top: 50%;
  left: 50%;
  transition: all 0.5s;
  .show {
    position: absolute;
    top: 0;
    left: 0%;
    width: 100%;
    height: 100%;
    background-image: url("../../../assets/QGlogo.png");
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    transition: all 1s;
  }
  .path {
		fill-rule:evenodd;
		clip-rule:evenodd;
		fill: none;
		stroke: #666;
		stroke-linecap: round;
		stroke-width:5;
		stroke-dasharray: 1008;
		stroke-dashoffset: 1009;
		transition: stroke-dashoffset 1.5s;
	}
  .pathShow {
    stroke-dashoffset: 0;
  }
}

</style>
<template>
  <div class="QGlogo">
    <div ref="show" class="show" :style="{'transform': scale}"></div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
      <path class="path" :class="{pathShow:pathShow}" d="M288.9,224.039  c-0.968-2.421-21.301,5.326-36.792,1.937c14.039-22.272,18.396-26.146,23.237-50.355c4.841-24.209,12.102-83.279-32.92-125.887  c-16.944-17.915-46.959-38.251-98.759-38.735c-51.8-0.484-87.14,30.987-87.14,30.987S8.115,83.142,10.052,144.633  c1.936,61.491,40.665,96.836,40.665,96.836s-24.689,37.282-17.428,38.734c7.262,1.453,46.475-14.041,79.394-13.557  c32.919,0.484,76.974,25.177,131.678,23.241c18.396-1.937,41.634-19.367,38.729-21.304  C280.186,266.646,289.868,226.459,288.9,224.039z M203.634,231.838c-34.665,13.571-68.571,11.56-70.595,11.309  C46.503,230.581,48.78,142.368,48.78,143.625c0,1.256,1.012-82.684,86.536-92.737c42.002-5.529,62.751,9.299,92.608,36.944  c-3.542,4.272-34.159,32.42-34.159,32.42s-20.748-26.137-49.341-21.111c-37.954-2.765-61.739,66.851-17.459,91.228  c24.544,11.058,45.545,0.754,54.655-3.77c-8.35-43.981-3.037-46.745-3.037-46.745l59.209,0.754l0.759,98.768  C238.552,239.377,209.454,236.864,203.634,231.838z"/>
    </svg>
  </div>
</template>

<script>

export default {
  data() {
    return {
      scale: "scale(0)",
      pathShow: false,
    };
  },
  methods: {
    play() {
      this.pathShow = true;
      setTimeout(()=>{
        this.pathShow = false;
        setTimeout(()=>{
          this.scale = "scale(1)";
        }, 1500)
      }, 1500)
    },
  },
};
</script>