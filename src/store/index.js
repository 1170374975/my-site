//共享数据
import Vue from 'vue';
import Vuex from 'vuex';
import banner from './banner';
import setting from './setting';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    banner,
    setting
  },
  strict: true //开启严格模式
})

export default store;