import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex); // 使用 Vuex

import alertModules from './Alert';
import productsModules from './products';
import cartModules from './cart';
import orderModules from './order';

// 把整個 store export 出來，讓 main.js 匯入使用
export default new Vuex.Store({
  strict: true, // 嚴謹模式：Vuex 語法不符合規範的話會跳錯 ex.mutations 處理非同步的行為，就會跳錯
  state: {
    isLoading: false,
    status: false,
  },
  // 操作行為
  actions: {
    updateLoading(context, loading) {
      // 提交一個mutation，用 commit 呼叫 mutations 去改變資料狀態
      context.commit('LOADING', loading)
    },
    // 檢查用戶是否仍持續登入
    check (context) {
      const api = `${process.env.APIPATH}/api/user/check`;
      axios.post(api).then(response => {
        if (response.data.success) {
          context.commit('STATUS', true)
        } else {
          context.commit('STATUS', false)
        }
      })
    },
  },
  // 實際操作資料狀態
  mutations: {
    LOADING(state, payload) {
      state.isLoading = payload;
    },
    STATUS(state, payload) {
      state.status = payload;
    }
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
    status: state => state.status,
  },
  modules: {
    alertModules,
    cartModules,
    productsModules,
    orderModules,
  }
});