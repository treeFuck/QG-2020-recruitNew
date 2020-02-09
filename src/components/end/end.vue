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
@media only screen and (max-width: 1024px) and (min-width: 741px) {
  .name {
    top: 0.4rem;
    width: 100%;
    text-align: center;
  }
  .bgLogo {
    right: 50%;
    bottom: 1rem;
    margin-right: -2.5rem;
    width: 5rem;
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
    margin-right: -1.2rem;
    width: 2.4rem;
  }
  .introduce {
    top: 1.3rem;
    right: 5%;
    width: 90%;
  }
}
.end {
  //background-color: #A09DE5; 
  background: linear-gradient(to top, rgb(43, 139, 225), rgb(151, 196, 254));
  .bg {
    z-index: 0;
  }
}
</style>
<template>
    <div class="end page">
      <bg :floatIconUrl="floatIconUrl"></bg>
      <div class="name">后台</div>
      <img class="bgLogo" src="@/assets/后台@2x.png" />
      <div class="introduce">后台是一个与数据和信息打交道的方向，负责着各类数据的处理与传输。无论是网页端、移动端还是嵌入式端，都需要后台技术的支持。QG后台组基于Java语言，自成立以来致力于后台服务器的开发，成功为工作室多数项目提供了坚实的后台技术支持，慢慢成长为一支团结可靠的队伍。</div>
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
      floatIconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABECAYAAAAiL3M8AAAACXBIWXMAAAsSAAALEgHS3X78AAAEK0lEQVR42u2cS4/bVBiG34Qpk66Sf4D5BZN9NuFWCSEY0xVCVWNVgFKgjJFAqmBBWLCgqlqnMyRRVw4XcVFhUhBCQlXHzCT7/APcfzBZdTozOi8LX0gnTppk4tiuzytFVuw4jh+d7z3H3/lyMiSxTF27J1RBlAkUSRZJ5AmAdF8ABDEg0ReERdL66vUVCxEpswxA1+8LhYROQAORFy4Ikj6UE4BAeluCxANBmATMr9dX7KcG0I0dUSBhEKh4Nw/vxmcD5J8jBL4kYFx/c2U/0YBu7giVgPlYCC0GEAg8EIR243z4oZcN40sNSxgAtgHkQ/rdzwHY0X89riUOkGEJE8DGkizii407R2ZiANX/ESaAypI7msqVX8KDtDBAt6KB40P64OejUMJtISa9uUuV5LZnthgy5ZPbBZk0xNBxIfz3LzTfOmPFqgVt7rIAwEQ8ZFZ/PCrELcSMEHureXo3PTYhtrVLhcC/8MIl+hDzPvv87bfP2HFoQTriKS0uIaZJQOPCa49qjLxnxIve+eGwHHULKiPeihxQUQJKNqBi1IDyMQeUjxpQKjQXoG/2qEhAkyUBPQ269P2hEhWgckIYFaMCpCYEkLp0QK5BryUFkPbd6cJsnhZUS5AN5QF0LrYPC0sB1OiyjOjyzvNqDYB1wZwP0tQJs0aXBQA26YxQveSXd3bMEmYQpL/PPT4QhClI46dLq/ZCATW6VAB0AKz5AJIH6P/9AnVB1O68u7p/6hBrdqkC6CfImKfRBgD7/O1H6qkANbsMewo5agPfXm89MuYC1OzRxPKmkCNtTW80D8yZALlwKkiPKq81giGNAGr1aKQMjg/p1a0DYyKgVo9qSsJqbLid2zxQAwG1erGaQo5S5su3DgpBLShOU8hR927GY4BaPSop9Z2xfvSi8VAZbkG6ZDIifRiQJnmMSAOArNtzSe8J8KLyzYdqFslJn0ahchbxnyGNUkUJaApA0n8m+JCcen6CJCAJSAIKHdBAYhirQRZOQl4qWH0JaApAluQwVla2Wsp0pA8F+4/18dmO14uZkseIzOFu3pA8RmT4gKqljA2gLZn4qt/Xz9onB4q69CLHezBUA+UDqpYy+5CpVwDQ7n2U2w981HB7tHqaQ+vvK7nOxGexaimjp9SP2n99mNOneli9XMpoKYPU/vP9nDbT07wLKQ3hVv/9cm6s9z6xBK/ZpUpn0OTUJi6+BO8uAYtE/0QJXlEQZZLrIZTgeTWL2m/vrXYm3f+0NYoFd+BUWSCgNsnaZ+eesSdd+/M/jhUSNUFUoqhRnOlv4Y0uFRI6AI1Afg5AAxCmIIyrr2TtWeLg6t1jhYAuhHPtWFW5BmlrjyrcpbbgLLeVDwA0INEn0CdhffpStrMI0/hk+1gVRFnQWeZLiGFgPqCBcJb56guBzreVZ+fKWvwHV3Xl3ND2l28AAAAASUVORK5CYII=',
    }
  }
};
</script>