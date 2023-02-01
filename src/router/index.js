import Vue from 'vue'
import Router from 'vue-router'
const data_admin_statics = r => require.ensure([], () => r(require('@/pages/data/data_admin_statics.vue'), 'data_admin_statics'))
const index = r => require.ensure([], () => r(require('@/pages/index/index.vue'), 'index'))
const about = r => require.ensure([], () => r(require('@/pages/index/about.vue'), 'about'))
const serchview = r => require.ensure([], () => r(require('@/pages/index/serchview.vue'), 'serchview'))
const clientDetail = r => require.ensure([], () => r(require('@/pages/detail/clientDetail.vue'), 'clientDetail'))
const minerDetail = r => require.ensure([], () => r(require('@/pages/detail/minerDetail.vue'), 'minerDetail'))
const notaryDetail = r => require.ensure([], () => r(require('@/pages/detail/notaryDetail.vue'), 'notaryDetail'))
const miner = r => require.ensure([], () => r(require('@/pages/data/data_admin_statics_miner.vue'), 'miner'))
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)
let router = new Router({
  routes: [
    {
      path: '/',
      name: 'data_admin_statics',
      component: data_admin_statics,
      meta: {
        index: 0,
        title: 'DEMO'
      }
    },
    {
      path: '/ipfs',
      name: 'index',
      component: index,
      meta: {
        title: 'DEMO'
      }
    },{
      path: '/miner',
      name: 'miner',
      component: miner,
      meta: {
        title: 'DEMO'
      }
    },
    {
      path: '/ipfs',
      name: 'about',
      component: about,
      meta: {
        title: 'DEMO'
      }
    },
    {
      path: '/ipfs/serch',
      name: 'serchview',
      component: serchview,
      meta: {
        title: 'DEMO'
      }
    },
    {
      path: '/clientDetail',
      name: 'clientDetail',
      component: clientDetail,
      meta: {
        title: 'DEMO'
      }
    },
    {
      path: '/minerDetail',
      name: 'minerDetail',
      component: minerDetail,
      meta: {
        title: ''
      }
    },
    {
      path: '/notaryDetail',
      name: 'notaryDetail',
      component: notaryDetail,
      meta: {
        title: 'DEMO'
      }
    },
  ],
})
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})
export default router;
