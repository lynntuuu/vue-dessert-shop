import Vue from 'vue';

Vue.prototype.$bus = new Vue(); // 將bus直接掛載在vue的原型下，所以可以直接對event bus做呼叫