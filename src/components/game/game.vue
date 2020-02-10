<style lang="scss" scoped>
// PC
@media only screen and (min-width: 1025px) {
    .name {
    top: 0;
    left: 1.4rem;
    font-size: 2rem;
    line-height: 2.6rem;
  }
  .bgLogo {
    bottom: 1rem;
    right: 2.4rem;
    width: 5.6rem;
  }
  .introduce {
    top: 50%;
    left: 1.9rem;
    width: 8.2rem;
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
    bottom: 0.6rem;
    margin-right: -2rem;
    width: 4rem;
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
    margin-right: -1rem;
    width: 2rem;
  }
  .introduce {
    top: 1.3rem;
    right: 5%;
    width: 90%;
  }
}
.game {
  //background-color: #CFC9E5;
  background: linear-gradient(to top, #7A69B9, #CFC9E5);
  .bg {
    z-index: 0;
  }
}
</style>
<template>
    <div class="game page">
      <bg :index="9" :floatIconUrl="floatIconUrl"></bg>
      <div class="name">图形</div>
      <img class="bgLogo" src="@/assets/图形@2x.png" />
      <div class="introduce">图形渲染组（前身手游组）的研究方向为计算机图形学与AR/VR开发。<p>小组以DirectX、Unity3D作为主要学习方向，DirectX用于理解底层图形渲染原理，Unity3D引擎用于开发AR/VR应用程序、仿真平台以及其他交互式媒体应用程序。</p></div>
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
      floatIconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAwCAYAAADuFn/PAAAACXBIWXMAAAsSAAALEgHS3X78AAAEDUlEQVR42u2ca2/URhSGX+eP+DcAhZY7CSQEQsqtXMonf69UVaqQAAE9LaIUSCtVSFWvcED0pl4EX1q1VbmTbHqhCf9g/si+/TDeWTvrzS6Jd23vzmgl747t3Z33sc+cmXPGAUlUsTz85Y2IpIAEQRnd96lWsR1B1QA8+vXNCKCQDAGCJGIIBqSMTn+mHkAPyuPf3opACoDQ/udY/DQEgDQEZWz6c/UAcihPf387Iiggw1hgAEAHCO6OGHv1C/UAVlBm/zhpTQ0QLhH2RSDYO4KUnfu/VA+gizL356kIpBAM0RDWqr0aCCBpAMrO/V+pB5BRavfORAAFRNgqdG4QANg7YteB6+oBAJi/f9YKn+hc7aunEMC4sx4/cEOHEsBfD87HwjO0fyEtZJ8guM56/KDqUAD4+6FkCE8UDMF11hOHbupAAvjn0XsdhC8FBNdZTxy6pQMB4N/HFyIAsVfTSfjSQIg767rsPnxbKwng2ZOLdgAV+/FoSFYtCCDrBqDsPvy1VgLAs6fvRwAEZIimRKg4BOe+Tr72jZYSwH+zlyIQ1sY3KpOiDwYE20eQMnnkWy0FgIXZDyIC1tQkhB1wCG7Sb8+R77QQAAtzl62pcXM1TvFhggDGpmnv0e+1LwAW566kr/iEyEMMITZNddl77AftCYDF2tX2V7yH0IAAsG5IytTxHzUXAIu1mVh469W0FdtDSEJwA7qp4z/pigA8n5+JQNj5+CyhPYRuIDj3dd/rP2tXAJ7Pf5i+4rlUdg9hBRDs7CvrMn3ijmYCaAqfccV7CHlBcCPr6RN3FQCCpo1HmG2lPIQeQHCmaaSLftptgqx69zFI1ATt6wO7DRL7UzXJz0Hju4K4ern3QBAE7jfs+YHbul9I1DX3Nc9NbTOOTe5vrRtpOde+H0mflziugwnyd0KvvaNlOuEsEB5C3iPmZdzQdiA8hDxnUTsOxLx31NvIWtdTEa0gPIQ8si1eeDIuDcJDWG0G3oqno/2IOZ+s7FUHZCyIRux3qCAYkrJj6pNiAjKZk3dAnFo40BAMQNm251o5QpJDNItqQMrWyY/LGZRvAVGbSUTOKg3BEJQtEx9VIy2lfUBnSQiz/BAMQNk0PqO91KdvqYkViqwZkLJx12Xthy59T861IJgeWZcDggEor4xd0n7qUVh6eirIXywEA1BeHr2oRehQ+AKNArMtDEDZsOOCFtn+0ixRciCYSG3sDQQDUNZvf1fL0O7SLdJbrF2NF+lluK+rg2AAykvb3tEytbe0y1RzzMAzAGTd1nNaxnaWfqH2wtyVVve1OwiGoKzbclbL3L7KPKrAgmB7r6kJwQCQtZvPaBXaVbmHdSyTlW1AyJrNp7VK7Qmq+rgaB8JCkDWbTmkV2/E/tH2e8PsCXFUAAAAASUVORK5CYII=',
    }
  }
};
</script>