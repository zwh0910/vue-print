import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Print from 'vue-print-nb'
import ElementUI from 'element-ui'
Vue.config.productionTip = false
Vue.use(Print);
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
