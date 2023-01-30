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
  height: 640px;
  position: relative;
}
.itemWidth1 {
  width: 150px;
  height: 100%;
}
.itemWidth2 {
  width: 110px;
}
.itemWidth3 {
  width: 110px;
}
.itemWidth4 {
  width: 36px;
  justify-content: center;
}
.itemWidth4 img {
  width: 20px;
  height: 20px;
}
.detailItemValue {
  margin-left: 10px;
  font-weight: 500;
  color: #333333;
  width: 205px;
}
.searchBox {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.detailItemWidth {
  width: 100px;
  justify-content: flex-end;
}
.detailItemConWidth {
  width: 100px;
  word-break: break-all;
  justify-content: flex-end;
}
.searchBoxRight {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #9a9a9a;
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
      <span>{{htmlWordData.clientDetailTitle}}</span>
    </div>
    <div class="detailminer">
      <div class="detailminerHead">
        <span>Client：{{propData.clientAddress}}</span>
      </div>
      <div class="detailminerFoot">
        <div class="detailItem">
          <span>{{htmlWordData.clientDetailToNotroy}}</span>
          <span class="detailItemValue">{{propData.dataCapConsumeStr}} </span>
        </div>
        <div class="detailItem">
          <span>{{htmlWordData.clientDetailToClient}}</span>
          <span class="detailItemValue">{{propData.dataCapReleasedStr}}</span>
        </div>
        <div class="detailItem">
          <span>{{htmlWordData.clientDetailToUsedDC}}</span>
          <span class="detailItemValue">{{propData.dataCapTotalStr}}</span>
        </div>
        <div class="detailItem">
          <span>{{htmlWordData.clientDetailToDCRemain}}</span>
          <span class="detailItemValue">{{propData.dataCapNotConsumeStr}}</span>
        </div>
      </div>
    </div>
    <div class="bannerBox">
      <div class="bannerCom bannerComLeft">
        <div class="headTitle">{{htmlWordData.clientDetailUserList}}</div>
        <div class="searchCom">
          <Input type="text" :clearable="true" :placeholder="htmlWordData.clientDetailInput" suffix="ios-search" style="width:220px;" v-model="searchData.searchKey" @on-clear="searchFun"
            @keyup.enter.native="searchFun($event)" />
        </div>
        <div class="tableBox">
          <div class="tableHead">
            <div class="itemWidth1 tableItemCom">{{htmlWordData.clientDetailSPID}}</div>
            <div class="itemWidth2 tableItemCom">{{htmlWordData.clientDetailDataCap}}</div>
            <div class="itemWidth3 tableItemCom wordright">{{htmlWordData.clientDetailDeal}}</div>
            <div class="itemWidth3 tableItemCom wordright">{{htmlWordData.clientDetailFail}}</div>
            <div class="itemWidth4 tableItemCom"></div>
          </div>
          <div v-if="tableData.total>0&&!tableData.loading">
            <div class="tableItem" :class="{tableItemSelect:item.select}" v-for="(item,index) in tableData.list" :key="index" @click="choooseFun(item)">
              <div class="itemWidth1 tableItemCom">
                <Tooltip :content="item.minerAddress" theme="light" max-width="600" transfer placement="top">
                  <div>{{hideWordFun(item.minerAddress)}}</div>
                </Tooltip>
              </div>
              <div class="itemWidth2 tableItemCom">{{item.dataCap}}</div>
              <div class="itemWidth3 tableItemCom wordright">{{item.totalDeal}}</div>
              <div class="itemWidth3 tableItemCom wordright">{{item.failDeal}}</div>
              <div class="itemWidth4 tableItemCom">
                <img src="../../assets/nodeDetail/icon_arow_blue_r@2x.png" alt="" v-if="item.select">
              </div>
            </div>
          </div>
          <div v-else-if="tableData.total===0&&!tableData.loading" class="kongClass">
            <img src="../../assets/nodeDetail/illustration／empty@2x.png" alt="">
            <span>{{htmlWordData.noData}}</span>
          </div>
          <div v-else class="loadingBox">
            <img src="../../assets/common/loading@2x.png" alt="" class="demo-spin-icon-load">
            <span>{{htmlWordData.loading}}</span>
          </div>
        </div>
        <div class="pageOneStyle" v-if="tableData.total>0">
          <Page :total="tableData.total" :current="tableData.page" :page-size="tableData.pageSize" size="small" @on-change="headPageFun" />
        </div>
      </div>
      <div class="bannerCom bannerComRight">
        <div class="headTitle">{{htmlWordData.clientDetailDealTitle}}</div>
        <div class="searchCom">
          <DatePicker :value="searchData.timeList" @on-change="searchDetailTimeFun" format="yyyy-MM-dd" type="daterange" split-panels placement="bottom-end" :placeholder="htmlWordData.timeDate" style="width:220px;">
          </DatePicker>
          <div class="searchBoxRight">
            <span>{{htmlWordData.status}}</span>
            <Select v-model="searchData.dealStatus" style="width:220px;margin-left:8px" placeholder="选择状态" @on-change="searchDetailFun">
              <Option v-for="item in searchData.dealStatusList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </div>
        </div>
        <div class="tableBox tableOverFlow">
          <div class="tableHead">
            <div class="detailItemWidth tableItemCom">{{htmlWordData.clientDetailDealCid}}</div>
            <div class="detailItemWidth tableItemCom">{{htmlWordData.clientDetailDealId}}</div>
            <div class="detailItemWidth tableItemCom">{{htmlWordData.clientDetailDealClient}}</div>
            <div class="detailItemWidth tableItemCom">{{htmlWordData.clientDetailDealProvider}}</div>
            <div class="detailItemWidth tableItemCom wordright">{{htmlWordData.clientDetailDealPieceSize}}</div>
            <div class="detailItemWidth tableItemCom wordright">{{htmlWordData.clientDetailDealCreatTime}}</div>
            <div class="detailItemWidth tableItemCom wordright">{{htmlWordData.clientDetailDealStartTime}}</div>
            <div class="detailItemWidth tableItemCom wordright">{{htmlWordData.clientDetailDealEndTime}}</div>
            <div class="detailItemWidth tableItemCom wordright">{{htmlWordData.clientDetailDealEpochPrice}}</div>
            <div class="detailItemWidth tableItemCom wordright">{{htmlWordData.status}}</div>
          </div>
          <div v-if="detailData.total>0&&!detailData.loading">
            <div class="tableItem" style="height:58px" v-for="(item,index) in detailData.list" :key="index">
              <div class="detailItemConWidth tableItemCom">
                <Tooltip :content="item.messageId" theme="light" max-width="600" transfer placement="top">
                  <div>{{hideWordFun(item.messageId)}}</div>
                </Tooltip>
              </div>
              <div class="detailItemConWidth tableItemCom">{{item.dealId}}</div>
              <div class="detailItemConWidth tableItemCom">
                <Tooltip :content="item.client" theme="light" max-width="600" transfer placement="top">
                  <div>{{hideWordFun(item.client)}}</div>
                </Tooltip>
              </div>
              <div class="detailItemConWidth tableItemCom">{{item.provider}}</div>
              <div class="detailItemConWidth tableItemCom wordright">{{item.pieceSize}}</div>
              <div class="detailItemConWidth tableItemCom wordright">{{item.blockTime}}</div>
              <div class="detailItemConWidth tableItemCom wordright">{{item.startDateTime}}</div>
              <div class="detailItemConWidth tableItemCom wordright">{{item.endDateTime}}</div>
              <div class="detailItemConWidth tableItemCom wordright">{{item.storagePricePerEpoch}}</div>
              <div class="detailItemConWidth tableItemCom wordright" v-if="item.dealStatus==='0'&&lanSelctEN==='1'">进行中</div>
              <div class="detailItemConWidth tableItemCom wordright" v-else-if="item.dealStatus==='0'&&lanSelctEN==='2'">Progress</div>
              <div class="detailItemConWidth tableItemCom wordright" v-else-if="item.dealStatus==='0'&&!lanSelctEN">Progress</div>
              <div class="detailItemConWidth tableItemCom wordright" v-else-if="item.dealStatus==='1'&&lanSelctEN==='1'" style="color:#1FC868">成功</div>
              <div class="detailItemConWidth tableItemCom wordright" v-else-if="item.dealStatus==='1'&&lanSelctEN==='2'" style="color:#1FC868">Success</div>
              <div class="detailItemConWidth tableItemCom wordright" v-else-if="item.dealStatus==='1'&&!lanSelctEN" style="color:#1FC868">Success</div>
              <div class="detailItemConWidth tableItemCom wordright" v-else-if="item.dealStatus==='2'&&lanSelctEN==='1'" style="color:#C81F1F">失败</div>
              <div class="detailItemConWidth tableItemCom wordright" v-else-if="item.dealStatus==='2'&&lanSelctEN==='2'" style="color:#C81F1F">Fail</div>
              <div class="detailItemConWidth tableItemCom wordright" v-else-if="item.dealStatus==='2'&&!lanSelctEN" style="color:#C81F1F">Fail</div>
            </div>
          </div>
          <div v-else-if="detailData.total===0&&!detailData.loading" class="kongClass">
            <img src="../../assets/nodeDetail/illustration／empty@2x.png" alt="">
            <span>{{htmlWordData.noData}}</span>
          </div>
        </div>
        <div class="loadingBox" style="top:400px">
          <img src="../../assets/common/loading@2x.png" alt="" class="demo-spin-icon-load" v-show="detailData.loading">
          <span v-show="detailData.loading">{{htmlWordData.loading}}</span>
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
      lanSelctEN: '2',
      htmlWordData: {},
      selectMinerAddress: null,
      searchData: {
        searchKey: null,
        dealStatus: '9',
        dealStatusList: [
          {
            value: '9',
            label: '全部'
          },
          {
            value: '0',
            label: '进行中'
          },
          {
            value: '1',
            label: '成功'
          },
          {
            value: '2',
            label: '失败'
          },
        ],
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
        pageSize: 10,
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
      this.selectMinerAddress = item.minerAddress;
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
    searchDetailFun() {
      this.detialListFun(1)
    },
    tablelistFun(page) {
      this.tableData.loading = true;
      let token = localStorage.token;
      let params = {};
      params.client = this.propData.clientAddress;
      params.current = page;
      params.pageSize = this.tableData.pageSize;
      if (this.searchData.searchKey) {
        params.minerAddress = this.searchData.searchKey
      }
      this.$axios({
        method: 'post',
        url: apis.dataCapClientMinerListApi,
        data: params,
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
      }).then(res => {
        if (res.data.code === 0) {
          if (this.tableData.page === 1 && !this.searchData.searchKey) {
            if (localStorage.lanSelctEN === '1') {
              res.data.data.clientMiner.minerAddress = "全部"
            } else {
              res.data.data.clientMiner.minerAddress = "all"
            }
            res.data.data.page.records.unshift(res.data.data.clientMiner)
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
        params.minerAddress = this.selectMinerAddress;
      }
      params.current = page;
      params.pageSize = this.detailData.pageSize;
      params.client = this.propData.clientAddress;
      this.$axios({
        method: 'post',
        url: apis.dataCapClientMinerDetailListApi,
        data: params,
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
      }).then(res => {
        if (res.data.code === 0) {
          this.detailData.loading = false;
          this.detailData.total = res.data.data.total;
          this.detailData.list = res.data.data.records
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
        temp.startTime = this.searchData.timeList[0]
        temp.endTime = this.searchData.timeList[1]
      }
      if (this.searchData.dealStatus != "9") {
        temp.dealStatus = parseInt(this.searchData.dealStatus)
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
    this.propData.clientAddress = this.$route.query.clientAddress;
    this.propData.dataCapConsumeStr = this.$route.query.dataCapConsumeStr;
    this.propData.dataCapReleasedStr = this.$route.query.dataCapReleasedStr;
    this.propData.dataCapNotConsumeStr = this.$route.query.dataCapNotConsumeStr;
    this.propData.dataCapTotalStr = this.$route.query.dataCapTotalStr;
    if (localStorage.lanSelctEN === "1") {
      this.lanSelctEN = '1'
      this.htmlWordData = this.$store.state.chineseData;
    } else {
      this.lanSelctEN = '2'
      this.htmlWordData = this.$store.state.englishData;
      this.searchData.dealStatusList = [
        {
          value: '9',
          label: 'all'
        },
        {
          value: '0',
          label: 'Progress'
        },
        {
          value: '1',
          label: 'Success'
        },
        {
          value: '2',
          label: 'Fail'
        },
      ]
    }
    this.tablelistFun(1)
  },
}
</script>