<template>
  <div class="app">
    <div class="banner">
      <div class="headTitle">{{ htmlWordData.notoryTitle }}</div>
      <div class="searchCom">
        <Input type="text" style="width:220px;" :clearable="true" :placeholder="htmlWordData.notoryInput" @on-clear="searchFun" v-model="searchData.context" @on-enter="searchFun()" />
      </div>
      <div class="tableBox tableOverFlow">
        <div class="tableHead">
          <div class="itemWidth1 tableItemCom">{{ htmlWordData.rank }}</div>
          <div class="itemWidth2 tableItemCom">
            {{ htmlWordData.notoryClientAddress }}
          </div>
          <div class="itemWidth2 tableItemCom wordright">
            <span>{{ htmlWordData.notoryDCNotroy }}</span>
            <div class="portBox">
              <img src="../../assets/statistics/icon／ascend order_sel@2x.png" alt="" v-if="selectPort === 2" />
              <img src="../../assets/statistics/icon／ascend order_nor@2x.png" alt="" v-else @click="portFun(2)" />
              <img src="../../assets/statistics/icon／dec order_sel@2x.png" alt="" v-if="selectPort === 1" />
              <img src="../../assets/statistics/icon／dec order_nor@2x.png" alt="" v-else @click="portFun(1)" />
            </div>
          </div>
          <!-- <div class="itemWidth2 tableItemCom wordright">
            <span>{{htmlWordData.notoryDCClient}}</span>
            <div class="portBox">
              <img src="../../assets/statistics/icon／ascend order_sel@2x.png" alt="" v-if="selectPort===4">
              <img src="../../assets/statistics/icon／ascend order_nor@2x.png" alt="" v-else @click="portFun(4)">
              <img src="../../assets/statistics/icon／dec order_sel@2x.png" alt="" v-if="selectPort===3">
              <img src="../../assets/statistics/icon／dec order_nor@2x.png" alt="" v-else @click="portFun(3)">
            </div>
          </div> -->
          <div class="itemWidth2 tableItemCom wordright">
            <span>{{ htmlWordData.notoryUserDC }}</span>
            <div class="portBox">
              <img src="../../assets/statistics/icon／ascend order_sel@2x.png" alt="" v-if="selectPort === 6" />
              <img src="../../assets/statistics/icon／ascend order_nor@2x.png" alt="" v-else @click="portFun(6)" />
              <img src="../../assets/statistics/icon／dec order_sel@2x.png" alt="" v-if="selectPort === 5" />
              <img src="../../assets/statistics/icon／dec order_nor@2x.png" alt="" v-else @click="portFun(5)" />
            </div>
          </div>
          <div class="itemWidth2 tableItemCom wordright">
            <span>{{ htmlWordData.notoryDCRemain }}</span>
            <div class="portBox">
              <img src="../../assets/statistics/icon／ascend order_sel@2x.png" alt="" v-if="selectPort === 8" />
              <img src="../../assets/statistics/icon／ascend order_nor@2x.png" alt="" v-else @click="portFun(8)" />
              <img src="../../assets/statistics/icon／dec order_sel@2x.png" alt="" v-if="selectPort === 7" />
              <img src="../../assets/statistics/icon／dec order_nor@2x.png" alt="" v-else @click="portFun(7)" />
            </div>
          </div>
          <div class="itemWidth3 tableItemCom wordright">
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
              <Tooltip :content="item.notaryAddress" theme="light" max-width="600" transfer placement="top">
                <span>{{ hideWordFun(item.notaryAddress) }}</span>
              </Tooltip>
            </div>
            <div class="itemWidth2 tableItemCom wordright" style="padding-right:30px">
              {{ item.notaryDatacapStr }}
            </div>
            <!-- <div class="itemWidth2 tableItemCom wordright" style="padding-right:30px">{{item.notaryDatacapReleaseStr}}</div> -->
            <div class="itemWidth2 tableItemCom wordright" style="padding-right:30px">
              {{ item.notaryDatacapUseStr }}
            </div>
            <div class="itemWidth2 tableItemCom wordright" style="padding-right:30px">
              {{ item.notaryDatacapNoUseStr }}
            </div>
            <div class="itemWidth3 tableItemCom wordright">
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
          select: true,
        },
        {
          menuName: "Client",
          href: "clientPower",
          select: false,
        },
        {
          menuName: "Miner",
          href: "minerPower",
          select: false,
        },
      ],
      htmlWordData: {},
      allList: [],
      selectPort: 1,
      upDataDate: "",
      searchData: {
        context: null,
        type: 0,
        port: 2,
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
    portFun(type) {
      if (type === this.selectPort) {
        return;
      } else {
        this.tableData.page = 1;
        this.selectPort = type;
        this.tablelistFun(1);
      }
    },
    toDetailFun(item) {
      this.$router.push({
        name: "notaryDetail",
        query: {
          clientAddress: item.notaryAddress,
          notaryDatacapStr: item.notaryDatacapStr,
          notaryDatacapReleaseStr: item.notaryDatacapReleaseStr,
          notaryDatacapUseStr: item.notaryDatacapUseStr,
          notaryDatacapNoUseStr: item.notaryDatacapNoUseStr,
        },
      });
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
    tablelistFun() {
      let token = localStorage.token;
      this.tableData.loading = true;
      let params = {};
      params = this.reqiue();
      this.$axios({
        method: "post",
        url: apis.fullDatacapProposeNotaryListApi,
        data: params,
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }).then((res) => {
        if (res.data.code === 0) {
          this.upDataDate = res.data.data.dataUpdateTime;
          res.data.data.list.forEach((element, index) => {
            element.rank = index + 1;
          });
          this.allList = res.data.data.list;
          this.tableData.total = res.data.data.list.length;
          this.tableData.list = this.allList.slice(0, 10);
          this.tableData.loading = false;
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
        temp.address = this.searchData.context;
      }
      if (this.selectPort === 1) {
        temp.sortType = "desc";
        temp.sort = "notaryDatacap";
      } else if (this.selectPort === 2) {
        temp.sortType = "asc";
        temp.sort = "notaryDatacap";
      } else if (this.selectPort === 3) {
        temp.sortType = "desc";
        temp.sort = "notaryDatacapRelease";
      } else if (this.selectPort === 4) {
        temp.sortType = "asc";
        temp.sort = "notaryDatacapRelease";
      } else if (this.selectPort === 5) {
        temp.sortType = "desc";
        temp.sort = "notaryDatacapUse";
      } else if (this.selectPort === 6) {
        temp.sortType = "asc";
        temp.sort = "notaryDatacapUse";
      } else if (this.selectPort === 7) {
        temp.sortType = "desc";
        temp.sort = "notaryDatacapNoUse";
      } else if (this.selectPort === 8) {
        temp.sortType = "asc";
        temp.sort = "notaryDatacapNoUse";
      }
      return temp;
    },
    headPageFun(value) {
      this.tableData.page = value;
      let index = (value - 1) * this.tableData.pageSize;
      let lastIndex = index + this.tableData.pageSize;
      this.tableData.list = this.allList.slice(index, lastIndex);
    },
    changeSizeFun(value) {
      this.tableData.pageSize = value;
      this.tableData.page = 1;
      let index = (this.tableData.page - 1) * this.tableData.pageSize;
      let lastIndex = index + this.tableData.pageSize;
      this.tableData.list = this.allList.slice(index, lastIndex);
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
<style scoped>
.app {
  width: 100%;
  background: #f2f2fa !important;
}
.w1460 {
  width: 1460px;
  margin: 0 auto;
  padding: 20px 0 100px;
}
.itemWidth1 {
  width: 120px;
  height: 100%;
}
.itemWidth1 img {
  width: 36px;
  height: 36px;
}
.itemWidth2 {
  width: 290px;
}
.itemWidth3 {
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
@import "../common/css/max.css";
</style>
