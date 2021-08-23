//首页标语--共享数据
import { getBanners } from '@/api/banner.js';

export default {
  namespaced: true,
  state: {
    loading: false,
    data: []
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setData(state, payload) {
      state.data = payload;
    }
  },
  actions: {
    async fetchBanner(context) {
      if(context.state.data.length) {
        return ;
      }
      context.commit('setLoading', true);
      const resp = await getBanners();
      context.commit('setData', resp);
      context.commit('setLoading', false);
    }
  }
}

