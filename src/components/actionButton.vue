<style scoped>
.exportButton {
  height: 32px;
  border-radius: 4px;
  border: 1px solid #3644a2;
  display: flex;
  align-items: center;
  padding: 0 10px;
  font-size: 12px;
  color: #3644a2;
  cursor: pointer;
}
.exportButton img {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}
</style>

<template>
  <div>
    <div class="exportButton" v-if="actionType==='export'" @click="daochuFun">
      <img src="../assets/nodeDetail/icon／exprot@2x.png" alt="" v-if="!outLoading">
      <img src="../assets/common/loading@2x.png" alt="" v-else class="outLoadingClass">
      <span>{{name}}</span>
    </div>
    <div class="exportButton" v-if="actionType==='add'" @click="addFun">
      <img src="../assets/nodeDetail/icon／add／white@2x.png" alt="">
      <span>新增</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      outLoading: false,
      name: "Export"
    }
  },
  props: {
    minerAddress: null,
    startTime: null,
    endTime: null,
    url: "",
    fileName: "",
    actionType: '',
    type: "",
    date: null
  },
  methods: {
    daochuFun() {
      if (this.outLoading) {
        return
      }
      let params = {};
      params.minerAddress = this.minerAddress;
      if (this.startTime) {
        params.startTime = this.startTime;
        params.endTime = this.endTime;
      }
      if (this.type) {
        params.type = this.type;
      }
      if (this.date) {
        params.date = this.date;
      }
      this.outLoading = true;
      let token = localStorage.token;
      this.$axios({
        timeout: 1000000,
        method: "post",
        url: this.url,
        data: params,
        headers: {
          Authorization: token
        },
        responseType: "blob"
      }).then(res => {
        if (res.status === 200) {
          const content = res.data;
          const blob = new Blob([content], {
            type: "application/excel"
          });
          const fileName = this.fileName + ".xls";
          if ("download" in document.createElement("a")) {
            // 支持a标签download的浏览器
            const link = document.createElement("a"); // 创建a标签
            link.download = fileName; // a标签添加属性
            link.style.display = "none";
            link.href = URL.createObjectURL(blob);
            document.body.appendChild(link);
            link.click(); // 执行下载
            URL.revokeObjectURL(link.href); // 释放url
            document.body.removeChild(link); // 释放标签
          } else {
            // 其他浏览器
            navigator.msSaveBlob(blob, fileName);
          }
          this.outLoading = false;
        }
      }).catch(err => {
        this.outLoading = false;
        this.$Message.error({
          content: err.response.data,
          background: true,
          duration: 3
        });
      });
    },
    addFun() {
      this.$emit('add', this.context)
    }
  },
  created() {
    if (localStorage.lanSelctEN) {
      if (localStorage.lanSelctEN === '1') {
        this.name = "导出";
      } else {
        this.name = "Export";
      }
    }
  }
}
</script>
