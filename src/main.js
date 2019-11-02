import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// 引入axios
import axios from 'axios'

Vue.config.productionTip = false
// Vue本质上也是实例，在上面添加原型方法axios
Vue.prototype.axios = axios
// 使用vue全局过滤器
Vue.filter('setWH', (url, arg) => {
  return url.replace(/w\.h/, arg)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
