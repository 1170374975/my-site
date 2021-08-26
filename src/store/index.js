//共享数据（数据量比较小，平时又不怎么变动的，可以缓存到仓库）
import Vue from 'vue';
import Vuex from 'vuex';
import banner from './banner';
import setting from './setting';
import about from './about';
import project from './project';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    banner,
    setting,
    about,
    project
  },
  strict: true //开启严格模式
})

export default store;