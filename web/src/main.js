import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { ValidationProvider, extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import zh from 'vee-validate/dist/locale/zh_CN.json'

for (const rule in rules) {
  extend(rule, {
    ...rules[rule],
    message: zh.messages[rule],
  })
}

Vue.component('validation-provider', ValidationProvider)

/* vee-validate@2 的版本使用方法
// import VeeValidate, { Validator } from 'vee-validate'
// 方法1 使用中文语言包
// import zh from 'vee-validate/dist/locale/zh_CN'

// 方法2 使用中文
// import '@/local'

// Vue.use(VeeValidate)
// 方法1 使用中文语言包
// Validator.localize('zh-CN', zh)

// 方法2 使用中文语言包
// const validator = new Validator()
// validator.localize('zh-CN')
* */

Vue.config.productionTip = false

axios.defaults.baseURL =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:3000'
    : 'http://your.domain.com'

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
