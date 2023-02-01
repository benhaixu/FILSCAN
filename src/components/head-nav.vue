<template>
  <div class="head-warp">
    <div class="center w1460">
  
      <div class="flex"></div>
      <div class="f20 btn hover pointer" v-for="item in menuList" :class="{ ctheme: item.select }" :key="item.id" @click="topageFun(item)">
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "head-nav",
  data() {
    return {
      activeIndex:1,
      menuList: [
        {
          name: "FIL+Dashborad",
          select: true,
          id: 1,
          href: "data_admin_statics"
        },
        {
          name: "IPFS Retrieval",
          select: false,
          id: 2,
          href: "index"
        },
        {
          name: "About Us",
          select: false,
          id: 3,
          href: "about"
        },
      ]
    };
  },

  methods: {
    openNew(url) {
      window.open(url);
    },
    back() {
      if (this.$route.path != '/') {
        this.$router.push({
          name: "data_admin_statics"
        })
      }
    },
    topageFun(item) {
      this.menuList.forEach(element => {
        element.select = false;
      })
      if (item.id === 3) {
        localStorage.about = '1'
      } else {
        localStorage.removeItem('about');
      }
      item.select = true;
      this.$router.push({
        name: item.href
      })
    }
  },
  mounted() {
    let href = window.location.href;
    if (this.$route.name == 'miner' || this.$route.name == 'minerDetail') {
      this.menuList.forEach(element => {
        element.select = false;
      })
    }else if (href.indexOf('ipfs') === -1) {
      this.menuList[0].select = true;
      this.menuList[1].select = false;
      this.menuList[2].select = false;
    }else{
      this.menuList[0].select = false;
      if (localStorage.about && localStorage.about === '1') {
        this.menuList[1].select = false;
        this.menuList[2].select = true;
      } else {
        this.menuList[1].select = true;
        this.menuList[2].select = false;
      }
    }
  },
};
</script>

<style scoped>
.head-warp {
  width: 100%;
  height: 80px;
  background-color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
}
.link_img {
  width: 24px;
  height: 24px;
  margin-right: 24px;
}
.ctheme {
  border-bottom: 3px solid #2aa8fd;
}
.btn {
  height: 100%;
  line-height: 80px;
  margin-left: 70px ;
}
.logo {
  height: 50px;
  cursor: pointer;
}
</style>
