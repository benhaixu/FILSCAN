<template>
  <div class="myBottom ">
    <div class="center w1460">
    
      <div class="flex"></div>
      <!-- <div class="f20 btn hover pointer" @click="$router.push({ path: '/' })">
        FIL+Dashborad
      </div>
      <div class="f20 btn hover pointer" @click="$router.push({ path: '/ipfs' })">
        IPFS Retrieval
      </div> -->
      <div class="buttom-text">
        <span class="hover pointer" @click="minerClick">S.P.</span>
        <span class="margin"></span>
        <span> </span>
      </div>
      <!-- <div class="f20 btn hover pointer" v-for="(item,index) in menuList" :class="{ ctheme: item.select }" :key="index" @click="topageFun(item)">
        {{item.name}}
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "myBottom",
  data() {
    return {
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
    minerClick(){
      this.$router.push({
        name: "miner"
      })
    },
    topageFun(item) {
      localStorage.about = '2'
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
    },
    openNew(url) {
      window.open(url);
    },
    back() {
      if (this.$route.path != "/") {
        this.$router.push({
          path: "/",
        });
      }
    },
  },
  created() {
    let href = window.location.href;
    if (href.indexOf('ipfs') === -1) {
      this.menuList[0].select = true;
      this.menuList[1].select = false;
      this.menuList[2].select = false;
    } else {
      this.menuList[0].select = false;
      if (localStorage.about === '1') {
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

<style lang="scss">
.ctheme {
  border-bottom: 3px solid #2aa8fd;
}
.myBottom {
  width: 100%;
  height: 80px;
  background: rgba(246, 247, 250, 1);
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 0;
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
    margin: 0 70px 0 0;
  }

  .logo {
    margin-right: 50px;
    height: 40px;
    cursor: pointer;
  }
}
.buttom-text{
  color: #000;
  .margin{
    margin: 0 10px;
  }
}
</style>
