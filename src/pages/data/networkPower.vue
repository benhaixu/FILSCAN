<template>
  <div class="comApp">
    <div class="banner">
      <div class="headTitle">{{ htmlWordData.netWorkTitle }}</div>
      <div class="searchCom">
        <DatePicker :options="disabledTime" :value="searchData.echartTimeList" @on-change="searchEachartFun" format="yyyy-MM-dd" type="daterange" split-panels placement="bottom-end" :placeholder="htmlWordData.timeDate"
          style="width:220px">
        </DatePicker>
      </div>
      <div class="tarTooltip">
        <div class="tarTooltipItem" @click="showOrHideAllDailyFun()">
          <div class="tarTooltipItemLine" :class="{ allDaily: allDailyTotalBoolean }"></div>
          <span :class="{ selectColor: allDailyTotalBoolean }">{{
              htmlWordData.newWorkFenDataCap
            }}</span>
        </div>
        <div class="tarTooltipItem" @click="showOrHideDatacapDalilyFun()">
          <div class="tarTooltipItemLine" :class="{ datacapDalily: datacapDalilyTotalBoolean }"></div>
          <span :class="{ selectColor: datacapDalilyTotalBoolean }">{{
              htmlWordData.newWorkShiDataCap
            }}</span>
        </div>
        <div class="tarTooltipItem" @click="showOrHideDealDalilyFun()">
          <div class="tarTooltipItemLine" :class="{ dealDalily: dealDalilyTotalBoolean }"></div>
          <span :class="{ selectColor: dealDalilyTotalBoolean }">{{
              htmlWordData.newWorkYongDataCap
            }}</span>
        </div>
      </div>
      <div class="commonWidthRight" v-show="powLineBoolean">
        <div id="lineEachart" class="echartLineWidth" style="height:424px"></div>
      </div>
      <div v-show="!powLineBoolean" class="kongClass">
        <img src="../../assets/nodeDetail/illustration／empty@2x.png" alt="" />
        <span>{{ htmlWordData.noData }}</span>
      </div>
      <div class="">
        <span class="info">
          <span>{{ htmlWordData.upTime }}{{ upDataLineDate }}</span>
        </span>
      </div>
    </div>
    <div class="banner" style="margin-top:20px;padding-top:20px">
      <div class="searchCom">
        <DatePicker :options="disabledTime1" :value="searchData.timeList" @on-change="searchFun" format="yyyy-MM-dd" type="daterange" split-panels placement="bottom-end" :placeholder="htmlWordData.timeDate"
          style="width:220px">
        </DatePicker>
        <ExportButton actionType="export" :url="exportUrl" fileName="全网有效数据列表" :startTime="this.searchData.startTime" :endTime="this.searchData.endTime"></ExportButton>
      </div>
      <div class="tableBox tableOverFlow">
        <div class="tableHead">
          <div class="itemWidth1 tableItemCom">
            {{ htmlWordData.newWorkDate }}
          </div>
          <div class="itemWidth2 tableItemCom wordright">
            <span>{{ htmlWordData.newWorkTotalNotary }}</span>
            <div class="portBox">
              <img src="../../assets/statistics/icon／fold@2x.png" alt="" v-if="portData.up1" @click="showTableFun(1)" />
              <img src="../../assets/statistics/icon／unfold@2x.png" alt="" v-else @click="showTableFun(1)" />
            </div>
          </div>
          <div class="itemWidth3 tableItemCom wordright" v-if="portData.up1">
            {{ htmlWordData.newWorkPlusNotary }}
          </div>
          <div class="itemWidth3 tableItemCom wordright" v-if="portData.up1">
            {{ htmlWordData.newWorkLNDNotary }}
          </div>
          <div class="itemWidth2 tableItemCom wordright">
            <span>{{ htmlWordData.newWorkTotalClient }}</span>
            <div class="portBox">
              <img src="../../assets/statistics/icon／fold@2x.png" alt="" v-if="portData.up2" @click="showTableFun(2)" />
              <img src="../../assets/statistics/icon／unfold@2x.png" alt="" v-else @click="showTableFun(2)" />
            </div>
          </div>
          <div class="itemWidth3  tableItemCom wordright" v-if="portData.up2">
            {{ htmlWordData.newWorkPlusClient }}
          </div>
          <div class="itemWidth3  tableItemCom wordright" v-if="portData.up2">
            {{ htmlWordData.newWorkLNDClient }}
          </div>
          <div class="itemWidth2  tableItemCom wordright" style="padding-right:20px">
            {{ htmlWordData.newWorkTotalDC }}
          </div>
          <div class="itemWidth2 tableItemCom wordright">
            <span>{{ htmlWordData.newWorkNewNotary }}</span>
            <div class="portBox">
              <img src="../../assets/statistics/icon／fold@2x.png" alt="" v-if="portData.up3" @click="showTableFun(3)" />
              <img src="../../assets/statistics/icon／unfold@2x.png" alt="" v-else @click="showTableFun(3)" />
            </div>
          </div>
          <div class="itemWidth3  tableItemCom wordright" v-if="portData.up3">
            {{ htmlWordData.newWorkNewPlusNotary }}
          </div>
          <div class="itemWidth3  tableItemCom wordright" v-if="portData.up3">
            {{ htmlWordData.newWorkNewLDNNotary }}
          </div>
          <div class="itemWidth2 tableItemCom wordright">
            <span>{{ htmlWordData.newWorkNewClient }}</span>
            <div class="portBox">
              <img src="../../assets/statistics/icon／fold@2x.png" alt="" v-if="portData.up4" @click="showTableFun(4)" />
              <img src="../../assets/statistics/icon／unfold@2x.png" alt="" v-else @click="showTableFun(4)" />
            </div>
          </div>
          <div class="itemWidth3  tableItemCom wordright" v-if="portData.up4">
            {{ htmlWordData.newWorkNewPlusClient }}
          </div>
          <div class="itemWidth3  tableItemCom wordright" v-if="portData.up4">
            {{ htmlWordData.newWorkNewLDNClient }}
          </div>
          <div class="itemWidth2 tableItemCom wordright" style="padding-right:20px">
            {{ htmlWordData.newWorkNewlDC }}
          </div>
        </div>
        <div v-if="tableData.total > 0 && !tableData.loading">
          <div class="tableItem" v-for="(item, index) in tableData.list" :key="index">
            <div class="itemWidth1 tableItemCom">{{ item.collectDate }}</div>
            <div class="itemWidth2 tableItemCom wordright" style="padding-right:30px">
              {{ item.allDailyTotalStr }}
            </div>
            <div class="itemWidth3 tableItemCom wordright" v-if="portData.up1">
              {{ item.allPlusDailyTotalStr }}
            </div>
            <div class="itemWidth3 tableItemCom wordright" v-if="portData.up1">
              {{ item.allLdnDailyTotalStr }}
            </div>
            <div class="itemWidth2 tableItemCom wordright" style="padding-right:30px">
              {{ item.datacapDalilyTotalStr }}
            </div>
            <div class="itemWidth3 tableItemCom wordright" v-if="portData.up2">
              {{ item.allPlusDailyReleaseTotalStr }}
            </div>
            <div class="itemWidth3 tableItemCom wordright" v-if="portData.up2">
              {{ item.allLdnDailyReleaseTotalStr }}
            </div>
            <div class="itemWidth2 tableItemCom wordright" style="padding-right:20px">
              {{ item.dealDalilyTotalStr }}
            </div>
            <div class="itemWidth2 tableItemCom wordright" style="padding-right:30px">
              {{ item.allDailyAddStr }}
            </div>
            <div class="itemWidth3 tableItemCom wordright" v-if="portData.up3">
              {{ item.allPlusDailyAddStr }}
            </div>
            <div class="itemWidth3 tableItemCom wordright" v-if="portData.up3">
              {{ item.allLdnDailyAddStr }}
            </div>
            <div class="itemWidth2 tableItemCom wordright" style="padding-right:30px">
              {{ item.datacapAddTotalStr }}
            </div>
            <div class="itemWidth3 tableItemCom wordright" v-if="portData.up4">
              {{ item.allPlusDailyReleaseAddStr }}
            </div>
            <div class="itemWidth3 tableItemCom wordright" v-if="portData.up4">
              {{ item.allLdnDailyReleaseAddStr }}
            </div>
            <div class="itemWidth2 tableItemCom wordright" style="padding-right:20px">
              {{ item.dealAddTotalStr }}
            </div>
          </div>
        </div>
        <div v-else-if="tableData.total === 0 && !tableData.loading" class="kongClass">
          <img src="../../assets/nodeDetail/illustration／empty@2x.png" alt="" />
          <span>{{ htmlWordData.noData }}</span>
        </div>
        <div v-else class="loadingBox">
          <img src="../../assets/common/loading@2x.png" alt="" class="demo-spin-icon-load" />
          <span>{{ htmlWordData.loading }}</span>
        </div>
      </div>
      <div class="pageStyle">
        <span class="info">
          <span>{{ htmlWordData.upTime }}{{ upDataDate }}</span>
        </span>
        <Page v-if="tableData.total > 0" :total="tableData.total" :current="tableData.page" :page-size="tableData.pageSize" size="small" @on-change="headPageFun" @on-page-size-change="changeSizeFun" />
      </div>
    </div>
  </div>
</template>
<script>
import { DatePicker, Page } from "view-design";
import ExportButton from "../../components/actionButton.vue";
import apis from "../../common/apis";
export default {
  data() {
    return {
      menuList: [
        {
          menuName: "DataCap Overview",
          href: "networkPower",
          select: true,
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
          select: false,
        },
      ],
      htmlWordData: {},
      exportUrl: apis.dataCapDataCapExportApi,
      portData: {
        up1: false,
        up2: false,
        up3: false,
        up4: false,
      },
      capData: [],
      delData: [],
      allData: [],
      xdata: [],
      upDataDate: "",
      upDataLineDate: "",
      disabledTime: {
        disabledDate(date) {
          return date && date.valueOf() > Date.now() - 86400000;
        },
      },
      disabledTime1: {
        disabledDate(date) {
          return date && date.valueOf() > Date.now() - 86400000;
        },
      },
      powLineBoolean: true,
      searchData: {
        echartTimeList: [],
        echartStartTime: null,
        echartEndTime: null,
        timeList: [],
        startTime: null,
        endTime: null,
      },
      selectNode: "f01137150",
      tableData: {
        total: 0,
        page: 1,
        pageSize: 10,
        list: [],
        sizeList: [10, 20, 30, 40, 50],
        loading: false,
      },
      lineEachart: null,
      allDailyTotalBoolean: true,
      datacapDalilyTotalBoolean: true,
      dealDalilyTotalBoolean: true,
    };
  },
  methods: {
    showTableFun(type) {
      if (type === 1) {
        this.portData.up1 = !this.portData.up1;
      } else if (type === 2) {
        this.portData.up2 = !this.portData.up2;
      } else if (type === 3) {
        this.portData.up3 = !this.portData.up3;
      } else {
        this.portData.up4 = !this.portData.up4;
      }
    },
    showOrHideAllDailyFun() {
      this.allDailyTotalBoolean = !this.allDailyTotalBoolean;
      this.lineEchartFun();
    },
    showOrHideDatacapDalilyFun() {
      this.datacapDalilyTotalBoolean = !this.datacapDalilyTotalBoolean;
      this.lineEchartFun();
    },
    showOrHideDealDalilyFun() {
      this.dealDalilyTotalBoolean = !this.dealDalilyTotalBoolean;
      this.lineEchartFun();
    },
    tooltipFun(params) {
      let str =
        "<div style='font-size:12px;color:#333333'>" +
        params[0].data.time +
        "</div>";
      for (let i = 0; i < params.length; i++) {
        str =
          str +
          "<div style='display:flex;align-items: center;'>" +
          "<div style='width:12px;height:4px;margin-top:8px;margin-right:5px;" +
          params[i].data.background +
          "'></div>" +
          "<div style='margin-top:10px;font-size:12px;color:#333333'>" +
          params[i].data.toolTip +
          "</div>" +
          "</div>";
      }
      return str;
    },
    seriesFun() {
      let obj = [];
      if (this.allDailyTotalBoolean) {
        let temp = {
          data: this.allData,
          symbol: "none",
          itemStyle: {
            color: "#2B3EBD",
          },
          type: "line",
          smooth: true,
        };
        obj.push(temp);
      }
      if (this.datacapDalilyTotalBoolean) {
        let temp = {
          data: this.capData,
          symbol: "none",
          itemStyle: {
            color: "#31C5B3",
          },
          type: "line",
          smooth: true,
        };
        obj.push(temp);
      }
      if (this.dealDalilyTotalBoolean) {
        let temp = {
          data: this.delData,
          symbol: "none",
          itemStyle: {
            color: "#F5BD4C",
          },
          type: "line",
          smooth: true,
        };
        obj.push(temp);
      }
      return obj;
    },
    searchFun(value) {
      this.searchData.timeList = value;
      this.searchData.startTime = value[0];
      this.searchData.endTime = value[1];
      this.tablelistFun(1);
    },
    searchEachartFun(value) {
      this.searchData.echartTimeList = value;
      this.searchData.echartStartTime = this.searchData.echartTimeList[0];
      this.searchData.echartEndTime = this.searchData.echartTimeList[1];
      this.echartListFun();
    },
    echartListFun() {
      this.lineEachart = this.$echarts.init(
        document.getElementById("lineEachart")
      );
      let params = {};
      if (this.searchData.echartStartTime && this.searchData.echartEndTime) {
        params.endDate = this.searchData.echartEndTime;
        params.startDate = this.searchData.echartStartTime;
      }
      let token = localStorage.token;
      this.xdata = [];
      this.capData = [];
      this.delData = [];
      this.allData = [];
      this.$axios({
        method: "post",
        url: apis.dataCapPicListApi,
        data: params,
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }).then((res) => {
        if (res.data.code === 0) {
          let data = res.data.data.fullDatacapList;
          this.upDataLineDate = res.data.data.dataUpdateTime;
          if (!data || data.length === 0) {
            this.powLineBoolean = false;
            return;
          } else {
            this.powLineBoolean = true;
          }
          data.forEach((element) => {
            let temp1 = {};
            let temp2 = {};
            let temp3 = {};
            temp1.time = element.collectDate;
            temp2.time = element.collectDate;
            temp3.time = element.collectDate;
            let v1 = (
              element.datacapDalilyTotal /
              1024 /
              1024 /
              1024 /
              1024 /
              1024
            ).toFixed(2);
            let v2 = (
              element.dealDalilyTotal /
              1024 /
              1024 /
              1024 /
              1024 /
              1024
            ).toFixed(2);
            let v3 = (
              element.allDailyTotal /
              1024 /
              1024 /
              1024 /
              1024 /
              1024
            ).toFixed(2);
            temp1.value = v1;
            temp1.toolTip =
              this.htmlWordData.newWorkShiDataCap2 +
              element.datacapDalilyTotalStr;
            temp1.background = "background: #31C5B3;";
            temp2.value = v2;
            temp2.toolTip =
              this.htmlWordData.newWorkYongDataCap3 +
              element.dealDalilyTotalStr;
            temp2.background = "background: #F5BD4C;";
            temp3.value = v3;
            temp3.toolTip =
              this.htmlWordData.newWorkFenDataCap1 + element.allDailyTotalStr;
            temp3.background = "background: #2B3EBD;";
            this.capData.push(temp1);
            this.delData.push(temp2);
            this.allData.push(temp3);
            this.xdata.push(element.collectDate);
          });
          this.lineEchartFun();
        } else {
          this.powLineBoolean = false;
          this.$Message.error({
            content: res.data.msg,
            background: true,
            duration: 3,
          });
        }
      });
    },
    tablelistFun(page) {
      this.tableData.loading = true;
      let params = {};
      if (this.searchData.startTime && this.searchData.endTime) {
        params.endDate = this.searchData.endTime;
        params.startDate = this.searchData.startTime;
      }
      params.current = page;
      params.pageSize = this.tableData.pageSize;
      let token = localStorage.token;
      this.$axios({
        method: "post",
        url: apis.dataCaPageListApi,
        data: params,
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }).then((res) => {
        if (res.data.code === 0) {
          this.tableData.loading = false;
          this.upDataDate = res.data.data.dataUpdateTime;
          this.tableData.list = res.data.data.page.records;
          this.tableData.total = res.data.data.page.total;
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
    lineEchartFun() {
      let data = this.seriesFun();
      let option = {
        grid: {
          left: 50,
          right: 40,
          top: 30,
          bottom: 20,
        },
        tooltip: {
          trigger: "axis",
          formatter: (params) => {
            return this.tooltipFun(params);
          },
          backgroundColor: "rgba(255, 255, 255, 1)",
          padding: 10,
          borderColor: "rgba(0, 0, 0, 0.3)",
          borderWidth: 1,
          axisPointer: {
            type: "line",
            lineStyle: {
              color: "#2B3EBD",
              width: 30,
              opacity: 0.05,
            },
          },
        },
        xAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "rgba(0, 0, 0, 0.15)",
            },
          },
          boundaryGap: false,
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "rgba(0, 0, 0, 0.45)",
          },
          data: this.xdata,
        },
        yAxis: [
          {
            type: "value",
            splitNumber: 6,
            splitLine: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              color: "rgba(0, 0, 0, 0.45)",
              formatter: "{value}PB",
            },
          },
        ],
        series: data,
      };
      this.lineEachart.setOption(option, true);
    },
    headPageFun(value) {
      this.tableData.page = value;
      this.tablelistFun(value, 1);
    },
    changeSizeFun(value) {
      this.tableData.pageSize = value;
      this.tablelistFun(1);
    },
  },
  components: {
    DatePicker,
    Page,
    ExportButton,
  },
  created() {
    if (localStorage.lanSelctEN === "1") {
      this.htmlWordData = this.$store.state.chineseData;
    } else {
      this.htmlWordData = this.$store.state.englishData;
    }
  },
  mounted() {
    this.tablelistFun(1);
    this.echartListFun();
  },
};
</script>
<style scoped>
.comApp {
  width: 100%;
  background: #f2f2fa !important;
  padding-bottom: 100px;
}
.w1460 {
  width: 1460px;
  margin: 0 auto;
  padding: 20px 0 100px;
}
.echartLineWidth {
  width: 1350px;
}

.actionAddCom {
  background: #3644a2;
  border: 0.01rem solid #3644a2;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.head {
  color: #333333;
  display: flex;
  align-items: center;
}
.buttonCom {
  display: flex;
  align-items: center;
  justify-content: center;
}
.addressName {
  background: rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
}
.tabItemCom {
  color: #666666;
  text-align: center;
  cursor: pointer;
}
.buttonAction {
  display: flex;
  align-items: center;
}
.towDiv {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
}
.towDivInfo {
  color: rgba(51, 51, 51, 0.5);
}
.actionButton {
  background: rgba(43, 62, 189, 0.1);
  text-align: center;
  color: #3644a2;
  cursor: pointer;
}
.mask {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  z-index: 9;
}
.maskBox {
  background: #ffffff;
  position: relative;
}
.maskHead {
  display: flex;
  align-items: center;
  width: 100%;
  color: #333333;
  border-bottom: 0.01rem solid rgba(51, 51, 51, 0.1);
  justify-content: space-between;
}
.maskFoot {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  border-top: 0.01rem solid rgba(51, 51, 51, 0.1);
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.buttonCom {
  text-align: center;
  cursor: pointer;
  border: 0.01rem solid #3644a2;
}
.celButton {
  color: #3644a2;
}
.sureButton {
  background: #3644a2;
  color: #ffffff;
}
.headTitle {
  color: #333333;
  background: white;
}
/* ivew设置 */
.ivu-page-total {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
}
.ivu-input {
  height: 32px !important;
  font-size: 14px !important;
}
.ivu-input-prefix,
.ivu-input-suffix {
  width: 32px !important;
}
.ivu-input-prefix i,
.ivu-input-suffix i {
  font-size: 16px !important;
  line-height: 32px !important;
}
a {
  font-size: 14px !important;
}
.ivu-radio-wrapper {
  font-size: 14px !important;
}
.ivu-radio-group {
  font-size: 14px !important;
}
.ivu-checkbox-wrapper {
  font-size: 14px !important;
}
textarea.ivu-input {
  min-height: 52px !important;
  max-height: 94px !important;
}
.ivu-select-single {
  height: 30px !important;
}
.ivu-select-placeholder {
  height: 30px !important;
  font-size: 12px !important;
  line-height: 30px !important;
}
.demo-spin-icon-load {
  width: 64px;
  height: 64px;
  animation: ani-demo-spin 1s linear infinite;
}
.produceImg {
  animation: ani-demo-spin 1s linear infinite;
}
.outLoadingClass {
  width: 0.16rem;
  height: 0.16rem;
  animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.demo-spin-col {
  height: 100px;
  position: relative;
  border: 1px solid #eee;
}
.ivu-select-single .ivu-select-selection {
  height: 32px !important;
}
.ivu-select-selected-value {
  height: 30px !important;
  line-height: 30px !important;
  font-size: 14px !important;
}
.ivu-btn {
  height: 32px !important;
  font-size: 14px !important;
  line-height: 32px !important;
}
.tableBox {
  margin-top: 20px;
}
.itemWidth1 {
  width: 150px;
  flex-shrink: 0;
}
.itemWidth2 {
  width: 210px;
  flex-shrink: 0;
}
.itemWidth3 {
  width: 120px;
  flex-shrink: 0;
}
.tarTooltip {
  margin-top: 17px;
  display: flex;
  align-items: center;
}
.tarTooltipItem {
  display: flex;
  align-items: center;
  margin-right: 20px;
  font-size: 12px;
  color: #cccccc;
  margin-bottom: 20px;
  cursor: pointer;
}
.tarTooltipItemLine {
  width: 12px;
  height: 4px;
  background: #cccccc;
  margin-right: 10px;
}
.allDaily {
  background: #2b3ebd;
}
.datacapDalily {
  background: #31c5b3;
}
.dealDalily {
  background: #f5bd4c;
}
.selectColor {
  color: #333333;
}
.portBox {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
.portBox img {
  width: 20px;
  height: 100%;
  cursor: pointer;
}
@import "../common/css/max.css";
</style>
