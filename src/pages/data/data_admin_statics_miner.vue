<style scoped>
.datacap {
  width: 1460px;
  margin: 0 auto;
  padding: 100px 0 0 0;
}
.head {
  height: 70px;
  font-size: 18px;
  font-weight: 600;
  color: #333333;
  display: flex;
  align-items: center;
}
.contentBanner {
  margin-top: 10px;
}
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
</style>

<template>
  <div class="datacap">
    <headnav></headnav>
    <div class="tab">
      <div class="headContent">
        <div class="headItem chooseClass">Miner</div>
      </div>
    </div>
    <div class="contentBanner">
      <MinerPower></MinerPower>
    </div>
    <myBottom></myBottom>
  </div>
</template>
<script>
import headnav from "@/components/head-nav";
import myBottom from "@/components/myBottom";
import MinerPower from "./minerPower"
export default {
  data() {
    return {
    }
  },
  components: {
    MinerPower, headnav, myBottom
  },
  methods: {
  },
}
</script>
