<style scoped>
.bannerBox {
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  padding-top: 0;
}
.bannerCom {
  background: white;
  padding: 0 20px;
  border-radius: 4px;
  position: relative;
  padding-bottom: 60px;
}
.tableBox {
  height: 540px;
  position: relative;
}
.itemWidth1 {
  width: 150px;
}
.itemWidth3 {
  width: 150px;
}
.itemWidth2 {
  width: 36px;
}
.itemWidth2 img {
  width: 20px;
  height: 20px;
}
.detailItemValue {
  margin-left: 10px;
  font-weight: 500;
  color: #333333;
  width: 205px;
}
.detailItemWidth {
  width: 230px;
}
.detailItemWidth1 {
  width: 170px;
}
.detailItemWidth2 {
  width: 200px;
}
.tableItemSelect {
  box-shadow: 0px 2px 15px 0px rgba(49, 56, 150, 0.1);
  border-radius: 4px;
  border: 1px solid #3644a2;
  background: #f5f5fa;
  color: #3644a2;
}
</style>

<template>
  <div class="detailApp">
    <headnav></headnav>
    <div class="detailHeadTop" @click="gobackNodeDetailFun">
      <img src="../../assets/nodeDetail/arrow／back@2x.png" alt="">
      <span>{{htmlWordData.notoryDetailTitle}}</span>
    </div>
    <div class="detailminer">
      <div class="detailminerHead">
        <span>Notary：{{propData.clientAddress}}</span>
      </div>
      <div class="detailminerFoot">
        <div class="detailItem">
          <span>{{htmlWordData.notoryDetailToNotroy}}</span>
          <span class="detailItemValue">{{propData.notaryDatacapStr}} </span>
        </div>
        <!-- <div class="detailItem">
          <span>{{htmlWordData.notoryDetailToClient}}</span>
          <span class="detailItemValue">{{propData.notaryDatacapReleaseStr}}</span>
        </div> -->
        <div class="detailItem">
          <span>{{htmlWordData.notoryDetailToUsed}}</span>
          <span class="detailItemValue">{{propData.notaryDatacapUseStr}}</span>
        </div>
        <div class="detailItem">
          <span>{{htmlWordData.notoryDetailToRemain}}</span>
          <span class="detailItemValue">{{propData.notaryDatacapNoUseStr}}</span>
        </div>
      </div>
    </div>
    <div class="bannerBox">
      <div class="bannerCom bannerComLeft">
        <div class="headTitle">{{htmlWordData.notoryDetailUsedList}}</div>
        <div class="searchCom">
          <Input type="text" :clearable="true" :placeholder="htmlWordData.notoryDetailAddress" suffix="ios-search" style="width:220px;" v-model="searchData.searchKey" @on-clear="searchFun"
            @keyup.enter.native="searchFun($event)" />
        </div>
        <div class="tableBox">
          <div class="tableHead">
            <div class="itemWidth1 tableItemCom">{{htmlWordData.notoryDetailClient}}</div>
            <div class="itemWidth3 tableItemCom wordright">{{htmlWordData.notoryDetailDataCap}}</div>
            <div class="itemWidth3 tableItemCom wordright">{{htmlWordData.notoryDetailDealnumbers}}</div>
            <div class="itemWidth2 tableItemCom"></div>
          </div>
          <div v-if="tableData.total>0&&!tableData.loading">
            <div class="tableItem" :class="{tableItemSelect:item.select}" v-for="(item,index) in tableData.list" :key="index" @click="choooseFun(item)">
              <div class="itemWidth1 tableItemCom">
                <Tooltip :content="item.client" theme="light" max-width="600" transfer placement="top">
                  <div>{{hideWordFun(item.client)}}</div>
                </Tooltip>
              </div>
              <div class="itemWidth3 tableItemCom wordright">{{item.dataCapStr}}</div>
              <div class="itemWidth3 tableItemCom wordright">{{item.count}}</div>
              <div class="itemWidth2 tableItemCom">
                <img src="../../assets/nodeDetail/icon_arow_blue_r@2x.png" alt="" v-if="item.select">
              </div>
            </div>
          </div>
          <div v-else-if="tableData.total===0&&!tableData.loading" class="kongClass">
            <img src="../../assets/nodeDetail/illustration／empty@2x.png" alt="">
            <span>{{htmlWordData.noData}}</span>
          </div>
          <div v-else class="loadingBox" style="top:300px">
            <img src="../../assets/common/loading@2x.png" alt="" class="demo-spin-icon-load" v-show="tableData.loading">
            <span v-show="tableData.loading">{{htmlWordData.loading}}</span>
          </div>
        </div>
        <div class="pageOneStyle" v-if="tableData.total>0">
          <Page :total="tableData.total" :current="tableData.page" :page-size="tableData.pageSize" size="small" @on-change="headPageFun" />
        </div>
      </div>
      <div class="bannerCom bannerComRight">
        <div class="headTitle">{{htmlWordData.notoryDetailMassageTitle}}</div>
        <div class="searchCom">
          <DatePicker :value="searchData.timeList" @on-change="searchDetailTimeFun" format="yyyy-MM-dd" type="daterange" split-panels placement="bottom-end" :placeholder="htmlWordData.timeDate" style="width: 220px;">
          </DatePicker>
        </div>
        <div class="tableBox tableOverFlow">
          <div class="tableHead">
            <div class="detailItemWidth tableItemCom">{{htmlWordData.notoryDetailMassageID}}</div>
            <div class="detailItemWidth tableItemCom">{{htmlWordData.notoryDetailMassageClient}}</div>
            <div class="detailItemWidth1 tableItemCom wordright">{{htmlWordData.notoryDetailMassageDataCap}}</div>
            <div class="detailItemWidth2 tableItemCom wordright">{{htmlWordData.notoryDetailMassageTime}}</div>
          </div>
          <div v-if="detailData.total>0&&!detailData.loading">
            <div class="tableItem" v-for="(item,index) in detailData.list" :key="index">
              <div class="detailItemWidth tableItemCom">
                <Tooltip :content="item.messageId" theme="light" max-width="600" transfer placement="top">
                  <div>{{hideWordFun(item.messageId)}}</div>
                </Tooltip>
              </div>
              <div class="detailItemWidth tableItemCom">
                <Tooltip :content="item.client" theme="light" max-width="600" transfer placement="top">
                  <div>{{hideWordFun(item.client)}}</div>
                </Tooltip>
              </div>
              <div class="detailItemWidth1 tableItemCom wordright">{{item.dataCapStr}}</div>
              <div class="detailItemWidth2 tableItemCom wordright">{{item.blockTime}}</div>
            </div>
          </div>
          <div v-else-if="detailData.total===0&&!detailData.loading" class="kongClass">
            <img src="../../assets/nodeDetail/illustration／empty@2x.png" alt="">
            <span>{{htmlWordData.noData}}</span>
          </div>
          <div v-else class="loadingBox" style="top:300px">
            <img src="../../assets/common/loading@2x.png" alt="" class="demo-spin-icon-load">
            <span>{{htmlWordData.loading}}</span>
          </div>
        </div>
        <div class="pageOneStyle" v-if="detailData.total>0">
          <Page :total="detailData.total" :current="detailData.page" :page-size="detailData.pageSize" size="small" @on-change="detailHeadPageFun" />
        </div>
      </div>
    </div>
    <myBottom></myBottom>
  </div>
</template>
<script>
import apis from "../../common/apis"
import headnav from "@/components/head-nav";
import myBottom from "@/components/myBottom";
export default {
  data() {
    return {
      htmlWordData: {},
      selectMinerAddress: null,
      searchData: {
        searchKey: null,
        timeList: [],
        starTime: null,
        endTime: null
      },
      propData: {
        clientAddress: null,
        dataCapConsumeStr: null,
        dataCapNotConsumeStr: null,
        dataCapTotalStr: null
      },
      tableData: {
        total: 0,
        page: 1,
        pageSize: 10,
        list: [],
        loading: false
      },
      detailData: {
        total: 0,
        page: 1,
        pageSize: 11,
        list: [],
        loading: false
      }
    }
  },
  components: {
    headnav, myBottom
  },
  methods: {
    choooseFun(item) {
      if (item.select) {
        return
      }
      this.tableData.list.forEach(element => {
        element.select = false
      })
      item.select = true;
      this.selectMinerAddress = item.client;
      this.detialListFun(1)
    },
    searchDetailTimeFun(value) {
      this.searchData.timeList = value;
      this.detialListFun(1)
    },
    hideWordFun(str) {
      if (str) {
        if (str.length > 15) {
          let str1 = str.slice(0, 8);
          let str2 = str.slice(str.length - 8, str.length)
          return str1 + "..." + str2
        } else {
          return str
        }
      } else {
        return ""
      }
    },
    gobackNodeDetailFun() {
      this.$router.go(-1)
    },
    searchFun() {
      this.tablelistFun(1);
    },
    tablelistFun(page) {
      this.tableData.loading = true;
      let token = localStorage.token;
      let params = {};
      params.address = this.propData.clientAddress;
      params.current = page;
      params.pageSize = this.tableData.pageSize;
      if (this.searchData.searchKey) {
        params.clientAddress = this.searchData.searchKey
      }
      this.$axios({
        method: 'post',
        url: apis.fullDatacapProposeNotaryDetailListApi,
        data: params,
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
      }).then(res => {
        if (res.data.code === 0) {
          if (this.tableData.page === 1 && !this.searchData.searchKey) {
            if (localStorage.lanSelctEN === '1') {
              res.data.data.vo.client = "全部"
            } else {
              res.data.data.vo.client = "all"
            }
            res.data.data.page.records.unshift(res.data.data.vo)
          }
          res.data.data.page.records.forEach((element, index) => {
            if (index === 0 && this.tableData.page === 1) {
              element.select = true;
              this.selectMinerAddress = element.minerAddress;
              this.detialListFun(1)
            } else {
              element.select = false;
            }
          });
          this.tableData.total = res.data.data.page.total;
          this.tableData.list = res.data.data.page.records;
          this.tableData.loading = false;
        } else {
          this.tableData.loading = false;
          this.$Message.error({
            content: res.data.msg,
            background: true,
            duration: 3
          });
        }
      })
    },
    detialListFun(page) {
      this.detailData.loading = true;
      let token = localStorage.token;
      let params = {};
      params = this.reqiue();
      if (this.selectMinerAddress && this.selectMinerAddress != '全部' && this.selectMinerAddress != 'all') {
        params.clientAddress = this.selectMinerAddress;
      }
      params.current = page;
      params.pageSize = this.detailData.pageSize;
      params.address = this.propData.clientAddress;
      this.$axios({
        method: 'post',
        url: apis.fullDatacapProposeClientListApi,
        data: params,
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
      }).then(res => {
        if (res.data.code === 0) {
          this.detailData.total = res.data.data.page.total;
          this.detailData.list = res.data.data.page.records;
          this.detailData.loading = false;
        } else {
          this.detailData.loading = false;
          this.$Message.error({
            content: res.data.msg,
            background: true,
            duration: 3
          });
        }
      })
    },
    reqiue() {
      let temp = {};
      if (this.searchData.timeList.length > 0 && this.searchData.timeList[0].length > 2) {
        temp.startDate = this.searchData.timeList[0]
        temp.endDate = this.searchData.timeList[1]
      }
      return temp
    },
    headPageFun(value) {
      this.tableData.page = value;
      this.tablelistFun(value)
    },
    detailHeadPageFun(value) {
      this.detailData.page = value;
      this.detialListFun(value)
    }
  },
  created() {
    if (localStorage.lanSelctEN === "1") {
      this.htmlWordData = this.$store.state.chineseData;
    } else {
      this.htmlWordData = this.$store.state.englishData;
    }
    this.propData.clientAddress = this.$route.query.clientAddress;
    this.propData.notaryDatacapStr = this.$route.query.notaryDatacapStr;
    this.propData.notaryDatacapReleaseStr = this.$route.query.notaryDatacapReleaseStr;
    this.propData.notaryDatacapUseStr = this.$route.query.notaryDatacapUseStr;
    this.propData.notaryDatacapNoUseStr = this.$route.query.notaryDatacapNoUseStr;
    this.tablelistFun(1);
  },
}
</script>
