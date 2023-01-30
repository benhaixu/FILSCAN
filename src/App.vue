<template>
  <div class="metaWebApp" :style="appStyle">
    <router-view></router-view>
  </div>
</template>

<script>
import headnav from "@/components/head-nav";
import myBottom from "@/components/myBottom";
export default {
  components: {
    headnav,
    myBottom
  },
  data() {
    return {
      appStyle: {
        minHeight: "1000px"
      }
    };
  },
};
</script>
<style>
@import "./common/css/max.css";
html,
body {
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.bannerComRight {
  width: 870px;
  position: relative;
}
.bannerComLeft {
  width: 570;
}
.detailApp {
  width: 1460px;
  margin: 0 auto;
  padding: 100px 0;
}
.detailHeadTop {
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.detailHeadTop img {
  width: 19px;
  height: 20px;
  margin-right: 7px;
  cursor: pointer;
}
.detailminer {
  background: white;
  border-radius: 6px;
}
.detailminerHead {
  background: linear-gradient(90deg, #3644a2 0%, #3f4fbd 100%);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  border-radius: 6px;
  padding: 0 20px;
  font-size: 16px;
  font-weight: 600;
  line-height: 50px;
}
.detailminerFoot {
  width: 100%;
  height: 53px;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: rgba(51, 51, 51, 0.5);
  padding-left: 20px;
}
.detailItem {
  margin-right: 10px;
  display: flex;
  align-items: center;
}
.metaWebApp {
  background: #f2f2fa;
  position: relative;
}
.page {
  min-width: 1440px;
  background-color: #fff;
  height: 100%;
}
.search_subtitle {
  font-size: 20px;
  line-height: 26px;
  margin-top: 15px;
}
.index_title {
  margin-bottom: 39px;
  line-height: 50px;
  font-weight: bold;
}
.hd {
  width: 16px;
  height: 16px;
  background-color: #f4cc2d;
  border-radius: 50px;
  position: absolute;
  z-index: 10;
  left: 335px;
}
.hd2 {
  width: 16px;
  height: 16px;
  background-color: #f4cc2d;
  border-radius: 50px;
  position: absolute;
  z-index: 10;
  left: 545px;
  top: 75px;
  opacity: 0.2;
}
.lv {
  background-color: #15cc79;
  width: 12px;
  height: 12px;
  border-radius: 50px;
  position: absolute;
  z-index: 10;
  left: 1527px;
  top: 80px;
}
.lan {
  background-color: #ef190f;
  width: 16px;
  height: 16px;
  border-radius: 50px;
  position: absolute;
  z-index: 10;
  left: 1293px;
  top: 0px;
  opacity: 0.3;
  z-index: 99;
}
/* // @keyframes d-pro1 {
//   0% {
//     background-image: url(./assets/1.png);
//   }
//   25% {
//     background-image: url(./assets/2.png);
//   }
//     50% {
//     background-image: url(./assets/1.png);
//   }
//       75% {
//     background-image: url(./assets/3.png);
//   }
//   100% {
//     background-image: url(./assets/1.png);
//   }
// } */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.serch {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  height: 40px;
}
</style>

<style lang="css">
.headContent {
  display: flex;
  align-items: center;
}
.headItem {
  height: 32px;
  background: rgba(43, 62, 189, 0.05);
  border-radius: 6px;
  line-height: 32px;
  text-align: center;
  padding: 0 10px;
  font-size: 13px;
  font-weight: 500;
  color: rgba(51, 51, 51, 0.8);
  margin-right: 40px;
  cursor: pointer;
}
.chooseClass {
  background: rgba(43, 62, 189, 0.05);
  color: #3644a2;
}
.controls {
  position: relative;
  z-index: 2;
}

.controls__label {
  display: block;
  font-family: Menlo;
  font-weight: bold;
  margin-bottom: 10px;
}

.controls__slider {
  width: 200px;
}

.circle {
  /* -webkit-animation: grow 5s forwards,  fade 3s calc(2s)  forwards; */
  /* animation: grow 5s forwards,  fade 3s calc(2s)  forwards; */

  background: #81ecec;
  border-radius: 100%;
  height: 2px;
  left: 20vw;
  position: absolute;
  top: 20vh;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  width: 2px;
  /*   -webkit-animation: grow 3s forwards, fade 1s calc(2s) forwards;
  animation: grow 3s forwards, fade 1s calc(2s) forwards; */
  -webkit-animation: grow 5s forwards, fade 3s calc(2s) forwards;
  animation: grow 5s forwards, fade 3s calc(2s) forwards;
}

@-webkit-keyframes grow {
  0% {
    -webkit-transform: translateZ(0) scale(0);
    transform: translateZ(0) scale(0);
  }

  100% {
    -webkit-transform: translateZ(0) scale(10);
    transform: translateZ(0) scale(10);
  }
}

@keyframes grow {
  0% {
    -webkit-transform: translateZ(0) scale(0);
    transform: translateZ(0) scale(0);
  }

  100% {
    -webkit-transform: translateZ(0) scale(10);
    transform: translateZ(0) scale(10);
  }
}

@-webkit-keyframes fade {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes fade {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes move_wave {
  0% {
    transform: translateX(0) translateZ(0) scaleY(1);
  }
  50% {
    transform: translateX(-25%) translateZ(0) scaleY(0.55);
  }
  100% {
    transform: translateX(-50%) translateZ(0) scaleY(1);
  }
}
.waveWrapper {
  position: absolute;
  width: 100%;
  overflow: hidden;
  height: 130px;
  bottom: -1px;
  top: 0;
  z-index: 2;
}
.waveWrapperInner {
  position: absolute;
  width: 100%;
  overflow: hidden;
  height: 130px;
  bottom: -1px;
  top: 0;
  /*background-image: linear-gradient(to top, #86377b 20%, #27273c 80%);*/
}
.bgTop {
  z-index: 15;
  opacity: 0.5;
}
.bgMiddle {
  z-index: 10;
  opacity: 0.75;
}
.bgBottom {
  z-index: 99999;
}
.wave {
  position: absolute;
  left: 0;
  width: 200%;
  height: 100%;
  background-repeat: repeat no-repeat;
  background-position: 0 bottom;
  transform-origin: center bottom;
  background-image: url("./assets/bolang.png");
}
.waveTop {
  background-size: 50% 100px;
}
.waveAnimation .waveTop {
  animation: move-wave 3s;
  -webkit-animation: move-wave 3s;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}
.waveMiddle {
  background-size: 50% 120px;
}
.waveAnimation .waveMiddle {
  animation: move_wave 10s linear infinite;
}
.waveBottom {
  background-size: 50% 100px;
}
.waveAnimation .waveBottom {
  animation: move_wave 30s linear infinite;
}
</style>
