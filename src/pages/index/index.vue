<template>
  <div class="index bfff">
    <headnav></headnav>
    <serch>
      <div class="f40 index_title fbold">
        <div>Welcome to the new Internet -Web 3</div>
        <div class="title01 tLeft search_subtitle c93">
          This Can Help You Rebuild the Web's Foundation Layer<br />
          and Transition to New and Unbiased Web 3.0
        </div>
      </div>
    </serch>
    <div class="w1360">
      <div class="title01 tCenter f20 c93">
      </div>
      <div class="title02 tCenter f36">
        Fast and easy access to IPFS
      </div>
      <div class="center fWrap f14 flex-start box">
        <div class="nav center flex-start pointer" @click="openNew('https://filecoin.io/zh-cn/')">
          <img src="../../assets/new/nav01.png" alt="" />
          Filecoin
        </div>
        <div class="nav center flex-start pointer" @click="openNew('https://github.com/filecoin-project/filecoin-plus-large-datasets/issues')">
          <img src="../../assets/new/nav01.png" alt="" />
          LDN Application
        </div>
        <div class="nav center flex-start pointer" @click="openNew('https://verify.glif.io/')">
          <img src="../../assets/new/nav02.png" alt="" />
          Auto Application
        </div>
        <div class="nav center flex-start pointer" @click="openNew('https://docs.filecoin.io/')">
          <img src="../../assets/new/nav01.png" alt="" />
          Filecoin Docs
        </div>
        <div class="nav center flex-start pointer" @click="
              openNew(
                'https://github.com/filecoin-project/filecoin-plus-client-onboarding/issues'
              )
            ">
          <img src="../../assets/new/nav03.png" alt="" />
          DC Application
        </div>
        <div class="nav center flex-start pointer" @click="openNew('https://filfox.info/zh')">
          <img src="../../assets/new/nav04.png" alt="" />
          FILFOX
        </div>
        <div class="nav center flex-start pointer" @click="openNew('https://www.ipfs.io/')">
          <img src="../../assets/new/nav05.png" alt="" />
          IPFS Home
        </div>
        <div class="nav center flex-start pointer" @click="openNew('https://ipfs.github.io/public-gateway-checker/')">
          <img src="../../assets/new/nav05.png" alt="" />
          IPFS Gateway
        </div>
        <div class="nav center flex-start pointer" @click="openNew('https://js.ipfs.io/')">
          <img src="../../assets/new/nav05.png" alt="" />
          IPFS JavaScript
        </div>
        <div class="nav center flex-start pointer" @click="openNew('https://github.com/ipfs/go-ipfs')">
          <img src="../../assets/new/nav05.png" alt="" />
          IPFS Go-lang
        </div>
        <div class="nav center flex-start pointer" @click="openNew('https://github.com/ipfs')">
          <img src="../../assets/new/nav03.png" alt="" />
          IPFS GitHub
        </div>
        <div class="nav center flex-start pointer" @click="openNew('https://cluster.ipfs.io/')">
          <img src="../../assets/new/nav05.png" alt="" />
          IPFS Cluster
        </div>
      </div>
      <!-- <div class="title01 tCenter f20 c93">
        Our products
      </div> -->
      <div class="title01 tCenter f36">
        Build a Free World
      </div>
      <div class="title02 tCenter f20 c93">
        Explore endless possibilities using products designed for complex and
        dynamic Web3.0
      </div>
    </div>
    <div class="ipfs_box">
      <div class="center ipfs_nav_box">
        <div class="ipfs_nav">
          <img src="../../assets/new/ips01.png" alt="" class="ipfs_nav_img" />
          <div class="f26 titleCenter">
            Computing Architecture
          </div>
          <div class="f20 ca1">
             integrates public chains-
            Filecoin helps end-users improve
            bucket experience and enjoy the
            resource of the ecosystem:FVM,
            smart contract ect
          </div>
        </div>
        <div class="ipfs_nav posr">
          <img src="../../assets/new/ips02.png" alt="" class="ipfs_nav_img" />
          <div class="f26 titleCenter">
            Storage Architecture
          </div>
          <div class="f20 ca1">
            This is compatible with open
            protocols such as IPFS,it uses
            Swarm technology to form a huge
            storage network of nodes and
            reLies on node collaboration to
            achieve persislent storage of
            specific data
          </div>
        </div>
        <div class="ipfs_nav">
          <img src="../../assets/new/ips03.png" alt="" class="ipfs_nav_img" />
          <div class="f26 titleCenter">
            Gateway Architecture
          </div>
          <div class="f20 ca1">
            GATEWAY helps
            users to access the nearest
            storage provider. Developers
            can quickly Idendify safe and
            rellable global acceleration
            based on  pinning
            service
          </div>
        </div>
      </div>

      <div class="title01 tCenter f36">
        Our products
      </div>
      <div class="ipfs_nav_main center">
        <div class="use_left f20">
          <div class="center space-between pointer" @click="setALert(0)">
            <div class="flex">
              Decentralized Gateway
            </div>
            <img src="../../assets/new/right.png" alt="" class="right_img" />
          </div>
          <div class="center space-between pointer" @click="setALert(1)">
            <div class="flex">Globally Acceleration</div>
            <img src="../../assets/new/right.png" alt="" class="right_img" />
          </div>
          <div class="center space-between pointer" @click="setALert(2)">
            <div class="flex">Smart Market System</div>
            <img src="../../assets/new/right.png" alt="" class="right_img" />
          </div>
          <div class="center space-between pointer" @click="setALert(3)">
            <div class="flex">Filecoin Data Services</div>
            <img src="../../assets/new/right.png" alt="" class="right_img" />
          </div>
        </div>
        <img src="../../assets/new/right01.png" alt="" class="ipfs_right" v-show="ipfsIndex == 0" />
        <img src="../../assets/new/right02.png" alt="" class="ipfs_right" v-show="ipfsIndex == 1" />
        <img src="../../assets/new/right04.png" alt="" class="ipfs_right" v-show="ipfsIndex == 2" />
        <img src="../../assets/new/right03.png" alt="" class="ipfs_right" v-show="ipfsIndex == 3" />
      </div>
    </div>
    <div class="w1460" id="section">
      <div class="center About">
        <img src="../../assets/new/anout.png" alt="" class="about_logo" />
        <div class="flex">
          <div class="f48 fbold">
            
          </div>
          <div class="f26 about_text">
            This is a Web 3.0 data storage and retrieval platform that integrates Data Dashboard, storage, computing, and network core capabilities to provide inter-blockchain (Filecoin Network) communication and web
            services
          </div>
         
        </div>
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
  name: "index",
  data() {
    return {
      ipfsIndex: 0,
    };
  },
  components: {
    serch, headnav, myBottom
  },
  mounted() {
    let about = localStorage.about;
    if (about && about === '1') {
      let section = document.getElementById('section')
      if (section) {
        section.scrollIntoView()
      }
    }
  },
  methods: {
    setALert(index) {
      this.ipfsIndex = index;
    },
    openNew(url) {
      window.open(url);
    },
  },
};
</script>

<style lang="scss">
.bfff {
  padding-bottom: 100px;
}
.box {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.index {
  .about_btn {
    width: 280px;
    height: 110px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid #cccccc;
    box-shadow: 0px 6px 12px rgba(81, 81, 81, 0.16);
    border-radius: 8px;
    margin-right: 40px;
    padding: 20px;
    .f42 {
      margin-bottom: 8px;
    }
    img {
      width: 40px;
      height: 40px;
      margin-right: 8px;
    }
  }
  .about_text {
    line-height: 42px;
    margin-bottom: 30px;
  }
  .addBox {
    width: 100%;
  }
  .addItem {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .addItemInfo {
    font-weight: 600;
    font-size: 16px;
  }
  .addItemimg {
    width: 16px;
    height: 16px;
    margin-right: 5px;
  }
  .about_logo {
    width: 465px;
    height: 465px;
    margin-right: 118px;
  }
  .About {
    width: 1300px;
    margin: 100px auto;
    .f48 {
      margin-bottom: 36px;
    }
  }
  .ipfs_nav_main {
    margin-top: 75px;
    height: 460px;
  }
  .ipfs_right {
    width: 570px;
    margin-top: 20px;
  }
  .use_left {
    margin-right: 122px;

    .right_img {
      width: 18px;
      margin-left: 44px;
    }
    .center {
      width: 380px;
      height: 90px;
      background: rgba(255, 255, 255, 1);
      border-radius: 5px;
      margin: 30px 0;
      padding: 0 21px 0 32px;
      &:hover {
        box-shadow: 0px 6px 12px rgba(81, 81, 81, 0.16);
      }
    }
  }
  .ipfs_nav_img {
    width: 140px;
    height: 140px;
    margin: -70px auto 20px;
    display: block;
  }
  .ipfs_nav {
    width: 364px;
    height: 340px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 10px 20px rgba(134, 134, 134, 0.2);
    border-radius: 20px;
    margin: -125px 43px 55px;
    padding: 0 32px;
    .ca1 {
      line-height: 25px;
      word-wrap: break-word;
    }
    &.posr {
      top: -45px;
    }
    .f20 {
      margin-top: 30px;
    }
  }
  .ipfs_box {
    max-width: 1720px;
    width: 100%;
    height: 1080px;
    background: linear-gradient(
      0deg,
      rgba(51, 250, 255, 0.1) 0%,
      rgba(42, 168, 253, 0.1) 31%,
      rgba(102, 70, 255, 0.1) 63%,
      rgba(136, 30, 254, 0.1) 100%
    );
    border-radius: 50px;
    margin: 300px auto 20px;
  }
  .nav {
    width: 200px;
    height: 70px;
    background: rgba(255, 255, 255, 0.39);
    border: 1px solid #cccccc;
    border-radius: 8px;
    margin-bottom: 30px;
    margin-right: 31px;
    &:nth-of-type(6n) {
      margin: 0 0 30px 0;
    }
    &:hover {
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
      border: 0;
    }
    img {
      width: 40px;
      height: 40px;
      margin: 0 15px;
    }
  }
  .title02 {
    margin: 0 auto 60px;
  }
  .title01 {
    margin: 60px auto 10px;
  }
}
</style>
