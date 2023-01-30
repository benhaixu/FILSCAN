<template>
  <div v-loading="!load" class="bfff">
    <headnav></headnav>
    <serch :inputValue="userurl" @search="searchFun">
      <div class="f40 index_title fbold">
        <div>Welcome to the new Internet -Web 3</div>
        <div class="title01 tLeft search_subtitle c93">
          EHUME Can Help You Rebuild the Web's Foundation Layer<br />
          and Transition to New and Unbiased Web 3.0
        </div>
      </div>
    </serch>
    <div class="nodatawarp" v-if="isdata && load">
      No relevant files found, please enter the correct hash
      <img src="../../assets/new/nofile.png" alt="" class="nofile_img" />
    </div>
    <div class="title22" v-if="!isdata && load">
      <img class="fileimg" src="../../assets/new/file.png" alt />
      <div class="namewarp">
        <div class="name f18">{{ fileName }}</div>
      </div>
      <div class="submit" @click="download">Download</div>
    </div>
    <div class="nodatawarp2" v-if="!isdata && filetp == 'image' && load">
      <div style="display: flex; justify-content: center">文件预览</div>
      <div class="demo-image__preview">
        <el-image style="width: 100px; height: 100px" :src="url" :preview-src-list="srcList"></el-image>
      </div>
    </div>
    <div class="nodatawarp2" v-if="!isdata && filetp == 'video' && load">
      <div style="display: flex; justify-content: center">文件预览</div>
      <div class="demo-image__preview">
        <video ref="videoPlayer" controls :src="url" style="width: 100%; height: 100%; object-fit: fill"></video>
      </div>
    </div>
    <div class="nodatawarp2" v-if="!isdata && filetp != 'video' && filetp != 'image' && load">
      <div style="display: flex; justify-content: center">
        文件暂不能预览，请下载后查看
      </div>
    </div>
    <myBottom></myBottom>
  </div>
</template>

<script>
import serch from "@/components/serch";
import headnav from "@/components/head-nav";
import myBottom from "@/components/myBottom";
export default {
  data() {
    return {
      isdata: false,
      fileName: "",
      filetp: "",
      fleSize: "",
      url: "",
      srcList: [],
      load: false,
      userurl: null
    };
  },
  components: {
    serch, headnav, myBottom
  },

  created() {
    this.userurl = this.$route.query.url;
  },
  mounted() {
    this.getFileFun(this.$route.query.url)
  },
  methods: {
    searchFun(value) {
      this.getFileFun(value)
    },
    download() {
      let downurl = this.url;
      window.open(downurl, "_blank");
    },
    getFileFun(value) {
      this.load = false;
      this.$axios({
        method: "post",
        url: "/ipfsApi/Home/GetFileInfo",
        data: {
          url: value,
        },
      }).then((res) => {
        this.srcList.push(res.data.url);
        this.url = res.data.url;
        if (!res.data.res) {
          this.isdata = true;
          this.load = true;
        } else {
          this.isdata = false;
          var index2 = res.data.fileType.lastIndexOf("/");
          let fileName = res.data.fileName + "." + res.data.fileType.substring(index2 + 1, res.data.fileType.length);
          var index3 = res.data.fileType.indexOf("/");
          let filetp = res.data.fileType.substring(0, index3);
          this.filetp = filetp;
          this.fileName = fileName;
          this.fleSize = res.data.fleSize;
          this.load = true;
        }
      });
    }
  },
};
</script>

<style lang="scss">
.bfff {
  padding-bottom: 100px;
}
.nodatawarp {
  width: 1024px;
  height: 576px;
  background: rgba(249, 249, 249, 1);
  border: 1px solid #cccccc;
  margin: 0 auto;
  margin: 80px auto 100px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 40px;
  font-weight: bold;
  img {
    width: 64px;
    height: 58px;
    margin-top: 194px;
  }
}
.nodatawarp2 {
  width: 1024px;
  margin: 0 auto 100px;
  margin-top: 20px;
  color: white;
  font-size: 12px;
  justify-content: center;
  padding-top: 20px;
  font-weight: bold;
  .demo-image__preview {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    .el-image {
      width: 100% !important;
      height: 100% !important;
    }
  }
}
.title22 {
  margin: 40px auto 0;
  width: 1024px;
  height: 100px;
  background-color: #f6f7fa;
  border: 1px solid #cccccc;
  display: flex;
  align-items: center;
  border-radius: 8px;
  .fileimg {
    width: 78px;
    height: 78px;
    margin: 0 0 0 30px;
  }
  .namewarp {
    margin-left: 15px;
    font-size: 18px;
    .name {
      width: 700px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      height: 25px;
    }
    .size {
      color: #707889;
      font-size: 12px;
      margin-top: 10px;
    }
  }
  .submit {
    width: 120px;
    height: 46px;
    background: rgba(42, 168, 253, 1);
    border-radius: 5px;
    justify-content: flex-end;
    margin-left: auto;
    margin-right: 31px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
    font-size: 18px;
  }
  .submit:hover {
    box-shadow: inset 0px 1px 1px rgba(42, 168, 253, 1),
      0px 0px 8px rgba(42, 168, 253, 1);
    cursor: pointer;
    opacity: 0.8;
  }
}
</style>
