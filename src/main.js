// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Import axios
import axios from 'axios' // 主要的 AJAX 套件
import VueAxios from 'vue-axios' // 將它轉為 Vue 的套件

// Import bootstrap
import 'bootstrap'

// Import Vuex
import Vuex from 'vuex';

// Import component
import Loading from 'vue-loading-overlay';

// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
import { ValidationObserver, ValidationProvider, extend, localize, configure } from 'vee-validate';
import TW from 'vee-validate/dist/locale/zh_TW.json'
import * as rules from 'vee-validate/dist/rules';

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText  } from '@fortawesome/vue-fontawesome';

// 載入匯出的 Vuex store 
import store from './store'; 

// 自定義
import './bus'
import currencyFilter from './filters/currency'
import dateFilter from './filters/date'
import $ from 'jquery';

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

localize('zh_TW', TW);

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

// fontawesome
library.add(fab, far, fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
});

Vue.use(VueAxios, axios)
Vue.use(Vuex);

Vue.component('Loading', Loading)
Vue.filter('currency', currencyFilter)
Vue.filter('date', dateFilter) 

Vue.config.productionTip = false
window.$ = $;

axios.defaults.withCredentials = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  console.log('to', to, 'from', from, 'next', next);
  // 驗證要到達的頁面，是否具有requiresAuth
  if (to.meta.requiresAuth) {
    // 如果有requiresAuth就不會直接放行，因為需要驗證
    const api = `${process.env.APIPATH}/api/user/check`;
    // 使用post方法，檢查用戶是否仍持續登入
    axios.post(api).then((response) => {
      console.log(response.data);
      // 如果登入成功的話，就跳轉到首頁
      if(response.data.success){
        next();
      } else{
        next({
          path: 'login',
        });
      }
    });
  }else{
    next();
  }
})