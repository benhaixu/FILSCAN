<style scoped>
.comApp {
  width: 100%;
  background: #f2f2fa !important;
}
.w1460 {
  width: 1460px;
  margin: 0 auto;
  padding: 20px 0 100px;
}
.itemWidth1 {
  width: 140px;
}
.itemWidth1 img {
  width: 36px;
  height: 36px;
}
.itemWidth2 {
  width: 260px;
}
.itemWidth3 {
  width: 400px;
}
.itemWidth4 {
  width: 100px;
}
.portBox {
  display: flex;
  flex-direction: column;
  margin-left: 2px;
}
.portBox img {
  width: 20px;
  height: 10px;
  cursor: pointer;
}
.itemWidth1Div {
  width: 36px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
<template>
  <div class="comApp">
    <div class="banner">
      <div class="headTitle">{{ htmlWordData.minerTitle }}</div>
      <div class="searchCom">
        <Input type="text" style="width:220px" :clearable="true" :placeholder="htmlWordData.minerInput" @on-clear="searchFun" v-model="searchData.context" @on-enter="searchFun()" />
      </div>
      <div class="tableBox">
        <div class="tableHead">
          <div class="itemWidth1 tableItemCom">{{ htmlWordData.rank }}</div>
          <div class="itemWidth2 tableItemCom" style="justify-content: flex-start;">
            {{ htmlWordData.minerAddress }}
          </div>
          <div class="itemWidth2 tableItemCom" style="justify-content: flex-start;">
            {{ htmlWordData.minerClientAddress }}
          </div>
          <div class="itemWidth2 tableItemCom" style="justify-content: flex-start;">
            {{ htmlWordData.minerAdujusted }}
          </div>
          <div class="itemWidth3 tableItemCom wordright">
            <span>{{ htmlWordData.minerSealedDC }}</span>
            <div class="portBox">
              <img src="../../assets/statistics/icon／ascend order_sel@2x.png" alt="" v-if="portData.up" @click="upTableFun()" />
              <img src="../../assets/statistics/icon／ascend order_nor@2x.png" alt="" v-else @click="upTableFun()" />
              <img src="../../assets/statistics/icon／dec order_sel@2x.png" alt="" v-if="portData.down" @click="downTableFun()" />
              <img src="../../assets/statistics/icon／dec order_nor@2x.png" alt="" v-else @click="downTableFun()" />
            </div>
          </div>
          <div class="itemWidth4 tableItemCom wordright">
            {{ htmlWordData.action }}
          </div>
        </div>
        <div v-if="tableData.total > 0">
          <div class="tableItem" v-for="(item, index) in tableData.list" :key="index">
            <div class="itemWidth1 tableItemCom">
              <img src="../../assets/statistics/icon／top1@2x.png" alt="" v-if="item.rank === 1" />
              <img src="../../assets/statistics/icon／top2@2x.png" alt="" v-else-if="item.rank === 2" />
              <img src="../../assets/statistics/icon／top3@2x.png" alt="" v-else-if="item.rank === 3" />
              <span v-else class="itemWidth1Div">{{ item.rank }}</span>
            </div>
            <div class="itemWidth2 tableItemCom">
              <Tooltip :content="item.minerAddress" theme="light" max-width="600" transfer placement="top">
                <span>{{ hideWordFun(item.minerAddress) }}</span>
              </Tooltip>
            </div>
            <div class="itemWidth2 tableItemCom">
              {{ item.clientCount }}
            </div>
            <div class="itemWidth2 tableItemCom">
              {{ item.minerAdjustedPowerStr }}
            </div>
            <div class="itemWidth3 tableItemCom wordright">
              {{ item.dataCap }}
            </div>
            <div class="itemWidth4 tableItemCom wordright">
              <div class="actionButton" @click="toDetailFun(item)">
                {{ htmlWordData.check }}
              </div>
            </div>
          </div>
        </div>
        <div v-else class="kongClass">
          <img src="../../assets/nodeDetail/illustration／empty@2x.png" alt="" v-show="!tableData.loading" />
          <span v-show="!tableData.loading">{{ htmlWordData.noData }}</span>
        </div>
        <div class="loadingBox">
          <img src="../../assets/common/loading@2x.png" alt="" class="demo-spin-icon-load" v-show="tableData.loading" />
          <span v-show="tableData.loading">{{ htmlWordData.loading }}</span>
        </div>
      </div>
      <div class="pageStyle">
        <span class="info">
          <span v-if="upDataDate && !tableData.loading">{{ htmlWordData.upTime }}{{ upDataDate }}</span>
        </span>
        <Page v-if="tableData.total > 0" :total="tableData.total" :current="tableData.page" :page-size="tableData.pageSize" size="small" @on-change="headPageFun" @on-page-size-change="changeSizeFun" />
      </div>
    </div>
  </div>
</template>
<script>
import apis from "../../common/apis";
export default {
  data() {
    return {
      menuList: [
        {
          menuName: "DataCap Overview",
          href: "networkPower",
          select: false,
        },
        {
          menuName: "Notary",
          href: "notaryPower",
          select: false,
        },
        {
          menuName: "Client",
          href: "clientPower",
          select: false,
        },
        {
          menuName: "Miner",
          href: "minerPower",
          select: true,
        },
      ],
      htmlWordData: {},
      upDataDate: "",
      portData: {
        up: false,
        down: true,
      },
      searchData: {
        context: null,
        type: 2,
      },
      tableData: {
        total: 0,
        page: 1,
        pageSize: 10,
        list: [],
        sizeList: [10, 20, 30, 40, 50],
        loading: false,
      },
    };
  },
  methods: {
    toDetailFun(item) {
      this.$router.push({
        name: "minerDetail",
        query: {
          minerAddress: item.minerAddress,
          dataCap: item.dataCap,
        },
      });
    },
    upTableFun() {
      this.tableData.page = 1;
      if (this.portData.up) {
        return;
      } else {
        this.portData.up = !this.portData.up;
        this.portData.down = false;
      }
      this.tablelistFun(1);
    },
    downTableFun() {
      this.tableData.page = 1;
      if (this.portData.down) {
        return;
      } else {
        this.portData.down = !this.portData.down;
        this.portData.up = false;
      }
      this.tablelistFun(1);
    },
    hideWordFun(str) {
      if (str) {
        if (str.length > 15) {
          let str1 = str.slice(0, 8);
          let str2 = str.slice(str.length - 8, str.length);
          return str1 + "..." + str2;
        } else {
          return str;
        }
      } else {
        return "";
      }
    },
    searchFun() {
      this.tablelistFun(1);
    },
    tablelistFun(page) {
      this.tableData.loading = true;
      this.tableData.total = 0;
      this.tableData.list = [];
      this.upDataDate = null;
      let token = localStorage.token;
      let params = {};
      params = this.reqiue();
      params.current = page;
      params.pageSize = this.tableData.pageSize;
      this.$axios({
        method: "post",
        url: apis.dataCapMinerPageListApi,
        data: params,
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }).then((res) => {
        if (res.data.code === 0) {
          this.tableData.loading = false;
          this.upDataDate = res.data.data.dataUpdateTime;
          this.tableData.total = res.data.data.page.total;
          this.tableData.list = res.data.data.page.records;
        } else {
          this.tableData.loading = false;
          this.$Message.error({
            content: res.data.msg,
            background: true,
            duration: 3,
          });
        }
      });
    },
    reqiue() {
      let temp = {};
      if (this.searchData.context) {
        temp.minerAddress = this.searchData.context;
      }
      if (this.portData.up) {
        temp.sort = 1;
      }
      if (this.portData.down) {
        temp.sort = 0;
      }
      return temp;
    },
    headPageFun(value) {
      this.tableData.page = value;
      this.tablelistFun(value);
    },
    changeSizeFun(value) {
      this.tableData.pageSize = value;
      this.tablelistFun(1);
    },
  },
  created() {
    if (localStorage.lanSelctEN === "1") {
      this.htmlWordData = this.$store.state.chineseData;
    } else {
      this.htmlWordData = this.$store.state.englishData;
    }
    this.tablelistFun(1);
  },
};
</script>
