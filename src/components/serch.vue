<template>
  <div class="warp search_wrapper">
    <div class="w1460">
      <slot></slot>
      <div class="search_box center flex-start">
        <input type="text" @focus="bindfocus" @blur="bindblur" placeholder="Please enter IPFS Hash starting with QM" v-model="userurl" />
        <div class="serchimg f18 cfff center pointer" @click="serch">
          Search
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "serch",
  data() {
    return {
      value: "",
      isfouc: true,
      userurl: "",
    };
  },
  props: {
    inputValue: null
  },
  methods: {
    SerchChange() {
      if (!/^Qm.*/.test(this.userurl)) {
        this.$message("请输入Qm开头的IPFS Hash");
        return;
      }
    },
    serch() {
      if (this.userurl == "") {
        this.$message("请输入查询值！");
        return;
      }
      if (!/^Qm.*/.test(this.userurl)) {
        this.$message("请输入Qm开头的IPFS Hash");
        return;
      }
      let href = window.location.href;
      if (href.indexOf("serch") != -1) {
        this.$emit("search", this.userurl)
      }
      else {
        this.$router.push({
          name: "serchview",
          query: { url: this.userurl },
        });
      }
    },
    bindfocus() {
      this.isfouc = false;
      this.value = "I 请输入Qm开头的IPFS Hash";
    },
    bindblur() {
      (this.isfouc = true), (this.value = "");
    },
  },
  created() {
    this.userurl = this.inputValue;
  }
};
</script>

<style lang="scss">
.search_wrapper {
  background: url("../assets/new/search_back1.png") no-repeat center;
  background-size: 100% 100%;
  padding: 133px 140px;
  input {
    padding-left: 24px;
    width: 580px;
    height: 56px;
    background: #fff;
    border-radius: 8px 0 0 8px;
  }
  input::-ms-input-placeholder {
    font-size: 18px;
    color: #a8a8a8;
  }
  input::-webkit-input-placeholder {
    font-size: 18px;
    color: #a8a8a8;
  }
  input:focus {
    outline: #32353d;
  }
  width: 100%;
  z-index: 99;
  .serchimg {
    width: 120px;
    height: 56px;
    background: linear-gradient(90deg, #33faff 0%, #2aa8fd 100%);
    border-radius: 0px 8px 8px 0px;
  }
}
</style>
