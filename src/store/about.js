//关于我页面，共享数据（为了防止页面频繁刷新）

import { getAbout } from '@/api/about.js';

export default {
  namespaced: true,
  state: {
    loading: false,
    data: ''
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload
    },
    setAbout(state, payload) {
      state.data = payload;
    }
  },
  actions: {
    async fetchAbout(context) {
      if(context.state.data) {
        return ;
      }
      context.commit('setLoading', true);
      const resp = await getAbout();
      context.commit('setAbout', resp);
      context.commit('setLoading', false);
    }
  }
}