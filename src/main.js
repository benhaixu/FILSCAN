import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import draggable from 'vuedraggable'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/font_1857413_oucnjlseaig/iconfont.css';
import 'view-design/dist/styles/iview.css'
import './assets/init.css'
import './styles/reset.scss'
import Axios from 'axios'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/swiper-bundle.css'
// Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI);
Vue.use(draggable)
Vue.config.productionTip = false

import ExportButton from './components/actionButton.vue'
Vue.component('ExportButton', ExportButton)
import { Page ,Message,Spin,Icon,DatePicker,Poptip,Button,RadioGroup,Radio,Select,Option,Input,Tooltip,CheckboxGroup,Checkbox} from 'view-design'
Vue.component('Page', Page)
Vue.component('DatePicker', DatePicker)
Vue.component('Poptip', Poptip)
Vue.component('Button', Button)
Vue.component('RadioGroup', RadioGroup)
Vue.component('Radio', Radio)
Vue.component('Select', Select)
Vue.component('Option', Option)
Vue.component('Input', Input)
Vue.component('Tooltip', Tooltip)
Vue.component('CheckboxGroup', CheckboxGroup)
Vue.component('Checkbox', Checkbox)
Vue.component('Icon', Icon)

// echarts
let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/line')
require('echarts/lib/chart/pie')
// 以下的组件按需引入
require('echarts/lib/component/tooltip')   // tooltip组件
require('echarts/lib/component/title')   //  title组件
require('echarts/lib/component/legend')
Vue.prototype.$echarts = echarts

Vue.prototype.$EventBus = new Vue() //事件bus
Vue.prototype.$axios = Axios;//挂载axios
//配置公共API的 URL
Axios.defaults.withCredentials = true // 允许携带cookie
// Axios.defaults.baseURL = 'https://msearch.bytebase.cn'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
