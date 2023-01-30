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
        <div class="headItem" :class="{chooseClass:item.select}" v-for="(item,index) in tabList" :key="index" @click="changeTabFun(item)">{{item.name}}</div>
      </div>
    </div>
    <div class="contentBanner">
      <NetworkPower v-if="tabSelectNum===1"></NetworkPower>
      <NotaryPower v-if="tabSelectNum===2"></NotaryPower>
      <ClientPower v-if="tabSelectNum===3"></ClientPower>
      <!-- <MinerPower v-if="tabSelectNum===4"></MinerPower> -->
    </div>
    <myBottom></myBottom>
  </div>
</template>
<script>
import headnav from "@/components/head-nav";
import myBottom from "@/components/myBottom";
import NetworkPower from "./networkPower"
import NotaryPower from "./notaryPower"
import ClientPower from "./clientPower"
import MinerPower from "./minerPower"

export default {
  data() {
    return {
      tabList: [
        {
          name: "DataCap Overview",
          select: false,
          id: 1
        },
        {
          name: "Notary",
          select: false,
          id: 2
        },
        {
          name: "Client",
          select: false,
          id: 3
        },
        // {
        //   name: "Miner",
        //   select: false,
        //   id: 4
        // },
      ],
      tabSelectNum: 1,
      selectNode: null,
      selectName: null
    }
  },
  components: {
    NetworkPower, NotaryPower, ClientPower, MinerPower, headnav, myBottom
  },
  methods: {
    //切换tab页
    changeTabFun(item) {
      this.tabList.forEach(element => {
        element.select = false
      })
      item.select = true;
      this.tabSelectNum = item.id;
      localStorage.node_statistics_index = item.id;
    }
  },
  created() {
    this.selectNode = this.$route.query.minerAddress;
    this.selectName = this.$route.query.selectName;
    if (localStorage.node_statistics_index) {
      this.tabSelectNum = parseInt(localStorage.node_statistics_index);
      this.tabList.forEach(element => {
        element.select = false;
        if (element.id === this.tabSelectNum) {
          element.select = true;
        }
      })
    }
  },
  // beforeRouteLeave(to, form, next) {
  //   window.localStorage.removeItem('node_statistics_index')
  //   next()
  // }
}
</script>
