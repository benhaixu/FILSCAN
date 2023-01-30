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
  width: 120px;
  flex-shrink: 0;
}
.itemWidth1 img {
  width: 36px;
  height: 36px;
}
.itemWidth2 {
  width: 240px;
  flex-shrink: 0;
}
.itemWidth3 {
  width: 120px;
  flex-shrink: 0;
}
.itemWidth4 {
  width: 100px;
}
.itemWidthHead {
  background: rgba(51, 51, 51, 0.1);
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
.portBox1 {
  height: 100%;
}
.portBoxShow {
  width: 20px;
  height: 100%;
  cursor: pointer;
}
.listItem {
  background: white;
  border-bottom: 1px solid rgba(51, 51, 51, 0.04);
}
@import "../common/css/max.css";
</style>

<template>
  <div class="comApp">
    <div class="banner">
      <div class="headTitle">{{ htmlWordData.clientTitle }}</div>
      <div class="searchCom">
        <Input type="text" style="width:220px" :clearable="true" :placeholder="htmlWordData.clientInput" @on-clear="searchFun" v-model="searchData.context" @on-enter="searchFun()" />
      </div>
      <div class="tableBox tableOverFlow">
        <div class="tableHead">
          <div class="itemWidth1 tableItemCom">{{ htmlWordData.rank }}</div>
          <div class="itemWidth2 tableItemCom wordright">
            {{ htmlWordData.clientAdress }}
          </div>
          <div class="itemWidth2 tableItemCom wordright">
            <span>{{ htmlWordData.clientToNotroy }}</span>
            <div class="portBox">
              <img src="../../assets/statistics/icon／ascend order_sel@2x.png" alt="" v-if="selectPort === 2" />
              <img src="../../assets/statistics/icon／ascend order_nor@2x.png" alt="" v-else @click="portFun(2)" />
              <img src="../../assets/statistics/icon／dec order_sel@2x.png" alt="" v-if="selectPort === 1" />
              <img src="../../assets/statistics/icon／dec order_nor@2x.png" alt="" v-else @click="portFun(1)" />
            </div>
            <div class="portBox1">
              <img src="../../assets/statistics/icon／fold@2x.png" class="portBoxShow" alt="" v-if="openData.up1" @click="openFun(1)" />
              <img src="../../assets/statistics/icon／unfold@2x.png" class="portBoxShow" alt="" v-else @click="openFun(1)" />
            </div>
          </div>
          <div class="itemWidth3 itemWidthHead tableItemCom wordright" v-if="openData.up1">
            <span>{{ htmlWordData.clientToNotroyPlus }}</span>
            <div class="portBox">
              <img src="../../assets/statistics/icon／ascend order_sel@2x.png" alt="" v-if="selectPort === 4" />
              <img src="../../assets/statistics/icon／ascend order_nor@2x.png" alt="" v-else @click="portFun(4)" />
              <img src="../../assets/statistics/icon／dec order_sel@2x.png" alt="" v-if="selectPort === 3" />
              <img src="../../assets/statistics/icon／dec order_nor@2x.png" alt="" v-else @click="portFun(3)" />
            </div>
          </div>
          <div class="itemWidth3 itemWidthHead tableItemCom wordright" v-if="openData.up1">
            <span>{{ htmlWordData.clientToNotroyLND }}</span>
            <div class="portBox">
              <img src="../../assets/statistics/icon／ascend order_sel@2x.png" alt="" v-if="selectPort === 6" />
              <img src="../../assets/statistics/icon／ascend order_nor@2x.png" alt="" v-else @click="portFun(6)" />
              <img src="../../assets/statistics/icon／dec order_sel@2x.png" alt="" v-if="selectPort === 5" />
              <img src="../../assets/statistics/icon／dec order_nor@2x.png" alt="" v-else @click="portFun(5)" />
            </div>
          </div>
          <div class="itemWidth2 tableItemCom wordright">
            <span>{{ htmlWordData.clientToClient }}</span>
            <div class="portBox">
              <img src="../../assets/statistics/icon／ascend order_sel@2x.png" alt="" v-if="selectPort === 8" />
              <img src="../../assets/statistics/icon／ascend order_nor@2x.png" alt="" v-else @click="portFun(8)" />
              <img src="../../assets/statistics/icon／dec order_sel@2x.png" alt="" v-if="selectPort === 7" />
              <img src="../../assets/statistics/icon／dec order_nor@2x.png" alt="" v-else @click="portFun(7)" />
            </div>
            <div class="portBox1">
              <img src="../../assets/statistics/icon／fold@2x.png" class="portBoxShow" alt="" v-if="openData.up2" @click="openFun(2)" />
              <img src="../../assets/statistics/icon／unfold@2x.png" class="portBoxShow" alt="" v-else @click="openFun(2)" />
            </div>
          </div>
          <div class="itemWidth3 itemWidthHead tableItemCom wordright" v-if="openData.up2">
            <span>{{ htmlWordData.clientToClientPlus }}</span>
            <div class="portBox">
              <img src="../../assets/statistics/icon／ascend order_sel@2x.png" alt="" v-if="selectPort === 10" />
              <img src="../../assets/statistics/icon／ascend order_nor@2x.png" alt="" v-else @click="portFun(10)" />
              <img src="../../assets/statistics/icon／dec order_sel@2x.png" alt="" v-if="selectPort === 9" />
              <img src="../../assets/statistics/icon／dec order_nor@2x.png" alt="" v-else @click="portFun(9)" />
            </div>
          </div>
          <div class="itemWidth3 itemWidthHead tableItemCom wordright" v-if="openData.up2">
            <span>{{ htmlWordData.clientToClientLND }}</span>
            <div class="portBox">
              <img src="../../assets/statistics/icon／ascend order_sel@2x.png" alt="" v-if="selectPort === 12" />
              <img src="../../assets/statistics/icon／ascend order_nor@2x.png" alt="" v-else @click="portFun(12)" />
              <img src="../../assets/statistics/icon／dec order_sel@2x.png" alt="" v-if="selectPort === 11" />
              <img src="../../assets/statistics/icon／dec order_nor@2x.png" alt="" v-else @click="portFun(11)" />
            </div>
          </div>
          <div class="itemWidth2 tableItemCom wordright">
            <span>{{ htmlWordData.clientToUsedDC }}</span>
            <div class="portBox">
              <img src="../../assets/statistics/icon／ascend order_sel@2x.png" alt="" v-if="selectPort === 14" />
              <img src="../../assets/statistics/icon／ascend order_nor@2x.png" alt="" v-else @click="portFun(14)" />
              <img src="../../assets/statistics/icon／dec order_sel@2x.png" alt="" v-if="selectPort === 13" />
              <img src="../../assets/statistics/icon／dec order_nor@2x.png" alt="" v-else @click="portFun(13)" />
            </div>
          </div>
          <div class="itemWidth2 tableItemCom wordright">
            <span>{{ htmlWordData.clientDCRemain }}</span>
            <div class="portBox">
              <img src="../../assets/statistics/icon／ascend order_sel@2x.png" alt="" v-if="selectPort === 16" />
              <img src="../../assets/statistics/icon／ascend order_nor@2x.png" alt="" v-else @click="portFun(16)" />
              <img src="../../assets/statistics/icon／dec order_sel@2x.png" alt="" v-if="selectPort === 15" />
              <img src="../../assets/statistics/icon／dec order_nor@2x.png" alt="" v-else @click="portFun(15)" />
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
            <div class="itemWidth2 tableItemCom wordright">
              <Tooltip :content="item.client" theme="light" max-width="600" transfer placement="top">
                <span>{{ hideWordFun(item.client) }}</span>
              </Tooltip>
            </div>
            <div class="itemWidth2 tableItemCom wordright" style="padding-right:30px">
              {{ item.dataCapAssignedStr }}
            </div>
            <div class="itemWidth3 tableItemCom wordright" v-if="openData.up1" style="padding-right:30px">
              {{ item.dataCapPlusAssignedStr }}
            </div>
            <div class="itemWidth3 tableItemCom wordright" v-if="openData.up1" style="padding-right:30px">
              {{ item.dataCapLdnAssignedStr }}
            </div>
            <div class="itemWidth2 tableItemCom wordright" style="padding-right:30px">
              {{ item.dataCapReleasedStr }}
            </div>
            <div class="itemWidth3 tableItemCom wordright" v-if="openData.up2" style="padding-right:30px">
              {{ item.dataCapPlusReleasedStr }}
            </div>
            <div class="itemWidth3 tableItemCom wordright" v-if="openData.up2" style="padding-right:30px">
              {{ item.dataCapLdnReleasedStr }}
            </div>
            <div class="itemWidth2 tableItemCom wordright" style="padding-right:30px">
              {{ item.dataCapConsumeStr }}
            </div>
            <div class="itemWidth2 tableItemCom wordright" style="padding-right:30px">
              {{ item.dataCapNotConsumeStr }}
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
          select: true,
        },
        {
          menuName: "Miner",
          href: "minerPower",
          select: false,
        },
      ],
      htmlWordData: {},
      selectPort: 1,
      upDataDate: "",
      openData: {
        up1: false,
        up2: false,
      },
      portData: {
        num: 1,
      },
      searchData: {
        context: null,
        type: 0,
        port: 2,
      },
      tableData: {
        loading: false,
        total: 0,
        page: 1,
        pageSize: 10,
        list: [],
        sizeList: [10, 20, 30, 40, 50],
      },
    };
  },
  methods: {
    openFun(type) {
      if (type === 1) {
        this.openData.up1 = !this.openData.up1;
      } else if (type === 2) {
        this.openData.up2 = !this.openData.up2;
      }
    },
    toDetailFun(item) {
      this.$router.push({
        name: "clientDetail",
        query: {
          clientAddress: item.client,
          dataCapConsumeStr: item.dataCapConsumeStr,
          dataCapReleasedStr: item.dataCapReleasedStr,
          dataCapTotalStr: item.dataCapTotalStr,
          dataCapNotConsumeStr: item.dataCapNotConsumeStr,
        },
      });
    },
    portFun(type) {
      console.log(type);
      if (type === this.selectPort) {
        return;
      } else {
        this.tableData.page = 1;
        this.selectPort = type;
        this.tablelistFun(1);
      }
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
      let token = localStorage.token;
      let params = {};
      params = this.reqiue();
      params.current = page;
      params.pageSize = this.tableData.pageSize;
      this.$axios({
        method: "post",
        url: apis.dataCapClientPageListApi,
        data: params,
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }).then((res) => {
        if (res.data.code === 0) {
          this.upDataDate = res.data.data.dataUpdateTime;
          this.tableData.total = res.data.data.page.total;
          this.tableData.list = res.data.data.page.records;
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
        temp.client = this.searchData.context;
      }
      if (this.selectPort === 1) {
        temp.sortType = "3";
        temp.sort = "2";
      } else if (this.selectPort === 2) {
        temp.sortType = "3";
        temp.sort = "1";
      } else if (this.selectPort === 3) {
        temp.sortType = "5";
        temp.sort = "2";
      } else if (this.selectPort === 4) {
        temp.sortType = "5";
        temp.sort = "1";
      } else if (this.selectPort === 5) {
        temp.sortType = "4";
        temp.sort = "2";
      } else if (this.selectPort === 6) {
        temp.sortType = "4";
        temp.sort = "1";
      } else if (this.selectPort === 7) {
        temp.sortType = "6";
        temp.sort = "2";
      } else if (this.selectPort === 8) {
        temp.sortType = "6";
        temp.sort = "1";
      } else if (this.selectPort === 9) {
        temp.sortType = "8";
        temp.sort = "2";
      } else if (this.selectPort === 10) {
        temp.sortType = "8";
        temp.sort = "1";
      } else if (this.selectPort === 11) {
        temp.sortType = "7";
        temp.sort = "2";
      } else if (this.selectPort === 12) {
        temp.sortType = "7";
        temp.sort = "1";
      } else if (this.selectPort === 13) {
        temp.sortType = "0";
        temp.sort = "2";
      } else if (this.selectPort === 14) {
        temp.sortType = "0";
        temp.sort = "1";
      } else if (this.selectPort === 15) {
        temp.sortType = "1";
        temp.sort = "2";
      } else if (this.selectPort === 16) {
        temp.sortType = "1";
        temp.sort = "1";
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
