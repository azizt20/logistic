import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
import store from './store'
import YmapPlugin from 'vue-yandex-maps'
import Antd from 'ant-design-vue'
import './registerServiceWorker'
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false
Vue.use(YmapPlugin)
Vue.use(Antd)
Vue.use(Vuelidate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
